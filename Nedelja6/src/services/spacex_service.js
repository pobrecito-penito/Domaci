import axios from "axios"
const SPACEX_BASE_URL='https://api.spacexdata.com/v3';

const getPastLaunches=()=>{
    return axios.get(`${SPACEX_BASE_URL}/launches/past`);
}

const getInfo = () => {
    return axios.get(`${SPACEX_BASE_URL}/info`)
}

const getAllLaunches = () => {
    return axios.get(`${SPACEX_BASE_URL}/launches`)
}

export {
    getPastLaunches, getInfo, getAllLaunches
}