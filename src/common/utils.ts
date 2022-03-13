// 高阶函数   函数作为参数
/* forEach 函数 参数是arr数组   fn是传进去的回调函数   */
function forEach(arr:number[],fn:Function):void {
    for(let i =  0 ; i< arr.length;i++){
       /* 这里对每一项进行操作 */
        fn(arr[i])
    }
}
let test:number[] = [1,3,5,7,9];

forEach(test,function(item:number){
console.log(item)
})



/* filter函数 */

function filterFn(arr:number[],fn:Function){
    let result=[];
    for(let i= 0;i< arr.length;i++){
       if(fn(arr[i])){
        result.push(arr[i]);
       }
    }
    console.log(result);
    return result
}

filterFn(test,function(item:number){
 return  item > 2
})