# MafiosoScript

MafiosoScript is a programming language that combines the syntax of JavaScript with the fast-talking, slang-filled style of a Chicago mob boss.

## Basics

### Variables

In MafiosoScript, all variables must be declared with the made man keyword. For example:

```
made man kek = "operation";
made man foo = 123;
```

### Functions

Functions are declared using the operation keyword. For example:

```
operation add(a, b) {
  return a + b;
}
```

### Loops

Loops are created using the hit keyword. For example:

```
operation main() {
  made man arr = [1, 2, 3];
  hit i in arr {
    console.log(arr[i]);
  }
}
```

### Conditionals

Conditionals are created using the if keyword. For example:

```
operation main() {
  made man foo = 123;
  if (foo == 123) {
    console.log("kek");
  }
}
```

### Strings

Strings are defined using double quotes ("). For example:

```
made man foo = "hello";
```

## Examples

Here is a simple example that prints "Hello World!" to the console:

```
operation main() {
  console.log("Hello World!");
}
```

Here is a more advanced example that calculates the Fibonacci sequence up to the specified number of iterations:

```
operation fibonacci(n) {
  made man output = [0, 1];
  hit i in Array.from({ length: n - 1 }) {
    output.push(output[i] + output[i + 1]);
  }
  return output;
}

operation main() {
  console.log(fibonacci(10));
}
```
