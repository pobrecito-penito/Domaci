import {LaunchList} from "./components/launch_list";
import {addOptions} from "../src/components/select"
import { getHeader } from "./components/header";

const app = document.querySelector('#app');
const launches = document.querySelector('#launches');
const header = getHeader();
header.className = 'header';
const filters = document.createElement('section');
const launch_list = LaunchList();
const select = addOptions();
const footer = document.createElement('footer');

app.append(header,select,filters,footer);
launches.append(launch_list);

