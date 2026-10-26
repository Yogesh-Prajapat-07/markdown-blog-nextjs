---
title: "MongoDB Tutorial"
description: "Learn MongoDB from the basics to advanced topics, including documents, CRUD operations, queries, indexes, aggregation pipelines, data modeling, security, projects, and interview questions."
slug: "mongodb-tutorial"
date: "2026-10-22"
author: "Yogesh"
image: "/images/mongodb.png"
category: "Web Development"
---

# MongoDB Tutorial

MongoDB is a document-oriented NoSQL database. It stores records as BSON documents inside collections. It is often used in web applications because documents can represent nested data naturally and MongoDB provides flexible query and aggregation features.

This tutorial starts with core database concepts and moves through CRUD operations, query operators, indexes, aggregation, data modeling, transactions, security, and practical projects. Examples use `mongosh` syntax unless otherwise noted.

## Table of Contents

1. [What Is MongoDB?](#what-is-mongodb)
2. [MongoDB Concepts](#mongodb-concepts)
3. [Install and Connect](#install-and-connect)
4. [Databases and Collections](#databases-and-collections)
5. [Documents and BSON Types](#documents-and-bson-types)
6. [Insert Documents](#insert-documents)
7. [Read and Query Documents](#read-and-query-documents)
8. [Query Operators](#query-operators)
9. [Update Documents](#update-documents)
10. [Delete Documents](#delete-documents)
11. [Projection, Sorting, and Pagination](#projection-sorting-and-pagination)
12. [Indexes](#indexes)
13. [Aggregation Pipeline](#aggregation-pipeline)
14. [Relationships and Data Modeling](#relationships-and-data-modeling)
15. [Schema Validation](#schema-validation)
16. [Transactions](#transactions)
17. [MongoDB with Node.js](#mongodb-with-nodejs)
18. [MongoDB with Mongoose](#mongodb-with-mongoose)
19. [Security and Performance](#security-and-performance)
20. [Backup and Deployment Basics](#backup-and-deployment-basics)
21. [Practice Projects](#practice-projects)
22. [Interview Questions and Answers](#interview-questions-and-answers)

## 1. What Is MongoDB?

MongoDB is a NoSQL database that stores data as BSON documents. BSON is a binary-encoded document format with additional data types beyond standard JSON.

### Common use cases

- Web application databases
- Product catalogs and content management
- User profiles and application settings
- Event and activity data
- Applications with nested or evolving data structures
- Analytics workloads supported by aggregation pipelines

MongoDB is not automatically better than a relational database for every use case. Choose a database based on data relationships, query patterns, consistency needs, operational requirements, and team experience.

## 2. MongoDB Concepts

| MongoDB term | Meaning |
|---|---|
| Database | A logical container for collections |
| Collection | A group of documents, similar in broad purpose to a table |
| Document | A record made of field-value pairs |
| Field | A named value in a document |
| `_id` | The unique primary identifier for a document |
| BSON | MongoDB's binary document representation |
| Query | A request to find documents matching conditions |
| Index | A data structure that can speed up selected queries |
| Aggregation | A pipeline that transforms or summarizes documents |

Example document:

```javascript
{
  _id: ObjectId("65a000000000000000000001"),
  name: "Yogesh",
  role: "Developer",
  skills: ["JavaScript", "React", "MongoDB"],
  active: true
}
```

The `_id` field is required. If you do not provide one when inserting a document, MongoDB normally creates an `ObjectId`.

## 3. Install and Connect

You can run MongoDB locally or use MongoDB Atlas, a managed cloud database service.

### Local tools

Common tools include:

- MongoDB Community Server
- `mongosh`, the MongoDB shell
- MongoDB Compass, a graphical database client

After installation and starting the database service, connect with:

```bash
mongosh
```

A local connection URI commonly looks like:

```text
mongodb://127.0.0.1:27017
```

The database server must be running and reachable. The exact setup differs by operating system and installation method.

### MongoDB Atlas

1. Create an Atlas project and database deployment.
2. Create a database user with only the permissions needed.
3. Configure network access for your development or production environment.
4. Copy the connection string from Atlas.
5. Store it in an environment variable, not directly in source code.

Example environment variable:

```text
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/<database>?retryWrites=true&w=majority
```

This is a template, not a working URI. Replace the placeholders with the connection details supplied by your deployment, and URL-encode special characters in credentials when required. Never publish a real database URI or password in GitHub.

## 4. Databases and Collections

In `mongosh`, switch to a database:

```javascript
use blogDB
```

MongoDB may not persist a database until data is written to it.

Create a collection explicitly:

```javascript
db.createCollection("posts")
```

List collections:

```javascript
show collections
```

List databases:

```javascript
show dbs
```

MongoDB can create a collection automatically when you first insert a document into a collection that does not yet exist.

## 5. Documents and BSON Types

Documents contain field-value pairs. Fields can contain nested documents and arrays.

```javascript
{
  title: "MongoDB Basics",
  author: {
    name: "Yogi",
    role: "Developer"
  },
  tags: ["database", "backend"],
  views: 120,
  published: false,
  createdAt: new Date()
}
```

Common BSON types include:

- String
- Boolean
- 32-bit integer and 64-bit integer
- Double and Decimal128
- Date
- ObjectId
- Array
- Embedded document
- Null
- Binary data

Use `Date` values for timestamps instead of storing dates as arbitrary strings when you need date comparisons and date aggregation. Use `Decimal128` or integer minor units for monetary values when precision requirements demand it; ordinary binary floating-point numbers can introduce rounding issues.

## 6. Insert Documents

Use `insertOne()` for a single document and `insertMany()` for multiple documents.

```javascript
db.posts.insertOne({
  title: "Introduction to MongoDB",
  author: "Yogi",
  category: "Database",
  views: 100,
  published: true,
  tags: ["mongodb", "beginner"],
  createdAt: new Date()
})
```

Insert several documents:

```javascript
db.posts.insertMany([
  {
    title: "MongoDB CRUD",
    author: "Yogi",
    category: "Database",
    views: 150,
    published: true
  },
  {
    title: "MongoDB Aggregation",
    author: "Alex",
    category: "Backend",
    views: 80,
    published: false
  }
])
```

Check the result:

```javascript
db.posts.find()
```

If a document has no `_id`, MongoDB generates one. When inserting many documents, duplicate key errors and write concern behavior can affect the outcome; inspect the operation result and error details.

## 7. Read and Query Documents

`find()` returns documents matching a filter. `findOne()` returns one matching document or `null`.

```javascript
db.posts.find()
db.posts.findOne({ title: "MongoDB CRUD" })
db.posts.find({ author: "Yogi" })
```

Find published posts:

```javascript
db.posts.find({ published: true })
```

Find posts with at least 100 views:

```javascript
db.posts.find({ views: { $gte: 100 } })
```

A query filter is a document that describes which records should match. An empty filter `{}` matches all documents in the collection, so be careful with broad update and delete operations.

## 8. Query Operators

### Comparison operators

| Operator | Meaning |
|---|---|
| `$eq` | Equal to |
| `$ne` | Not equal to |
| `$gt` | Greater than |
| `$gte` | Greater than or equal to |
| `$lt` | Less than |
| `$lte` | Less than or equal to |
| `$in` | Matches any value in an array |
| `$nin` | Does not match values in an array |

Examples:

```javascript
db.posts.find({ views: { $gt: 100 } })
db.posts.find({ category: { $in: ["Database", "Backend"] } })
db.posts.find({ views: { $gte: 50, $lte: 200 } })
```

### Logical operators

```javascript
db.posts.find({
  $or: [
    { author: "Yogi" },
    { views: { $gte: 150 } }
  ]
})
```

```javascript
db.posts.find({
  $and: [
    { published: true },
    { views: { $gte: 100 } }
  ]
})
```

Multiple ordinary fields in a filter are combined with AND semantics by default, so `$and` is not required for every multi-field query.

### Array queries

```javascript
db.posts.find({ tags: "mongodb" })
```

This matches documents where the `tags` array contains `"mongodb"`.

Match an array containing all specified values:

```javascript
db.posts.find({ tags: { $all: ["mongodb", "beginner"] } })
```

Match an array with a specified size:

```javascript
db.posts.find({ tags: { $size: 2 } })
```

### Nested fields

Use dot notation to query nested fields:

```javascript
db.users.find({ "profile.city": "Ahmedabad" })
```

### Regular expressions

```javascript
db.posts.find({ title: { $regex: "mongodb", $options: "i" } })
```

This is a case-insensitive regular expression search. For large text-search requirements, evaluate MongoDB text indexes or a dedicated search solution rather than assuming a regex will be efficient.

## 9. Update Documents

`updateOne()` updates one matching document. `updateMany()` updates all matching documents.

### Set a field

```javascript
db.posts.updateOne(
  { title: "MongoDB CRUD" },
  { $set: { views: 200, published: true } }
)
```

### Increment a number

```javascript
db.posts.updateOne(
  { title: "MongoDB CRUD" },
  { $inc: { views: 1 } }
)
```

### Add an item to an array

```javascript
db.posts.updateOne(
  { title: "MongoDB CRUD" },
  { $addToSet: { tags: "tutorial" } }
)
```

`$addToSet` adds a value only if an equal value is not already present. Use `$push` when you want to append a value even if it already exists.

### Remove a field

```javascript
db.posts.updateOne(
  { title: "MongoDB CRUD" },
  { $unset: { temporaryField: "" } }
)
```

### Upsert

An upsert inserts a document if no document matches the filter:

```javascript
db.settings.updateOne(
  { key: "theme" },
  { $set: { value: "dark" } },
  { upsert: true }
)
```

Choose update filters carefully. An update with a broad filter can change many documents, especially when using `updateMany()`.

## 10. Delete Documents

Delete one matching document:

```javascript
db.posts.deleteOne({ title: "MongoDB CRUD" })
```

Delete all documents matching a filter:

```javascript
db.posts.deleteMany({ published: false })
```

Delete all documents in a collection:

```javascript
db.posts.deleteMany({})
```

The last command removes every document in the collection. It does not drop the collection itself. Double-check filters and use a test database before running destructive operations in production.

Drop a collection:

```javascript
db.posts.drop()
```

Dropping a collection removes the collection and its indexes. Treat this as a destructive operation.

## 11. Projection, Sorting, and Pagination

### Projection

Projection controls which fields are returned.

```javascript
db.posts.find(
  { published: true },
  { title: 1, author: 1, views: 1 }
)
```

The `_id` field is included by default unless excluded:

```javascript
db.posts.find(
  { published: true },
  { title: 1, _id: 0 }
)
```

In ordinary inclusion projections, you generally cannot mix inclusion and exclusion for other fields, except for `_id`.

### Sorting

```javascript
db.posts.find().sort({ createdAt: -1 })
```

- `1` sorts ascending.
- `-1` sorts descending.

For consistent sorting when values can tie, include a unique tie-breaker such as `_id`.

### Limit and skip

```javascript
db.posts.find()
  .sort({ createdAt: -1, _id: -1 })
  .skip(20)
  .limit(10)
```

This is offset pagination. Large skip values can become expensive. For large or frequently changing datasets, range-based pagination using an indexed sort field and a stable tie-breaker can perform better.

## 12. Indexes

An index helps MongoDB find documents without scanning every document in a collection for certain queries. Indexes improve selected reads but require storage and can add overhead to inserts, updates, and deletes.

Create a single-field index:

```javascript
db.posts.createIndex({ title: 1 })
```

Create a compound index:

```javascript
db.posts.createIndex({ published: 1, createdAt: -1 })
```

Create a unique index:

```javascript
db.users.createIndex({ email: 1 }, { unique: true })
```

A unique index prevents duplicate indexed values, subject to the index's options and how missing or null fields are handled. Validate and normalize emails according to your application's rules before relying on a unique index for account identity.

List indexes:

```javascript
db.posts.getIndexes()
```

Remove an index by name:

```javascript
db.posts.dropIndex("title_1")
```

### Index best practices

- Index fields commonly used in selective filters and sorts.
- Consider compound index field order and actual query patterns.
- Avoid adding indexes without measuring their benefit.
- Use `explain("executionStats")` to inspect query plans and examined documents.
- Remember that indexes consume disk and memory and slow some writes.

Example:

```javascript
db.posts.find({ published: true })
  .sort({ createdAt: -1 })
  .explain("executionStats")
```

## 13. Aggregation Pipeline

Aggregation processes documents through stages. Each stage can filter, reshape, group, sort, or join data.

### `$match` and `$sort`

```javascript
db.posts.aggregate([
  { $match: { published: true } },
  { $sort: { views: -1 } }
])
```

### `$group`

Count posts by author:

```javascript
db.posts.aggregate([
  {
    $group: {
      _id: "$author",
      totalPosts: { $sum: 1 },
      totalViews: { $sum: "$views" },
      averageViews: { $avg: "$views" }
    }
  },
  { $sort: { totalPosts: -1 } }
])
```

Inside an aggregation expression, a field reference such as `"$views"` refers to that field's value in the current document.

### `$project`

Select or calculate output fields:

```javascript
db.posts.aggregate([
  {
    $project: {
      title: 1,
      views: 1,
      popular: { $gte: ["$views", 100] }
    }
  }
])
```

### `$unwind`

Create one output document per array element:

```javascript
db.posts.aggregate([
  { $unwind: "$tags" },
  {
    $group: {
      _id: "$tags",
      postCount: { $sum: 1 }
    }
  },
  { $sort: { postCount: -1 } }
])
```

By default, `$unwind` does not output a document when the field is missing, null, or an empty array. Options can change that behavior.

### `$lookup`

`$lookup` performs a left outer join with another collection.

Example: assume an `orders` collection has `userId` values that match `_id` values in `users`.

```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  }
])
```

The joined value is an array named `user`. Choose indexes and data modeling carefully when joins are frequent or collections are large.

### Other useful stages and operators

- `$limit` and `$skip` for result windows
- `$count` for counting documents in a pipeline
- `$addFields` or `$set` for adding calculated fields
- `$replaceRoot` for reshaping documents
- `$bucket` for grouping numeric ranges
- `$facet` for running multiple sub-pipelines on the same input
- `$dateToString` and date operators for time-based analysis

Aggregation pipelines can be powerful, but inspect their performance on realistic data and avoid processing more documents than necessary.

## 14. Relationships and Data Modeling

MongoDB supports embedding related data in a document or referencing documents in other collections.

### Embedding

```javascript
{
  _id: ObjectId("65a000000000000000000002"),
  name: "Yogesh",
  address: {
    city: "Ahmedabad",
    country: "India"
  }
}
```

Embedding is useful when related information is read together and its size and update patterns are manageable.

### Referencing

A post can refer to a user document:

```javascript
{
  title: "MongoDB Guide",
  authorId: ObjectId("65a000000000000000000003")
}
```

References are useful when data is shared across many records, changes independently, or would make embedded documents too large or awkward to update.

### How to choose

Consider:

- Which data is usually read together?
- How frequently does the related data change?
- Is the relationship one-to-one, one-to-many, or many-to-many?
- Could an embedded array grow without bound?
- Does the application need atomic updates across multiple documents?

MongoDB documents have a maximum BSON document size (currently 16 MiB). Avoid unbounded arrays and oversized documents; consider separate collections for growing activity, comments, or event histories.

## 15. Schema Validation

MongoDB is flexible about document shape by default, but collections can enforce validation rules.

Example JSON Schema validator:

```javascript
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price"],
      properties: {
        name: {
          bsonType: "string",
          description: "Product name is required"
        },
        price: {
          bsonType: ["int", "double", "decimal"],
          minimum: 0
        }
      }
    }
  }
})
```

This validator checks that `name` is a string and `price` is a non-negative numeric BSON type. Applications may need more rules for dates, enums, array elements, or business constraints.

Database validation is useful alongside application validation. Do not assume that every client or script will follow the same application-level rules.

## 16. Transactions

A transaction groups multiple database operations into one atomic unit. MongoDB supports multi-document transactions on supported deployments, including replica sets and sharded clusters, subject to version and configuration requirements.

Conceptual Node.js example using the MongoDB Node.js driver:

```javascript
const session = client.startSession();

try {
  await session.withTransaction(async () => {
    await accounts.updateOne(
      { _id: fromAccountId },
      { $inc: { balance: -100 } },
      { session }
    );

    await accounts.updateOne(
      { _id: toAccountId },
      { $inc: { balance: 100 } },
      { session }
    );
  });
} finally {
  await session.endSession();
}
```

This is illustrative only. A real transfer must verify account existence, authorization, sufficient funds, currency, validation, and concurrency rules. Both operations must be checked and executed with the same session. Do not assume a transaction makes incorrect business logic safe.

Transactions have performance and operational costs. When possible, design documents so a single-document atomic update can meet the requirement.

## 17. MongoDB with Node.js

Install the official MongoDB Node.js driver:

```bash
npm install mongodb
```

Create a `.env` file (and keep it out of version control):

```text
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB=blogDB
```

Install a dotenv package if your Node.js setup needs it:

```bash
npm install dotenv
```

Example using ES modules:

```javascript
import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "blogDB";

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();

    const db = client.db(dbName);
    const posts = db.collection("posts");

    const result = await posts.insertOne({
      title: "MongoDB with Node.js",
      author: "Yogi",
      published: true,
      createdAt: new Date()
    });

    console.log("Inserted ID:", result.insertedId);

    const documents = await posts
      .find({ published: true })
      .limit(10)
      .toArray();

    console.log(documents);
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error("Database operation failed:", error);
  process.exitCode = 1;
});
```

For a short script, connecting and closing in one function is reasonable. In a long-running web server, create a shared client connection during startup and reuse it across requests rather than connecting and closing for every request.

### Insert, read, update, and delete with the driver

```javascript
const collection = db.collection("tasks");

// Create
const created = await collection.insertOne({
  title: "Learn MongoDB",
  completed: false
});

// Read
const task = await collection.findOne({ _id: created.insertedId });

// Update
await collection.updateOne(
  { _id: created.insertedId },
  { $set: { completed: true } }
);

// Delete
await collection.deleteOne({ _id: created.insertedId });
```

This snippet assumes `db` is a connected database object and that the calls run inside an `async` function. In a real API, validate the request and authorize the user before modifying data.

## 18. MongoDB with Mongoose

Mongoose is an Object Data Modeling (ODM) library for Node.js and MongoDB. It provides schemas, models, casting, validation, middleware, and other application-level features. It is optional; the official MongoDB driver can also be used directly.

Install it:

```bash
npm install mongoose
```

### Define a schema and model

```javascript
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      required: true
    },
    published: {
      type: Boolean,
      default: false
    },
    views: {
      type: Number,
      default: 0,
      min: 0
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
```

### Connect to MongoDB

```javascript
import mongoose from "mongoose";

await mongoose.connect(process.env.MONGODB_URI);
console.log("MongoDB connected");
```

Load environment variables using your application's chosen environment configuration. Handle startup connection errors and do not commit secrets.

### CRUD with Mongoose

```javascript
// Create
const post = await Post.create({
  title: "Mongoose Basics",
  author: "Yogi"
});

// Read
const posts = await Post.find({ published: true }).lean();

// Update
await Post.updateOne(
  { _id: post._id },
  { $set: { published: true } },
  { runValidators: true }
);

// Delete
await Post.deleteOne({ _id: post._id });
```

Use `runValidators: true` where appropriate for update operations; Mongoose update validation behavior differs from document validation. `lean()` returns plain JavaScript objects instead of full Mongoose documents, which can be useful for read-only responses.

### Important Mongoose concepts

- **Schema:** describes fields and application-level rules.
- **Model:** provides methods to work with a collection.
- **Document:** an instance created from a model.
- **Validation:** checks data before it is saved or updated, according to the operation.
- **Middleware:** hooks into selected model or document operations.
- **Populate:** resolves referenced documents in certain query patterns.

Mongoose validation does not replace authorization, API validation, or database-level protections.

## 19. Security and Performance

### Security essentials

1. Enable authentication for database deployments.
2. Use least-privilege database users.
3. Keep the database off the public internet unless there is a carefully designed reason and suitable controls.
4. Configure network access, TLS, and firewall rules appropriately.
5. Store connection strings in environment variables or a secrets manager.
6. Validate and normalize request data.
7. Use allowlisted fields when updating documents from client input.
8. Avoid constructing database filters directly from untrusted request objects.
9. Enforce authorization in the backend for every sensitive operation.
10. Keep backups and test restoration procedures.

Never expose MongoDB credentials in frontend JavaScript. A browser should call your backend API, and the backend should access the database.

### Avoid unsafe updates

Avoid blindly passing user-supplied objects into update operations:

```javascript
// Avoid this pattern with untrusted request data:
await users.updateOne({ _id: userId }, { $set: req.body });
```

Instead, validate and allowlist specific fields:

```javascript
const allowedUpdates = {
  displayName: validatedDisplayName,
  bio: validatedBio
};

await users.updateOne(
  { _id: userId },
  { $set: allowedUpdates }
);
```

This is an illustrative pattern; validation and authorization must be implemented for the actual application.

### Performance essentials

- Add indexes based on real query patterns.
- Return only the fields you need.
- Limit large result sets.
- Use connection pooling through a reused driver client.
- Avoid unbounded arrays and documents.
- Review slow queries with `explain()`.
- Monitor memory, disk, connections, and query latency.
- Use pagination and caching where they fit the workload.

## 20. Backup and Deployment Basics

Before production deployment:

- Choose a suitable managed or self-managed deployment.
- Configure authentication, least privilege, network access, and TLS.
- Store secrets securely.
- Use separate development, staging, and production databases.
- Create automated backups and test restoring them.
- Monitor availability, storage, query performance, and error rates.
- Plan schema changes and migrations.
- Confirm that indexes exist for critical queries.
- Avoid running destructive commands against production without a reviewed recovery plan.

MongoDB Database Tools include utilities such as `mongodump` and `mongorestore` for certain backup and restore workflows. Follow the documentation for your server version and deployment type; a logical dump is not automatically a complete disaster-recovery strategy for every production system.

## 21. Practice Projects

Build these projects to apply what you learn.

### Beginner

1. **Student database:** insert, list, update, and delete student records.
2. **Contact book:** store names, emails, and phone numbers with validation.
3. **Product catalog:** filter products by category and price.
4. **Blog database:** store posts, authors, tags, and publication status.

### Intermediate

5. **Task manager API:** create, update, complete, filter, and delete tasks.
6. **Expense tracker:** store transactions and calculate category totals with aggregation.
7. **Inventory manager:** update stock, query low-stock products, and create indexes.
8. **User and order API:** model references between users and orders.
9. **Analytics dashboard:** aggregate post views or sales by category and date.
10. **Search API:** implement safe filtering, sorting, pagination, and input validation.

### Advanced

11. **Full-stack blog:** React or Next.js frontend, Node.js backend, and MongoDB.
12. **E-commerce backend:** products, carts, orders, stock management, and carefully designed transactions.
13. **Multi-user task manager:** per-user data ownership, authorization, and indexes.
14. **Activity feed:** model events and design for efficient time-based queries.
15. **Reporting service:** aggregation pipelines, query analysis, and monitoring.

For each project, add a README, sample environment file without secrets, input validation, error handling, indexes for important queries, and tests for core operations.

## 22. Interview Questions and Answers

### 1. What is MongoDB?

MongoDB is a document-oriented NoSQL database that stores records as BSON documents in collections.

### 2. What is the difference between SQL and NoSQL databases?

Relational databases commonly organize data into tables with defined relationships and SQL queries. MongoDB stores document-shaped data and offers flexible document modeling. The best choice depends on the application's requirements; neither is universally better.

### 3. What is a document?

A document is a set of field-value pairs stored in a collection. Fields can contain scalars, arrays, and nested documents.

### 4. What is a collection?

A collection is a group of MongoDB documents.

### 5. What is BSON?

BSON is MongoDB's binary-encoded document format, with types such as ObjectId and Date that go beyond standard JSON.

### 6. What is the `_id` field?

`_id` is the required unique identifier for each document within a collection. MongoDB normally generates an ObjectId when one is not provided.

### 7. What is CRUD?

CRUD stands for Create, Read, Update, and Delete—the four basic categories of data operations.

### 8. What is the difference between `find()` and `findOne()`?

`find()` returns a cursor for all matching documents. `findOne()` returns one matching document or `null`.

### 9. What does `$set` do?

`$set` assigns a value to a field, creating the field if it does not exist.

### 10. What does `$inc` do?

`$inc` increases or decreases a numeric field by a specified amount.

### 11. What is an index?

An index is a data structure that can speed up queries and sorting for supported patterns, at the cost of storage and write overhead.

### 12. What is a compound index?

A compound index contains multiple fields in a defined order. Field order affects which query patterns it can efficiently support.

### 13. What is a unique index?

A unique index prevents duplicate indexed values according to its configuration and MongoDB's handling of missing or null fields.

### 14. What is an aggregation pipeline?

An aggregation pipeline passes documents through stages that filter, transform, group, join, or summarize data.

### 15. What does `$match` do?

`$match` filters documents in an aggregation pipeline.

### 16. What does `$group` do?

`$group` groups documents by an expression and calculates aggregate values such as counts, sums, and averages.

### 17. What does `$lookup` do?

`$lookup` performs a left outer join with another collection and adds the matching documents as an array field.

### 18. What is the difference between embedding and referencing?

Embedding stores related data inside a document. Referencing stores identifiers that point to documents elsewhere. Choose based on access patterns, data growth, and update needs.

### 19. What is a replica set?

A replica set is a group of MongoDB servers that maintain the same data set and provide redundancy and high availability through replication and election behavior.

### 20. What is sharding?

Sharding distributes data across multiple machines to support datasets or workloads that exceed the capacity of one server, subject to careful shard-key design and operational planning.

### 21. What is a transaction?

A transaction groups multiple operations into one atomic unit. Multi-document transactions require a supported MongoDB deployment configuration.

### 22. What is schema validation?

Schema validation applies rules to documents written to a collection, helping maintain data shape and quality.

### 23. What is MongoDB Atlas?

MongoDB Atlas is MongoDB's managed cloud database service.

### 24. What is Mongoose?

Mongoose is an ODM for Node.js and MongoDB that provides schemas, models, validation, middleware, and related application-level features.

### 25. What is the difference between MongoDB driver and Mongoose?

The official driver provides direct access to MongoDB operations. Mongoose adds an ODM layer with schemas and model-oriented functionality.

### 26. How do you improve query performance?

Use suitable indexes, inspect query plans with `explain()`, limit returned data, avoid unnecessary scans, and test against realistic data volumes.

### 27. What is a cursor?

A cursor lets an application iterate through query results without requiring every matching document to be loaded into one in-memory array at once.

### 28. What is the difference between `deleteOne()` and `deleteMany()`?

`deleteOne()` deletes at most one matching document. `deleteMany()` deletes every document matching the filter.

### 29. Why should database credentials not be placed in frontend code?

Frontend code is delivered to users and can be inspected. Database credentials must remain on the server and be protected with least-privilege access.

### 30. What is connection pooling?

Connection pooling reuses a managed set of database connections rather than creating a new connection for every operation.

### 31. What is the maximum BSON document size?

MongoDB's maximum BSON document size is 16 MiB. Large or unbounded data should often be modeled across multiple documents or collections.

### 32. What is `explain()` used for?

`explain()` provides information about a query plan and execution statistics, helping developers investigate performance.

### 33. What is the difference between `$push` and `$addToSet`?

`$push` appends a value to an array. `$addToSet` adds a value only if an equal value is not already present.

### 34. What is pagination?

Pagination divides results into manageable pages, often using `limit()` and `skip()` or range-based queries. Range-based pagination can be more efficient for large result sets.

### 35. How should you learn MongoDB effectively?

Practice CRUD operations first, then query operators, indexes, aggregation, data modeling, and backend integration. Build projects and test your queries with realistic sample data.

## Conclusion

MongoDB is useful for storing and querying document-shaped data in web applications. Start with databases, collections, documents, and CRUD operations. Then learn query operators, indexes, aggregation pipelines, and data modeling.

After the fundamentals, connect MongoDB to Node.js using the official driver or Mongoose. Build APIs with validation and authorization, measure query performance, and protect credentials. Practical projects will help turn the concepts in this guide into usable development skills.
