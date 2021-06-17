import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69002a86 = () => interopDefault(import('..\\pages\\layouts' /* webpackChunkName: "" */))
const _261c812b = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _c4a826c6 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _88ebec46 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _46f7426f = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _0b45cab9 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _bb5765ac = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _69002a86,
    children: [{
      path: "",
      component: _261c812b,
      name: "home"
    }, {
      path: "/login",
      component: _c4a826c6,
      name: "login"
    }, {
      path: "/register",
      component: _c4a826c6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _88ebec46,
      name: "profile"
    }, {
      path: "/settings",
      component: _46f7426f,
      name: "settings"
    }, {
      path: "/editor",
      component: _0b45cab9,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _bb5765ac,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
