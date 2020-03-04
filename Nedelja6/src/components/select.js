import { getAllLaunches } from "../services/spacex_service";
import {Launch} from '../components/launch'


const getYear = (launch) => {
   return  launch.launch_year;
}

const addOptions = () => {
    const selectYear = document.createElement('select');
    selectYear.className = 'select-year';

    getAllLaunches().then( response => {
        let {data} = response;
        let years = [];
        data.forEach(element => {
            if(!years.includes(getYear(element))){
                years.push(getYear(element));
                let option = document.createElement('option');
                option.value = getYear(element);
                option.text = getYear(element);
                selectYear.add(option);
            }
        });
    })

    selectYear.addEventListener('change',() => {
        getLaunchByYear(selectYear.value);
    });

    return selectYear;
}

const getLaunchByYear = (year) => {
    const launches=document.querySelector('#launches');
    const div = document.createElement('div');
    div.className = 'launch-list';
    
    getAllLaunches().then( response => {
        let {data} = response;
        let selected = data.filter((el) => {
            return getYear(el) == year;
        })

        selected.forEach(element => {
            div.appendChild(Launch(element));
        })

    }
    )
    launches.innerHTML = '';
    return launches.append(div);
}

export {addOptions}