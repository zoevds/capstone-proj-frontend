<template>
  <nav class="opacity-75">
    <a class="navbar-brand" href="#landing"
      ><img
        id="logoimg"
        src="https://i.postimg.cc/ryDTSrRM/vmax-logo-icon.jpg"
        alt="logo image" /></a
    >| <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/contact">Contact</router-link>|
    <router-link to="/login">Login</router-link>|
    <router-link to="/register">Register</router-link>|
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: "Aboreto", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #152d35;
  border-radius: 12px;
  /* margin-top: 1.5rem; */
  z-index: 100;
  position: fixed;
  width: 100%;
  padding: 20px;
  margin-top: 1.5rem;
}

nav a {
  font-weight: bold;
  color: #e8f9fd;
}

nav a.router-link-exact-active {
  color: #6998ab;
}
#logoimg {
  width: 4rem;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: -1.5rem;
}
/* nav a:hover {
  background-color: #fdfffc;
  padding: 2px;
} */ ;
</style>
