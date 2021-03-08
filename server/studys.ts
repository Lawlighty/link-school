import { MethodType, request, request2 } from '../request.js';

// 学习
// 查询动作列表
export const _get_studys_list= async (query: string = '') => {
  return await request(`/studys?query=${query}`, MethodType.GET);
};
export const _get_studys_num = async (query: string = '') => {
  return await request(`/studys/num?query=${query}`, MethodType.GET);
};
export const _get_studys_status = async (query: string = '') => {
  return await request(`/studys/status?query=${query}`, MethodType.GET);
};

export const _post_studys_toogle = async (params:{}) => {
  return await request(`/studys/toogle`, MethodType.POST, params);
};