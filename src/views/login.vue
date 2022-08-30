<template>
  <section id="login">
    <div id="logincard">
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
              placeholder="Password"
            />
            <label class="text-light mt-4 text-center" for="Passwordinput"
              >Password</label
            >
          </div>
          <button id="log-sendbtn" type="button" class="btn">Login</button>
        </div>
        <a href="/register">Register</a>
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
#login {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/65XcMjxf/pexels-joshua-k-ller-1366851.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#logincard {
  background: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49));

  width: 62rem;
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
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46));
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
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46));
  color: white;
}
#log-sendbtn:hover {
  color: grey;
  border: none;
}
</style>
