<template>
  <section id="userprofile">
    <div id="profile-cont" class="container">
      <div v-for="user in users" :key="user.user_id" :user="user">
        <div id="profilecard" class="card">
          <h1 id="userprofile-head1">Your Profile</h1>
          <div class="row">
            <div class="col">name</div>
            <div class="col">
              <!-- <h3>{{ user.user_fullname }}</h3>
              <p>{{ user.user_cart }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
@font-face {
  font-family: brush;
  src: url(../assets/BajigurBrushFont-GO3wy.ttf);
}
#userprofile {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/D0b7xB9Y/pexel.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 100vh;
}
#profilecard {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  width: 75rem;
  height: 33rem;
  margin-top: 6rem;
}
#profile-cont {
  padding: 3rem;
}
#userprofile-head1 {
  color: white;
  font-family: brush;
  font-size: 3rem;
  text-shadow: 4px 4px 8px black;
  padding: 2rem;
}
</style>
