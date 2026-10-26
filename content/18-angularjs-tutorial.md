---
title: "AngularJS Tutorial "
description: "Learn AngularJS from beginner to advanced with modules, controllers, directives, data binding, services, routing, forms, filters, dependency injection, practical projects, and interview questions."
slug: "angularjs-tutorial"
date: "2026-10-26"
author: "Yogesh"
image: "/images/angular.png"
category: "Web Development"
---

# AngularJS Tutorial

AngularJS is a JavaScript framework developed by Google for building dynamic web applications. It extends HTML with additional attributes and provides features such as data binding, directives, dependency injection, controllers, and services.

> **Note:** AngularJS (version 1.x) is different from modern Angular. AngularJS is discontinued, so new production projects should generally use modern Angular or another actively maintained framework.

## Table of Contents

1. Introduction to AngularJS
2. Features of AngularJS
3. Installing and Setting Up AngularJS
4. Your First AngularJS Application
5. Modules
6. Controllers
7. Expressions
8. Data Binding
9. Directives
10. Filters
11. Services
12. Dependency Injection
13. Events
14. Forms and Validation
15. Routing
16. HTTP Requests
17. CRUD Operations
18. Mini Project
19. Best Practices
20. Advantages and Limitations
21. Interview Questions
22. Conclusion

## 1. Introduction to AngularJS

AngularJS is a JavaScript-based framework used to create interactive web applications. It allows developers to extend HTML using special attributes and connect the user interface with application data.

### Why use AngularJS?

- Dynamic content updates
- Two-way data binding
- Reusable directives
- Controllers for application logic
- Services for shared functionality
- Dependency injection
- Form validation
- Client-side routing

## 2. Features of AngularJS

### Two-way data binding

When the model changes, the view updates. When a user changes an input, the model can update too.

### Directives

Directives add behavior to HTML elements. Examples include `ng-model`, `ng-repeat`, and `ng-if`.

### Dependency injection

AngularJS can provide services to controllers and other components without requiring them to create those dependencies manually.

### Services

Services help organize reusable logic, such as retrieving data from an API.

### Routing

Routing allows an application to display different views based on the URL.

## 3. Installing and Setting Up AngularJS

For learning purposes, create a simple HTML file and include AngularJS 1.8.3 from a CDN.

```html
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AngularJS Tutorial</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>
</head>
<body>
  <div ng-controller="MainController">
    <h1>{{ message }}</h1>
  </div>

  <script>
    const app = angular.module("myApp", []);

    app.controller("MainController", function ($scope) {
      $scope.message = "Hello, AngularJS!";
    });
  </script>
</body>
</html>
```

Save the file as `index.html` and open it in your browser. For more realistic development, use a local development server.

## 4. Your First AngularJS Application

The example above contains three important parts:

- `ng-app` initializes the AngularJS application.
- `ng-controller` connects an element to a controller.
- `{{ message }}` displays the value of an expression.

AngularJS evaluates the expression and renders the result in the page.

## 5. AngularJS Modules

A module is a container for application components such as controllers, services, filters, and directives.

```javascript
const app = angular.module("myApp", []);
```

The first argument is the module name. The second argument is an array of dependencies.

To retrieve an existing module, omit the dependency array:

```javascript
const app = angular.module("myApp");
```

## 6. AngularJS Controllers

Controllers define data and behavior for a particular part of the application.

```javascript
app.controller("UserController", function ($scope) {
  $scope.name = "Yogesh";
  $scope.role = "Web Developer";

  $scope.sayHello = function () {
    return "Hello, " + $scope.name;
  };
});
```

Example HTML:

```html
<div ng-controller="UserController">
  <h2>{{ name }}</h2>
  <p>{{ role }}</p>
  <p>{{ sayHello() }}</p>
</div>
```

In AngularJS, `$scope` connects controller data to the view. Modern Angular uses a different component-based architecture.

## 7. AngularJS Expressions

Expressions display or evaluate values inside AngularJS templates.

```html
<p>{{ 10 + 20 }}</p>
<p>{{ name }}</p>
<p>{{ price * quantity }}</p>
```

Expressions can access data exposed by the current scope. Avoid placing complex business logic inside templates; keep it in suitable JavaScript functions or services.

## 8. Data Binding

Data binding connects application data with the user interface.

### One-way display

```html
<p>{{ username }}</p>
```

### Two-way binding

```html
<input type="text" ng-model="username" />
<p>Your name is {{ username }}</p>
```

When the user types into the input, AngularJS updates the model and refreshes the displayed value.

## 9. AngularJS Directives

Directives extend HTML with AngularJS behavior.

### `ng-model`

```html
<input ng-model="email" placeholder="Enter your email" />
<p>{{ email }}</p>
```

### `ng-repeat`

```html
<ul>
  <li ng-repeat="fruit in fruits">{{ fruit }}</li>
</ul>
```

Controller:

```javascript
app.controller("FruitController", function ($scope) {
  $scope.fruits = ["Apple", "Banana", "Mango"];
});
```

### `ng-if`

```html
<p ng-if="isLoggedIn">Welcome back!</p>
```

### `ng-show` and `ng-hide`

```html
<p ng-show="isVisible">This message is visible.</p>
<p ng-hide="isVisible">This message is hidden.</p>
```

Unlike `ng-if`, these directives generally keep the element in the DOM and toggle its visibility.

### `ng-click`

```html
<button ng-click="count = count + 1">Click me</button>
<p>Count: {{ count }}</p>
```

## 10. AngularJS Filters

Filters format or transform data for display. Common filters include `uppercase`, `lowercase`, `currency`, `date`, `number`, `filter`, `orderBy`, and `limitTo`.

```html
<p>{{ name | uppercase }}</p>
<p>{{ price | currency }}</p>
<p>{{ today | date:'dd MMM yyyy' }}</p>
```

Filtering a list:

```html
<input ng-model="searchText" placeholder="Search fruits" />

<ul>
  <li ng-repeat="fruit in fruits | filter:searchText">
    {{ fruit }}
  </li>
</ul>
```

## 11. AngularJS Services

Services provide reusable functionality that can be shared across controllers.

```javascript
app.service("CalculatorService", function () {
  this.add = function (a, b) {
    return a + b;
  };
});

app.controller("CalculatorController", function ($scope, CalculatorService) {
  $scope.result = CalculatorService.add(10, 20);
});
```

Services help separate reusable application logic from presentation logic. AngularJS also provides built-in services, including `$http`, `$location`, and `$timeout`.

## 12. Dependency Injection

Dependency injection supplies the services a component needs.

```javascript
app.controller("MainController", function ($scope, $http) {
  $scope.message = "Ready";
});
```

For production code that uses minification, use array annotation or `$inject` so dependency names remain available.

```javascript
app.controller("MainController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.message = "Ready";
  }
]);
```

## 13. AngularJS Events

```html
<div ng-controller="EventController">
  <button ng-click="showMessage()">Click</button>
  <p>{{ message }}</p>
</div>
```

```javascript
app.controller("EventController", function ($scope) {
  $scope.message = "";

  $scope.showMessage = function () {
    $scope.message = "Button clicked!";
  };
});
```

Other event-related directives include `ng-change`, `ng-submit`, and `ng-focus`.

## 14. Forms and Validation

AngularJS includes form validation features that can display errors and track form state.

```html
<form name="signupForm" ng-submit="submitForm()" novalidate>
  <label for="email">Email</label>

  <input
    id="email"
    type="email"
    name="email"
    ng-model="user.email"
    required
  />

  <p ng-show="signupForm.email.$touched && signupForm.email.$invalid">
    Enter a valid email address.
  </p>

  <button type="submit" ng-disabled="signupForm.$invalid">
    Sign Up
  </button>
</form>
```

Controller:

```javascript
app.controller("SignupController", function ($scope) {
  $scope.user = {};

  $scope.submitForm = function () {
    if ($scope.signupForm.$valid) {
      console.log("Form is valid");
    }
  };
});
```

Form validation improves the user experience, but server-side validation is still required.

## 15. AngularJS Routing

Routing lets users navigate between views without reloading the entire page. The commonly used AngularJS routing module is `ngRoute`.

Include its matching library version:

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular-route.min.js"></script>
```

Configure the module:

```javascript
const app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      template: "<h2>Home Page</h2>"
    })
    .when("/about", {
      template: "<h2>About Page</h2>"
    })
    .otherwise({
      redirectTo: "/"
    });
});
```

Add a view container and navigation links:

```html
<a href="#!/">Home</a>
<a href="#!/about">About</a>

<div ng-view></div>
```

Real applications may use separate templates and controllers for each route.

## 16. HTTP Requests

AngularJS uses the `$http` service to communicate with APIs.

```javascript
app.controller("PostsController", function ($scope, $http) {
  $scope.posts = [];
  $scope.error = "";

  $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      $scope.posts = response.data;
    })
    .catch(function () {
      $scope.error = "Unable to load posts.";
    });
});
```

Display the data:

```html
<div ng-controller="PostsController">
  <p ng-if="error">{{ error }}</p>

  <ul>
    <li ng-repeat="post in posts | limitTo:5">
      {{ post.title }}
    </li>
  </ul>
</div>
```

Real applications should handle loading states, API errors, authentication, and server-side permissions.

## 17. CRUD Operations

CRUD stands for Create, Read, Update, and Delete. AngularJS can call API endpoints using `$http` methods:

```javascript
// Read
$http.get("/api/tasks");

// Create
$http.post("/api/tasks", { title: "Learn AngularJS" });

// Update
$http.put("/api/tasks/1", { title: "Practice AngularJS" });

// Delete
$http.delete("/api/tasks/1");
```

These are example requests. The endpoints must exist on your backend, and the server must validate authorization and incoming data.

## 18. Mini Project: AngularJS Task List

This project demonstrates modules, controllers, data binding, directives, and event handling.

```html
<!DOCTYPE html>
<html lang="en" ng-app="taskApp">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AngularJS Task List</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>
</head>
<body>
  <div ng-controller="TaskController">
    <h1>My Tasks</h1>

    <form ng-submit="addTask()">
      <input
        type="text"
        ng-model="newTask"
        placeholder="Enter a task"
        required
      />
      <button type="submit">Add Task</button>
    </form>

    <p ng-if="tasks.length === 0">No tasks yet.</p>

    <ul>
      <li ng-repeat="task in tasks track by $index">
        <span ng-style="{'text-decoration': task.done ? 'line-through' : 'none'}">
          {{ task.title }}
        </span>

        <button ng-click="toggleTask(task)">Toggle</button>
        <button ng-click="removeTask($index)">Delete</button>
      </li>
    </ul>
  </div>

  <script>
    const app = angular.module("taskApp", []);

    app.controller("TaskController", function ($scope) {
      $scope.tasks = [];
      $scope.newTask = "";

      $scope.addTask = function () {
        const title = $scope.newTask.trim();

        if (!title) return;

        $scope.tasks.push({
          title: title,
          done: false
        });

        $scope.newTask = "";
      };

      $scope.toggleTask = function (task) {
        task.done = !task.done;
      };

      $scope.removeTask = function (index) {
        $scope.tasks.splice(index, 1);
      };
    });
  </script>
</body>
</html>
```

### Project features

- Add tasks
- Display tasks
- Mark tasks as complete
- Delete tasks
- Use AngularJS data binding

Tasks are stored in memory, so they disappear when the page reloads. A backend and database are needed for persistent storage.

## 19. AngularJS Best Practices

1. Keep controllers small and focused.
2. Move reusable logic into services.
3. Use meaningful names for modules and components.
4. Handle API errors and loading states.
5. Validate input on both client and server.
6. Avoid unnecessarily complex expressions in templates.
7. Use dependency injection consistently.
8. Test important application behavior.
9. Avoid placing secrets in client-side code.
10. For new projects, consider a currently maintained framework.

## 20. Advantages and Limitations

### Advantages

- Two-way data binding
- Built-in directives and filters
- Dependency injection
- Form validation
- Services for reusable logic
- Routing support

### Limitations

- AngularJS is discontinued and no longer receives official security updates.
- Large applications can become difficult to maintain without clear architecture.
- Complex data binding can affect performance.
- Modern frontend tooling and frameworks provide different development approaches.

AngularJS remains useful for understanding legacy projects, but it is generally not the best choice for a new production application.

## 21. AngularJS Interview Questions

**Q1. What is AngularJS?**

AngularJS is a JavaScript framework for building dynamic web applications using directives, controllers, data binding, and dependency injection.

**Q2. What is `ng-app`?**

`ng-app` identifies the root element of an AngularJS application and initializes its module.

**Q3. What is `ng-model`?**

`ng-model` connects an input or other supported form control to a model.

**Q4. What is two-way data binding?**

It synchronizes changes between a model and its associated view.

**Q5. What is a controller?**

A controller defines data and behavior used by a section of an AngularJS application.

**Q6. What is a service?**

A service provides reusable functionality that can be injected into controllers and other components.

**Q7. What is dependency injection?**

Dependency injection supplies a component with the services or objects it requires.

**Q8. What are directives?**

Directives extend HTML with AngularJS behavior. Examples include `ng-repeat`, `ng-model`, and `ng-if`.

**Q9. What is `ng-repeat`?**

It repeats a template element for each item in a collection.

**Q10. What is `$http`?**

`$http` is an AngularJS service for making HTTP requests.

**Q11. What is the difference between `ng-if` and `ng-show`?**

`ng-if` adds or removes an element from the DOM based on a condition. `ng-show` generally keeps the element in the DOM and toggles its visibility.

**Q12. What is `ngRoute`?**

`ngRoute` is an AngularJS module that provides basic client-side routing.

**Q13. What is the difference between AngularJS and modern Angular?**

AngularJS is the legacy 1.x framework. Modern Angular is a separate, rewritten framework with TypeScript-oriented development and a different architecture.

**Q14. Is AngularJS recommended for new projects?**

Generally, no. Since AngularJS is discontinued, modern Angular or another actively maintained framework is usually a better choice.

**Q15. Can AngularJS connect to a database directly?**

A browser-based AngularJS app should normally communicate with a backend API, which then interacts with the database securely.

## 22. Conclusion

AngularJS introduced useful concepts for building interactive web applications, including data binding, directives, services, controllers, and dependency injection.

By completing this tutorial, you have explored core AngularJS concepts and built a simple task list. If you maintain a legacy AngularJS application, these skills can help you understand its architecture. For new applications, consider a modern, actively maintained framework.

**Next steps:** Practice building a form, retrieving API data, implementing routing, and separating reusable logic into services.
