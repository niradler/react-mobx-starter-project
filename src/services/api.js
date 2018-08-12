import axios from 'axios';

const host_url = "https://localhost:8080";

const _send = (method, route, data) => {
    const opts = {
        method: method,
        url: host_url + route,
    };

    if(method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT') {
        opts.data = data;
    }

    return axios(opts);
}

const demoReq = () =>{

    return _send("GET", "/demo");
}

const DemoPost = (data) =>{

    return _send("POST", "/demo/add", data);
}


export default {
    demoReq,
    DemoPost
}