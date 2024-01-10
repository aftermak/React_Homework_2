import React from 'react'

export default function List({list=[]}) {
    setTimeout(() => {
        list.push('tiger');
        console.log(list);
    }, 2000)

  return  list.length ? <ul>
    {
        list.map((item,index) => <li key={index}>{item}</li>)
    }
  </ul> : null
  
}
