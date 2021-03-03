import { MethodType, request2, request } from '../request.js';

// 子课程
// 查询课程列表
export const _get_episodes_list = async (query: string = '') => {
  return await request(`/episodes?query=${query}`, MethodType.GET);
};
// 获取课程详情
export const _get_episodes_detail = async (id: string = '') => {
  return await request(`/episodes/${id}`, MethodType.GET);
};
