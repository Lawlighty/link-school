import { MethodType, request } from '../request.js';

// 动作
// 查询动作列表
export const _get_actions_list= async (query: string = '') => {
  return await request(`/actions?query=${query}`, MethodType.GET);
};

export const _get_actions_status = async (query: string = '') => {
  return await request(`/status?query=${query}`, MethodType.GET);
};

export const _post_actions_toogle = async (params:{}) => {
  return await request(`/status`, MethodType.POST, params);
};