import React,{Component} from 'react'
import HocComp from '../hoc/HOC'

@HocComp
class Hello extends Component{
    render(){
        return <div>
                <h1 className='box'>我是你好</h1>
         </div>
    }
}
export default Hello

// export default function Hello(){
//     return <div>
//         <h1 className='box'>我是你好</h1>
//     </div>
// }