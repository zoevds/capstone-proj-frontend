<template>
  <section id="singleproduct">
    <div v-if="product">
      <div
        v-for="product in product"
        :key="product.product_id"
        :product="product"
      >
        <div class="d-flex justify-content-center">
          <div id="singlecard" class="card">
            <div class="row">
              <div class="col-md-6">
                <img
                  id="imgprod"
                  :src="product.product_imgURL"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <p id="singleprodname" class="card-text">
                    {{ product.product_name }}
                  </p>

                  <p class="card-text">
                    Description: {{ product.product_desc }}
                  </p>
                  <p class="card-text">Price: R {{ product.product_price }}</p>
                  <p class="card-text">
                    Version: {{ product.product_category }}
                  </p>
                  <ul class="wrapper">
                    <li class="icon cart">
                      <span class="tooltip">Add to cart</span>
                      <span><i class="fa-solid fa-cart-shopping"></i></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },

  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  // mounted() {
  //   fetch("https://capstone-fin.herokuapp.com/products/" + this.id)
  //     .then((res) => res.json())
  //     .then((data) => (this.product = data));
  // },
  // };
};
</script>
<style>
#singleproduct {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/rmHXf9N6/pexels-skyler-ewing-4598235.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 130vh;
}
.col-md-6 {
  padding: 2rem;
  margin-top: 2rem;
}
#singlecard {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  width: 60rem;
  height: fit-content;
  margin-top: 10rem;
  color: white;
  margin-bottom: 3rem;
  box-shadow: 4px 4px 8px black;
}
#singleprodname {
  font-size: 3rem;
}
#singleprodtbn {
  border-radius: 8px;
}
.card-body {
  margin-top: 8rem;
}
.wrapper {
  display: inline-flex;
  list-style: none;
  margin-top: 3rem;
}

.wrapper .icon {
  position: relative;
  background: black;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
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

.wrapper .tooltip::before {
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

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .cart:hover,
.wrapper .cart:hover .tooltip,
.wrapper .cart:hover .tooltip::before {
  background: grey;
  color: black;
}
</style>
