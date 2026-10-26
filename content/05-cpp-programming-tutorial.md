---
title: "C++ Programming Tutorial: Beginner to Advanced"
description: "A complete C++ guide covering fundamentals, OOP, STL, pointers, memory management, modern C++, code examples, and interview questions."
slug: "cpp-programming-tutorial"
date: "2026-10-22"
author: "Yogesh"
image: "/images/cpp.png"
category: "Programming"
---

# C++ Programming: Basic to Advanced Complete Guide

This guide takes you from the fundamentals of C++ to more advanced concepts. It includes explanations, practical code examples, best practices, practice problems, and interview questions.

## Table of Contents

1. [Introduction to C++](#introduction-to-c)
2. [Setting Up a C++ Environment](#setting-up-a-c-environment)
3. [Your First C++ Program](#your-first-c-program)
4. [Variables and Data Types](#variables-and-data-types)
5. [Input and Output](#input-and-output)
6. [Operators](#operators)
7. [Conditions and Loops](#conditions-and-loops)
8. [Functions](#functions)
9. [Arrays, Strings, and Vectors](#arrays-strings-and-vectors)
10. [Pointers and References](#pointers-and-references)
11. [Memory Management and RAII](#memory-management-and-raii)
12. [Object-Oriented Programming](#object-oriented-programming)
13. [Constructors and Destructors](#constructors-and-destructors)
14. [Inheritance and Polymorphism](#inheritance-and-polymorphism)
15. [Exception Handling](#exception-handling)
16. [The Standard Template Library](#the-standard-template-library)
17. [Templates](#templates)
18. [File Handling](#file-handling)
19. [Modern C++](#modern-c)
20. [Time Complexity and Best Practices](#time-complexity-and-best-practices)
21. [Practice Problems](#practice-problems)
22. [Interview Questions](#interview-questions)

## 1. Introduction to C++

C++ is a general-purpose programming language used to build software that needs performance, control over system resources, or both. It supports procedural programming, object-oriented programming, and generic programming.

### Common uses

- Game engines and game development
- Operating systems and system software
- Desktop applications
- Embedded systems
- High-performance applications
- Competitive programming
- Browsers, databases, and developer tools

### C vs. C++

C is primarily a procedural language. C++ supports procedural programming too, but adds features such as classes, inheritance, polymorphism, templates, and a rich standard library.

## 2. Setting Up a C++ Environment

You need a C++ compiler and an editor or IDE.

Common choices include:

- **GCC or G++** on Linux, macOS, or Windows through a suitable environment
- **Clang** on supported platforms
- **MSVC** through Visual Studio on Windows
- **Visual Studio Code** as an editor, with a compiler installed separately

Check your compiler version in a terminal:

```bash
g++ --version
```

Compile a source file and run it:

```bash
g++ main.cpp -std=c++17 -o main
```

On Linux or macOS:

```bash
./main
```

On Windows PowerShell:

```powershell
.\main.exe
```

## 3. Your First C++ Program

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!\n";
    return 0;
}
```

### Explanation

- `#include <iostream>` provides standard input and output tools.
- `int main()` is the program's entry point.
- `std::cout` prints output.
- `\n` starts a new line.
- `return 0;` indicates successful completion.

C++ statements commonly end with a semicolon. Braces `{}` define a block of code.

## 4. Variables and Data Types

A variable stores a value with a particular type.

```cpp
#include <iostream>
#include <string>

int main() {
    int age = 20;
    double height = 1.75;
    char grade = 'A';
    bool isStudent = true;
    std::string name = "Yogesh";

    std::cout << name << " is " << age << " years old.\n";
}
```

Common types:

| Type | Typical purpose | Example |
|---|---|---|
| `int` | Whole numbers | `int count = 10;` |
| `long long` | Larger integer values | `long long population = 8000000000LL;` |
| `float` | Single-precision floating point | `float rate = 2.5f;` |
| `double` | Double-precision floating point | `double price = 99.99;` |
| `char` | One character | `char initial = 'Y';` |
| `bool` | True or false | `bool active = true;` |
| `std::string` | Text | `std::string city = "Ahmedabad";` |

Use `const` when a value should not be changed:

```cpp
const double PI = 3.141592653589793;
```

Prefer meaningful variable names and initialize variables before using them.

## 5. Input and Output

Use `std::cout` to print and `std::cin` to read input.

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    int age;

    std::cout << "Enter your name: ";
    std::getline(std::cin, name);

    std::cout << "Enter your age: ";
    std::cin >> age;

    std::cout << "Hello, " << name << ". You are " << age << ".\n";
}
```

`std::cin >> name` reads only until whitespace. Use `std::getline` when you want to read an entire line. Be careful when mixing `std::cin >>` and `std::getline`, because the newline left in the input buffer may need to be consumed.

## 6. Operators

C++ provides several categories of operators.

### Arithmetic

`+`, `-`, `*`, `/`, `%`

```cpp
int a = 10;
int b = 3;

std::cout << a + b; // 13
std::cout << a / b; // 3: integer division
std::cout << a % b; // 1: remainder
```

When both operands are integers, `/` performs integer division.

### Comparison

`==`, `!=`, `<`, `>`, `<=`, `>=`

These operators produce a Boolean result.

### Logical

`&&` (AND), `||` (OR), `!` (NOT)

```cpp
if (age >= 18 && age <= 60) {
    std::cout << "Within the specified age range.\n";
}
```

Other useful operators include assignment (`=`), compound assignment (`+=`), increment (`++`), decrement (`--`), and the conditional operator (`condition ? value1 : value2`).

## 7. Conditions and Loops

### If / else

```cpp
int number = 7;

if (number > 0) {
    std::cout << "Positive\n";
} else if (number < 0) {
    std::cout << "Negative\n";
} else {
    std::cout << "Zero\n";
}
```

### Switch

```cpp
int day = 2;

switch (day) {
    case 1:
        std::cout << "Monday\n";
        break;
    case 2:
        std::cout << "Tuesday\n";
        break;
    default:
        std::cout << "Another day\n";
}
```

### For loop

```cpp
for (int i = 1; i <= 5; ++i) {
    std::cout << i << ' ';
}
```

### While loop

```cpp
int count = 1;

while (count <= 5) {
    std::cout << count << ' ';
    ++count;
}
```

### Range-based for loop

```cpp
int numbers[] = {10, 20, 30};

for (int number : numbers) {
    std::cout << number << ' ';
}
```

Use `break` to exit a loop and `continue` to skip to the next iteration.

## 8. Functions

Functions let you package reusable logic.

```cpp
#include <iostream>

int add(int a, int b) {
    return a + b;
}

int main() {
    std::cout << add(5, 3) << '\n';
}
```

### Pass by value

The function receives a copy of the argument.

```cpp
void change(int value) {
    value = 100; // Does not change the caller's variable.
}
```

### Pass by reference

A reference lets a function work with the original object.

```cpp
void increment(int& value) {
    ++value;
}
```

Use a `const` reference for large objects that should not be copied or modified:

```cpp
void printName(const std::string& name) {
    std::cout << name << '\n';
}
```

Functions can be overloaded when they have the same name but different parameter lists. A default argument supplies a value when the caller omits that argument.

## 9. Arrays, Strings, and Vectors

### Arrays

An array stores a fixed number of elements of the same type.

```cpp
int marks[3] = {80, 90, 85};
std::cout << marks[0]; // 80
```

Array indices start at `0`. Accessing an invalid index causes undefined behavior.

### Strings

Use `std::string` for text:

```cpp
std::string language = "C++";
language += " programming";

std::cout << language;
std::cout << language.size();
```

### Vectors

`std::vector` is a dynamic array that can grow or shrink.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {10, 20, 30};
    numbers.push_back(40);

    for (int number : numbers) {
        std::cout << number << ' ';
    }
}
```

Prefer `std::vector` over raw arrays for many everyday collections because it manages its own storage and exposes useful operations such as `size()`, `push_back()`, and `at()`.

## 10. Pointers and References

A pointer stores the address of an object. A reference is an alias for an existing object.

```cpp
int value = 42;
int* pointer = &value;
int& reference = value;

std::cout << *pointer << '\n'; // Dereference the pointer.
reference = 50;

std::cout << value << '\n'; // 50
```

- `&value` obtains the address of `value` in this context.
- `*pointer` accesses the object pointed to.
- A pointer can be null; check it before dereferencing.
- A reference must be initialized when declared and cannot later be reseated to refer to another object.

Avoid dangling pointers and references that outlive the objects they refer to. Prefer standard containers and smart pointers where appropriate.

## 11. Memory Management and RAII

Dynamically allocated memory must be managed correctly. Manual `new` and `delete` can lead to memory leaks, double deletion, and dangling pointers.

Modern C++ encourages **RAII** (Resource Acquisition Is Initialization): tie resource ownership to object lifetime so cleanup happens automatically.

Use smart pointers when you need dynamic ownership:

```cpp
#include <iostream>
#include <memory>

int main() {
    auto number = std::make_unique<int>(42);
    std::cout << *number << '\n';
}
```

- `std::unique_ptr` represents exclusive ownership.
- `std::shared_ptr` represents shared ownership through reference counting.
- `std::weak_ptr` observes an object managed by `shared_ptr` without extending its lifetime.

Prefer automatic variables and standard containers first. Use smart pointers when ownership needs them; do not use `shared_ptr` for every object by default.

## 12. Object-Oriented Programming

Object-oriented programming organizes code around classes and objects.

```cpp
#include <iostream>
#include <string>

class Person {
private:
    std::string name;
    int age;

public:
    Person(const std::string& personName, int personAge)
        : name(personName), age(personAge) {}

    void introduce() const {
        std::cout << "My name is " << name
                  << " and I am " << age << ".\n";
    }
};

int main() {
    Person person("Yogesh", 20);
    person.introduce();
}
```

### Core concepts

- **Encapsulation:** keep data and the operations on it together, controlling access through a public interface.
- **Abstraction:** expose essential behavior while hiding implementation details.
- **Inheritance:** create a type based on another type.
- **Polymorphism:** allow a common interface to have different implementations.

Use classes when they clarify responsibilities and invariants; not every function or data structure needs to be a class.

## 13. Constructors and Destructors

A constructor initializes an object. A destructor runs when an object is destroyed and is commonly used to release owned resources.

```cpp
#include <iostream>
#include <string>

class User {
public:
    std::string name;

    explicit User(std::string userName)
        : name(std::move(userName)) {
        std::cout << "User created\n";
    }

    ~User() {
        std::cout << "User destroyed\n";
    }
};
```

The example uses `std::move`, so include `<utility>` when compiling it:

```cpp
#include <utility>
```

Important terms:

- **Default constructor:** constructs an object without requiring arguments.
- **Parameterized constructor:** accepts values used to initialize an object.
- **Copy constructor:** creates an object from another object of the same type.
- **Move constructor:** can transfer resources from a temporary or otherwise movable object.
- **Destructor:** performs cleanup when an object’s lifetime ends.

Prefer member initializer lists. If a class manages a resource directly, carefully consider the Rule of Zero, Rule of Three, and Rule of Five.

## 14. Inheritance and Polymorphism

Inheritance can express an “is-a” relationship. A virtual function enables runtime polymorphism through a base-class interface.

```cpp
#include <iostream>
#include <memory>
#include <vector>

class Animal {
public:
    virtual void speak() const {
        std::cout << "Animal sound\n";
    }

    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void speak() const override {
        std::cout << "Woof!\n";
    }
};

int main() {
    std::vector<std::unique_ptr<Animal>> animals;
    animals.push_back(std::make_unique<Dog>());

    for (const auto& animal : animals) {
        animal->speak();
    }
}
```

- `virtual` allows a derived implementation to be selected at runtime.
- `override` tells the compiler that a method is intended to override a virtual base method.
- A virtual destructor is important when deleting derived objects through base-class pointers.

Favor composition over inheritance when one object simply needs to use another object’s functionality.

## 15. Exception Handling

Exceptions report errors that prevent an operation from completing normally.

```cpp
#include <iostream>
#include <stdexcept>

double divide(double a, double b) {
    if (b == 0.0) {
        throw std::invalid_argument("Divisor cannot be zero");
    }
    return a / b;
}

int main() {
    try {
        std::cout << divide(10.0, 2.0) << '\n';
        std::cout << divide(10.0, 0.0) << '\n';
    } catch (const std::exception& error) {
        std::cerr << "Error: " << error.what() << '\n';
    }
}
```

- `throw` raises an exception.
- `try` contains code that may throw.
- `catch` handles a matching exception.

Use exceptions for exceptional failures, not as a replacement for every ordinary conditional. RAII helps ensure resources are released when exceptions occur.

## 16. The Standard Template Library

The C++ Standard Library provides containers, algorithms, iterators, and utilities.

### Common containers

| Container | Typical use |
|---|---|
| `std::vector` | Dynamic array; fast indexed access |
| `std::array` | Fixed-size array |
| `std::string` | Text |
| `std::list` | Doubly linked list; specialized insertion/removal needs |
| `std::map` | Sorted key-value pairs |
| `std::unordered_map` | Hash-based key-value lookup |
| `std::set` | Sorted unique values |
| `std::queue` | First-in, first-out processing |
| `std::stack` | Last-in, first-out processing |
| `std::priority_queue` | Highest-priority element first by default |

### Algorithms

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {5, 2, 8, 1, 3};

    std::sort(numbers.begin(), numbers.end());

    auto position = std::find(numbers.begin(), numbers.end(), 3);

    for (int number : numbers) {
        std::cout << number << ' ';
    }

    if (position != numbers.end()) {
        std::cout << "\nFound 3\n";
    }
}
```

Learn `std::sort`, `std::find`, `std::count`, `std::reverse`, `std::min`, `std::max`, and `std::accumulate` (from `<numeric>`). Using standard algorithms often makes code shorter and easier to review.

## 17. Templates

Templates let you write functions and classes that work with multiple types.

```cpp
#include <iostream>

template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << maximum(10, 20) << '\n';
    std::cout << maximum(2.5, 1.5) << '\n';
}
```

Both arguments must deduce a compatible `T` in this example. Templates are a foundation of generic programming and are used extensively by the Standard Library.

## 18. File Handling

Use `<fstream>` to read from or write to files.

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ofstream output("notes.txt");
    if (!output) {
        std::cerr << "Could not open file for writing.\n";
        return 1;
    }

    output << "Learning C++ file handling.\n";
    output.close();

    std::ifstream input("notes.txt");
    if (!input) {
        std::cerr << "Could not open file for reading.\n";
        return 1;
    }

    std::string line;
    while (std::getline(input, line)) {
        std::cout << line << '\n';
    }
}
```

Check whether opening a file succeeded. File paths are resolved relative to the program's working directory unless you provide an appropriate path.

## 19. Modern C++

Modern C++ standards introduced features that make code safer and more expressive.

### Useful features

- `auto` for type deduction when the type is clear from the initializer.
- Range-based `for` loops for iterating over collections.
- `nullptr` as the null pointer literal.
- Smart pointers for explicit ownership.
- Move semantics for efficient resource transfer.
- Lambda expressions for small callable objects.
- `enum class` for scoped enumerations.
- Structured bindings (C++17) for unpacking certain objects.
- Concepts and ranges (C++20) for expressive generic programming and collection pipelines.

Example using `auto` and a lambda:

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    auto isEven = [](int number) {
        return number % 2 == 0;
    };

    std::cout << std::count_if(
        numbers.begin(), numbers.end(), isEven
    ) << '\n';
}
```

For a new project, use a compiler and language standard supported by your target environment. C++17 is a useful baseline for many learning projects; explore C++20 or later when your toolchain supports it.

## 20. Time Complexity and Best Practices

Time complexity describes how an algorithm's running time grows as input size grows.

| Complexity | Name | Example |
|---|---|---|
| `O(1)` | Constant | Access an element by vector index |
| `O(log n)` | Logarithmic | Binary search in sorted data |
| `O(n)` | Linear | Scan all elements once |
| `O(n log n)` | Linearithmic | Typical comparison sorting |
| `O(n²)` | Quadratic | Two nested loops over the same input size |

These are typical examples, not guarantees for every operation or input. Check the complexity of the specific container or algorithm you use.

### Good practices

1. Choose descriptive names for variables and functions.
2. Initialize variables before reading them.
3. Prefer `std::vector`, `std::string`, and standard algorithms over unnecessary manual memory management.
4. Use `const` to communicate when values should not change.
5. Keep functions focused on one task.
6. Handle invalid input and file errors.
7. Compile with warnings enabled, for example `-Wall -Wextra -Wpedantic` with GCC or Clang.
8. Test normal cases, boundary cases, and invalid inputs.
9. Use a debugger to investigate unexpected behavior.
10. Learn data structures and algorithms alongside language syntax.

## 21. Practice Problems

Try solving these problems yourself before checking a solution:

1. Print `Hello, World!`.
2. Read two integers and print their sum.
3. Check whether a number is even or odd.
4. Find the largest of three numbers.
5. Print a multiplication table.
6. Calculate the factorial of a non-negative integer.
7. Check whether a number is prime.
8. Reverse a string.
9. Check whether a string is a palindrome.
10. Count vowels in a string.
11. Find the maximum and minimum values in a vector.
12. Calculate the sum and average of an array.
13. Sort a vector of integers.
14. Search for an element in a vector.
15. Create a `Student` class with a name and marks.
16. Demonstrate inheritance using a base class and derived class.
17. Write to a text file and read it back.
18. Use a `std::map` to count word frequencies.
19. Implement a stack using a standard container.
20. Build a small console-based task manager that can add, list, and remove tasks.

For each problem, test empty input where relevant, boundary values, and invalid input.

## 22. Interview Questions

### 1. What is C++?

C++ is a general-purpose programming language that supports procedural, object-oriented, and generic programming.

### 2. What is the difference between C and C++?

C is primarily procedural, while C++ also provides features such as classes, inheritance, polymorphism, templates, and a larger standard library.

### 3. What is a class?

A class is a user-defined type that can combine data and functions into one interface.

### 4. What is an object?

An object is an instance of a class or another type.

### 5. What is encapsulation?

Encapsulation groups data with related operations and controls how callers access the object's internal state.

### 6. What is inheritance?

Inheritance allows a derived class to extend or specialize a base class.

### 7. What is polymorphism?

Polymorphism lets code use a common interface while different object types provide different behavior.

### 8. What is a constructor?

A constructor initializes an object when it is created.

### 9. What is a destructor?

A destructor runs when an object's lifetime ends and can release resources owned by that object.

### 10. What is function overloading?

Function overloading allows multiple functions to share a name when their parameter lists differ.

### 11. What is function overriding?

Overriding occurs when a derived class provides its own implementation of an inherited virtual function.

### 12. What is a pointer?

A pointer stores the address of an object or function, or a null pointer value.

### 13. What is a reference?

A reference is an alias for an existing object.

### 14. What is the difference between `new` and `delete`?

`new` allocates an object and initializes it; `delete` destroys an object created with the corresponding scalar `new` expression and releases its storage. Prefer RAII and smart pointers for most ownership tasks.

### 15. What is STL?

The Standard Template Library commonly refers to the Standard Library's generic containers, algorithms, iterators, and related utilities.

### 16. What is a template?

A template lets functions or classes operate with types and values determined at compile time.

### 17. What is exception handling?

Exception handling uses `throw`, `try`, and `catch` to report and handle certain runtime failures.

### 18. What is the difference between a vector and an array?

A built-in array has a fixed extent, while `std::vector` is a dynamic container that can change size.

### 19. What is RAII?

RAII ties resource ownership to object lifetime so resources are released automatically when their owning objects are destroyed.

### 20. What is the difference between compile-time and runtime polymorphism?

Compile-time polymorphism includes mechanisms such as function overloading and templates. Runtime polymorphism commonly uses virtual functions and base-class interfaces.

## Conclusion

C++ is a broad language, so learn it step by step. Start with variables, conditions, loops, and functions. Then practice arrays, strings, classes, and the Standard Library. After that, focus on pointers, object lifetime, RAII, templates, and algorithms.

The best way to learn is to write small programs regularly, understand compiler errors, and gradually build projects. Keep this guide as a reference and revisit the examples while practicing.
