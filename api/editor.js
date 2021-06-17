import { request } from '@/plugins/request'

// 新建文章
export const createArticle = data =>{
  return request({
    method: 'POST',
    url: '/api/articles',
    data
  })
}