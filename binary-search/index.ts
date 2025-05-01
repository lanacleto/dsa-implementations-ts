export default function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const array1: number[] = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearch(array1, 23));
console.log(binarySearch(array1, 8));
console.log(binarySearch(array1, 91));
console.log(binarySearch(array1, 2));
console.log(binarySearch(array1, 1));
