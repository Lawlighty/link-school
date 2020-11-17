import { MethodType, request } from '../request.js';


//账号 登录 
export const _login_with_account = async (phone: string, password: string) => {
    console.log('server账号登录的 phone ', phone + 'password ' + password);
    return await request('/user/passwordLogin', MethodType.POST, {
        userId: phone,
        password:password,
    });
};