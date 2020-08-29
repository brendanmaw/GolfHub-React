import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://s3.us-east-2.amazonaws.com/reynoldsdotcomassets/images/golf-course/The-National-Teaser_Portrait_Retina.jpg?mtime=20190823161442&focal=none"
                profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQHm7C3r6lMqjg/profile-displayphoto-shrink_100_100/0?e=1602720000&v=beta&t=4The0V6n7IzLSv7tmnjxS8OVc2FFUYWhXruYR_BEVhE"
                title="Brendan Maw" 
            />
            <Story
                image="https://pbs.twimg.com/media/CK27MVpWwAA2cK_.jpg:large"
                profileSrc="https://pbs.twimg.com/profile_images/2880235647/31ac429c34df75fd5359bd8be9f45837_400x400.jpeg"
                title="Drew Herrebrugh" 
             />
            <Story
                image="https://media.vanityfair.com/photos/54cc00281ca1cf0a23ad21da/master/w_1600%2Cc_limit/image.jpg"
                profileSrc="https://pbs.twimg.com/media/CmisohqWIAETiAd.jpg"
                title="Bryr Austen" 
             />
            <Story
                image="https://www.golfchannel.com/sites/default/files/2020/05/24/brady_1920_thematch20_shrug.jpg"
                profileSrc="https://4eulwxa8mnw4b67uk18ujuu1-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/BowlingApril2512-1024x1530.jpg"
                title="Jaymin Wudkevich" 
            />
            <Story 
                image="https://cdn.shopify.com/s/files/1/0220/4984/9408/products/thumbnail_IMG_3474_1_1024x1024@2x.jpg?v=1565959093" 
                profileSrc="https://pbs.twimg.com/profile_images/796055187026677760/BAuGE9VK.jpg" 
                title="Jared Bizeau" 
            />

            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            
        </div>
    );
}

export default StoryReel
