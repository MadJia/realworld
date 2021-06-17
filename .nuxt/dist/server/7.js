exports.ids = [7];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=268f44e7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,filed){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape(_vm._s(filed)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.currentUser.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.currentUser.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.currentUser.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"Email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.currentUser.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" minlength=\"8\""+(_vm._ssrAttr("required",false))+(_vm._ssrAttr("value",(_vm.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">\n                Update Settings\n              </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=268f44e7&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/setting.js
 // 获取当前用户

const getCurrentUser = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/user'
  });
}; // 更新用户

const updateUser = data => {
  return Object(request["b" /* request */])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const Cookie = __webpack_require__(27);

/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  // 在路由匹配渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'SettingIndex',

  data() {
    return {
      currentUser: {
        email: '',
        username: '',
        image: '',
        bio: ''
      },
      password: '',
      errors: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  created() {
    this.currentUser.email = this.user.email;
    this.currentUser.username = this.user.username;
    this.currentUser.image = this.user.image;
    this.currentUser.bio = this.user.bio;
  },

  methods: { ...Object(external_vuex_["mapMutations"])(['setUser']),

    async updateUserFn() {
      let params = {
        user: this.currentUser
      };

      if (this.password) {
        params.password = this.password;
      }

      try {
        await updateUser(params);
        Cookie.remove('user');
        this.setUser(null);
        this.$router.push('/login');
      } catch (err) {
        this.errors = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c67f98e"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map