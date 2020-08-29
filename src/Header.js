import React from 'react'
import "./Header.css";
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import PeopleIcon from '@material-ui/icons/People';
import { Avatar } from "@material-ui/core";
import { useStateValue } from './StateProvider';
//import AddIcon from '@material-ui/icons/Add'
//import ForumIcon from '@material-ui/icons/Forum';
//import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className="header__left">
                <div className="header__golfhub">
                    <GolfCourseIcon fontSize="large" />                
                    <h3>GolfHub</h3>
                </div>
            </div>

            <div className="header__center">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">    
                    <ListIcon fontSize="large" />
                </div> 
                <div className="header__option">
                    <LibraryAddIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <PeopleIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <h4>{user.displayName}</h4>
                    <Avatar src={user.photoURL} />
                </div>
            </div>        
        </div>
    )
}

export default Header
