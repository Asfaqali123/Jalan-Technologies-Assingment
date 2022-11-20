let arr = [ 1, 3, 2, 7, 4, 6 ];
let n = arr.length;
let d = 3; 
Rotate_and_Print(arr, d, n);

function Rotate_and_Print(arr,d,n)
 {
     
     var temp=new Array(n);
     let k = 0;

    for (let i = d; i < n; i++) {
        temp[k] = arr[i];
        k++;
    }

    for (let i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }
 
    for (let i = 0; i < n; i++) {
        console.log(temp[i]+" ");
    }
 }
 

 