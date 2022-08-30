<template>
  <section id="contact">
    <div id="contactcard">
      <h1 id="contacthead1">Contact</h1>
      <!-- input1 -->
      <div class="form-floating mb-2 p-3">
        <input
          type="fullname"
          class="form-control"
          id="floatingInput11"
          placeholder="Fullname"
        />
        <label class="text-light mt-3 text-center" for="floatingInput11"
          >Fullname</label
        >
      </div>
      <!-- input2 -->
      <div class="form-floating mb-2 p-3">
        <input
          type="email"
          class="form-control"
          id="emailInput1"
          placeholder="name@example.com"
        />
        <label class="text-light mt-3 text-center" for="emailInput1"
          >Email address</label
        >
      </div>
      <!-- input3 -->

      <div class="form-floating mb-2 p-3">
        <input
          type="text"
          class="form-control"
          id="floatingmessage"
          placeholder="Message"
        />
        <label class="text-light mt-3 text-center" for="floatingmessage"
          >Message</label
        >
      </div>
      <button id="cont-sendbtn" type="button" class="btn">Send</button>
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
#contact {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/4nCfZdj7/pexels-aleksandar-pasaric-3048528.jpg);
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
#contactcard {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  width: 42rem;
  height: 35rem;
  box-shadow: 3px 3px 4px black;
  margin-top: 4rem;
  border-radius: 8px;
  padding: 2rem;
}
#contacthead1 {
  font-family: brush;
  color: white;
  font-size: 3rem;
  padding: 2rem;
}

#emailInput1,
#floatingInput11 {
  width: 36rem;
  height: 4rem;
  border: none;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  color: white;
  margin-bottom: -1rem;
}
#floatingmessage {
  width: 36rem;
  height: 8rem;
  border: none;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  color: white;
  margin-bottom: -1rem;
}
.form-control {
  padding: 3rem;
}
#cont-sendbtn {
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  color: white;
}
#cont-sendbtn:hover {
  color: #2c3e50;
  border: none;
}
@media only screen and (max-width: 600px) {
  body,
  html {
    overflow-x: hidden;
  }
  #contactcard {
    width: 21rem;
    height: 33rem;
    margin-top: 7rem;
  }
  #contacthead1 {
    font-size: 3rem;
    padding: 0%;
  }
  #emailInput1,
  #floatingInput11 {
    width: 15rem;
    height: 4rem;
  }
  #floatingmessage {
    width: 15rem;
    height: 7rem;
    margin-bottom: 1rem;
  }
}
</style>
