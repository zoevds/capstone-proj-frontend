<template>
  <section id="register">
    <div id="regcard">
      <div class="row">
        <div class="col">
          <h1 id="registerhead1">Register</h1>
        </div>
        <div class="col">
          <form @submit.prevent="createUser()">
            <!-- input1 -->
            <div class="form-floating mt-5 mb-2 p-3">
              <input
                type="fullname"
                class="form-control"
                id="floatingInput1"
                placeholder="Fullname"
              />
              <label class="text-light mt-3 text-center" for="floatingInput1"
                >Fullname</label
              >
            </div>
            <!-- input2 -->
            <div class="form-floating mb-2 p-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label class="text-light mt-3 text-center" for="floatingInput"
                >Email address</label
              >
            </div>
            <!-- input3 -->

            <div class="form-floating mb-3 p-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label class="text-light mt-3 text-center" for="floatingPassword"
                >Password</label
              >
            </div>
            <button
              id="reg-sendbtn"
              type="submit"
              class="btn"
              @click.prevent="createUser"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <p id="pg">Already Have an account?</p>
      <a href="/">Login</a>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      user_fullname: "",
      user_email: "",
      user_billing_address: "",
      user_shipping_address: "",
      user_order_date: "",
      user_password: "",
      user_type: "",
      showError: false,
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("createUser", {
        user_fullname: this.user_fullname,
        user_email: this.user_email,
        user_billing_address: this.user_billing_address,
        user_shipping_address: this.user_shipping_address,
        user_order_date: this.user_order_date,
        user_password: this.user_password,
        user_type: this.user_type,
      });
    },
    // register() {
    //   this.$store.dispatch("register", {
    //     user_fullname: this.user_fullname,
    //     user_email: this.user_email,
    //     user_password:this.user_password

    //   });
    // },
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>
<style>
@font-face {
  font-family: brush;
  src: url(../assets/BajigurBrushFont-GO3wy.ttf);
}
#register {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/rs4Z1VQc/pexels-vincent-gerbouin-2263686.jpg);
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
#registerhead1 {
  color: white;
  font-family: brush;
  padding: 1rem;
  font-size: 7rem;

  translate: 90deg;
  transform: rotate(-90deg);
  margin-top: 11rem;
}
#regcard {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  /* url(https://i.postimg.cc/N0qgwFrq/vmax-logo-icon-removebg-preview.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed; */
  width: 62rem;
  height: 33rem;
  box-shadow: 3px 3px 4px black;
  margin-top: 6rem;
  border-radius: 8px;
}
#reg-logoimg {
  width: 20rem;
  height: 10rem;
  filter: invert();

  margin-top: 6.5rem;
}
#floatingInput,
#floatingPassword,
#floatingInput1 {
  width: 27rem;
  height: 4rem;
  border: none;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  color: white;
}
#reg-sendbtn {
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  color: white;
  margin-right: 2.5rem;
}
#pg {
  color: white;
}
#reg-sendbtn:hover {
  color: grey;
  border: none;
}
/* .col-6 {
  padding: 3rem;
  margin-top: 2rem;
} */
@media only screen and (max-width: 600px) {
  body,
  html {
    overflow-x: hidden;
  }
  #regcard {
    width: 21rem;
    height: 34rem;
  }
  #registerhead1 {
    color: white;
    font-family: brush;
    padding: 1rem;
    font-size: 3rem;
    translate: 90deg;
    transform: rotate(-0deg);
    margin-top: 0rem;
  }
  #floatingInput,
  #floatingPassword,
  #floatingInput1 {
    width: 19rem;
    height: 3.5rem;
  }
  #reg-sendbtn {
    margin-right: 0%;
    margin-bottom: 1rem;
  }
}
@media only screen and (max-width: 800px) {
  #regcard {
    width: 43rem;
    height: 36rem;
    margin-top: 8rem;
    margin-bottom: 3rem;
  }
  #registerhead1 {
    color: white;
    font-family: brush;
    padding: 1rem;
    font-size: 4rem;
    translate: 90deg;
    transform: rotate(0deg);
    margin-top: 0rem;
  }
  #floatingInput,
  #floatingPassword,
  #floatingInput1 {
    width: 36rem;
    height: 4rem;
    border: none;
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
    color: white;
    margin-left: 3rem;
    margin-top: -1rem;
  }
  #reg-sendbtn {
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
    color: white;
    margin-right: 0rem;
    margin-bottom: 1rem;
  }
}
</style>
