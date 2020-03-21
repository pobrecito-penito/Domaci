import React, { useState, useEffect } from 'react'
import { getStoryIds, getBestStories, getTopStories, getAskStories, getJobStories, getShowStories } from '../services/hackerNews';
import Story from '../components/Story';

const StoriesContainer = () => {
    const [storyIds,setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(res => setStoryIds(res));
    },[])

    const [counter,setCounter] = useState(9)
    let loadStories = () => {
        setCounter(counter+3);
    }

    const [select,setSelect] = useState('New')

    const handleSelect = (e) => {
        let selected = e.target.value;
        switch(selected){
            case 'new':
                getStoryIds().then(res=> setStoryIds(res));
                setCounter(9);
                setSelect('New');
                break;
            case 'top':
                getTopStories().then(res => setStoryIds(res)); 
                setCounter(9);
                setSelect('Top');
                break;
            case 'best':
                getBestStories().then(res => setStoryIds(res));
                setCounter(9);
                setSelect('Best');
                break;
            case 'job':
                getJobStories().then(res=> setStoryIds(res));
                setCounter(9);
                setSelect('Job');
                break;
            case 'ask':
                getAskStories().then(res => setStoryIds(res));
                setCounter(9);
                setSelect('Ask HN');
                break;
            case 'show':
                getShowStories().then(res => setStoryIds(res));
                setCounter(9);
                setSelect('Show HN');
                break;
        }
    }

    return (
        <>
        <div className="select">
            <select onChange={(e) => handleSelect(e)}>
                <option>Choose Stories!</option>
                <option value="new">New Stories</option>
                <option value="top">Top Stories</option>
                <option value="best">Best Stories</option>
                <option value="job">Job Stories</option>
                <option value="ask">Ask Stories</option>
                <option value="show">Show Stories</option>
            </select>
            <h2><span>{select}</span> Stories!</h2>
        </div>
        <div className="container">
            {storyIds.slice(0,counter).map(el => <Story key={el} storyId={el}/> )}
        </div>
        <div className="button">
            <button onClick={() => loadStories()}>More Stories</button>
        </div>
        </>
    )
}

export default StoriesContainer