<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">JackoLim</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item" v-if="user">
              <!-- <a class="nav-link disabled" href=""></a> -->
              <nuxt-link class="nav-link"
              :class="{
                active: tab === 'your_feed'
              }"
              exact
              :to="{
                name: 'home',
                query: {
                  tab: 'your_feed'
                }
              }">
                Your Feed
              </nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link active" href="">Global Feed</a> -->
               <nuxt-link class="nav-link"
                :class="{
                  active: tab === 'global_feed'
                }"
                exact
                :to="{
                  name: 'home',
                  query: {
                    tab: 'global_feed'
                  }
                }">
                  Global Feed
                </nuxt-link>
            </li>
            <li class="nav-item" v-if="tag">
              <!-- <a class="nav-link active" href="">#{{tag}}</a> -->
              <nuxt-link class="nav-link"
                :class="{
                  active: tab === 'tag'
                }"
                exact
                :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                  }
                }">
                #{{tag}}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="article in articles" :key="article.slug">
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
              <nuxt-link class="author" :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                {{ article.author.username }}
              </nuxt-link>
              <span class="date">{{ article.createdAt | date('MMMM DD, YYYY') }}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{
                active: article.favorited
              }"
              @click="onFavortion(article)"
              :disabled="article.favoriteDisabled"
            >
              <i class="ion-heart"></i>
              {{ article.favoritesCount }}
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
          </nuxt-link>
        </div>

        <!-- 分页 -->
        <ul class="pagination">
          <li class="page-item" :class="{active:currentPage===pageNumber}" v-for="pageNumber in totalPage" :key="pageNumber"> 
            <nuxt-link :to="{
              path: '/',
              query: {
                page: pageNumber,
                tag: tag,
                tab: tab,
              }
            }" class="page-link ng-binding">{{pageNumber}}</nuxt-link>
          </li>
        </ul>
        <!-- /分页 -->

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <!-- <a href="" class="tag-pill tag-default">programming</a> -->
            <template  v-for="(tag,index) in tags">
              <nuxt-link :to="{
                path: '/',
                query: {
                  tag: tag,
                  tab: 'tag',
                }
              }" class="tag-pill tag-default" :key="index" v-if="tag">
                {{tag}}
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>


<script>
import { getArticles, getFeedArticles, deleteFavorite, addFavorite } from '@/api/article'
import { getTags } from '@/api/tag'
import { mapState } from 'vuex'
export default {
  name: 'HomeIndex',
  async asyncData ({ query, store }) {
    const currentPage = Number.parseInt(query.page || 1)
    const limit = 20
    const { tag, tab: queryTab } = query
    const tab = queryTab || 'global_feed'
    const loadArticles = store.state.user && tab === 'your_feed' ?
    getFeedArticles : getArticles
    // 并发请求
    const [ articleRes, tagsRes ] = await Promise.all([
      loadArticles({
        limit,
        offset: (currentPage -1) * limit,
        tag
      }),
      getTags()
    ])
    const { articles, articlesCount } = articleRes.data
    const { tags } = tagsRes.data
    articles.forEach(article => article.favoriteDisabled = false)
    return {
      articles,
      articlesCount,
      currentPage,
      limit,
      tags,
      tag,
      tab: tab
    }
  },
  watchQuery: ['page','tag', 'tab'],
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
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
    }
  }
}
</script>

<style>

</style>