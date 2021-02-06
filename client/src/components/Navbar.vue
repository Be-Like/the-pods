<template>
  <div class="navbar">
    <div class="navbar-links">
      <div class="logo">
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
@import '../../stylesheets/application.scss';

.navbar {
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
}

h2,
p,
.logo,
.links {
  display: inline-block;
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
}

.upgrade {
  margin-right: 20px;
}
</style>
