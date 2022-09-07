<template>
  <section id="userprofile">
    <div id="profile-cont" class="container">
      <div>
        <div id="profilecard" class="card">
          <h1 id="userprofile-head1">Your Profile</h1>
          <div class="row">
            <div class="col">
              <div v-if="user.user_gender == !'male'">
                <img
                  id="maleprofile"
                  src="https://i.postimg.cc/RV7gBGnJ/profile.png"
                  alt="Male Profile"
                />
              </div>
              <div v-else>
                <img
                  id="femaleprofile"
                  src="https://i.postimg.cc/tRh3ZJRL/user.png"
                  alt="Female Profile"
                />
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  {{ user.user_fullname }}
                </div>
              </div>
              <div class="row">
                <div class="col">
                  {{ user.user_email }}
                </div>
              </div>
              <div class="row">
                <div class="col">
                  {{ user.user_type }}
                </div>
              </div>
              <div class="row">
                <div class="col">
                  {{ user.user_cart }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
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
#femaleprofile,
#maleprofile {
  width: 18rem;
  height: 18rem;
}
</style>
