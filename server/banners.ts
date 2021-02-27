import { MethodType, request } from '../request.js';

// 获取轮播图
export const _get_banners = async () => {
  return await request('/banners', MethodType.GET);
};