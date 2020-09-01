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
    const [{ user }] = useStateValue();
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
            course: courseName,
            location: location,
            par: par,
            score: score,
            image: imageUrl
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
                    <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter City + Province/State"/>
                    
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>

            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <ExposureIcon style={{ color : "#67f494" }} />
                    <input type="number" min="0" max="200000000000" value={par} onChange={(e) => setPar(e.target.value)}  placeholder="Enter Course Par"/>
                </div>

                <div className="messageSender__option">
                    <CreateIcon style={{ color : "#67f494" }} />
                    <input type="number" min="18" max="20000000000" value={score} onChange={(e) => setScore(e.target.value)} placeholder="Enter Your Score"/>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color : "#67f494" }} />                                          
                    <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL (Optional)"/>                    
                </div>
            </div>           
        </div>
    )
}

export default MessageSender
