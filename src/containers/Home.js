import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../action/postActions';
import PostList from '../components/PostList';
import Header from '../components/Header';

class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    
  render() {
    return (
      <div>
          <Header/>
        Home container
        <PostList posts={this.props.items   }/>
      </div>
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
    return {
        items: state.posts.items
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPosts: () =>  dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
