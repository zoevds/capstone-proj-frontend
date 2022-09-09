<template>
  <nav class="navbar navbar-expand-lg opacity-75">
    <div class="container-fluid">
      <a class="navbar-brand" href="#landing"
        ><img
          id="logoimg"
          src="https://i.postimg.cc/ryDTSrRM/vmax-logo-icon.jpg"
          alt="logo image"
      /></a>
      <button
        id="navbartogg"
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
          <li class="nav-item">
            <router-link to="/landing">Home</router-link>
          </li>

          <li v-if="user" class="nav-item">
            <router-link to="/about">About</router-link>
          </li>

          <li v-if="user" class="nav-item">
            <router-link to="/products">Products</router-link>
          </li>

          <li v-if="user" class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>

          <li class="nav-item"><router-link to="/">Login</router-link></li>

          <li class="nav-item">
            <router-link to="/register">Register</router-link>
          </li>

          <li v-if="user" class="nav-item">
            <router-link to="/cart"> Cart</router-link>
          </li>

          <li v-if="user" class="nav-item">
            <router-link to="/alladmintables"> Admin</router-link>
          </li>

          <li v-if="user" class="nav-item">
            <router-link
              :to="{ name: 'userprofile', params: { id: user.user_id } }"
              ><i id="profile-icon" class="fa-solid fa-id-badge"></i
            ></router-link>
          </li>

          <li class="nav-item">
            <button id="logoutbtn" @click="logout()">
              <router-link to="/landing">
                <i class="fa-solid fa-right-from-bracket"></i>
              </router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>
<style>
#app {
  font-family: "Aboreto", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: black;
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
  /* display: flex;
  justify-content: space-between; */
  margin-right: 0.5rem;
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
#navbartogg {
  background-color: grey;
}
#profile-icon {
  font-size: 1.8rem;
  margin-left: 38rem;
  background-color: black;
  color: white;
}
#logoutbtn {
  background-color: black;
  color: white;
  font-size: 1rem;
  margin-right: 1rem;
}
/* #li.nav-item {
  margin-bottom: -2rem;
} */
@media only screen and (max-width: 600px) {
  .navbar {
    background-color: black;
    border-radius: 12px;
    /* margin-top: 1.5rem; */
    z-index: 100;
    position: fixed;
    width: 95%;
    padding: 20px;
    margin-top: 1.5rem;
    margin-left: 0.6rem;
  }

  body,
  html {
    overflow-x: hidden;
  }
  #profile-icon {
    margin-left: 0.1rem;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
  }
  #logoimg {
    margin-bottom: 0.5rem;
  }
}
</style>
