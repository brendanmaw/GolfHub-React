import React, { useState } from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';





function Post({ profilePic, image, username, timestamp, course, location, par, score,}) {
    const [likes, setLikes] = useState(0);  
    return (    
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className="post_avatar"  />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div> 

            <div className ="post__bottom">
                <h4>{username}'s Game Today:</h4>
                <br></br>
                <p><span className="green">Location:</span> {location}  <span className="green">Course Name:</span> {course}</p>                              
                <p><span className="green">Course Par:</span> {par}  <span className="green">Your Score:</span> {score} </p>
                                                          
            </div>

            <div className='post__image'>
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
    <button onClick={() => setLikes(likes+1)}>Like: {likes}</button>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>                    
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />                   
                </div>
            </div>          
        </div>
    )
}

export default Post
