//高阶组件测试
import React, { Component } from 'react'

export default function HocComp(Comp){

    return class Cookie extends Component{
        fn=() => {
           console.log(12123); 
        }
        
        render(){
            return <Comp fn={this.fn}></Comp>
        }
    }
}