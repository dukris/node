## NodeJS

**Task #1 (arithmetic)**

Perform arithmetic operations on strings without relying on bigint or arithmetic libraries. The operations should function as string functions, considering only positive integers (you can avoid negative numbers, all numbers will be positive and integer).

**Task #2 ([conversion](https://github.com/hizmailovich/conversion))**

Create a JavaScript library that provides advanced data transformation functions. The library should include the following features:
1. *addValues* - accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments. The function should return the result of the addition. If the addition is not possible, it should throw an error.
2. *stringifyValue* - accepts a single argument of any type and converts it to a string representation. For objects and arrays, use JSON.stringify() for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.
3. *invertBoolean* - accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it should throw an error. 
4. *convertToNumber* - accepts a single argument of any type and attempts to convert it to a number. For strings, use parseFloat() or parseInt() for conversion. For other types, use appropriate operations or functions to perform the conversion. If the conversion is not possible, it should throw an error. 
5. *coerceToType* - accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.
