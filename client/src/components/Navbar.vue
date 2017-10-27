<template>
  <div class="Navbar">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img class="imagealbum" src="https://cdn.lytro.com/pictures/icons/camera.png" alt=""></a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul class="nav navbar-nav">
            <li><a href="#"><b>Dasboard</b></a></li>
            <li v-if="token==''"></li>
            <li v-else><a href="#"><b>Profile Dasboard</b></a></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <ul class="nav navbar-nav navbar-right" v-if="token==''">
              <li @click="loginfb()"><a href="#"><img class="image" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-256.png"><b>Silahkan Login</b></a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right" v-else>
              <li @click="logoutfb()"><a href="#"><img class="image" :src="kembalian.picture"><b> Selamat Datang: {{kembalian.name}}</b></a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right" v-if="token==''">
            </ul>
            <ul class="nav navbar-nav navbar-right" v-else>
              <li @click="perubahan()"><a href="#"><img class="image" src="http://downloadicons.net/sites/default/files/camera-icon-41991.png"><b>Upload Foto</b></a></li>
            </ul>
          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      token: '',
      msg: 'Welcome to Vue.js Todo App',
      userid: null,
      username: null,
      // usergue: 'ogi',
      profpic: null,
      isLogin: false,
      kembalian: null
    }
  },
  mounted: function () {
    // FB SDK
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '119308148780939',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      })
    }

    if (localStorage.token) {
      this.token = localStorage.token
      // this.loginfb()
      this.username = this.kembalian.name
    }
  },
  methods: {
    statusChangeCallback (response) {
      console.log('statusChangeCallback')
      console.log(response)
      if (response.status === 'connected') {
      } else {
        document.getElementById('status').innerHTML = 'Please log in'
      }
    },
    loginfb () {
      var self = this
      window.FB.login(response => {
        console.log('ini yang mau dilempar', response.authResponse.accessToken)
        this.token = response.authResponse.accessToken
        localStorage.setItem('token', this.token)
        window.FB.api('me',
        { fields: ['id', 'name', 'email', 'picture.type(large)'], access_token: this.token }, function (response) {
          let obj = {
            name: response.name,
            id: response.id,
            picture: response.picture.data.url
          }
          // this.kembalian = response.name
          self.kembalian = obj
          alert(JSON.stringify(this.kembalian))
          console.log('ini yang mau dipake', this.kembalian.name)
        })
        if (response.status === 'connected') {
        } else {
          // alert('Please login')
        }
      })
    },
    logoutfb () {
      localStorage.removeItem('token')
      // this.$router.push('/')
      window.location.replace('/')
      // var self = this
      // window.FB.logout(function (response) {
      //   localStorage.removeItem('token')
      //   // localStorage.clear()
      //   self.isLogin = false
      //   this.$router.push('/')
      //   alert(this.username)
      // })
    },
    emitGet (value) {
      alert(value)
      console.log('ini nilai', value)
    }

  },
  watch: {
    kembalian: function (huahuhauha) {
      console.log('ni')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  width: 30px;
}
.form-control {
  margin-bottom: 10px;
}
.pembatascol {
  padding-bottom: 15px;
}
.imagealbum {
  width: 35px;
}
.navbar-collapse {
  overflow-y: hidden;
}
</style>
