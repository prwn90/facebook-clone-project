import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image="https://cdn.pixabay.com/photo/2015/10/21/08/22/media-998990_960_720.jpg"
            profileSrc="https://cdn.pixabay.com/photo/2015/07/20/12/53/man-852762__340.jpg"
            title="Lorem Ipsum"
            />

            <Story image="https://cdn.pixabay.com/photo/2016/11/03/18/19/social-media-1795578__340.jpg"
            profileSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png"
            title="Lorem Ipsum"
            />

            <Story image="https://cdn.pixabay.com/photo/2014/03/22/22/15/twitter-292988__340.jpg"
            profileSrc="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438__340.jpg"
            title="Lorem Ipsum"
            />

            <Story image="https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845__340.jpg"
            profileSrc="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295401__340.png"
            title="Lorem Ipsum"
            />

            <Story image="https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731__340.jpg"
            profileSrc="https://cdn.pixabay.com/photo/2015/12/13/20/43/doll-1091702__340.jpg"
            title="Lorem Ipsum"
            />
        </div>
    )
}

export default StoryReel
