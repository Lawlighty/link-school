import { MethodType, request } from '../request.js';

// 文档
// 获取文档列表
export const _get_documents = async (query: string='') => {
  return await request(`/documents?query=${query}`, MethodType.GET);
};
// 获取文档详情
export const _get_documents_detail = async (id: string = '') => {
  return await request(`/documents/${id}`, MethodType.GET);
};