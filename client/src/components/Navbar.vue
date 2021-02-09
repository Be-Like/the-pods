<template>
  <div class="navbar divider">
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
      <div class="user">
        <p>AH</p>
      </div>
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
  display: flex;
  justify-content: space-between;
  left: 0;
  margin: 0 7%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2500;
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
  display: flex;
  margin: auto 0;

  .upgrade {
    color: $primary-color;
    cursor: pointer;
    margin-right: 20px;
  }

  .user {
    background-color: #d9d9d9;
    background-image: linear-gradient(130deg, $primary-color 50%, #eee 50%);
    background-position: bottom right;
    background-size: 250% 100%;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    height: 52px;
    justify-content: center;
    transition: background-position .5s ease;
    width: 52px;

    &:hover {
      background-color: $primary-color;
      background-position: top left;
      color: #fff;
    }
  }
}

</style>
