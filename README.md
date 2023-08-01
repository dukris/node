## NodeJS

### Content
- [Task #1](#task1)
- [Task #2](#task2)
- [Task #3](#task3)
- [Task #4](#task4)

<a id="task1"></a>
#### Task #1 (arithmetic)

Perform arithmetic operations on strings without relying on bigint or arithmetic libraries. The operations should function as string functions, considering only positive integers (you can avoid negative numbers, all numbers will be positive and integer).

<a id="task2"></a>
#### Task #2 ([conversion](https://github.com/hizmailovich/conversion))

Create a JavaScript library that provides advanced data transformation functions. The library should include the following features:
1. `addValues` - accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments. The function should return the result of the addition. If the addition is not possible, it should throw an error.
2. `stringifyValue` - accepts a single argument of any type and converts it to a string representation. For objects and arrays, use JSON.stringify() for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.
3. `invertBoolean` - accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it should throw an error. 
4. `convertToNumber` - accepts a single argument of any type and attempts to convert it to a number. For strings, use parseFloat() or parseInt() for conversion. For other types, use appropriate operations or functions to perform the conversion. If the conversion is not possible, it should throw an error. 
5. `coerceToType` - accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.

<a id="task3"></a>
#### Task #3 (functions)

*Immutability and Pure Functions:*
1. Implement a pure function called `calculateDiscountedPrice` that takes an array of products and a discount percentage as arguments. The function should return a new array of products with discounted prices based on the given percentage, without modifying the original products.
2. Create a pure function called `calculateTotalPrice` that takes an array of products as an argument. The function should return the total price of all products, without modifying the original array or its items.

*Function Composition and Point-Free Style:*
1. Implement a function called `getFullName` that takes a person object with `firstName` and `lastName` properties. The function should return the person's full name in the format "FirstName LastName".
2. Create a function called `filterUniqueWords` that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. Use function composition and point-free style.
3. Implement a function called `getAverageGrade` that takes an array of student objects, each containing a `name` and `grades` property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.

*Closures and Higher-Order Functions:*
1. Create a function called `createCounter` that returns a closure. The closure should be a counter function that increments the count on each call and returns the updated count. Each closure should have its own independent count.
2. Implement a higher-order function called `repeatFunction` that takes a function and a number as arguments. The function should return a new function that invokes the original function multiple times based on the provided number. If the number is negative, the new function should invoke the original function indefinitely until stopped.

*Recursion and Tail Call Optimization:*
1. Implement a recursive function called `calculateFactorial` that calculates the factorial of a given number. Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.
2. Create a recursive function called `power` that takes a base and an exponent as arguments. The function should calculate the power of the base to the exponent using recursion.

*Lazy Evaluation and Generators:*
1. Implement a lazy evaluation function called `lazyMap` that takes an array and a mapping function. The function should return a lazy generator that applies the mapping function to each element of the array one at a time.
2. Create a lazy generator function called `fibonacciGenerator` that generates Fibonacci numbers one at a time using lazy evaluation.

<a id="task4"></a>
#### Task #4 (objects)

*Object Property Manipulation*

1. Create an object called person with the following properties and values:
```
firstName: "John"
lastName: "Doe"
age: 30
email: "john.doe@example.com"
```
2. Use property descriptors to make all properties of the person object read-only and non-writable, so their values cannot be changed directly.

3. Implement a method called `updateInfo` on the person object that takes a new info object as an argument. The info object should contain updated values for any of the properties (e.g., { firstName: "Jane", age: 32 }). Ensure that this method adheres to the read-only property descriptor set earlier.

4. Create a new property called `address` on the person object with an initial value of an empty object. Make this property non-enumerable and non-configurable.

*Object Property Enumeration and Deletion*

1. Create a new object called `product` with the following properties and values:
```
name: "Laptop"
price: 1000
quantity: 5
```
2. Use property descriptors to make the `price` and `quantity` properties non-enumerable and non-writable.

3. Implement a function called `getTotalPrice` that takes the product object as an argument and returns the total price (calculated as price * quantity). Ensure that the function accesses the non-enumerable properties directly using the `Object.getOwnPropertyDescriptor` method.

4. Implement a function called `deleteNonConfigurable` that takes an object and a property name as arguments. The function should delete the specified property from the object if it exists. If the property is non-configurable, throw an error with an appropriate message.

*Object Property Getters and Setters*

1. Create an object called `bankAccount` with the following properties and values:
```
balance: 1000 (default value)
```
2. Use a getter to define a property called `formattedBalance`, which returns the balance with a currency symbol (e.g., "$1000").

3. Use a setter to define a property called `balance`, which updates the account balance and automatically updates the corresponding formattedBalance value.

4. Implement a method called `transfer` on the bankAccount object that takes two bankAccount objects and an amount as arguments. The method should transfer the specified amount from the current account to the target account. Ensure that the `balance` and `formattedBalance` properties of both accounts are updated correctly.

*Advanced Property Descriptors*

1. Implement a function called `createImmutableObject` that takes an object as an argument and returns a new object with all its properties made read-only and non-writable using property descriptors. The function should handle nested objects and arrays recursively.

2. Use the `createImmutableObject` function to create an immutable version of the person object from Task 1.

*Object Observation*

1. Implement a function called `observeObject` that takes an object and a callback function as arguments. The function should return a proxy object that wraps the original object and invokes the callback function whenever any property of the object is accessed or modified.

2. Use the `observeObject` function to create a proxy for the person object from Task 1. The callback function should log the property name and the action (get or set) performed on the object.

*Object Deep Cloning*

1. Implement a function called `deepCloneObject` that takes an object as an argument and returns a deep copy of the object. The function should handle circular references and complex nested structures. Do not use JSON methods.

*Object Property Validation*

1. Implement a function called `validateObject` that takes an object and a validation schema as arguments. The schema should define the required properties, their types, and any additional validation rules. The function should return true if the object matches the schema, and false otherwise. You can choose any schema you want.