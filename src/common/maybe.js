  // 函子



class Maybe{
    // 构造函数的静态方法
     static of(value){
         return new Maybe(value)
     }
     // 构造函数
     constructor(value){
         this.value= value
     }
    //  链式调用
     map(fn){
         return Maybe.of(fn(this.value))
     }
}

let x  =  Maybe.of('str').map(x=>x.toLocaleUpperCase());
console.log(x,'0000');
