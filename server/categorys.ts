import { MethodType, request, request2 } from '../request.js';
// 分类
// 获取所有分类
export const _get_all_categorys = async () => {
  return await request('/categorys', MethodType.GET);
};