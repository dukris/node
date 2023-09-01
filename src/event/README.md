## Task #8
*Event Loop in Node.js*

Your task is to create a Node.js program that delves deeply into the mechanics of the event loop. You will implement various asynchronous operations, microtasks, and investigate the interactions between different phases of the event loop.

### Instructions
1. **Async Operation Manager**: Implement a class called `AsyncOperationManager`. This class should have methods for scheduling asynchronous operations with varying delay times.
2. **Event Loop Simulation**: In the `AsyncOperationManager` class, implement a method called `simulateAsyncOperation` that takes a delay time (in milliseconds) as an argument. Use `setTimeout` to simulate an asynchronous operation and log a message after the specified delay.
3. **Microtask Scheduler**: After each `simulateAsyncOperation` call, use `process.nextTick` to schedule a microtask that logs a message. Observe how microtasks are executed immediately after the completion of the current phase.
4. **Immediate Task Scheduler**: Implement a method called `scheduleImmediate` in the `AsyncOperationManager` class that uses `setImmediate` to schedule a task that logs a message. Observe the behavior of `setImmediate` in the context of the event loop.
5. **Execution Flow Analysis**: In your code comments, explain the expected execution flow of the event loop as it transitions through different phases during the execution of your asynchronous operations, microtasks, and tasks scheduled with `setImmediate`.

### Submission
Submit your Node.js program in a file along with comments that provide a detailed explanation of each part of the code. Your comments should describe the event loop's behavior, the order of execution, and the role of microtasks and `setImmediate`.

### Example
For example, your code might look like this:
```javascript
class AsyncOperationManager {
  simulateAsyncOperation(delay) {
    setTimeout(() => {
      console.log(`Async operation completed after ${delay} ms`);
    }, delay);
  }

  scheduleImmediate() {
    setImmediate(() => {
      console.log("Immediate task executed");
    });
  }

  // Implement process.nextTick scheduling and event loop interactions
}

const manager = new AsyncOperationManager();
manager.simulateAsyncOperation(200);
process.nextTick(() => {
  console.log("Microtask executed immediately");
});
manager.scheduleImmediate();
```

### Bonus
Create a scenario where multiple microtasks and immediate tasks are scheduled within different phases of the event loop. Analyze the execution order and provide insights into how the event loop manages these tasks.