//  同步模式 ==》 任务阻塞=》 解决  =》 异步任务
// 调用栈
// 异步模式
// 单线程   异步 
// 先执行调用站的任务  执行完后 会用事件循环调用队列里面的异步任务
// Js 是单线程   浏览器不是单线程 、

function axiosFn(config) {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.open(config.methods, config.url, true);
        xhr.onload = function () {
            if (xhr.status == 200 && xhr.readyState == 400) {
                resolve(1212)
            }
        }
        xhr.send();

    }, reject=>{
        throw new Error(reject)
    })


}
axiosFn({
    methods:'GET',
    url:'/post/test'
}).then(res=>{
    console.log(res,'ttt');
},err=>{
    console.log(err,)
})

// 宏任务：回调会回到队伍的末尾排队 
// 微任务:当前任务再本轮调用的末尾执行不会再队列重新排队
// generator
function* main() {
    yield new Promise((resolve) => {
        resolve('test')
    })
    yield new Promise((resolve) => {
        resolve('test1')
    })
    yield new Promise((resolve) => {
        resolve('test12')
    })
}

let g = main();
let result = g.next();

// 生成器得到的结果放在vaule中

let pthen = result.value.then(res => {
    let p1 = g.next(11);
    let p2 = g.next(22);
    let p3 = g.next(33);
    let p4 = g.next(44);
    // console.log(p1,p2,p3,p4)

})


function* testGenerator(a) {
    console.log('a');
    yield ++a; 
  
    console.log('b');
    yield ++a;
      
    console.log('c');
    return ++a;	
    console.log('d');
  }
  
  var gener = testGenerator(5);	// 函数里的log并没有输出，所以函数并没有执行，
  var gener2 = testGenerator(1);	// gener 和 gener2 之间互不印象，
  
  console.log(gener,'gener');	// testGenerator{<suspended>}   (generator对象), 说明返回的是一个对象
  
  var yield1 = gener.next();	// a  (输出了一个a，第一个yield前的log执行了)
  console.log(yield1);  // {value: 6, done: false} 	next函数返回的是一个 包含值和状态的 对象
//   console.log(yield1.value);	// 6	(value是yield的返回的值)
//   console.log(yield1.done);	// false	(done是yield的返回状态，false代表目前处于暂停状态，还没执行完)
  
  
  var yield2 = gener.next();  // b  (输出一个b，可见函数是接着第一个yield后面的代码继续执行的，到第二个yield停止)
  console.log(yield2);  // {value: 7, done: false}
  console.log(yield2.value);  // 7	(第二次返回了7，说明此时的变量值是接着 第一个yield的 变量值(此时a=6)使用的)
  console.log(yield2.done);  // false	()
  
  var yield3 = gener.next();  // c  (输出一个c，可见函数是接着第二个yield后面的代码继续执行的，到return停止)
  console.log(yield3);  // {value: 8, done: true}
  console.log(yield3.value);  // 8
  console.log(yield3.done);  // true
  
  var yield4 = gener.next();  // (没有输出，说明执行的renturn之后不会再往下执行)
  console.log(yield4);  // {value: undefined, done: true}  (执行完return，以后再 next() 返回的都是 undefind)
  

function* testNext() {
    var a = 1;
    var b = yield ++a;
    console.log(b);
  
    var c = yield ++a;
    console.log(c);
  
    return ++a;
  }
  
  var gener3 = testNext();
  
  // var v1 = gener3.next(3);  // 第一次执行next的时候传值，由于此时并没有 上一个 yield 的值，所以此时传值不起作用
  
  var v1 = gener3.next();  // (没有输出 语句：var b = yield ++a;  先执行等号右边的运算，此时执行到 yield ++a, 返回++a(2) 逻辑暂停，即此时 b并没有附上值。)
  console.log(v1);  // {value: 2, done: false}
  
  var v2 = gener3.next(6);  // 6	执行第二个next，此时，有传参，先将上一个 yield 的值(++a  2) 替换为 参数6，然后接着执行语句，给b赋值， 所以此时 b = 6
  console.log(v2);  // {value: 3, done: false}   第一个yield执行完，a的值为2， 所以第二个 yield 返回 ++a  时候，返回值为3
  
  var v3 = gener3.next(10);  // 10
  console.log(v3);  // {value: 4, done: true},   同上
  

  Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
