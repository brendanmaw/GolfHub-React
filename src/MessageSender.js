import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import ExposureIcon from '@material-ui/icons/Exposure';
import CreateIcon from '@material-ui/icons/Create';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [courseName, setCourse] = useState('');
    const [location, setLocation] = useState('');
    const [par, setPar] = useState('');    
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [score, setScore] = useState('')
    


    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            course: courseName,
            location: location,
            par: par,
            score: score
        });
        setInput("");
        setCourse("");
        setLocation("");
        setPar("");
        setScore("");


    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={courseName} onChange={(e) => setCourse(e.target.value)} className="messageSender__input" placeholder={`What course did you play today, ${user.displayName}?`}/>
                    <input value={location} onChange={(e) => setLocation(e.target.value)} placeHolder="Enter City + Province/State"/>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeHolder="How was the round?"/>

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>

            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <ExposureIcon style={{ color : "#67f494" }} />
                    <input value={par} onChange={(e) => setPar(e.target.value)}  placeHolder="Enter Course Par"/>
                </div>

                <div className="messageSender__option">
                    <CreateIcon style={{ color : "#67f494" }} />
                    <input value={score} onChange={(e) => setScore(e.target.value)} placeHolder="Enter Your Score"/>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color : "#67f494" }} />
                    <h3>(Optional) Share a Photo/Video</h3>
                </div>
            </div>           
        </div>
    )
}

export default MessageSender
