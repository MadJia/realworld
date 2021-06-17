import { request } from '@/plugins/request'

// 获取当前用户
export const getCurrentUser = () =>{
  return request({
    method: 'GET',
    url: '/api/user'
  })
}
// 更新用户
export const updateUser = data =>{
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}