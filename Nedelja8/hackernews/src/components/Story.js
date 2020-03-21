import React, { useState, useEffect } from 'react'
import { getStory } from '../services/hackerNews'
import { mapTimeString } from '../utility/timestamp';

const Story = ({storyId}) => {
    const [story,setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(res => setStory(res))
    },[])
    
    return(
        <div className="story">
            <div className="a">
            <a href={story.url} target="_blank" rel="noopener no referrer">
                <h3>{story.title}</h3>
            </a>
            </div>
            <div className="a-p">
            <p>Author: {story.by}</p>
            <p>posted: {mapTimeString(story.time)} ago</p>
            </div>
        </div>
    )
}

export default Story