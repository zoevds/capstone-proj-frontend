<template>
  <section id="about">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1 id="about-head1">About VMAX Vapes</h1>
        </div>

        <div class="col">
          <div class="card mb-5">
            <h2 id="about-head2">What VMAX Vapes has to offer.</h2>
            <p id="aboutpg1">
              VMAX Vapes presents the most enjoyable vape flavours with that
              extra cool crisp ice after taste. VMAX Vapes also brings newer
              versions of disposables and rechargeable vapes.
            </p>
            <div>
              <img
                id="logo"
                src="https://i.postimg.cc/VLB4HK3w/vmax-logo.jpg"
                alt="aboutimg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div id="aboutcard2">
            <h2 id="abouthead3">Different flavours</h2>
            <p id="aboutpg2">
              VMAX Vapes provides a big variety of vape flavours, common and
              uncommon flavours. To find out more about our flavours...
            </p>

            <div>
              <img
                id="flavimg"
                src="https://i.postimg.cc/tJNcRs6Y/e-liquids-uk-8s-YBWt-YW3j-E-unsplash.jpg"
                alt="flavour image"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <h2 id="abouthead4">Explore our Different flavours</h2>
          <a href="/products" class="p-2">
            explore more
            <img
              id="arrowimg"
              src="https://i.postimg.cc/VLt0WBK8/arrows-removebg-preview.png"
              alt="arrow"
            />
          </a>
        </div>
      </div>
      <a id="arrowhref" href="#about"
        ><i id="arrowup" class="fa-solid fa-arrow-up-long"></i
      ></a>
    </div>
  </section>
</template>
<script></script>
<style scoped>
#about {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/vBCJs6CW/pexels-daria-shevtsova-2053892.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 220vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#about-head2 {
  color: white;
  font-family: "Aboreto", cursive;
  font-size: 3rem;
  text-shadow: 4px 4px 8px black;
  margin-top: 2rem;
}

#about-head1 {
  color: white;
  font-family: "Rock Salt", cursive;
  font-size: 6rem;
  text-shadow: 4px 4px 8px black;
  padding: 2rem;
  margin-top: 13rem;
}
.card {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  width: 30rem;
  height: 43rem;
  color: white;
  margin-left: 3rem;
  box-shadow: 3px 3px 6px black;
  margin-top: 9rem;
  padding: 3rem;
}
#aboutcard2 {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  width: 30rem;
  height: 39rem;
  color: white;
  margin-left: 3rem;
  box-shadow: 3px 3px 6px black;
  padding: 3rem;
  border-radius: 8px;
}
#aboutpg1,
#aboutpg2 {
  display: flex;
  justify-content: center;
  text-shadow: 3px 3px 6px black;
}
#arrowimg {
  width: 3.5rem;
}
#abouthead3 {
  color: white;
  font-family: "Aboreto", cursive;
  font-size: 3rem;
  text-shadow: 3px 3px 6px black;
  margin-top: 2rem;
}
#flavimg {
  width: 25rem;
  height: 15rem;
  border-radius: 8px;
  box-shadow: 3px 3px 6px black;
  filter: grayscale();
}
#logo {
  width: 25rem;
  height: 15rem;
  border-radius: 8px;
  box-shadow: 3px 3px 6px black;
}
a:hover {
  color: black;
}
a {
  color: white;
  text-shadow: 3px 3px 6px black;
  font-size: 1.5rem;
  text-decoration: none;
}
img#arrowimg:hover {
  color: black;
}
#abouthead4 {
  color: white;
  font-size: 4rem;
  text-shadow: 4px 4px 8px black;
  margin-top: 6rem;
  padding: 2rem;
  font-family: "Rock Salt", cursive;
}
#arrowup {
  display: flex;
  justify-content: end;
  font-size: 2rem;
  color: white;
}
/* #arrowhref {
  color: white;
} */
#arrowup:hover {
  color: black;
}
@media only screen and (max-width: 600px) {
  body,
  html {
    overflow-x: hidden;
  }
  #about-head1[data-v-e7ab893a] {
    font-size: 4rem;

    padding: 1rem;
    margin-top: 7rem;
  }
  .card[data-v-e7ab893a] {
    width: 20rem;
    height: 27rem;
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 2rem;
  }
  #about-head2[data-v-e7ab893a] {
    font-size: 1.4rem;
    margin-top: 0%;
  }
  #aboutpg1[data-v-e7ab893a],
  #aboutpg2[data-v-e7ab893a] {
    display: flex;
    justify-content: center;
    text-shadow: 3px 3px 6px black;
    font-size: 0.8rem;
  }
  #logo[data-v-e7ab893a] {
    width: 16rem;
    height: 10rem;
  }
  #aboutcard2[data-v-e7ab893a] {
    width: 20rem;
    height: 27rem;
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 2rem;
  }
  #abouthead3[data-v-e7ab893a] {
    font-size: 1.4rem;
    margin-top: 0%;
  }
  #flavimg[data-v-e7ab893a] {
    width: 16rem;
    height: 10rem;
  }
  #abouthead4[data-v-e7ab893a] {
    font-size: 3rem;
    margin-top: 1rem;
  }
  a[data-v-e7ab893a] {
    font-size: 1rem;
  }
  ::before {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
}
</style>
