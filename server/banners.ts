import { MethodType, request, request2 } from '../request.js';

// 获取轮播图
export const _get_banners = async (query: string) => {
  return await request(`/banners?query=${query}`, MethodType.GET);
};