## Task #7
*Analyzing Sorting Algorithm Performance*

Your task is to analyze the performance of three sorting algorithms: QuickSort, BubbleSort, and Merge Sort. You will determine the array length at which QuickSort and Merge Sort start to outperform BubbleSort consistently. You are required to implement the sorting algorithms on your own.

### Instructions
1. Implement the QuickSort, BubbleSort, and Merge Sort algorithms from scratch.
2. Create three types of arrays for testing the sorting algorithms:
    - **Sorted Array:** An array with elements in ascending order.
    - **Sorted Backward Array:** An array with elements in descending order.
    - **Random Array:** An array with elements placed randomly.
3. Start with arrays containing 2 elements and gradually increase the number of elements.
4. Measure the execution time of each sorting algorithm for each type of array and different array lengths.
5. Determine the length of the array at which QuickSort and Merge Sort start to consistently outperform BubbleSort. Record these lengths.
6. Run the sorting tests multiple times using different random placements of elements to ensure consistent results.
7. Once you've found the results, run the tests for a few more array lengths to observe how the time complexity of BubbleSort compares to QuickSort and Merge Sort.

### Submission
Prepare a report that includes:
- Your implementations of QuickSort, BubbleSort, and Merge Sort.
- The process you followed to determine the lengths at which QuickSort and Merge Sort become faster than BubbleSort.
- A table or graph showing the array length and execution time for each sorting algorithm.
- Your conclusions and observations about the performance of the three sorting algorithms.

### Example
For example, your report might include:
```
Results for Sorting Algorithm Performance Analysis

Array Length | QuickSort Time | BubbleSort Time | Merge Sort Time
---------------------------------------------------------------
2            | 0.002 ms       | 0.004 ms       | 0.003 ms
5            | 0.005 ms       | 0.020 ms       | 0.008 ms
10           | 0.010 ms       | 0.100 ms       | 0.015 ms
...

```

### Bonus
Analyze and explain why QuickSort and Merge Sort are generally faster than BubbleSort, considering the time complexity of all three algorithms.