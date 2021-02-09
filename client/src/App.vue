<template>
  <div id="app">
    <Navbar />
    <router-view class="main-content"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar }
}
</script>

<style lang="scss">
#app {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 7%;
}

.main-content {
  margin-top: 140px;
}

// Fonts
@font-face {
  font-family: 'Karla';
  src: local('Karla'), url(../assets/fonts/Karla-Light.ttf) format('truetype');
  font-weight: 300;
}
@font-face {
  font-family: 'Karla';
  src: local('Karla'), url(../assets/fonts/Karla-Regular.ttf) format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'Karla';
  src: local('Karla'), url(../assets/fonts/Karla-SemiBold.ttf) format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: 'Karla';
  src: local('Karla'), url(../assets/fonts/Karla-Bold.ttf) format('truetype');
  font-weight: 700;
}
@font-face {
  font-family: 'Karla';
  src: local('Karla'), url(../assets/fonts/Karla-ExtraBold.ttf) format('truetype');
  font-weight: 800;
}
@font-face {
  font-family: 'Inter';
  src: local('Inter'), url(../assets/fonts/Inter-Light.ttf) format('truetype');
  font-weight: 300;
}
@font-face {
  font-family: 'Inter';
  src: local('Inter'), url(../assets/fonts/Inter-Regular.ttf) format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'Inter';
  src: local('Inter'), url(../assets/fonts/Inter-SemiBold.ttf) format('truetype');
  font-weight: 600;
}
</style>
