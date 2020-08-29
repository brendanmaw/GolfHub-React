import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Post({ profilePic, image, username, timestamp, message, course, location, par, score }) {
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
                <p>{username}'s Game Today:</p>
                <p>City, State/Prov: {location} </p>
                <p>Course/Club Name: {course} </p>
                <p>How was it? {message}</p>
                <p>Course Par: {par}</p>
                <p>Your Score: {score} </p>
                
            </div>

            <div className='post__image'>
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
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
