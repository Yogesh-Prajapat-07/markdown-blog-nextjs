---
title: "Python Tutorial: Beginner to Advanced"
description: "Learn Python from beginner to advanced with syntax, data structures, functions, OOP, exceptions, files, modules, APIs, testing, projects, and interview questions."
slug: "python-tutorial"
date: "2026-10-23"
author: "Yogesh"
image: "/images/python.png"
category: "Programming"
---

# Python Tutorial: Beginner to Advanced

Python is a high-level, general-purpose programming language known for readable syntax and a large ecosystem. It is used in automation, web development, data analysis, artificial intelligence, scripting, and testing.

This guide covers Python fundamentals, practical programming patterns, and projects. You can use it as a reference while writing and running your own code.

## Table of Contents

1. Install Python and run a program
2. Syntax, variables, and data types
3. Input and output
4. Operators
5. Conditions
6. Loops
7. Strings
8. Lists, tuples, sets, and dictionaries
9. Functions
10. Scope and comprehensions
11. Modules, packages, and virtual environments
12. Exceptions
13. File handling and JSON
14. Object-oriented programming
15. Iterators and generators
16. Decorators
17. Type hints
18. Working with APIs
19. Testing and debugging
20. Useful standard-library tools
21. Best practices and security
22. Practice projects
23. Interview questions and answers

## 1. Install Python and Run a Program

Install a supported Python 3 release from the official Python website or use a package manager appropriate for your operating system.

Verify the installation:

```bash
python --version
```

On some systems, use:

```bash
python3 --version
```

Create `main.py`:

```python
print("Hello, Python!")
```

Run it:

```bash
python main.py
```

Python is interpreted in the usual developer workflow, and indentation is syntactically significant. Use consistent indentation, commonly four spaces per level.

## 2. Syntax, Variables, and Data Types

Variables refer to objects; you do not need to declare a variable's type in advance.

```python
name = "Yogi"
age = 21
price = 199.50
is_active = True
nothing = None
```

Common built-in types include:
- `int`: integers
- `float`: floating-point numbers
- `bool`: `True` or `False`
- `str`: text
- `list`: ordered, mutable collection
- `tuple`: ordered, immutable collection
- `set`: collection of unique hashable values
- `dict`: key-value mapping
- `NoneType`: the type of `None`

Check a type:

```python
print(type(name))
```

Python uses dynamic typing, but that does not mean values have no types. Objects have types, and operations must be valid for those types.

### Naming conventions

Use descriptive `snake_case` names for variables and functions:

```python
student_name = "Asha"
total_marks = 450
```

Constants are commonly written in uppercase by convention:

```python
MAX_RETRIES = 3
```

This naming style does not make a value immutable; it communicates intent.

## 3. Input and Output

```python
name = input("Enter your name: ")
print("Hello,", name)
```

`input()` returns a string. Convert it when you expect a number:

```python
age_text = input("Enter your age: ")

try:
    age = int(age_text)
    print(f"Next year you will be {age + 1}.")
except ValueError:
    print("Please enter a whole number.")
```

Formatted strings (f-strings) are a convenient way to insert values:

```python
product = "Keyboard"
price = 1299
print(f"{product} costs ₹{price}.")
```

## 4. Operators

```python
a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3: floor division
print(a % b)   # 1: remainder
print(a ** b)  # 1000
```

Other operator groups:
- Comparison: `==`, `!=`, `<`, `>`, `<=`, `>=`
- Boolean: `and`, `or`, `not`
- Membership: `in`, `not in`
- Identity: `is`, `is not`
- Assignment: `=`, `+=`, `-=`, and related operators

Use `==` to compare values. Use `is` mainly for identity checks, such as `value is None`, rather than as a general value comparison.

## 5. Conditions

```python
marks = 78

if marks >= 90:
    print("Grade A")
elif marks >= 70:
    print("Grade B")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")
```

Python uses indentation to define each block. The `elif` keyword means “else if.”

### Match statements

Python 3.10 and newer support structural pattern matching:

```python
command = "start"

match command:
    case "start":
        print("Starting")
    case "stop":
        print("Stopping")
    case _:
        print("Unknown command")
```

For simple conditions, ordinary `if` statements are often clearer.

## 6. Loops

### For loop

```python
for number in range(1, 6):
    print(number)
```

The stop value in `range()` is excluded, so this prints 1 through 5.

### While loop

```python
count = 1

while count <= 3:
    print(count)
    count += 1
```

`break` exits a loop, while `continue` skips to the next iteration.

### Enumerate

Use `enumerate()` when you need an index and value:

```python
languages = ["Python", "JavaScript", "Java"]

for index, language in enumerate(languages, start=1):
    print(index, language)
```

### Zip

`zip()` iterates over sequences together:

```python
names = ["Asha", "Ravi"]
scores = [91, 84]

for name, score in zip(names, scores):
    print(name, score)
```

By default, `zip()` stops at the shortest input iterable.

## 7. Strings

Strings are immutable sequences of Unicode code points.

```python
message = "Learn Python"

print(message.lower())
print(message.upper())
print(message.title())
print(message.replace("Python", "programming"))
print(message.startswith("Learn"))
print(message[0])
print(message[0:5])
print(len(message))
```

### Splitting and joining

```python
csv_line = "red,green,blue"
colors = csv_line.split(",")

joined = " | ".join(colors)
print(joined)
```

### Cleaning user input

```python
email = "  learner@example.com  ".strip().lower()
```

Do not assume that trimming and lowercasing alone fully validate an email address.

## 8. Lists, Tuples, Sets, and Dictionaries

### Lists

Lists are ordered and mutable:

```python
tasks = ["study", "practice"]
tasks.append("review")
tasks[0] = "read"
tasks.remove("practice")

print(tasks)
```

Useful list operations include `append`, `extend`, `insert`, `remove`, `pop`, `sort`, and `reverse`.

### Tuples

Tuples are ordered and immutable:

```python
coordinates = (23.0, 72.5)
x, y = coordinates
```

A tuple can contain references to mutable objects, so tuple immutability does not automatically make all nested data immutable.

### Sets

Sets hold unique hashable elements:

```python
unique_numbers = {1, 2, 2, 3}
print(unique_numbers)  # {1, 2, 3}, order not guaranteed

first = {1, 2, 3}
second = {3, 4, 5}

print(first | second)  # union
print(first & second)  # intersection
print(first - second)  # difference
```

An empty set is created with `set()`, because `{}` creates an empty dictionary.

### Dictionaries

Dictionaries map keys to values:

```python
student = {
    "name": "Asha",
    "marks": 91,
}

print(student["name"])
print(student.get("grade", "Not assigned"))
student["grade"] = "A"
```

Use `.get()` when a missing key should not raise `KeyError`. Dictionary keys must be hashable.

## 9. Functions

Functions group reusable logic:

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Yogi"))
```

### Default and keyword arguments

```python
def introduce(name, role="Developer"):
    return f"{name} is a {role}."

print(introduce("Yogi"))
print(introduce(name="Asha", role="Student"))
```

### Variable-length arguments

```python
def add_all(*numbers):
    return sum(numbers)

print(add_all(1, 2, 3, 4))
```

`*args` collects extra positional arguments into a tuple; `**kwargs` collects extra keyword arguments into a dictionary.

### Avoid mutable default arguments

Avoid:

```python
# Avoid this pattern:
# def add_item(item, items=[]):
#     items.append(item)
#     return items
```

Default values are evaluated when the function is defined. Prefer:

```python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
```

## 10. Scope and Comprehensions

Python commonly resolves names using the LEGB rule: Local, Enclosing, Global, Built-in.

```python
message = "global"

def show_message():
    message = "local"
    print(message)

show_message()
print(message)
```

### List comprehension

```python
squares = [number * number for number in range(1, 6)]
```

### Filtered comprehension

```python
even_numbers = [number for number in range(1, 11) if number % 2 == 0]
```

### Dictionary comprehension

```python
square_map = {number: number * number for number in range(1, 5)}
```

Comprehensions are concise, but use a regular loop when the logic becomes difficult to read.

## 11. Modules, Packages, and Virtual Environments

A module is a Python file that can be imported. Packages organize modules into a namespace.

Example:

```python
# math_helpers.py
def add(a, b):
    return a + b
```

Use it in another file:

```python
from math_helpers import add

print(add(3, 4))
```

Run a file directly using:

```bash
python main.py
```

### Virtual environment

Create an isolated environment for project dependencies:

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Activate it on macOS/Linux:

```bash
source .venv/bin/activate
```

Install a dependency:

```bash
python -m pip install requests
```

Record dependencies for a simple project:

```bash
python -m pip freeze > requirements.txt
```

Use a project-specific dependency strategy for larger applications, and do not commit the virtual environment directory itself.

## 12. Exceptions

Handle errors that you can reasonably recover from:

```python
try:
    number = int(input("Enter a number: "))
    print(100 / number)
except ValueError:
    print("Enter a valid integer.")
except ZeroDivisionError:
    print("The number must not be zero.")
else:
    print("Calculation completed.")
finally:
    print("Finished.")
```

- `try`: run code that might fail.
- `except`: handle matching errors.
- `else`: run when no exception occurred in the `try` block.
- `finally`: run cleanup code whether or not an exception occurred.

Raise an exception when a function receives an invalid value:

```python
def calculate_discount(price, percentage):
    if price < 0:
        raise ValueError("Price cannot be negative")
    if not 0 <= percentage <= 100:
        raise ValueError("Percentage must be between 0 and 100")
    return price * (1 - percentage / 100)
```

Avoid catching every exception without a plan. Do not hide useful debugging information during development.

## 13. File Handling and JSON

### Read and write text

```python
from pathlib import Path

path = Path("notes.txt")
path.write_text("Learn Python\nPractice daily\n", encoding="utf-8")

content = path.read_text(encoding="utf-8")
print(content)
```

For larger files, process them incrementally rather than reading everything into memory.

### JSON

JSON is commonly used to exchange data with APIs and store structured text.

```python
import json

user = {
    "name": "Yogi",
    "skills": ["HTML", "CSS", "JavaScript"],
}

json_text = json.dumps(user, indent=2)
print(json_text)

decoded = json.loads(json_text)
print(decoded["name"])
```

For files:

```python
import json
from pathlib import Path

path = Path("user.json")
path.write_text(json.dumps(user, indent=2), encoding="utf-8")
loaded_user = json.loads(path.read_text(encoding="utf-8"))
```

Use JSON for data, not for storing secrets in a publicly accessible location.

## 14. Object-Oriented Programming

Classes bundle state and behavior.

```python
class Student:
    def __init__(self, name, semester):
        self.name = name
        self.semester = semester

    def introduce(self):
        return f"I'm {self.name}, semester {self.semester}."

student = Student("Yogi", 7)
print(student.introduce())
```

- `class` defines a class.
- `__init__` initializes a new instance.
- `self` refers to the current instance.
- Instance attributes store object-specific state.
- Methods define behavior.

### Inheritance

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, I'm {self.name}."

class Developer(Person):
    def code(self):
        return "Writing code."

developer = Developer("Yogi")
print(developer.greet())
print(developer.code())
```

### Encapsulation and properties

Python uses naming conventions rather than strict private-field enforcement in the style of some other languages.

```python
class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero")
        self._celsius = value
```

### Composition

Composition means building a class using instances of other classes. It can be simpler and more flexible than deep inheritance hierarchies.

```python
class Engine:
    def start(self):
        return "Engine started"

class Car:
    def __init__(self):
        self.engine = Engine()

car = Car()
print(car.engine.start())
```

## 15. Iterators and Generators

An iterable can produce an iterator. An iterator yields values one at a time.

```python
numbers = [10, 20, 30]
iterator = iter(numbers)

print(next(iterator))
print(next(iterator))
```

A generator function uses `yield` to produce values lazily:

```python
def count_up_to(limit):
    number = 1
    while number <= limit:
        yield number
        number += 1

for number in count_up_to(3):
    print(number)
```

Generators can reduce memory use when processing large sequences because they need not create the entire result list at once.

## 16. Decorators

A decorator wraps a function or class to extend or modify behavior.

```python
from functools import wraps

def announce(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        print("Starting...")
        result = function(*args, **kwargs)
        print("Finished.")
        return result
    return wrapper

@announce
def greet(name):
    return f"Hello, {name}"

print(greet("Yogi"))
```

`@wraps` preserves useful metadata from the original function. Decorators are used for logging, timing, authorization checks, caching, and framework features. Be careful that wrappers preserve return values and handle exceptions as intended.

## 17. Type Hints

Type hints communicate intended types and help editors and static analysis tools. Python does not enforce most annotations automatically at runtime.

```python
def add(a: int, b: int) -> int:
    return a + b

def greet_all(names: list[str]) -> None:
    for name in names:
        print(f"Hello, {name}")
```

For Python versions before 3.9, generic annotations may require imports from `typing`, such as `List[str]`.

Optional values can be described with modern union syntax:

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return "Yogi"
    return None
```

Use type hints consistently in larger projects, especially at module and API boundaries.

## 18. Working with APIs

The third-party `requests` package is commonly used for HTTP requests. Install it inside your virtual environment:

```bash
python -m pip install requests
```

Example:

```python
import requests

response = requests.get(
    "https://api.github.com",
    timeout=10,
)
response.raise_for_status()

data = response.json()
print(data.keys())
```

Best practices:
- Set timeouts.
- Check HTTP status codes.
- Validate and handle response data.
- Handle network failures.
- Keep API keys in environment variables, not source code.
- Follow the API's rate limits and terms.
- Do not send private information to an endpoint unless necessary and authorized.

## 19. Testing and Debugging

### Assertions

Assertions are useful for development checks, but they can be disabled by Python optimization. Do not use them for validating untrusted production input.

```python
def add(a, b):
    return a + b

assert add(2, 3) == 5
```

### Unit tests

Using the built-in `unittest` module:

```python
import unittest

def add(a, b):
    return a + b

class AddTests(unittest.TestCase):
    def test_adds_two_numbers(self):
        self.assertEqual(add(2, 3), 5)

if __name__ == "__main__":
    unittest.main()
```

Run the file:

```bash
python test_add.py
```

Use the debugger, clear logging, and small reproducible examples to find errors. Tests should cover normal behavior, edge cases, and invalid inputs.

## 20. Useful Standard-Library Tools

### `datetime`

```python
from datetime import datetime, timezone

now = datetime.now(timezone.utc)
print(now.isoformat())
```

Use timezone-aware datetimes for timestamps that represent real-world instants.

### `collections.Counter`

```python
from collections import Counter

words = ["html", "css", "html", "javascript"]
counts = Counter(words)
print(counts)
```

### `pathlib`

`Path` provides a convenient object-oriented interface for filesystem paths.

```python
from pathlib import Path

project_files = list(Path(".").glob("*.py"))
print(project_files)
```

### `argparse`

Use `argparse` to create command-line interfaces with arguments and helpful usage messages.

### `logging`

Use the `logging` module instead of scattered `print()` statements for configurable application logs. Avoid logging passwords, access tokens, or sensitive personal data.

## 21. Best Practices and Security

- Use descriptive names and small, focused functions.
- Follow PEP 8 style conventions and keep formatting consistent.
- Create a virtual environment per project.
- Handle errors specifically and avoid silent failures.
- Use `with` statements or context managers for resources where appropriate.
- Prefer comprehensions when they improve readability, not merely to shorten code.
- Use `pathlib` for readable path operations.
- Write tests for important behavior.
- Use parameterized queries when working with databases.
- Never evaluate untrusted strings with `eval()` or execute untrusted code.
- Do not hard-code API keys, passwords, or database credentials.
- Validate external input and handle API responses as untrusted data.
- Keep dependencies updated and review what you install.
- Do not confuse Python's naming conventions with security boundaries.

## 22. Practice Projects

### Project 1: Number Guessing Game
- Generate a random target number.
- Let the player guess until they find it.
- Give higher/lower hints.
- Validate invalid input and count attempts.

### Project 2: Student Grade Manager
- Store student names and marks in dictionaries.
- Calculate averages and grades.
- Search for a student.
- Save and load data using JSON.

### Project 3: Expense Tracker
- Add expense amounts, categories, and dates.
- Show totals by category.
- Validate user input.
- Save entries to a file.

### Project 4: File Organizer
- Scan a chosen directory.
- Group files by extension.
- Preview planned moves before applying them.
- Avoid overwriting existing files and never run on important folders without a backup.

### Project 5: Weather/API CLI
- Accept a city or location argument.
- Call a documented weather API with a timeout.
- Parse and display selected fields.
- Keep credentials in environment variables if the API requires them.

### Project 6: Flask or FastAPI REST API
- Build endpoints for tasks or notes.
- Validate request data.
- Return appropriate status codes.
- Add tests and configuration through environment variables.

### Project 7: Automated Test Suite
- Choose an existing small application.
- Write tests for normal and edge cases.
- Include invalid inputs.
- Run tests automatically before merging changes.

## 23. Python Interview Questions and Answers

### Beginner

**1. What is Python?**  
Python is a high-level, general-purpose programming language with readable syntax and a large ecosystem.

**2. Is Python statically or dynamically typed?**  
Python is dynamically typed: types belong to objects, and variable names can refer to objects of different types over time.

**3. What is indentation used for?**  
Indentation defines code blocks in Python.

**4. What is the difference between a list and a tuple?**  
Lists are mutable; tuples are immutable as containers.

**5. What is a dictionary?**  
A mapping that stores key-value pairs.

**6. What is a set?**  
A collection of unique hashable elements.

**7. What is `None`?**  
A singleton object commonly used to represent the absence of a value.

**8. What is the difference between `==` and `is`?**  
`==` checks value equality; `is` checks object identity.

**9. What is a function?**  
A reusable block of code defined with `def` or, for simple expressions, a `lambda`.

**10. What does `range(1, 5)` produce?**  
An iterable sequence of integers 1, 2, 3, and 4; the stop value is excluded.

### Intermediate

**11. What is a list comprehension?**  
A concise way to construct a list by iterating over an iterable and optionally filtering values.

**12. What is a module?**  
A Python file that can define functions, classes, and other objects for reuse through imports.

**13. What is a virtual environment?**  
An isolated Python environment that helps separate dependencies for different projects.

**14. What is exception handling?**  
Using constructs such as `try` and `except` to respond to errors without abruptly terminating normal control flow.

**15. What is a generator?**  
An iterator-producing function or expression that yields values lazily.

**16. What is a decorator?**  
A callable that wraps or transforms another callable or class.

**17. What is the difference between `append()` and `extend()`?**  
`append()` adds one object to a list; `extend()` adds each item from an iterable.

**18. What is `self`?**  
The conventional name for the first parameter of an instance method, referring to the current object.

**19. What is inheritance?**  
A way for a class to derive behavior or attributes from another class.

**20. What are type hints?**  
Annotations that communicate intended types and support tooling, but usually do not enforce types at runtime.

### Advanced

**21. What is the GIL?**  
In conventional CPython builds, the Global Interpreter Lock limits how multiple threads execute Python bytecode at the same time. Details vary by implementation and build, including free-threaded builds.

**22. When would you use multiprocessing instead of threading?**  
Multiprocessing can be useful for CPU-bound parallel work; threads are often useful for I/O-bound tasks. Actual trade-offs depend on workload and platform.

**23. What is a context manager?**  
An object that manages setup and cleanup, commonly used with the `with` statement.

**24. What is a lambda function?**  
A small anonymous function limited to a single expression.

**25. What is the LEGB rule?**  
Python's common name lookup order: Local, Enclosing, Global, Built-in.

**26. Why avoid mutable default arguments?**  
Default expressions are evaluated once when the function is defined, so a mutable default can be shared across calls.

**27. What is the difference between shallow and deep copy?**  
A shallow copy creates a new outer container but can share nested objects; a deep copy recursively copies objects where supported.

**28. What is a virtual environment used for?**  
To isolate project dependencies and reduce conflicts between projects.

**29. How do you make an API request more reliable?**  
Set timeouts, check response status, handle exceptions, validate data, and follow rate limits.

**30. How can you protect secrets in a Python project?**  
Keep them outside source code, use environment variables or a secret manager, restrict access, and rotate credentials when exposed.

**31. What is PEP 8?**  
A widely used Python style guide that recommends conventions for readable code.

**32. What is `__name__ == "__main__"` used for?**  
It allows code to run only when a module is executed as the main program, rather than imported.

**33. What is a virtual method in Python?**  
Instance methods can generally be overridden in subclasses; Python uses dynamic dispatch for method calls.

**34. What is duck typing?**  
A programming style that focuses on whether an object supports the needed operations rather than requiring a specific declared type.

**35. How do you test a Python function?**  
Write automated tests for expected results, edge cases, and invalid input using `unittest`, `pytest`, or another testing framework.

## Final Learning Roadmap

1. Practice variables, conditions, loops, and functions.
2. Work with strings, lists, dictionaries, tuples, and sets.
3. Learn modules, virtual environments, and exception handling.
4. Build small file and JSON applications.
5. Understand classes, inheritance, and composition.
6. Learn comprehensions, iterators, generators, and decorators.
7. Use APIs, type hints, logging, and automated tests.
8. Build at least two complete projects and document how to run them.
9. Learn Git and basic deployment practices.
10. Review interview questions by explaining the concepts in your own words.

The best way to learn Python is to write code regularly, debug mistakes, and turn small examples into useful projects.
