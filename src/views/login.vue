<template>
  <section id="login">
    <div id="logincard">
      <form>
        <div class="row">
          <div class="col">
            <h1 id="loginhead1">Login</h1>
          </div>
          <div id="col-6" class="col">
            <div class="form-floating mb-2 p-3">
              <input
                type="email"
                class="form-control"
                id="emailInput"
                v-model="user_email"
                placeholder="name@example.com"
              />
              <label class="text-light mt-3 text-center" for="emailInput"
                >Email address</label
              >
            </div>
            <!-- input3 -->

            <div class="form-floating mb-4 p-3">
              <input
                type="password"
                class="form-control"
                id="Passwordinput"
                v-model="user_password"
                placeholder="Password"
              />
              <label class="text-light mt-4 text-center" for="Passwordinput"
                >Password</label
              >
            </div>
            <button
              id="log-sendbtn"
              type="onclick"
              class="btn"
              @click.prevent="login()"
            >
              Login
            </button>
            <div id="usermessage" v-if="user">
              Welcome {{ user.user_fullname }}
            </div>
          </div>
          <footer class="fooooter">
            Don't have an account?
            <router-link to="/register">Register</router-link>
          </footer>
          <!-- <a href="/register">Register</a> -->
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      user_email: "",
      user_password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        user_email: this.user_email,
        user_password: this.user_password,
      });
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: brush;
  src: url(../assets/BajigurBrushFont-GO3wy.ttf);
}
#login {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/nrqKYdbX/pexels-rucx-co-4220349.jpg);
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
#logincard {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));

  width: 58rem;
  height: 33rem;
  box-shadow: 3px 3px 4px black;
  margin-top: 6rem;
  border-radius: 8px;
}
#emailInput,
#Passwordinput {
  width: 28rem;
  height: 4rem;
  border: none;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  color: white;
}
#usermessage {
  color: white;
}

#col-6 {
  padding: 4rem;
  margin-top: 3rem;
}

#loginhead1 {
  color: white;
  font-family: brush;
  padding: 1rem;
  font-size: 7rem;
  translate: 90deg;
  transform: rotate(-90deg);
  margin-top: 12rem;
}
#log-sendbtn {
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  color: white;
}
#log-sendbtn:hover {
  color: grey;
  border: none;
}
.fooooter {
  color: white;
}
#loginhead2 {
  display: none;
}
@media only screen and (max-width: 600px) {
  #logincard {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    width: 21.5rem;
    height: 33rem;
    box-shadow: 3px 3px 4px black;
    margin-top: 6rem;
    border-radius: 8px;
  }

  #col-6 {
    padding: 3rem;
    margin-top: -0.5rem;
  }
  #loginhead1 {
    color: white;
    font-family: brush;
    padding: 1rem;
    font-size: 4rem;
    translate: 90deg;
    transform: rotate(0deg);
    margin-top: 0rem;
  }
  #emailInput,
  #Passwordinput {
    width: 15rem;
    height: 4rem;
    border: none;
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
    color: white;
  }
}
@media only screen and (max-width: 800px) {
  .navbar {
    background-color: black;
    border-radius: 12px;
    /* margin-top: 1.5rem; */
    z-index: 100;
    position: fixed;
    width: 99%;
    padding: 20px;
    margin-top: 1.5rem;
  }
  #logincard {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    width: 43rem;
    height: 33rem;
    box-shadow: 3px 3px 4px black;
    margin-top: 6rem;
    border-radius: 8px;
  }
  #loginhead1 {
    color: white;
    font-family: brush;
    padding: 1rem;
    font-size: 4rem;
    translate: 90deg;
    transform: rotate(0deg);
    margin-top: 1rem;
  }
  #col-6 {
    padding: 2rem;
    margin-top: -1rem;
  }
  #emailInput,
  #Passwordinput {
    width: 35rem;
    height: 4rem;
    border: none;
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
    color: white;
    margin-left: 2rem;
  }
  #log-sendbtn {
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
    color: white;
    margin-bottom: 1rem;
  }
}
</style>
