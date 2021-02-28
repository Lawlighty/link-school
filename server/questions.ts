import { MethodType, request } from '../request.js';

// 问答
// 获取问答列表
export const _get_questions = async (query: string='') => {
  return await request(`/questions?query=${query}`, MethodType.GET);
};