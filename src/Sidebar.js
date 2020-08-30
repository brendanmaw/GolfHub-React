import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from "./StateProvider";


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen"><SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Info"/></a>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messenger"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
               
            
        </div>
    
}

export default Sidebar
