<template>
  <section id="userprofile">
    <div id="profile-cont" class="container">
      <div>
        <div id="profilecard" class="card">
          <h1 id="userprofile-head1">Your Profile</h1>
          <div class="row">
            <div class="col">
              <div v-if="user.user_gender === 'male'">
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
          </div>
          <div class="row">
            <div id="content-col" class="col">
              <div class="row">
                <h2 id="userdetails">User Details:</h2>
                <div id="userprofilename" class="col">
                  Name: {{ user.user_fullname }}
                </div>
              </div>
              <div class="row">
                <div id="userprofileemail" class="col">
                  Email: {{ user.user_email }}
                </div>
              </div>
              <div class="row">
                <div id="userprofiletype" class="col">
                  User Type: {{ user.user_type }}
                </div>
              </div>
              <div class="row">
                <div id="userprofilecart" class="col">
                  <button id="usercartbtn">
                    Your Cart{{ user.user_cart }}
                  </button>
                </div>
              </div>
            </div>

            <div id="content-col" class="col">
              <h2 id="useraddress">User Address:</h2>
              <div id="row1" class="row">
                User Billing Address: {{ user.user_billing_address }}
              </div>
              <div id="row2" class="row">
                User Shipping Address: {{ user.user_shipping_address }}
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
  width: 63rem;
  height: 45rem;
  /* margin-top: 6rem; */
}
#profile-cont {
  padding: 8rem;

  margin-left: 10rem;
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
#useraddress,
#userdetails {
  color: whitesmoke;
}
#row2 {
  color: white;
  margin-left: 6rem;
}
div#row1 {
  color: white;
  margin-left: 10rem;
}
#userprofilename,
#userprofileemail,
#userprofiletype,
#userprofilecart {
  color: white;
  margin-bottom: 1rem;
}
#usercartbtn {
  background-color: black;
  color: white;
  border: none;
  box-shadow: 2px 2px 4px white;
  border-radius: 4px;
}

#content-col {
  margin-top: 4rem;
}

@media only screen and (max-width: 600px) {
  #profilecard {
    width: 21rem;
    height: 45rem;
    margin-top: 2rem;

    margin-left: -16.5rem;
  }
  #userprofile-head1 {
    font-size: 2rem;
  }
  #femaleprofile,
  #maleprofile {
    width: 10rem;
    height: 10rem;
    margin-bottom: 2rem;
  }
  #row2 {
    color: white;
    margin-left: 0.1em;
    padding: 1rem;
  }
  div#row1 {
    color: white;
    margin-left: 3rem;
  }
  #userprofilename,
  #userprofileemail,
  #userprofiletype,
  #userprofilecart {
    margin-bottom: 1rem;
  }
  #content-col {
    margin-top: 0.5rem;
  }
}
@media only screen and (max-width: 800px) {
  body,
  html {
    overflow-x: hidden;
  }
  #profilecard {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    width: 42rem;
    height: 45rem;
    /* margin-top: 6rem; */
    margin-left: -14rem;
  }
  div#row1 {
    color: white;
    margin-left: 2rem;
  }
  #row2 {
    color: white;
    margin-left: -1rem;
    
  }
}
</style>