<template>
  <section id="products">
    <h1 id="producthead1">all products</h1>
    <p id="prodpg">Have a look at our different VMAX Vapes and models.</p>
    <!-- <div class="col"> -->
    <div id="container">
      <div
        id="vfor-div"
        v-for="product of products"
        :key="product.product_id"
        :product="product"
      >
        <div id="prodcard" class="card">
          <div class="col">
            <!-- <router-link
              id="product-link"
              :to="{ name: 'singleproduct', params: { id: products.id } }"
            > -->
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
          <router-link
            id="viewprodlink"
            :to="{
              name: 'singleproduct',
              params: {
                id: product.product_id,
              },
            }"
            >View Product</router-link
          >
        </div>
      </div>
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
                  <router-link
                    id="viewflavlink"
                    :to="{
                      name: 'singleflavour',
                      params: {
                        id: flavour.flavour_id,
                      },
                    }"
                    >View Product</router-link
                  >
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
    url(https://i.postimg.cc/jSM3b4LL/pexel.jpg);
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
    url(https://i.postimg.cc/htNZNKCf/background-flav.jpg);
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
  height: 30rem;
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
  width: 300px;
  height: 430px;
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
}

@media only screen and (max-width: 600px) {
  body,
  html {
    overflow-x: hidden;
  }
}
</style>
