<template>
  <div class="navbar">
    <div class="navbar-links">
      <div class="logo">
        <img class="logo-image" src="../../assets/logo.svg">
        <h2>thepods.</h2> <!-- This will be changed to the logo -->
      </div>
      <div class="links">
        <a href="/">Discover</a>
        <a href="/">Hosts</a>
        <a href="/">Resources</a>
      </div>
    </div>
    <div class="user-links">
      <p class="upgrade">Upgrade to Pro</p>
      <p class="user">AH</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: calc(100% - 40px);
}

h2,
p,
.logo,
.links {
  display: inline-block;
}

h2 {
  font-family: 'Karla';
  font-size: 35px;
}

a {
  color: #000;
  text-decoration: none;

  &:hover {
    color: $primary-color;
  }
}

p,
a {
  font-weight: bold;
}

.links > * {
  margin: 10px;
}

.logo {
  margin-right: 30px;

  .logo-image {
    transform: translateY(10px);
  }
}

.user-links {
  height: 100%;
  margin: auto 0;
}

.upgrade {
  color: $primary-color;
  margin-right: 20px;
}
</style>
