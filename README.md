<!--
Creator: Ilias Tsangaris
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Functions and Scope

#### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

**Functions** endow JavaScript with behavior. This aspect of JavaScript is what allows us to **encapsulate** behavior and **abstract** away it's logic. **Scope** is a key concept to understanding how functions work.

#### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- Describe why functions are created
- Use functions to break programs into smaller sub-programs
- Describe how parameters relate to functions
- Explain what scope
- Compare global and local scope
- Describe the `this` keyword and how it is affected by scope
- Discuss the difference between public and private scope

#### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- Write basic JavaScript
- Use a text editor
- Use basic JavaScript types and declare variables

## Keep your code DRY using Functions

A function is a statement or a group of statements that can be called anywhere in the program so that the statements inside the function do not need to be written over and over again.

When writing functions in JavaScript, think of functions as an object, like a string or a number - this means that functions can be passed to other functions as an argument and can be used just like any other object we've been working with.

Functions are essential to write JavaScript and keep the code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), semantic, and modular.


## Defining & Calling Functions
#### Defining Functions

A function can be defined using two different syntaxes. For example, we can define a function `add` that receives two arguments, in either of the following ways:

```javascript
// function declaration
var add = function(a,b) {
  return a + b;
}

// named function (preferred)
function add(a,b) {
  return a + b;
}
```

<details>
<summary>**What's the difference?** (Click Here)</summary>
The difference is subtle but important. The first function declaration is assigning an "anonymous" function to a variable. The second function declaration is a named function. The practical difference is that the named function will be processed when the code is interpreted, so the function can be called *before* it's defined. This is due to [variable hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting), the first `speak` variable is hoisted up as `undefined`, while the second is hoisted up as a `function`.
</details>

No matter what syntax you use, we can identify the following components of functions:

- A *name*
- A *parameter list* wrapped in parantheses (i.e. placeholders/slots that accept inputs)
- A *code block* wrapped in curly braces. This code is executed every time the function is called.
- A `return` statement.


####A Note on Naming
When naming Javascript functions, it is best practice to use "camelCase" for multi-word function names. This helps improve readability.

**Bad Naming Convention:**
* `Squarethesenumbers()`
* `CONVERTTOBINARY()`
* `pythagoreantheorem()`
 
**Good Naming Convention:**
* `hexToBinary()`
* `determineRootVariant()`
* `deployPhaserTorpedos()`

#### Calling Functions

Calling a function will execute the code defined inside this function.

Defining and calling a function is different - a function will not be called when it's defined.

You call a function by using parenthesis after the function's name `()`:


```javascript
function hello() {
  return "hello there";
}

hello();

=> "hello there"
```

**Code Demo**: [What Do I Return?](/examples/what-do-i-return.js)

## Arguments and Parameters
You can think of a function as having an "interface" or "contract" with the outside world. A function expects its inputs to be of a certain form (data type) and in a specific order. Our funcrtions can be thought of as having "placeholders" or "slots" that can dynamically hold values.

There is a subtle but important difference between an "argument" and "parameter":
* Parameters -- general slots or placeholders for inputs, in a specific order.
* Arguments -- the actual values passed into a function.

#### What happens when we break contract?
* No inputs?
* Too few inputs?
* Too many inputs?

**Code Demo**: [Playing with Arguments](/examples/playing-with-arguments.js)

## The Terminology of Scope

There are different terminologies to talk about scope in Javascript. If you read about `(function|global|lexical|public/private)scope` or **closure** or **namespace**, all these keywords are referring to the concept of **scope**.

#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. If we declare a variable, it's defined globally:

```javascript
name //=> Uncaught ReferenceError: name is not defined

// ok, let's define it!
var name = 'Gerry';
name         //=> 'Gerry'
window.name; //=> 'Gerry'
this.name;   //=> 'Gerry'
```

Global scope can be really confusing when you run into namespace clashes. You won't want to use global scoping for all your variables, as using global scope the right way is quite complex, but every Javascript program uses the global scope in one way or another.

#### Local Scope

Local scope refers to any scope that is defined right past the global one. If you define a function, this function will have its own scope inside the body of the function. Any function defined inside another function has a also a local scope and can refer to the parent scope, but this logic doesn't work the other way around.

#### Function scope - can't get inside!

A variable defined inside a function *cannot* be accessed outside the function, this is the scope function:

```javascript
var a = "this is the global scope";
function myFunction() {
  var b = "this variable is defined in the local scope";
}
myFunction();
b //=> Uncaught ReferenceError: b is not defined
```

This will throw a reference error because the variable `b` is not accessible outside of the scope if the function where it is defined.

#### Accessing variables in the same scope

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables of the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.

```javascript
// Global Scope
var a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
  return a + " " + name;
}

sayHello("WDI"); //=> "Hello WDI";
```

**Code Demo**: [Playing with Scope](/examples/playing-with-scope.js)

#### `this`

A function's `this` keyword is always referring to the current **context**. It is a reserved word in the language.

**`this` in the Global context**

In the global scope, this refers to the global object:

```javascript
this === window
=> true

this.document === document
=> true

this.aValue = "WDI";
=> "WDI"
window.aValue;
=> "WDI"
```

**`this` in the context of methods**

When a function is part of an object, `this` refers to the object itself:

```javascript
var wdi = {
  name: "WDI",
  whatsTheName: function() {
    return this.name;
  }
}

wdi.whatsTheName();
=> "WDI"
```

> Note: When a function is attached to an object we called that function a "method". In the above case, `whatsTheName` is a `wdi` object method.

## Callback Functions

Because we *name* our functions, we can pass functions around our programs just like we would any other variable. We can even pass a function *into a function* as an argument.

```javascript
function shout(text) {
  return text.toUpperCase();
}

function perform(lyric, style) {
  return style(lyric);
}

perform("In the jungle, the mighty jungle", shout);
//=> "IN THE JUNGLE, THE MIGHTY JUNGLE"
```

In future lessons we will see how this trick (known as the "callback pattern") helps make our programs extremely flexible.

## Conclusion

The only way to master JavaScript scope is to practice. You'll have a lot of confusing errors with the JavaScript you write at the beginning of your journey into programming! This will force you to name variables and functions the right way to make sure there is no conflict.

- Describe a function.
- Explain what happens before JavaScript code is executed.
- Explain the difference between local and global scope.

For more details about functions and scope [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
