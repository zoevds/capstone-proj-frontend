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
        :post="post"
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
          <a href="">view product</a>
          <!-- <router-link
            :to="{
              name: 'singleCard',
              params: {
                id: product_id,
              },
            }"
          >
            <div class="btn">
              <span>View Product</span>
            </div></router-link
          > -->
        </div>
      </div>
    </div>
  </section>
  <section id="flavours">
    <h1 id="flavhead1">Different Flavours</h1>
    <p id="flavpg">Explore our different vape flavours</p>
  </section>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      // console.log(this.$store.state.products);
      return this.$store.state.products;
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
}
#flavhead1 {
  color: white;
  font-family: "Rock Salt", cursive;
  font-size: 4rem;
  text-shadow: 4px 4px 8px black;
  padding: 2rem;
}
#products {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/PJSKP48B/pexels-tim-mossholder-2180803.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 100vh;
  margin-top: -5rem;
}
#flavours {
  min-height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/HnTdppQ6/pexels-stanislav-kondratiev-3269267.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
.col {
  margin-bottom: 10px;
}
#prodimg {
  width: 23rem;
  height: 15rem;
  border-radius: 6px;
}
</style>
