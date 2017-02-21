import React from 'react';
export default class Example extends React.Component {
    render(){
        let obj = [{name:'abc',age:23}
        ,{name:'per',age:21}]; 
        let obj1 = obj.map(function(item, index)
       {
            return (<div key={index}><li>name : {item.name}</li>
            <li>age:{item.age}</li>
            </div>);
        
        }); 
       //console.log(obj1)
        return (<ul>{obj1}</ul>);   
    }   
}