// bubble sort algorithm in ascending order

function bubbleSortAsc(arr) {
    let n = arr.length;
    for(let i=0; i<n; i++){
        for(let j =0; j< n -i -1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

// bubble sort algorithm in descending order
const bubbleSortDsc = (arr) => {
    let n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

let array = [10,14,23,17,32,12,10];
console.log(bubbleSortAsc(array));
console.log(bubbleSortDsc(array));
