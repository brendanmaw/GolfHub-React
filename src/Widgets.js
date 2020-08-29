import React from 'react'
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                src="https://www.tourbrassie.com/widget/index?
                type=index&showlogo=0&showfacebook=0&
                bgcolor=&width=340&height=1500&widthsetting=custom&
                unit=px&layout=table&country=&displayplayersby=country&
                playerlist=&showcountry=1&showaveragepoints=0&
                showtotalpoints=1&showsponsor=1&tour=pga-tour&limit=10"
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="false"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
