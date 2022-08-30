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
          <div id="aboutcard2" class="card">
            <h2 id="abouthead3">Different flavours</h2>
            <p id="aboutpg2">
              VMAX Vapes provides a big variety of vape flavours, common and
              uncommon flavours. To find out more about our flavours...
            </p>

            <a href="/products" class="mb-4">
              explore more
              <i id="abouticon" class="fa-solid fa-arrow-right-long"></i>
            </a>
            <div>
              <img
                id="flavimg"
                src="https://i.postimg.cc/tJNcRs6Y/e-liquids-uk-8s-YBWt-YW3j-E-unsplash.jpg"
                alt="flavour image"
              />
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
#about {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/TYHsBwsR/pexels-james-frid-8482449.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 200vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#about-head2 {
  color: white;
  font-family: "Aboreto", cursive;
  font-size: 3rem;
  text-shadow: 3px 3px 6px black;
  margin-top: 2rem;
}

#about-head1 {
  color: white;
  font-family: "Aboreto", cursive;
  font-size: 6rem;
  text-shadow: 3px 3px 6px black;
  padding: 6rem;
  margin-top: -3rem;
}
.card {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));
  width: 30rem;
  height: 39rem;
  color: white;
  margin-left: 3rem;
}
#aboutcard2 {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));
  width: 30rem;
  height: 39rem;
  color: white;
  margin-left: 3rem;
}
#aboutpg1,
#aboutpg2 {
  display: flex;
  justify-content: center;
}
::before {
  display: flex;
  justify-content: center;
  /* margin-top: 5rem; */
  margin-right: rem;
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
}
</style>
