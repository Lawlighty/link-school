import { MethodType, request, request2 } from '../request.js';

// 讲师
// 查询讲师列表
export const _get_teachers_list= async (query: string = '') => {
  return await request(`/teachers?query=${query}`, MethodType.GET);
};

export const _get_teachers_status = async (query: string = '') => {
  return await request(`/teachers/status?query=${query}`, MethodType.GET);
};

export const _post_teachers_toogle = async (params:{}) => {
  return await request(`/teachers/apply`, MethodType.POST, params);
};