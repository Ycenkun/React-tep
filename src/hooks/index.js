//数据请求时对于携带的字符串是个对象的时候进行的处理
export function useParams(strObj,ignore){

    if (Object.prototype.toString.call(obj) == "[object Object]") {
        let str = '';
        const keyval = Object.keys(strObj)
        keyval.filter(item=>item!==ignore).map(item=>
            str += item+'='+strObj[item]+'&'      
        )
        return str.slice(0,-1)
    }    
}
