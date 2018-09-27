import { FETCH_POSTS } from "./actionTypes";

export const fetchPosts=()=>{
   return (dispatch,getState)=>{
       console.log(getState());
        fetch('https://jsonplaceholder.typicode.com/posts')
           .then(res=>res.json())
           .then(data=>dispatch({
               type:FETCH_POSTS,
               payload:data
           }))
}
}

export const addPost=(data)=>dispatch=>{
    console.log(data);
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}