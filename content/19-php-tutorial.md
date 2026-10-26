---
title: "PHP Tutorial:  Beginner to Advanced"
description: "A practical PHP tutorial covering syntax, types, functions, arrays, OOP, forms, MySQL with PDO, sessions, APIs, security, projects, and interview questions."
slug: "php-tutorial"
date: "2026-10-23"
author: "Yogesh"
image: "/images/php.png"
category: "Backend Development"
---

# PHP Complete Guide: From Beginner to Advanced

PHP is a server-side programming language used to build dynamic websites, web applications, and APIs. PHP code runs on the server and can generate HTML, process requests, work with databases, and return JSON responses.

This tutorial starts with the fundamentals and moves toward practical backend development.

## 1. What Is PHP?

PHP stands for **PHP: Hypertext Preprocessor**. It is widely used for server-rendered websites, content management systems, form processing, and backend APIs.

PHP is useful for:
- Processing form submissions
- Building database-backed applications
- Creating REST-style endpoints
- Managing sessions and authentication
- Working with established platforms such as WordPress

## 2. Install PHP and Run Your First Program

Install a supported PHP version and verify it:

```bash
php -v
```

Create a file named `index.php`:

```php
<?php
echo "Hello, World!";
```

Start PHP's built-in development server from the project directory:

```bash
php -S localhost:8000
```

Open `http://localhost:8000` in your browser.

The built-in server is intended for local development and testing, not for exposing a production application directly to the internet.

## 3. PHP Syntax and Variables

PHP statements commonly end with a semicolon. Variable names begin with `$`.

```php
<?php
$name = "Yogi";
$age = 20;
$price = 149.99;
$isStudent = true;

echo "Name: " . $name . PHP_EOL;
echo "Age: " . $age . PHP_EOL;
```

PHP is dynamically typed, but parameter and return types can be declared to make code easier to understand and maintain.

```php
<?php
function greet(string $name): string
{
    return "Hello, " . $name;
}

echo greet("Yogi");
```

Variable names are case-sensitive.

## 4. Data Types

Common PHP types include:

- `string` — text
- `int` — integer numbers
- `float` — floating-point numbers
- `bool` — `true` or `false`
- `array` — an ordered map
- `object` — an instance of a class
- `null` — absence of a value

Use `var_dump()` to inspect values while debugging:

```php
<?php
$skills = ["HTML", "CSS", "PHP"];
var_dump($skills);
```

Do not expose raw debug output or internal error details to visitors in production.

## 5. Strings

PHP supports single-quoted and double-quoted strings.

```php
<?php
$name = "Aman";

echo "Hello, $name!";
echo 'Hello, ' . $name . '!';
```

Double-quoted strings support variable interpolation. The dot (`.`) operator concatenates strings.

## 6. Operators

```php
<?php
$a = 10;
$b = 3;

echo $a + $b; // 13
echo $a - $b; // 7
echo $a * $b; // 30
echo $a / $b; // 3.333...
echo $a % $b; // 1
```

Comparison operators include `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, and `>=`.

Use `===` when you want to compare both value and type. PHP's loose equality operator `==` may perform type conversion.

Logical operators include `&&`, `||`, and `!`.

## 7. Conditional Statements

```php
<?php
$marks = 82;

if ($marks >= 90) {
    echo "Grade A";
} elseif ($marks >= 70) {
    echo "Grade B";
} elseif ($marks >= 50) {
    echo "Grade C";
} else {
    echo "Needs improvement";
}
```

A `switch` statement is useful when comparing one expression with several cases:

```php
<?php
$role = "member";

switch ($role) {
    case "admin":
        echo "Admin dashboard";
        break;
    case "member":
        echo "Member dashboard";
        break;
    default:
        echo "Unknown role";
}
```

## 8. Loops

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo $i . PHP_EOL;
}

$count = 1;
while ($count <= 3) {
    echo $count . PHP_EOL;
    $count++;
}

$skills = ["HTML", "CSS", "PHP"];
foreach ($skills as $skill) {
    echo $skill . PHP_EOL;
}
```

Use `for` for counter-based repetition, `while` for condition-based repetition, and `foreach` to iterate over arrays and iterable values.

## 9. Arrays

PHP arrays can use integer or string keys.

### Indexed array

```php
<?php
$colors = ["red", "green", "blue"];
echo $colors[0]; // red
```

### Associative array

```php
<?php
$user = [
    "name" => "Yogi",
    "role" => "developer",
];

echo $user["name"];
```

### Useful array functions

- `count($items)` — number of elements
- `array_keys($items)` — keys
- `array_values($items)` — values
- `in_array($value, $items, true)` — search using strict comparison
- `array_map($callback, $items)` — transform values
- `array_filter($items, $callback)` — filter values

Choose functions that make the intent clear, and check their documentation when working with complex arrays.

## 10. Functions and Type Declarations

```php
<?php
function add(int $a, int $b): int
{
    return $a + $b;
}

echo add(5, 7);
```

A function can accept parameters and return a value. Type declarations document expected inputs and outputs and allow PHP to detect many type errors.

To enable strict scalar type checking for calls made from a file, place this at the beginning of the PHP file:

```php
<?php
declare(strict_types=1);
```

## 11. Handling Form Input

HTML form:

```html
<form action="process.php" method="post">
  <label>
    Name
    <input type="text" name="name" required>
  </label>
  <button type="submit">Submit</button>
</form>
```

`process.php`:

```php
<?php
$name = trim($_POST["name"] ?? "");

if ($name === "") {
    http_response_code(400);
    exit("Name is required.");
}

$safeName = htmlspecialchars(
    $name,
    ENT_QUOTES | ENT_SUBSTITUTE,
    "UTF-8"
);

echo "Hello, " . $safeName;
```

Validate input according to your application's requirements. Escape output for the context in which it is used. HTML escaping is suitable for HTML text, but JavaScript, URL, and SQL contexts require their own safe handling.

## 12. Including Other Files

Use `require` or `include` to reuse code.

```php
<?php
require_once __DIR__ . "/config.php";
```

- `require` reports a failure if the file cannot be loaded.
- `include` emits a warning and allows execution to continue in many cases.
- `require_once` and `include_once` prevent the same file from being included more than once during a request.

Keep private configuration and credentials out of publicly accessible files and source control.

## 13. Object-Oriented PHP

Classes define properties and methods; objects are instances of classes.

```php
<?php
class User
{
    public function __construct(
        public string $name,
        private string $email
    ) {}

    public function getEmail(): string
    {
        return $this->email;
    }
}

$user = new User("Yogi", "yogi@example.com");

echo $user->name;
echo $user->getEmail();
```

Important OOP concepts:
- **Encapsulation:** controlling access to object state.
- **Inheritance:** deriving a class from another class.
- **Polymorphism:** using a shared interface for different implementations.
- **Abstraction:** exposing essential behavior while hiding implementation details.
- **Interfaces:** defining methods that implementing classes must provide.
- **Traits:** reusing method implementations across classes.

Use classes when they improve organization; not every small script needs an object-oriented design.

## 14. Exceptions and Error Handling

```php
<?php
function divide(float $a, float $b): float
{
    if ($b == 0.0) {
        throw new InvalidArgumentException("Divisor cannot be zero.");
    }

    return $a / $b;
}

try {
    echo divide(10, 2);
} catch (InvalidArgumentException $exception) {
    error_log($exception->getMessage());
    echo "The operation could not be completed.";
}
```

Log technical details privately and show users an appropriate message. Production settings should not display stack traces or sensitive details to visitors.

## 15. Connect to MySQL Using PDO

PDO provides a consistent interface for working with supported databases. Use prepared statements for queries that include external values.

```php
<?php
$pdo = new PDO(
    'mysql:host=localhost;dbname=blog;charset=utf8mb4',
    getenv('DB_USER'),
    getenv('DB_PASSWORD'),
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

$authorId = 5;

$stmt = $pdo->prepare(
    'SELECT id, title FROM posts WHERE author_id = :author_id'
);

$stmt->execute(["author_id" => $authorId]);
$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
```

This example assumes the database and table exist and the credentials are configured. Never concatenate untrusted values into SQL strings. Store credentials in environment configuration rather than committing them to Git.

## 16. Password Hashing and Login Basics

Never store plaintext passwords. PHP provides password hashing functions:

```php
<?php
$password = "example-password";
$hash = password_hash($password, PASSWORD_DEFAULT);

// During login:
if (password_verify($password, $hash)) {
    echo "Password matches";
}
```

For a real authentication system:
- Use HTTPS.
- Regenerate the session ID after login.
- Configure cookies with appropriate `Secure`, `HttpOnly`, and `SameSite` settings.
- Add rate limiting and safe password recovery.
- Check permissions on every protected server-side operation.
- Protect state-changing requests against CSRF where applicable.
- Never log passwords or authentication tokens.

## 17. Sessions

Sessions allow a server to retain state across requests.

```php
<?php
session_start();

$_SESSION["user_id"] = $userId;
```

Call `session_start()` before output when using the default session configuration. Do not trust a user ID merely because it appears in a request; derive authenticated identity from a validated session or other trusted authentication mechanism.

## 18. Return JSON from an API

```php
<?php
header("Content-Type: application/json; charset=utf-8");

$response = [
    "success" => true,
    "message" => "API is working",
];

echo json_encode($response, JSON_THROW_ON_ERROR);
```

A production API should validate the HTTP method and request body, authenticate private routes, return suitable status codes, and avoid exposing internal exception messages.

## 19. File Upload Safety

File uploads need strict validation. Do not trust the uploaded filename or client-provided MIME type.

A safer upload design should:
- Enforce size limits.
- Check upload error codes.
- Inspect the actual file type server-side.
- Generate a random server-side filename.
- Restrict allowed file types.
- Store uploads outside executable public directories when possible.
- Set safe file permissions and access rules.

## 20. Composer

Composer manages PHP dependencies.

```bash
composer init
composer install
```

Add a package only after checking that it is the intended package and comes from a trustworthy source. Applications should generally commit `composer.json` and `composer.lock` so dependency installation is reproducible.

## 21. Common PHP Mistakes

- Using `==` when strict comparison is needed.
- Trusting request input without validation.
- Concatenating user input into SQL.
- Printing unescaped user content.
- Committing secrets to GitHub.
- Displaying internal errors in production.
- Relying only on frontend checks for authorization.
- Trusting uploaded filenames or MIME types.
- Using outdated PHP versions or abandoned dependencies.

## 22. PHP Project Ideas

### Beginner
1. Personal profile page
2. Marks calculator
3. Contact form with validation
4. Unit converter

### Intermediate
5. Blog with create, read, update, and delete operations
6. Student record manager using MySQL
7. Login demo with secure password hashing
8. Notes application with file storage

### Advanced
9. REST API for a task manager
10. Role-based admin dashboard
11. Blog CMS with pagination and search
12. Inventory application with validation and audit history

For each project, handle errors, validate input, enforce authorization, and test edge cases.

## 23. PHP Interview Questions and Answers

1. **What is PHP?** A server-side language commonly used for web applications and APIs.
2. **What does PHP stand for?** PHP: Hypertext Preprocessor.
3. **What does `echo` do?** Outputs one or more strings.
4. **What is the difference between `echo` and `print`?** Both output content; `print` returns `1`, while `echo` has no return value.
5. **How do PHP variables begin?** With the `$` symbol.
6. **Name common PHP data types.** String, integer, float, boolean, array, object, and null.
7. **What is an associative array?** An array that uses named keys as well as integer keys.
8. **What is `foreach` used for?** Iterating over arrays and iterable values.
9. **What is a function?** A reusable block of code.
10. **What is the difference between `==` and `===`?** `==` allows type juggling; `===` compares value and type strictly.
11. **What is `NULL`?** A special value representing no value.
12. **What is OOP?** Organizing code around classes and objects.
13. **What is a constructor?** A method, commonly `__construct`, that runs when an object is created.
14. **What is inheritance?** Deriving behavior from another class.
15. **What is an interface?** A contract specifying methods an implementing class must provide.
16. **What is an exception?** An object representing an exceptional condition that can be thrown and caught.
17. **What is PDO?** PHP Data Objects, an interface for database access.
18. **Why use prepared statements?** They separate SQL structure from supplied values and help prevent SQL injection.
19. **What is a session?** Server-managed state associated with a client across requests.
20. **How should passwords be stored?** Using a password-hashing function such as `password_hash`.
21. **What is Composer?** PHP's dependency manager.
22. **What does `require` do?** Loads a required file and fails if it cannot be loaded.
23. **What is JSON encoding?** Converting PHP values into JSON text with functions such as `json_encode`.
24. **How do you return JSON from PHP?** Set the JSON content type and encode the response.
25. **What is SQL injection?** An attack where untrusted input changes the structure of a SQL query.
26. **How can XSS be reduced?** Escape output for its context and validate input where appropriate.
27. **What does `password_verify` do?** Checks a password against a stored password hash.
28. **What is `$_POST`?** A superglobal containing data submitted using an HTTP POST request.
29. **What is `$_GET`?** A superglobal containing query-string parameters.
30. **What should be checked before production deployment?** HTTPS, secret configuration, error handling, validation, authorization, dependencies, and tests.

## Conclusion

PHP is a practical choice for server-side development. Learn its syntax and functions, then build database-backed projects using prepared statements, secure authentication, input validation, and careful error handling. Consult the official PHP manual for version-specific details.
