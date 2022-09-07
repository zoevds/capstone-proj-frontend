<template>
  <section id="products">
    <h1 id="producthead1">all products</h1>
    <p id="prodpg">Have a look at our different VMAX Vapes and models.</p>

    <!-- search bar -->
    <form class="form">
      <button>
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            stroke-width="1.333"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <input
        class="input"
        placeholder="Type your text"
        required=""
        type="text"
      />
      <button class="reset" type="reset">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </form>
    <!-- search bar -->
    <div v-if="filteredProducts" class="row">
      <div
        v-for="product in filteredProducts"
        :key="product.product_id"
        :post="post"
        class="col-lg-4"
      ></div>
    </div>
    <!-- <div class="col"> -->
    <div v-if="products" id="container">
      <div
        id="vfor-div"
        v-for="product of products"
        :key="product.product_id"
        :product="product"
      >
        <div id="prodcard" class="card">
          <div class="col">
            <h1 id="prodhead1">{{ product.product_name }}</h1>
            <!-- </div> -->
            <!-- <div class="col"> -->
            <img id="prodimg" :src="product.product_imgURL" alt="" />

            <!-- </div> -->
            <div class="col">
              {{ product.product_desc }}
            </div>
            <div class="row">
              <div class="col">R {{ product.product_price }}</div>
              <div class="col">
                {{ product.product_weight }}
              </div>
              <div class="col">
                {{ product.product_category }}
              </div>
            </div>
          </div>
          <!-- view button -->
          <ul class="prodwrapper">
            <li class="prodicon viewprod">
              <span class="prodtooltip">View Product</span>
              <span>
                <router-link
                  id="viewprodlink"
                  :to="{
                    name: 'singleproduct',
                    params: {
                      id: product.product_id,
                    },
                  }"
                  ><i class="fa-solid fa-eye"></i></router-link
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="wrapper mx-auto">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
    </div>
  </section>
  <section id="flavours">
    <h1 id="flavhead1">Different Flavours</h1>
    <p id="flavpg">Explore our different vape flavours</p>
    <div class="container">
      <div v-if="products"></div>
      <div class="row p-5">
        <div
          id="vfor-div"
          v-for="flavour of flavours"
          :key="flavour.flavour_id"
          :flavour="flavour"
          class="col-md-4 p-5"
        >
          <div class="row">
            <!-- <div class="col-md-4"> -->
            <div id="flavcard" class="card">
              <!-- <div class="col"> -->
              <h1 id="flavcardhead2">{{ flavour.flavour_name }}</h1>
              <!-- </div> -->
              <!-- <div class="col"> -->
              <img
                id="flavimg"
                class="img-fluid"
                :src="flavour.flavour_imgURL"
                alt=""
              />

              <!-- </div> -->
              <!-- <div class="col"> -->
              <div class="flavour-info">
                <!-- {{ flavour.flavour_desc }} -->
                <div id="pricerow" class="row">
                  <!-- <div class="col"> -->
                  R {{ flavour.flavour_price }}
                  <ul class="flavourwrapper">
                    <li class="flavouricon flavourcart">
                      <span class="flavourtooltip">View Flavour</span>
                      <span>
                        <router-link
                          id="viewflavlink"
                          :to="{
                            name: 'singleflavour',
                            params: {
                              id: flavour.flavour_id,
                            },
                          }"
                          ><i class="fa-solid fa-eye"></i></router-link
                      ></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div>
      </div>
    </div> -->
    <!-- </div> -->
  </section>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getFlavours");
  },
  computed: {
    products() {
      // console.log(this.$store.state.products);
      return this.$store.state.products;
    },
    flavours() {
      return this.$store.state.flavours;
    },
  },
  filteredProducts() {
    return this.$store.state.products?.filter((product) => {
      let isMatch = true;
      if (
        !product.product_name?.toLowerCase().includes(this.search.toLowerCase())
      )
        isMatch = false;
      return isMatch;
    });
  },
};
</script>
<style>
@font-face {
  font-family: brush;
  src: url(../assets/BajigurBrushFont-GO3wy.ttf);
}
body,
html {
  overflow-x: hidden;
  /* overflow-y: hidden; */
  min-height: 100vh;
}
#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  gap: 50px;
}
#prodhead1 {
  font-size: 2rem;
  font-family: brush;
}
#flavpg {
  font-size: 2rem;
  font-family: brush;
  color: white;
}
#prodpg {
  font-size: 2rem;
  font-family: brush;
  color: white;
  margin-top: -4rem;
  text-shadow: 4px 4px 8px black;
}
#flavcardhead2 {
  font-size: 2rem;
  font-family: "Rock Salt", cursive;
  text-shadow: 4px 4px 8px black;
}
#flavhead1 {
  color: white;
  font-family: "Rock Salt", cursive;
  font-size: 4rem;
  text-shadow: 4px 4px 8px black;
  padding: 2rem;
}
#pricerow {
  display: flex;
  justify-content: center;
}
#products {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/qRdr3sck/background-wallpaper.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 100vh;
  margin-top: -5rem;
}
img#flavimg {
  /* width: 400px; */
  object-fit: contain;
  aspect-ratio: 1;
}
#flavours {
  min-height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/g0MNS1yp/pexels-renz-macorol-3545426.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#producthead1 {
  color: white;
  font-family: "Rock Salt", cursive;
  font-size: 6rem;
  text-shadow: 4px 4px 8px black;
  padding: 6rem;
  margin-top: 5rem;
}
div#prodcard {
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  height: 35rem;
  width: 28rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  /* margin-left: 35rem; */
  color: white;
  padding: 2rem;
  box-shadow: 4px 4px 8px black;
}
#flavcard {
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  width: 320px;
  height: 490px;
  /* margin-bottom: 2rem; */
  color: white;
  padding: 1rem;
  box-shadow: 4px 4px 8px black;
}
/* .col {
  margin-bottom: 10px;
} */
#prodimg {
  width: 23rem;
  height: 15rem;
  border-radius: 6px;
  object-fit: cover;
  aspect-ratio: 1;
}
#viewprodlink {
  text-decoration: none;
  color: white;
}
#viewflavlink {
  text-decoration: none;
  color: white;
}
/* FLAVOUR BUTTON */
.flavourwrapper {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 1rem;
}

.flavourwrapper .flavouricon {
  position: relative;
  background: black;
  border-radius: 8px;
  /* padding: 15px; */
  /* margin: 10px; */
  width: 10rem;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 4px 4px 8px black;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.flavourwrapper .flavourtooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  /* margin-top: 3rem; */
  margin-bottom: 2rem;
}

.flavourwrapper .flavourtooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.flavourwrapper .flavouricon:hover .flavourtooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.flavourwrapper .flavouricon:hover span,
.flavourwrapper .flavouricon:hover .flavourtooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.flavourwrapper .flavourcart:hover,
.flavourwrapper .flavourcart:hover .flavourtooltip,
.flavourwrapper .flavourcart:hover .flavourtooltip::before {
  background: grey;
  color: black;
}
/* PRODUCT BUTTON */
.prodwrapper {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 3rem;
  margin-right: 1rem;
}

.prodwrapper .prodicon {
  position: relative;
  background: black;
  border-radius: 8px;
  /* padding: 15px; */
  /* margin: 10px; */
  width: 10rem;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 4px 4px 8px black;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.prodwrapper .prodtooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  /* margin-top: 3rem; */
  margin-bottom: 2rem;
}

.prodwrapper .prodtooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.prodwrapper .prodicon:hover .prodtooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.prodwrapper .prodicon:hover span,
.prodwrapper .prodicon:hover .prodtooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.prodwrapper .viewprod:hover,
.prodwrapper .viewprod:hover .prodtooltip,
.prodwrapper .viewprod:hover .prodtooltip::before {
  background: grey;
  color: black;
}
/* loading bar */

.wrapper {
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 0.5s alternate infinite ease;
  /* display: flex;
  justify-content: center; */
}

@keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

.circle:nth-child(2) {
  left: 45%;
  animation-delay: 0.2s;
}

.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}

.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 0.5s alternate infinite ease;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }

  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}

.shadow:nth-child(4) {
  left: 45%;
  animation-delay: 0.2s;
}

.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}

/* search bar */

.form button {
  border: none;
  background: none;
  color: #8b8ba7;
}
/* styling of whole input container */
.form {
  --timing: 0.3s;
  --width-of-input: 30rem;
  --height-of-input: 3rem;
  --border-height: 2px;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  --border-color: black;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;

  margin-bottom: 2rem;
  margin-left: 30rem;
}
/* styling of Input */
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  color: white;
}
/* styling of animated border */
.form:before {
  content: "";
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
  transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
  border: none;
  background: none;
  opacity: 0;
  visibility: hidden;
}
/* close button shown when typing */
input:not(:placeholder-shown) ~ .reset {
  opacity: 1;
  visibility: visible;
}
/* sizing svg icons */
.form svg {
  width: 17px;
  margin-top: 3px;
}
@media only screen and (max-width: 600px) {
  body,
  html {
    overflow-x: hidden;
  }
  #producthead1 {
    font-size: 3rem;

    padding: 6rem;
    margin-top: 5rem;
    margin-left: -3rem;
  }
  #prodpg {
    font-size: 1.5rem;
    margin-top: -4rem;
    padding: 2rem;
  }
  div#prodcard {
    height: 36rem;
    width: 21rem;
    margin-bottom: 2rem;
    padding: 1rem;
  }
  #prodimg {
    width: 19rem;

    margin-bottom: 1rem;
  }
  .prodwrapper .prodicon {
    margin-top: -1.5rem;
  }
  #flavhead1 {
    font-size: 2.5rem;
  }
  #flavpg {
    font-size: 1.6rem;

    padding: 1rem;
  }
  .p-5 {
    padding: 1rem !important;
  }
  #flavcard {
    width: 331px;
    height: 490px;
    padding: 2rem;
  }
  img#flavimg {
    margin-bottom: 1rem;
  }
  .form {
    --width-of-input: 21rem;

    margin-left: 1.2rem;
  }
}
</style>
