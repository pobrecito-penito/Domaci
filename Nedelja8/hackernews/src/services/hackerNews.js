import axios from 'axios'

export const baseUrl = `https://hacker-news.firebaseio.com/v0`
export const newStoriesUrl = `${baseUrl}/newstories.json`
export const storyUrl = `${baseUrl}/item`

const getStoryIds = async() => {
    let response = await axios.get(newStoriesUrl);
    return response.data
}

const getStory = async(id) => {
    let response = await axios.get(`${storyUrl}/${id}.json`);
    let {data} = response;
    if(data){
        let object = {
            by: data.by,
            time: data.time,
            url: data.url,
            title: data.title
        }
        return object
    } else {
        return null
    }
}

const getTopStories = async() => {
    let response = await axios.get(`${baseUrl}/topstories.json`)
    return response.data
}

const getBestStories = async() => {
    let response = await axios.get(`${baseUrl}/beststories.json`)
    return response.data
}

const getAskStories = async() => {
    let response = await axios.get(`${baseUrl}/askstories.json`)
    return response.data
}

const getShowStories = async() => {
    let response = await axios.get(`${baseUrl}/showstories.json`)
    return response.data
}

const getJobStories = async() => {
    let response = await axios.get(`${baseUrl}/jobstories.json`)
    return response.data
}

export { getStoryIds, getStory, getTopStories, getBestStories,
            getAskStories, getShowStories, getJobStories }