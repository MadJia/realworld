<template>
  <div class="article-meta">
    <!-- <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a> -->
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
      }" class="author">
        {{article.author.username}}
      </nuxt-link>
      <span class="date">{{ article.createdAt | date('MMMM DD, YYYY') }}</span>
    </div>
    <button class="btn btn-sm btn-outline-secondary"
    :class="{ active: article.author.following, disabled: isOnFollow}"
    @click="onFollowUser"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
       {{`${article.author.following?'Unfollow':'Follow'} ${article.author.username}`}}
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary"
    :class="{ active: article.favorited }"
    @click="onFavortion"
    >
      <i class="ion-heart"></i>
      &nbsp;
      {{`${article.favorited?'Unfavorited':'Favorited'} Article`}} <span class="counter">{{`(${article.favoritesCount})`}}</span>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { followUser, unFollowUser, addFavorite, deleteFavorite } from '@/api/article'

export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isOnFollow: false,
      isOnFavortied: false,
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async onFollowUser() {
      this.isOnFollow = true
      if (this.article.author.following) {
        await unFollowUser(this.article.author.username)
        this.article.author.following = false
      } else {
        await followUser(this.article.author.username)
        this.article.author.following = true
      }
      this.isOnFollow = false
    },
    async onFavortion () {
      this.isOnFavortied = true
      if (this.article.favorited) {
        await deleteFavorite(this.article.slug)
        this.article.favorited = false
        this.article.favoritesCount += -1
      } else {
        await addFavorite(this.article.slug)
        this.article.favorited = true
        this.article.favoritesCount +=1
      }
      this.isOnFavortied = false
    }
  }
}
</script>

<style>

</style>