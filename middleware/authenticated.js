/**
 * 验证是否登录的中间件，它会在路由渲染之前自动调用
 */

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user) {
    return redirect('/login')
  }
}