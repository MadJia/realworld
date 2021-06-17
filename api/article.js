import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params =>{
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

// 获取关注文章列表
export const getFeedArticles = params =>{
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}

// 添加点赞
export const addFavorite = slug =>{
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug =>{
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug =>{
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug =>{
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 关注作者
export const followUser = username =>{
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

// 取消关注作者
export const unFollowUser = username =>{
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}

// 添加评论
export const addComment = params =>{
  return request({
    method: 'POST',
    url: `/api/articles/${params.slug}/comments`,
    data: params.data
  })
}

// 删除评论
export const deleteComment = params =>{
  return request({
    method: 'DELETE',
    url: `/api/articles/${params.slug}/comments/${params.id}`,
  })
}