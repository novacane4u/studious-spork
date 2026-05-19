module.exports = [
  {
    title: 'Java Basics and Classes',
    language: 'Java',
    keywords: ['java', 'class', 'main', 'method', 'system.out', 'println', 'string', 'object', 'new'],
    tags: ['java', 'class', 'method', 'object', 'hello', 'println'],
    answer: 'Java is an object-oriented language. A class defines a blueprint, and the main method is the entry point for a Java program. Use System.out.println() to print text, and create objects with new ClassName().',
    example: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, Java learner!");\n  }\n}',
    help: 'Use classes to group related behavior and keep methods small. Start with one class, then add more as your program grows.',
    training: true,
    challenge: 'Write a Java class named Calculator with a method add(int a, int b) that returns the sum.',
    solution: 'public class Calculator {\n  public int add(int a, int b) {\n    return a + b;\n  }\n}'
  },
  {
    title: 'Java Object-Oriented Concepts',
    language: 'Java',
    keywords: ['inheritance', 'interface', 'implements', 'extends', 'polymorphism', 'encapsulation'],
    tags: ['inheritance', 'interface', 'extends', 'implements', 'polymorphism'],
    answer: 'Java uses classes, inheritance, interfaces, and encapsulation. Inheritance lets one class reuse another class implementation, while interfaces define required methods without implementation.',
    example: 'public interface Animal {\n  void speak();\n}\npublic class Dog implements Animal {\n  public void speak() {\n    System.out.println("Woof!");\n  }\n}',
    help: 'Favor small interfaces and simple class hierarchies. When you need shared behavior, use inheritance or composition carefully.',
    training: false
  },
  {
    title: 'Python Syntax and Functions',
    language: 'Python',
    keywords: ['python', 'def', 'function', 'list', 'dictionary', 'loop', 'indentation', 'import', 'class'],
    tags: ['python', 'function', 'list', 'dict', 'for', 'while'],
    answer: 'Python uses indentation to define blocks and is dynamically typed. Functions start with def, and lists and dictionaries are common built-in containers.',
    example: 'def greet(name):\n  return f"Hello, {name}!"\n\nprint(greet("Python learner"))',
    help: 'Keep indentation consistent and use meaningful variable names. Python is readable, so prefer simple expressions and built-in types.',
    training: true,
    challenge: 'Write a Python function called multiply that returns the product of two numbers.',
    solution: 'def multiply(a, b):\n    return a * b'
  },
  {
    title: 'JavaScript Web and Logic',
    language: 'JavaScript',
    keywords: ['javascript', 'function', 'const', 'let', 'async', 'promise', 'array', 'object', 'json'],
    tags: ['javascript', 'function', 'const', 'let', 'array', 'object'],
    answer: 'JavaScript is widely used for web development. Use const and let for variable declarations, functions for reusable logic, and objects or arrays for structured data.',
    example: 'const message = "Hello from JavaScript";\nfunction greet(name) {\n  return `${message}, ${name}!`;\n}\nconsole.log(greet("developer"));',
    help: 'Use const for values that do not change and let for variables that do. Prefer small functions and avoid deep nesting.',
    training: true,
    challenge: 'Create a JavaScript function square that returns the square of a number.',
    solution: 'function square(x) {\n  return x * x;\n}'
  },
  {
    title: 'General Coding Practices',
    language: 'General',
    keywords: ['debug', 'algorithm', 'problem solving', 'best practice', 'testing', 'practice', 'learn'],
    tags: ['debug', 'test', 'algorithm', 'practice'],
    answer: 'Good coding starts with clear problem statements, choosing the right data structures, and writing tests. Break problems into smaller steps and practice often.',
    example: '1. Read the problem\n2. Write sample input and output\n3. Implement the smallest working version\n4. Test and iterate',
    help: 'When stuck, simplify the problem. Draw diagrams, write pseudocode, and ask for one small part of the solution at a time.',
    training: false
  }
];
