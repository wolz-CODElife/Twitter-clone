import React from 'react'
import './css/PostLists.css'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Post from './components/Post';
import NewPost from './components/NewPost';

const PostList = () => {
    var pageTitle = window.location.pathname.split('/')[1]
    return (
        <div className="postlists">
            <div className="postlists_header">
                <h3>{pageTitle}</h3>
                <StarOutlineIcon />
            </div>
            <div className="postlists_body">
                <NewPost />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default PostList
