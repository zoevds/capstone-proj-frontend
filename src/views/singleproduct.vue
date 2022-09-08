<template>
  <section id="singleproduct">
    <div v-if="product">
      <div
        v-for="product in product"
        :key="product.product_id"
        class="item"
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
                  <div class="row">
                    <div class="col">
                      <ul class="productwrapper">
                        <li class="producticon productcart">
                          <span class="producttooltip">Add to cart</span>
                          <span><i class="fa-solid fa-cart-shopping"></i></span>
                        </li>
                      </ul>

                      <ul class="productwrapper">
                        <li class="producticon productcart">
                          <span class="producttooltip">Go Back</span>
                          <span
                            ><router-link to="/products"
                              ><i
                                id="routeid"
                                class="fa-solid fa-arrow-left-long"
                              ></i></router-link
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
  methods: {
    addToCart() {
      return this.$store.dispatch("addToCart");
    },
  },
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
  min-height: 100vh;
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
/* .card-body {
  margin-top: 8rem;
} */
#routeid {
  color: white;
  font-size: 2rem;
}
.productwrapper {
  display: inline-flex;
  list-style: none;
  margin-top: 3rem;
  /* font-size: 2rem; */
}

.productwrapper .producticon {
  position: relative;
  background: black;
  border-radius: 8px;
  /* padding: 15px; */
  /* margin: 10px; */
  width: 10rem;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 4px 4px 8px black;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.productwrapper .producttooltip {
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

.productwrapper .producttooltip::before {
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

.productwrapper .producticon:hover .producttooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.productwrapper .producticon:hover span,
.productwrapper .producticon:hover .producttooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.productwrapper .productcart:hover,
.productwrapper .productcart:hover .producttooltip,
.productwrapper .productcart:hover .producttooltip::before {
  background: grey;
  color: black;
}
@media only screen and (max-width: 600px) {
  div#singlecard {
    width: 21.5rem;
    margin-top: 8rem;
  }
  p#singleprodname {
    margin-top: -4rem;
  }
  .productwrapper .producticon {
    width: 5rem;
    height: 50px;

    margin-right: 1rem;
  }
}
</style>
