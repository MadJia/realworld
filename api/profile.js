import { request } from '@/plugins/request'

// 获取个人信息
export const getProfile = username => {
  return request({
    method:'GET',
    url: `/api/profiles/${username}`
  })
}