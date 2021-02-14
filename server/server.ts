import { MethodType, request } from '../request.js';

// 注册
export const _register = async (
  phone: string,
  verifyCode:string,
  password: string,
  ref_code: string,
) => {
    const info = {
        username: phone,
        password: password,
        ref_code: ref_code,
    };
  return await request('/auth/register', MethodType.POST, info);
};

//账号 登录 
// export const _login_with_account = async (phone: string, password: string) => {
//     console.log('server账号登录的 phone ', phone + 'password ' + password);
//     return await request('/auth/login', MethodType.POST, {
//         username: phone,
//         password:password,
//     });
// };
export const _login_with_account = async (phone: string, password: string) => {
    console.log('phone', phone );
    console.log('password', password);
    return await request('/auth/login', MethodType.POST, {
        username: phone,
        password:password,
    });
};
// export const _get_users_list = async (query: object = {}) => {
//   console.log('请求nest');
//   return await request('/users', MethodType.GET, { query });
// };

//demo
export const demo = async (id: number, username: string, password: string) => {
    return await request('/remove', MethodType.GET, {
        id: id,
        // username: username,
        // password: password,
    });
};