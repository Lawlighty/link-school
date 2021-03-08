import { MethodType, request2, request } from '../request.js';

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
export const _login_with_account = async (phone: string, password: string) => {

    return await request('/auth/login', MethodType.POST, {
      username: phone,
      password: password,
    });
};

//修改个人信息
export const _update_user_info = async (id: string, params:any) => {
    return await request(`/auth/${id}`, MethodType.PUT, params);
};