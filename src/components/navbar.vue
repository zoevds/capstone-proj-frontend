<template>
  <nav class="navbar navbar-expand-lg opacity-75">
    <div class="container-fluid">
      <a class="navbar-brand" href="#landing"
        ><img
          id="logoimg"
          src="https://i.postimg.cc/ryDTSrRM/vmax-logo-icon.jpg"
          alt="logo image" /></a
      >|
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#Toggler"
        aria-controls="Toggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Toggler">
        <ul id="ul" class="navbar-nav mb-1 mb-lg-0">
          <li class="nav-item"><router-link to="/">Home</router-link> |</li>
          <li class="nav-item">
            <router-link to="/about">About</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/products">Products</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>|
          </li>
          <li class="nav-item">
            <router-link to="/login">Login</router-link>|
          </li>
          <li class="nav-item">
            <router-link to="/register">Register</router-link>|
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
#app {
  font-family: "Aboreto", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
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
  text-decoration: none;
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
  margin-bottom: -0.5rem;
}

@media only screen and (max-width: 600px) {
  .navbar {
    width: 100%;
    padding: 1rem;
  }

  body,
  html {
    overflow-x: hidden;
  }
}
</style>
