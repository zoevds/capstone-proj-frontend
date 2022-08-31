<template>
  <section id="landing">
    <div class="container-fluid">
      <h1 id="landing-head1">VMAX VAPES</h1>
      <router-link id="link" to="/about">
        Learn More
        <i id="icon" class="fa-solid fa-arrow-right-long"></i>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
body {
  scroll-behavior: smooth;
}
#landing {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/NjRKvWdL/pexels-tommy-jepsen-216385.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#landing-head1 {
  color: white;
  font-family: "Rock Salt", cursive;
  font-size: 6rem;
  text-shadow: 3px 3px 6px black;
  padding: 2rem;
}
/* #link :hover {
  background-color: #152d35;
  font-size: 2rem;
} */
#link {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 12px;
  text-shadow: 3px 3px 6px black;
  text-decoration: none;
}
#icon {
  width: 2rem;
  height: 1rem;
  font-size: 1.4rem;
}
link:hover {
  color: black;
}
@media only screen and (max-width: 600px) {
  body,
  html {
    overflow-x: hidden;
  }
  #landing-head1 {
    font-size: 4rem;
    letter-spacing: 0.3rem;
  }
}
</style>
