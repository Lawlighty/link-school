import { MethodType, request } from '../request.js';

// 课程
// 查询课程列表
export const _get_courses_list= async (query: string = '') => {
  return await request(`/courses?query=${query}`, MethodType.GET);
};
// 获取课程详情
export const _get_courses_detail = async (id: string = '') => {
  return await request(`/courses/${id}`, MethodType.GET);
};
// 获取推荐课程
export const _get_courses_recommend = async (query:string='') => {
  return await request(`/courses/recommend?query=${query}`, MethodType.GET);
};

// 获取热门课程(置顶)
export const _get_courses_stick = async (query: string='') => {
  return await request(`/courses/stick?query=${query}`, MethodType.GET);
};