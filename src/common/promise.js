
// promise 的基本使用
// let p = new Promise((resolve => { }, reject => { }))
// promise 还有then方法
//promise 有3种状态 不可改变
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const FAILED = 'failed';

// promise是一个构造函数  参数是一个func   func有2个参数 resolve  reject
class Mypromise {
    constructor(exec) {
        exec(this.resolve, this.reject)
    }
    // 异步调用情况  status ==pending时  因为可以多次then  多次调用  所以 callbacl应该存储数组

    successCallback = [];//  保存成功回调的函数
    failedCallback = []; //保存失败回调的函数
    value = null;  //  保存成功后的值
    reason = null; //保存失败后的原因
    status = PENDING //状态值
    resolveParams = null; // 成功的参数
    rejectParams = null; //失败的参数
    resolve = (success) => {
        this.value = success;

        //  成功状态  变成成功
        if (this.status == PENDING) {
            // 加这一步为了状态不再次发生改变
            this.status = FULFILLED;
            this.resolveParams = success;
            // console.log(this.status,'000')
        }
        while (this.successCallback.length) {
            this.successCallback.shift()(); // shift 返回被删除的数组的第一项  也就是从前往后执行回调并且删除执行完成只后就从数组中删除原素（这里用这个方法好牛啊）
        }



    }
    reject = (failed) => {
        this.reason = failed;
        if (this.status == PENDING) {
            //  失败状态  变成失败
            this.status = FAILED;
            this.rejectParams = failed;
        }
        while (this.failedCallback.length) {
            this.failedCallback.shift()(); // shift 返回被删除的数组的第一项  也就是从前往后执行回调并且删除执行完成只后就从数组中删除原素（这里用这个方法好牛啊）
        }


    }

    then(success, failed) {
        // 防止.then()不传参数   要把结果一直传递下去
        success ? success : value => value;
        failed ? failed : reason => reason;
        //  因为then必须要返回promsie对象 这里需要新建promise 对象
        let promise2 = new Mypromise((resolve, reject) => {
            // 因为P2 是一个primose  then回调用resolve 拿到值之后又会去调用 这样回发生循环调用的情况
            if (this.status === FULFILLED) {
                //  promise 链式调用  then结果  是上一个回调函数的返回值x  并且返回的是一个promise
                // 因为这里拿不到promise2 所以用了setTimeout
                setTimeout(() => {
                    try {
                        let x = success(this.resolveParams);  //
                        //    判断x是普通数据还是promise对象
                        // 普通对象的话直接调用 promise2.resolve(X)   
                        // promise 是需要拿到promise的返回值的
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)

            } else if (this.status === FAILED) {
                // failed(this.rejectParams)
                setTimeout(() => {
                    try {
                        let x = failed(this.rejectParams);  //
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
                // 如果状态是失败 执行失败的回调 参数是reject传递过来的值
            } else {
                //  如果时异步调用 也就是pengding状态 存储callback
                this.failedCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failed(this.rejectParams);  //
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = success(this.resolveParams);  //
                            //    判断x是普通数据还是promise对象
                            // 普通对象的话直接调用 promise2.resolve(X)   
                            // promise 是需要拿到promise的返回值的
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });


            }
        })
        return promise2


    }


    static all(arg) {
        let result = [];
        let  index  = 0 ; // 判断当前完成的promise个数

      return new Mypromise((resolve, reject) => {
           function addData(key,value){
                result[key]=value;
                // 向result 里面push一次 加+1
                index++;
                if(index==arg.length){
                    resolve(result);//  如果都完成了 则reslove 结果出去  这里也牛
                }
            }
            for (let i = 0; i < arg.length; i++) {
                // 因为promise 是异步函数再遍历的时候reslut 结果还没有拿到就已经结束循环并且reslve出去了  所以需要再做一次判断
                if(arg[i] instanceof Mypromise){
                    // 如果是promise就返回结果  不是就直接返回
                    arg[i].then((res =>addData(i,res)), reject => reject('err'))
                }else {
                    addData(i,arg[i])
                }
                
            }
        });
        // return p.resolve(result);
    }

    static resolve(arg){
         if(arg instanceof Mypromise){
             return arg
         }else  {
            return new Promise((resolve,reject)=>{
                 resolve(arg);
             })
         }
    }

}


function resolvePromise(promise2, x, resolve, reject) {
    if (x == promise2) {
        return reject(new TypeError("Cycle circle...."));
    }
    // 判断x是普通数据还是promise对象  判断x是不是promise的实力  instanceof  
    if (x instanceof Mypromise) {
        //  promise 是需要拿到promise的返回值的
        x.then(resolve, reject)

    } else {
        // 普通对象的话直接调用 promise2.resolve(X)   
        resolve(x)
    }

}


let p2 = new Mypromise((resolve, reject) => {
    // reject('err');
    resolve('444')


    // 因为P2 是一个primose  then回调用resolve 拿到值之后又会去调用 这样回发生循环调用的情况
})

// p2.then().then().then(res => {
//     console.log(res, '000')
// })
//  promise 链式调用  then结果  是上一个回调函数的返回值  并且返回的是一个promise

Mypromise.all(['12',p2]).then(res=>{
    console.log(res,11111111111)
})
Mypromise.resolve(p2).then(res=>{
    console.log(res,'100')
})