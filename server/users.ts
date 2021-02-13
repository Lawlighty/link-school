import { MethodType, request } from '../request.js';

//获取用户列表
export const _get_users_list = async (query:object={}) => {
    console.log('请求nest')
    return await request('/users', MethodType.GET, { query });
};

//demo
export const demo = async (id: number, username: string, password: string) => {
    return await request('/remove', MethodType.GET, {
        id: id,
        // username: username,
        // password: password,
    });
};
