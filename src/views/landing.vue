<template>
  <section id="landing">
    <h1 id="landing-head1">VMAX VAPES</h1>
    <router-link id="link" to="/about">
      Learn More
      <i id="icon" class="fa-solid fa-arrow-right-long"></i>
    </router-link>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
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
  font-family: "Aboreto", cursive;
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
}
#icon {
  width: 2rem;
  height: 1rem;
  font-size: 1.4rem;
}
</style>
