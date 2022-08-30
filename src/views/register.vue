<template>
  <section id="register">
    <div id="regcard">
      <div class="row">
        <div class="col-6">
          <!-- input1 -->
          <div class="form-floating mb-2 p-3">
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
          <button id="reg-sendbtn" type="button" class="btn">Register</button>
        </div>
        <div class="col">
          <h1 id="registerhead1">Register</h1>
          <!-- <img
            id="reg-logoimg"
            src="https://i.postimg.cc/N0qgwFrq/vmax-logo-icon-removebg-preview.png"
            alt=" VMAX logo"
          /> -->
        </div>
      </div>
      <a href="/login">Login</a>
    </div>
  </section>
</template>
<script>
export default {};
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
  transform: rotate(90deg);
  margin-top: 12rem;
}
#regcard {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));
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
  width: 25rem;
  height: 4rem;
  border: none;
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46));
  color: white;
}
#reg-sendbtn {
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46));
  color: white;
}
#reg-sendbtn:hover {
  color: grey;
  border: none;
}
.col-6 {
  padding: 3rem;
}
</style>
