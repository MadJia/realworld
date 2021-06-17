<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <ul class="error-messages">
            <template v-for="(messages,filed) in errors">
              <li v-for="(message,index) in messages" :key="index">{{ filed }} {{message}}</li>
            </template>
          </ul>
          <form @submit.prevent="updateUserFn">
            <fieldset>
                <fieldset class="form-group">
                  <input class="form-control" v-model="currentUser.image" type="text" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"  v-model="currentUser.username" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea class="form-control form-control-lg"  v-model="currentUser.bio" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" v-model="currentUser.email"  type="Email" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" v-model="password" type="password" placeholder="Password" minlength="8" :required="false">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { updateUser } from '@/api/setting'
const Cookie = require('js-cookie')
export default {
  // 在路由匹配渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'SettingIndex',
  data () {
    return {
      currentUser: {
        email: '',
        username: '',
        image: '',
        bio:''
      },
      password: '',
      errors: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    this.currentUser.email = this.user.email
    this.currentUser.username = this.user.username
    this.currentUser.image = this.user.image
    this.currentUser.bio = this.user.bio
  },
  methods: {
    ...mapMutations(['setUser']),
    async updateUserFn () {
      let params = {
        user: this.currentUser
      }
      if (this.password) {
        params.password = this.password
      }
      try {
        await updateUser(params)
        Cookie.remove('user')
        this.setUser(null)
        this.$router.push('/login')
      } catch (err) {
        this.errors = err.response.data.errors
      }
    }
  }
}
</script>

<style>

</style>