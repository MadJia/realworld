<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{profile.username}}</h4>
            <p>
              {{profile.bio}}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn"
            :class="{ active:profile.following }"
            :disabled="isOnFollow"
            @click="onFollowUser"
            v-if="!(user.username === profile.username)">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{profile.following?`UnFllow ${profile.username}`:`Fllow ${profile.username}`}} 
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link :to="{
                  name: 'profile',
                  params: {
                    username: profile.username,
                  },
                  query: {
                    tabType: 'my-articles'
                  }
                }"
                class="nav-link"
                :class="{
                  active: tab === 'my-articles'
                }"
                exact
                >
                 My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="{
                  name: 'profile',
                  params: {
                    username: profile.username,
                  },
                  query: {
                    tabType: 'favorited-articles'
                  }
                }"
                class="nav-link"
                :class="{
                  active: tab === 'favorited-articles'
                }"
                exact
                >
                 Favorited Articles
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview"  v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }">
                  {{article.author.username}}
                </nuxt-link>
                <span class="date">{{ article.createdAt | date('MMMM DD, YYYY') }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{ active: article.favorited }"
              :disabled="article.favoriteDisabled"
              @click="onFavortion(article)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link class="preview-link" :to="{
              name: 'article',
              params: {
                slug: article.slug
              }
            }">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list" v-for="(tag,index) in article.tagList" :key="index">
                <li class="tag-default tag-pill tag-outline">{{ tag }}</li>
              </ul>
            </nuxt-link>
          </div>


        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { getProfile } from '@/api/profile'
import { getArticles, deleteFavorite, addFavorite, followUser, unFollowUser } from '@/api/article'
import { mapState } from 'vuex'
export default {
  // 在路由匹配渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'ProfileIndex',
  async asyncData({ params, query }) {
    const { tabType } = query
    const tab = tabType || 'my-articles'
    const articlesParams = tab === 'my-articles'?
    { author: params.username } : { favorited: params.username }
    const [profileRes, articlesRes] = await Promise.all([
      getProfile(params.username),
      getArticles(articlesParams)
    ])
    const { profile } = profileRes.data
    const { articles } = articlesRes.data
    articles.forEach(article => article.favoriteDisabled = false)
    return {
      profile,
      articles,
      tab
    }
  },
  watchQuery: ['tabType'],
  data () {
    return {
      isOnFollow: false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async onFavortion (article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount +=1
      }
      article.favoriteDisabled = false
    },
    async onFollowUser() {
      this.isOnFollow = true
      if (this.profile.following) {
        await unFollowUser(this.profile.username)
        this.profile.following = false
      } else {
        await followUser(this.profile.username)
        this.profile.following = true
      }
      this.isOnFollow = false
    },
  }
}
</script>

<style>

</style>