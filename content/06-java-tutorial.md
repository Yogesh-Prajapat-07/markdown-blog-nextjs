---
title: "Java Tutorial: Beginner to Advanced"
description: "Learn Java from beginner to advanced with syntax, OOP, arrays, collections, exceptions, generics, streams, multithreading, JDBC, projects, and interview questions."
slug: "java-tutorial"
date: "2026-10-23"
author: "Yogesh"
image: "/images/java.png"
category: "Programming"
---

# Java Tutorial: Beginner to Advanced

Java is a general-purpose, class-based programming language commonly used for backend systems, enterprise applications, Android development, and large-scale services. This tutorial covers the fundamentals through core intermediate and advanced concepts, with examples and practice projects.

## Table of Contents

1. Java overview and setup
2. Your first Java program
3. Variables and data types
4. Operators and type conversion
5. Input and output
6. Conditional statements
7. Loops
8. Methods
9. Arrays and strings
10. Object-oriented programming
11. Packages and access modifiers
12. Exception handling
13. Collections Framework
14. Generics
15. Enums, records, and wrapper classes
16. File handling
17. Lambda expressions and streams
18. Multithreading
19. JDBC and databases
20. Common best practices
21. Practice projects
22. Interview questions and answers

## 1. Java Overview and Setup

Java source code is compiled into **bytecode**, which runs on a Java Virtual Machine (JVM). This helps Java applications run on different operating systems where a compatible JVM is available.

Important terms:

- **JDK (Java Development Kit):** Tools for developing Java applications, including a compiler and runtime components.
- **JRE (Java Runtime Environment):** The runtime concept and components needed to run Java applications; modern JDK distributions commonly bundle the runtime.
- **JVM (Java Virtual Machine):** Executes Java bytecode.
- **Compiler:** `javac` translates Java source code into bytecode.
- **Garbage collection:** The JVM automatically reclaims memory occupied by objects that are no longer reachable.

Install a current supported JDK distribution, then verify it in your terminal:

```bash
java -version
javac -version
```

## 2. Your First Java Program

Create `Main.java`:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

Compile and run:

```bash
javac Main.java
java Main
```

Output:

```text
Hello, Java!
```

Important details:
- Java is case-sensitive.
- A public top-level class normally lives in a file with the same name.
- `main` is the conventional entry point for a basic standalone Java application.
- Statements generally end with semicolons.
- Braces define blocks.

## 3. Variables and Data Types

A variable stores a value under a name.

```java
int age = 21;
double price = 199.50;
char grade = 'A';
boolean isActive = true;
String name = "Yogi";
```

### Primitive types

| Type | Typical use | Example |
|---|---|---|
| `byte` | Small signed integer | `byte n = 10;` |
| `short` | Short integer | `short n = 200;` |
| `int` | Common integer | `int count = 100;` |
| `long` | Larger integer | `long population = 8_000_000_000L;` |
| `float` | Single-precision decimal | `float rate = 2.5f;` |
| `double` | Double-precision decimal | `double total = 12.75;` |
| `char` | UTF-16 code unit | `char letter = 'J';` |
| `boolean` | `true` or `false` | `boolean ready = false;` |

`String` is a reference type, not a primitive.

### Constants

Use `final` when a variable should not be reassigned:

```java
final double TAX_RATE = 0.18;
```

Java local variables must be initialized before they are read. Fields have default values, but explicit initialization is often clearer.

## 4. Operators and Type Conversion

```java
int a = 10;
int b = 3;

System.out.println(a + b);  // 13
System.out.println(a - b);  // 7
System.out.println(a * b);  // 30
System.out.println(a / b);  // 3: integer division
System.out.println(a % b);  // 1
```

Other operator categories:
- Comparison: `==`, `!=`, `<`, `>`, `<=`, `>=`
- Logical: `&&`, `||`, `!`
- Assignment: `=`, `+=`, `-=`, `*=`
- Increment/decrement: `++`, `--`
- Ternary: `condition ? valueIfTrue : valueIfFalse`

### Type conversion

Widening conversions are generally implicit:

```java
int count = 5;
double value = count;
```

Narrowing conversions may lose information and require a cast:

```java
double price = 9.99;
int whole = (int) price; // 9
```

For object equality, use `.equals()` when appropriate rather than `==`, which compares primitive values or object references depending on the operands.

## 5. Input and Output

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println("Hello, " + name + ". Age: " + age);
        scanner.close();
    }
}
```

A common `Scanner` issue occurs when reading a number and then a line: the newline after `nextInt()` may be consumed by the next `nextLine()`. Read the remaining newline or use line-based input and parse values.

## 6. Conditional Statements

```java
int marks = 76;

if (marks >= 90) {
    System.out.println("Grade A");
} else if (marks >= 70) {
    System.out.println("Grade B");
} else if (marks >= 40) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}
```

### Switch

```java
int day = 2;

switch (day) {
    case 1 -> System.out.println("Monday");
    case 2 -> System.out.println("Tuesday");
    case 3 -> System.out.println("Wednesday");
    default -> System.out.println("Other day");
}
```

Arrow-style switch syntax is supported by modern Java versions. Traditional `switch` syntax is also available.

## 7. Loops

### For loop

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

### While loop

```java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
```

### Do-while loop

```java
int choice;
do {
    System.out.println("This runs at least once");
    choice = 0;
} while (choice != 0);
```

### Enhanced for loop

```java
int[] numbers = {10, 20, 30};
for (int number : numbers) {
    System.out.println(number);
}
```

`break` exits a loop or switch; `continue` skips to the next loop iteration.

## 8. Methods

Methods let you reuse logic.

```java
public class Calculator {
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(4, 6));
    }
}
```

A method can have parameters and a return type. `void` means it does not return a value.

### Method overloading

```java
static int multiply(int a, int b) {
    return a * b;
}

static double multiply(double a, double b) {
    return a * b;
}
```

Overloaded methods share a name but differ in their parameter lists. Java does not support user-defined operator overloading like C++.

## 9. Arrays and Strings

### Arrays

```java
int[] scores = {85, 90, 78};

System.out.println(scores[0]); // 85
System.out.println(scores.length); // 3
```

Array indexes start at zero. Accessing an invalid index throws `ArrayIndexOutOfBoundsException`.

```java
int[] values = new int[3]; // initial values are 0
values[0] = 12;
```

### Strings

Strings are immutable: operations create new strings rather than changing the original object.

```java
String language = "Java";

System.out.println(language.length());
System.out.println(language.toUpperCase());
System.out.println(language.substring(0, 2));
System.out.println(language.contains("av"));
```

Compare string contents with `.equals()`:

```java
String first = new String("Java");
String second = new String("Java");

System.out.println(first.equals(second)); // true
System.out.println(first == second);      // false
```

Use `StringBuilder` when repeatedly building a string in a loop:

```java
StringBuilder result = new StringBuilder();
result.append("Hello");
result.append(", Java!");
System.out.println(result);
```

## 10. Object-Oriented Programming (OOP)

The four commonly taught OOP principles are encapsulation, inheritance, polymorphism, and abstraction.

### Classes and objects

```java
class Student {
    String name;
    int semester;

    Student(String name, int semester) {
        this.name = name;
        this.semester = semester;
    }

    void introduce() {
        System.out.println("I am " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student("Yogi", 7);
        student.introduce();
    }
}
```

A class defines a type; an object is an instance of that class. A constructor initializes a new object.

### Encapsulation

Keep fields private and expose controlled methods:

```java
class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        balance += amount;
    }
}
```

Real financial applications should use an appropriate decimal representation such as `BigDecimal`, not `double`, for monetary calculations.

### Inheritance

```java
class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}
```

`Dog` inherits accessible members from `Animal`. Java classes support single class inheritance, while a class can implement multiple interfaces.

### Polymorphism and overriding

```java
class Animal {
    void speak() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof");
    }
}

Animal pet = new Dog();
pet.speak(); // Woof
```

The actual object type determines which overridden instance method runs.

### Abstraction with interfaces

```java
interface PaymentMethod {
    void pay(double amount);
}

class CardPayment implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("Processing card payment: " + amount);
    }
}
```

An interface defines a contract. Abstract classes can also contain shared state and implemented methods.

## 11. Packages and Access Modifiers

Packages organize related classes and help avoid naming conflicts.

```java
package com.example.app;
```

Access modifiers:
- `public`: accessible wherever the declaring type/member is accessible.
- `protected`: accessible in the same package and, under inheritance rules, from subclasses.
- package-private (no modifier): accessible within the same package.
- `private`: accessible within the declaring top-level class's permitted scope.

Use imports to refer to types from other packages:

```java
import java.util.ArrayList;
import java.util.List;
```

## 12. Exception Handling

Exceptions represent conditions that disrupt normal program flow.

```java
try {
    int result = 10 / 0;
    System.out.println(result);
} catch (ArithmeticException error) {
    System.out.println("Cannot divide by zero.");
} finally {
    System.out.println("Cleanup can go here.");
}
```

- `try`: code that may throw an exception.
- `catch`: handles a matching exception.
- `finally`: usually runs whether or not an exception occurs.
- `throw`: explicitly throws an exception.
- `throws`: declares exceptions a method may propagate.

### Checked and unchecked exceptions

Checked exceptions must be caught or declared, subject to Java's rules. Runtime exceptions are unchecked.

```java
static void validateAge(int age) {
    if (age < 18) {
        throw new IllegalArgumentException("Age must be at least 18");
    }
}
```

Prefer catching specific exceptions. Do not silently ignore errors or expose sensitive internal details in user-facing messages.

### Try-with-resources

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

try (BufferedReader reader = new BufferedReader(new FileReader("notes.txt"))) {
    System.out.println(reader.readLine());
} catch (IOException error) {
    System.err.println("Could not read the file.");
}
```

Try-with-resources closes resources that implement `AutoCloseable`.

## 13. Collections Framework

Collections provide flexible data structures beyond fixed-size arrays.

### List

A list preserves order and allows duplicates:

```java
import java.util.ArrayList;
import java.util.List;

List<String> languages = new ArrayList<>();
languages.add("Java");
languages.add("JavaScript");
languages.add("Java");

System.out.println(languages.get(0));
```

### Set

A set stores unique elements:

```java
import java.util.HashSet;
import java.util.Set;

Set<String> names = new HashSet<>();
names.add("Asha");
names.add("Ravi");
names.add("Asha");

System.out.println(names.size()); // 2
```

`HashSet` does not guarantee iteration order.

### Map

A map stores key-value pairs:

```java
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> marks = new HashMap<>();
marks.put("Asha", 90);
marks.put("Ravi", 82);

System.out.println(marks.get("Asha"));
System.out.println(marks.getOrDefault("Neha", 0));
```

### Queue

```java
import java.util.ArrayDeque;
import java.util.Queue;

Queue<String> tasks = new ArrayDeque<>();
tasks.offer("Email");
tasks.offer("Report");

System.out.println(tasks.poll()); // Email
```

Common implementations:
- `ArrayList`: general-purpose resizable list.
- `LinkedList`: linked list that also implements queue/deque interfaces; not automatically faster.
- `HashSet`: unique elements with no guaranteed order.
- `TreeSet`: sorted set.
- `HashMap`: key-value storage with no guaranteed iteration order.
- `TreeMap`: keys kept in sorted order.
- `ArrayDeque`: useful for stack and queue behavior.

Choose a collection based on required ordering, uniqueness, operations, and performance.

## 14. Generics

Generics let classes and methods work with types while retaining compile-time type checks.

```java
List<String> names = new ArrayList<>();
names.add("Yogi");
// names.add(10); // compile-time error
```

A generic method:

```java
static <T> void printItem(T item) {
    System.out.println(item);
}
```

A generic class:

```java
class Box<T> {
    private T value;

    void set(T value) {
        this.value = value;
    }

    T get() {
        return value;
    }
}
```

Java generics use type erasure in the runtime model, so generic type information is not available in every form at runtime. Primitive types cannot be used directly as type arguments; use wrapper classes such as `Integer`.

## 15. Enums, Records, and Wrapper Classes

### Enum

```java
enum Status {
    TODO,
    IN_PROGRESS,
    DONE
}

Status status = Status.IN_PROGRESS;
```

Enums represent a fixed set of named constants.

### Record

Modern Java supports records for concise data-carrier types:

```java
record User(String name, String email) {}

User user = new User("Yogi", "yogi@example.com");
System.out.println(user.name());
```

Records automatically provide accessors, equality, hash code, and a string representation. The example email is illustrative.

### Wrapper classes

Wrapper classes represent primitive values as objects: `Integer`, `Double`, `Boolean`, `Character`, and others.

```java
int number = 10;
Integer boxed = number; // autoboxing
int unboxed = boxed;    // unboxing
```

Be careful: unboxing a `null` wrapper throws `NullPointerException`.

## 16. File Handling

Use `Path` and `Files` for many modern file operations:

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) throws IOException {
        Path path = Path.of("hello.txt");
        Files.writeString(path, "Hello from Java!");
        String content = Files.readString(path);
        System.out.println(content);
    }
}
```

For production applications, handle I/O errors deliberately and consider file size, encoding, permissions, and whether streaming is more appropriate than reading an entire file into memory.

## 17. Lambda Expressions and Streams

### Lambda expressions

Lambdas provide concise implementations of functional interfaces:

```java
List<String> names = List.of("Asha", "Ravi", "Neha");
names.forEach(name -> System.out.println(name));
```

### Stream operations

```java
import java.util.List;
import java.util.stream.Collectors;

List<Integer> numbers = List.of(2, 5, 8, 11, 14);

List<Integer> evenSquares = numbers.stream()
    .filter(number -> number % 2 == 0)
    .map(number -> number * number)
    .collect(Collectors.toList());

System.out.println(evenSquares); // [4, 64, 196]
```

Common operations:
- `filter`: keep matching elements.
- `map`: transform elements.
- `sorted`: sort elements.
- `distinct`: remove duplicates.
- `limit`: restrict the number of elements.
- `collect`: gather results.
- `reduce`: combine elements into a result.
- `forEach`: perform an action for each element.

Intermediate stream operations are generally lazy; a terminal operation triggers processing. Avoid modifying shared external state inside stream operations.

## 18. Multithreading

A thread is a unit of execution. Concurrent programming helps structure work that can progress independently, but it introduces coordination and shared-state risks.

### Create a thread

```java
Thread thread = new Thread(() -> {
    System.out.println("Running in another thread");
});

thread.start();
```

Use `start()` to start a new thread; directly calling `run()` just invokes the method on the current thread.

### ExecutorService

For managed task execution, an executor is often more flexible:

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

try (ExecutorService executor = Executors.newFixedThreadPool(2)) {
    executor.submit(() -> System.out.println("Task running"));
}
```

This try-with-resources form is supported by newer Java releases where `ExecutorService` implements `AutoCloseable`. For older JDKs, shut down the executor explicitly.

### Synchronization

When multiple threads access mutable shared data, unsynchronized operations can cause race conditions.

```java
class Counter {
    private int value;

    public synchronized void increment() {
        value++;
    }

    public synchronized int getValue() {
        return value;
    }
}
```

Other concurrency tools include `AtomicInteger`, locks, concurrent collections, and `CompletableFuture`. Choose them according to the problem and avoid blocking or locking more than necessary.

## 19. JDBC and Databases

JDBC is a Java API for connecting to relational databases through a suitable driver.

A typical workflow:
1. Add the database's JDBC driver dependency.
2. Obtain a connection using a configured URL and credentials.
3. Use a `PreparedStatement` for parameterized SQL.
4. Read results from a `ResultSet`.
5. Close resources using try-with-resources.

Illustrative example (configure the URL, driver, username, and password for your database):

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) throws SQLException {
        String url = System.getenv("DB_URL");
        String username = System.getenv("DB_USER");
        String password = System.getenv("DB_PASSWORD");

        String sql = "SELECT id, name FROM users WHERE id = ?";

        try (
            Connection connection = DriverManager.getConnection(url, username, password);
            PreparedStatement statement = connection.prepareStatement(sql)
        ) {
            statement.setInt(1, 1);

            try (ResultSet results = statement.executeQuery()) {
                while (results.next()) {
                    System.out.println(results.getInt("id") + ": " + results.getString("name"));
                }
            }
        }
    }
}
```

Security notes:
- Do not hard-code production credentials or commit secrets to Git.
- Use prepared statements instead of concatenating untrusted input into SQL.
- Grant database accounts only the permissions they need.
- Use transactions for groups of operations that must succeed or fail together.

## 20. Common Java Best Practices

- Use descriptive class, method, and variable names.
- Keep methods focused on one responsibility.
- Prefer encapsulation and composition where they fit the design.
- Program to interfaces when that improves flexibility.
- Use `try-with-resources` for closeable resources.
- Validate inputs at system boundaries.
- Avoid catching broad exceptions unless you can handle them meaningfully.
- Use `equals()` and `hashCode()` consistently for objects used in hash-based collections.
- Keep secrets out of source control.
- Write tests for important behavior and edge cases.
- Choose data structures based on actual requirements.
- Learn debugging, logging, Git, build tools, and dependency management alongside the language.

## 21. Practice Projects

### Project 1: Student Grade Calculator
- Input student name and marks.
- Validate marks and calculate the average.
- Assign a grade using conditional statements.
- Display a formatted result.

### Project 2: Library Management Console App
- Add, list, search, and remove books.
- Store books in a collection.
- Model each book with a class or record.
- Handle invalid commands and missing books.

### Project 3: Expense Tracker
- Add and categorize expenses.
- Calculate totals by category.
- Save and load data from a file.
- Validate amounts and dates.

### Project 4: Task Manager
- Create, complete, list, and delete tasks.
- Use classes to model tasks.
- Use collections to store tasks.
- Add file persistence and tests.

### Project 5: JDBC CRUD Application
- Connect to a relational database.
- Create, read, update, and delete records.
- Use prepared statements and transactions.
- Keep credentials in environment variables.
- Handle database failures safely.

### Project 6: Multithreaded File Processor
- Process multiple files using an executor.
- Collect task results and errors.
- Avoid unsafe shared mutable state.
- Measure performance before adding complexity.

## 22. Java Interview Questions and Answers

### Beginner

**1. What is Java?**  
Java is a general-purpose programming language whose compiled bytecode runs on a Java Virtual Machine.

**2. What is the JVM?**  
The Java Virtual Machine executes Java bytecode and manages runtime services such as memory management.

**3. What is the JDK?**  
The Java Development Kit contains tools used to develop Java applications, including the compiler.

**4. What is the difference between primitive and reference types?**  
Primitive variables hold primitive values; reference variables refer to objects or arrays.

**5. Is `String` primitive?**  
No. `String` is a class and strings are immutable.

**6. What is a constructor?**  
A constructor initializes a new instance of a class and has the class name with no return type.

**7. What is method overloading?**  
Defining methods with the same name but different parameter lists.

**8. What is method overriding?**  
A subclass provides an implementation of an inherited instance method with a compatible signature.

**9. What is the difference between `==` and `.equals()`?**  
For primitives, `==` compares values; for references, `==` checks identity. `.equals()` can compare logical equality when the class implements it appropriately.

**10. Why is Java platform-independent?**  
Java is compiled to bytecode that can run on compatible JVM implementations on different platforms.

### Intermediate

**11. What are the four OOP principles?**  
Encapsulation, inheritance, polymorphism, and abstraction.

**12. What is encapsulation?**  
Bundling data with behavior and controlling access to internal state.

**13. What is an interface?**  
An interface defines a contract that implementing classes agree to provide; modern interfaces may also include certain default and static methods.

**14. What is an abstract class?**  
A class that cannot be instantiated directly and may contain abstract methods and implemented behavior.

**15. What is exception handling?**  
A mechanism for responding to exceptional conditions using constructs such as `try`, `catch`, `finally`, `throw`, and `throws`.

**16. What is the difference between checked and unchecked exceptions?**  
Checked exceptions are subject to compile-time catch-or-declare requirements; unchecked exceptions include runtime exceptions and errors.

**17. What is the Collections Framework?**  
A set of interfaces and implementations for data structures such as lists, sets, queues, and maps.

**18. What is the difference between `List` and `Set`?**  
A list preserves sequence and can contain duplicates; a set enforces uniqueness according to its equality rules.

**19. What is a `HashMap`?**  
A map implementation that stores key-value pairs and does not guarantee iteration order.

**20. What are generics?**  
A way to parameterize types so the compiler can check how types are used.

### Advanced

**21. What is a lambda expression?**  
A concise way to provide an implementation of a functional interface.

**22. What is a Stream in Java?**  
An API for processing sequences of data through operations such as filtering, mapping, and collecting.

**23. What is multithreading?**  
Running multiple threads within a process, potentially allowing tasks to progress concurrently.

**24. What is a race condition?**  
A bug where the result depends on timing or interleaving of concurrent operations.

**25. What does `synchronized` do?**  
It provides monitor-based mutual exclusion and memory-visibility guarantees for the associated synchronization.

**26. What is garbage collection?**  
Automatic reclamation of memory used by objects that are no longer reachable.

**27. What is JDBC?**  
Java Database Connectivity, an API for interacting with relational databases through drivers.

**28. Why use `PreparedStatement`?**  
It supports parameterized SQL, helps prevent SQL injection when used correctly, and can improve statement handling.

**29. What is try-with-resources?**  
A language feature that automatically closes resources implementing `AutoCloseable`.

**30. What is the difference between `ArrayList` and `LinkedList`?**  
`ArrayList` uses a resizable array and offers fast indexed access; `LinkedList` uses linked nodes and has different operation costs. Choose based on the workload rather than assuming one is always faster.

**31. What is immutability?**  
An immutable object's observable state cannot be changed after construction.

**32. What is a record?**  
A concise Java type intended for transparent data carriers, with generated accessors and common object methods.

**33. What is the difference between `final`, `finally`, and `finalize()`?**  
`final` restricts reassignment, overriding, or inheritance depending on its use; `finally` is an exception-handling block; `finalize()` is a deprecated legacy finalization mechanism and should not be used for resource cleanup.

**34. What is dependency injection?**  
A design technique where a component receives its dependencies from outside instead of constructing them internally.

**35. How do you protect database access from SQL injection?**  
Use parameterized queries with `PreparedStatement`, avoid building SQL from untrusted strings, and apply least-privilege database permissions.

## Final Learning Roadmap

1. Practice variables, operators, conditions, loops, and methods.
2. Solve small problems using arrays and strings.
3. Learn classes, objects, inheritance, interfaces, and encapsulation.
4. Practice exceptions, collections, and generics.
5. Learn files, lambdas, and streams.
6. Understand threads and concurrency fundamentals.
7. Build a JDBC project with safe database access.
8. Use Git, a build tool, a debugger, and automated tests.
9. Build projects that solve a real problem and document how to run them.
10. Review interview questions by explaining each answer in your own words.

Consistency matters more than memorizing syntax. Write code, run it, debug errors, and gradually turn small examples into complete applications.
