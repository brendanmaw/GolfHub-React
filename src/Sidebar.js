import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from "./StateProvider";
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import RedditIcon from '@material-ui/icons/Reddit';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


function Sidebar() {    
    const [{ user }, dispatch] = useStateValue();
    return <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen"><SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Info"/></a>        
        <a href="https://www.pgatour.com/leaderboard"><SidebarRow Icon={SportsGolfIcon} title="PGA Leaderboard"/></a>
        <a href="https://old.reddit.com/r/golf/"><SidebarRow Icon={RedditIcon} title="Golf Reddit"/></a>
        <a href="https://www.pgatour.com/fedexcup/official-standings.html"><SidebarRow Icon={EmojiPeopleIcon} title="Fed-Ex Cup Standings"/></a>
        <a href="https://www.github.com/brendanmaw/GolfHub-React"><SidebarRow Icon={GitHubIcon} title="GolfHub Source Code"/></a>
        
               
            
        </div>
    
}

export default Sidebar
