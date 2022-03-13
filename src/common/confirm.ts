
interface Config  {
    message:string,
    delay?:number,
    icon?:string
}
export default  class Confirm {
    message:string
    delay?:number
    icon?:string
    constructor(config:Config){
        this.message= config.message;
        this.delay= config.delay;
        this.icon = config.icon;
    }
    show(){
        let mask  = document.createElement('div');
        mask.setAttribute('class','mask-loading');
        let box  =  document.createElement('div');
        box.setAttribute('class','mask-box');
        box.innerHTML =  `
        <div>${this.message}</div>
        <div><el-button type='primary'>确定</el-button></div>
        `
        mask.appendChild(box);
        document.documentElement.appendChild(mask);
    }
    msgSuccess(){
        
    }

}