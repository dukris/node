## Task #13
*Basic JSON Parser with Regular Expressions*

Your task is to implement a simplified version of the JSON.parse function in JavaScript using regular expressions. This assignment will test your understanding of JSON syntax and your ability to use regular expressions for pattern matching.

### Instructions
#### Part 1: JSON Syntax Understanding

1. **JSON Syntax**: Begin by revisiting the JSON (JavaScript Object Notation) syntax. Make sure you understand the basic structure of JSON objects, arrays, strings, numbers, booleans, and null values.
2. **Parsing Rules**: Familiarize yourself with the rules for parsing JSON, including how to handle nested objects and arrays.

#### Part 2: JSON Parser Implementation

1. **Implement JSON.parse**: Create a JavaScript function called `myJSONParse` that takes a JSON-formatted string as input and returns the corresponding JavaScript object. You should use regular expressions to tokenize and parse the input string.
2. **Tokenization**: Implement tokenization by using regular expressions to identify JSON elements (objects, arrays, strings, numbers, booleans, null, etc.) in the input string.
3. **Parsing**: Implement a parsing algorithm that processes the tokens generated in the previous step and constructs the corresponding JavaScript object.
4. **Error Handling**: Ensure your implementation handles common JSON syntax errors gracefully and provides informative error messages when parsing fails.
5. **Testing**: Test your `myJSONParse` function with various JSON strings to ensure it can correctly parse them into JavaScript objects.

#### Part 3: Documentation and Reflection

1. **Documentation**: Provide clear comments and documentation in your code to explain how your `myJSONParse` function works and how you used regular expressions.
2. **Reflect**: Write a brief reflection on your experience implementing a JSON parser with regular expressions. Discuss any challenges you encountered and how you addressed them.

### Submission
Submit your JavaScript code for the `myJSONParse` function, along with any test cases you used to validate its correctness. Include the documentation and reflection as well.

### Example
Here's a simplified example structure of what your code might look like:
```javascript
function myJSONParse(jsonString) {
  // Implement JSON parsing with regular expressions...
}

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = myJSONParse(jsonString);

console.log(jsonObject); // Should output the parsed JavaScript object.
```

### Bonus Challenge
For an extra challenge, consider extending your `myJSONParse` function to handle additional JSON features, such as Unicode escapes, handling of special characters in strings, and custom revivers similar to the native `JSON.parse` function.