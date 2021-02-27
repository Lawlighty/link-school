import { MethodType, request } from '../request.js';

// 文档
// 获取文档列表
export const _get_documents = async (query: string='') => {
  return await request(`/documents?query=${query}`, MethodType.GET);
};