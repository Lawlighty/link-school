import { MethodType, request, request2 } from '../request.js';

// 评论
// 查询评论列表
export const _get_comments_list = async (query: string = '') => {
  return await request(`/comments?query=${query}`, MethodType.GET);
};
export const _post_comments = async (params: {}) => {
  return await request(`/comments`, MethodType.POST, params);
};
export const _delete_comments = async (id: string) => {
  return await request(`/comments/${id}`, MethodType.DELETE);
};