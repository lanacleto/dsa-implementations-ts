# Binary Search

## 📝 Problem Description

Binary Search is an efficient algorithm for finding a specific target value within a **pre-sorted** array.

## 📥 Input & Output

* **Input:**
    * `sortedArray: T[]`: An array of elements that is already sorted (where `T` could be `number`, `string`, etc., as long as comparison is possible).
    * `target: T`: The value to search for within the array.
* **Output:**
    * `number`: The index (position) of the `target` within the `sortedArray` if it is found.
    * `-1` (or `null`, depending on your implementation): If the `target` is not present in the array.

## 💡 Core Idea / Logic

The algorithm works by repeatedly dividing the search interval in half.

1.  Start with the entire sorted array as the search interval.
2.  Compare the `target` value with the middle element of the current interval.
3.  * If the `target` matches the middle element, the search is successful, and its index is returned.
4.  * If the `target` is less than the middle element, the search interval is narrowed to the **left half**.
5.  * If the `target` is greater than the middle element, the search interval is narrowed to the **right half**.
6.  Steps 2 through 5 are repeated until the `target` is found or the search interval becomes empty (indicating the `target` does not exist in the array).

This "divide and conquer" approach significantly reduces the number of comparisons needed.

## 📈 Complexity Analysis

* **Time Complexity:**
    * Best Case: <span class="math-inline">O\(1\)</span> - The target is found in the first comparison (it's the middle element).
    * Average Case: <span class="math-inline">O\(\\log n\)</span> - On average, the search space is halved with each step.
    * Worst Case: <span class="math-inline">O\(\\log n\)</span> - The target is found at the last step, or not found at all after exhausting the search space.
* **Space Complexity:**
    * <span class="math-inline">O\(1\)</span> - For the **iterative** implementation (uses a constant amount of extra memory for pointers/indices).
    * <span class="math-inline">O\(\\log n\)</span> - For a typical **recursive** implementation (due to the function call stack depth). *(Assuming this implementation is iterative unless otherwise noted)*.

## ✨ Implementation Notes (Optional)

* This implementation assumes the input array `sortedArray` is already sorted in ascending order.
* *(Add specific notes about your `index.ts` code here, e.g., how it handles empty arrays or the exact return value for 'not found')*

## 🚀 Usage Example (Optional)

```typescript
// Assuming your function in index.ts is exported like:
// export function binarySearch(sortedArray: number[], target: number): number { ... }

import { binarySearch } from './index';

const sortedNumbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetToFind = 23;
const targetNotFound = 40;

const foundIndex = binarySearch(sortedNumbers, targetToFind);
console.log(`Target ${targetToFind} found at index: ${foundIndex}`); // Output: Target 23 found at index: 5

const notFoundIndex = binarySearch(sortedNumbers, targetNotFound);
console.log(`Target ${targetNotFound} found at index: ${notFoundIndex}`); // Output: Target 40 found at index: -1 (or null)
