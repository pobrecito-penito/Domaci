import { getInfo } from "../services/spacex_service";

const Header = (info) => {
    let {
        name, summary
    } = info;

    let div = document.createElement('div');
    div.innerHTML = `<span>${name}</span> </br>
    <span>${summary}</span>`

    return div;
}

const getHeader = () => {
    let header = document.createElement('header');

    getInfo().then(response => {
        let {data} = response;
        header.appendChild(Header(data));
    })

    return header;
}

export {getHeader}