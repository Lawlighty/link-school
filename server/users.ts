import { MethodType, request2, request } from '../request.js';

// 获取用户个人信息
export const _get_users_detail = async () => {
  return await request(`/auth/user`, MethodType.GET);
};

export const _get_lecturer_detail = async (id) => {
  return await request(`/auth/lecturer?id=${id}`, MethodType.GET);
};
