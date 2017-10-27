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
              <li @click="perubahan()"><a href="#"><img class="image" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-256.png"><b>Silahkan Login</b></a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right" v-else>
              <li @click="perubahan()"><a><img class="image" src="https://assets.jalantikus.com/assets/cache/256/256/apps/2016/07/26/photo-lab-picture-editor-fx-icon.png"><b>Selamat Datang: </b></a></li>
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
      token: 's'
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
