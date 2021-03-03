import { MethodType, request2, request } from '../request.js';

// 问答
// 获取问答列表
export const _get_questions = async (query: string='') => {
  return await request(`/questions?query=${query}`, MethodType.GET);
};

export const _post_question = async (params={}) => {
  return await request(`/questions`, MethodType.POST, params);
};

export const _get_questions_detail = async (id: string = '') => {
  return await request(`/questions/${id}`, MethodType.GET);
};