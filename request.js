import axios from 'axios';
import { message, } from 'antd';

 axios.defaults.baseURL = 'http://172.20.16.15:8070';
export const MethodType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};


/**
 * 模块说明:有api_token的请求
 */
export const request = (
    api,
    method = MethodType.GET,
    params = {},
    config = {},
) => {
    const apiToken = '';
    const data = method === 'GET' ? 'params' : 'data';
    let headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
    };
    if (config.headers) {
        headers = {
            ...headers,
            ...config.headers,
        };
    }
    return new Promise((resolve, reject) => {
        axios({
            url: api,
            method: method,
            [data]: params,
            headers,
        })
            .then(resolve)
            .catch((error) => {
                console.dir(error);
                // message.error(
                //     typeof error.response.data === 'string'
                //         ? error.response.data
                //         : JSON.stringify(error.response.data),
                // );
                reject(error);
            });
    });
};