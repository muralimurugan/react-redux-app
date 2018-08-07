import React, { Component } from 'react'

export default class PostList extends Component {
  render() {
      const {posts}=this.props;
    return (
      <div>
        {
            posts.map((data)=>(
                <div key={data.id}>
                <h2>{data.title}</h2>
               <p>
                   {data.body}
                   </p>
                    </div>
            ))
        }
      </div>
    )
  }
}
