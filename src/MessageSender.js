import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import ExposureIcon from '@material-ui/icons/Exposure';
import CreateIcon from '@material-ui/icons/Create';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';


function MessageSender() {
    const [courseName, setCourse] = useState('');
    const [location, setLocation] = useState('');
    const [par, setPar] = useState('');
    const [userScore, setUserScore] = useState('');
    


    const handleSubmit = e => {
        e.preventDefault();

        //db stuff here

        setCourse("");
        setLocation("");
        setPar("");
        setUserScore("");


    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input value={courseName} onChange={(e) => setCourse(e.target.value)} className="messageSender__input" placeholder={`What course did you play today?`}/>
                    <input value={location} onChange={(e) => setLocation(e.target.value)} placeHolder="Enter City + Province/State"/>

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
                    <input value={userScore} onChange={(e) => setUserScore(e.target.value)} placeHolder="Enter Your Score"/>
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
