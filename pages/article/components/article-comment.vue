<template>
  <div class="ArticleComment">
    <form class="card comment-form" @submit.prevent="onSubmit" v-if="user">
      <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="comment"></textarea>
      </div>
      <div class="card-footer" >
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">
        Post Comment
        </button>
      </div>
    </form>
    
    <div class="card" v-for="(comment, index) in comments" :key="comment.id">
      <div class="card-block" v-html="comment.body">
      </div>
      <div class="card-footer">
        <nuxt-link :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }" class="comment-author">
          {{comment.author.username}}
        </nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMMM DD, YYYY') }}</span>
        <span class="mod-options" v-if="comment.author.username === user.username"
        @click="deleteCommentFn(comment.id, index)"
        >
          <i class="ion-trash-a"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, addComment, deleteComment } from '@/api/article'
import MarkdownIt from 'markdown-it'
import { mapState } from 'vuex'
export default {
  name: 'ArticleComment',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      comments: [],
      comment: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  async mounted () {
    const { data } = await getComments( this.article.slug )
    const md = MarkdownIt()
    data.comments.forEach(comment => comment.body = md.render(comment.body));
    this.comments = data.comments
  },
  methods: {
    async onSubmit () {
      let params = {
        slug: this.article.slug,
        data: {
          comment: {
            body: this.comment
          }
        }
      }
      const { data } = await addComment(params)
      const md = MarkdownIt()
      const { comment } = data
      comment.body = md.render(comment.body)
      this.comments.unshift(comment)
      this.comment = ''
    },
    async deleteCommentFn(id,index) {
      console.log(id)
      let params = {
        slug: this.article.slug,
        id: id
      }
      const { data } = await deleteComment(params)
      console.log(data)
      this.comments.splice(index,1)
    }
  }
}
</script>

<style>

</style>