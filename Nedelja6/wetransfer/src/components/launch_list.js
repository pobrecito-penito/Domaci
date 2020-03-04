import { getPastLaunches } from '../services/spacex_service'
import Launch from './launch';
//Add filters
const LaunchList = () => {
    const div = document.createElement('div');
    div.className = 'launch-list';

    getPastLaunches().then(response => {
        // let data=response.data;
        let { data } = response;

        // const launch=Launch()
        data.forEach(element => {
            div.appendChild(Launch(element));
        });

    }, error => { console.log(error) });

    return div;
}
export default LaunchList;