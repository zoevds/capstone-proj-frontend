<template>
  <section id="singleflavour">
    <div v-if="flavour">
      <div
        v-for="flavour in flavour"
        :key="flavour.flavour_id"
        :flavour="flavour"
      >
        <div class="d-flex justify-content-center">
          <div id="singleflavcard" class="card">
            <div class="row">
              <div class="col-md-6">
                <img
                  id="imgflav"
                  :src="flavour.flavour_imgURL"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <p id="singleflavname" class="card-text">
                    {{ flavour.flavour_name }}
                  </p>

                  <p class="card-text">{{ flavour.flavour_desc }}</p>
                  <p class="card-text">R {{ flavour.flavour_price }}</p>
                </div>
                <div class="row">
                  <div class="col">
                    <ul class="flavwrapper">
                      <li class="flavicon flavcart">
                        <span class="flavtooltip">Add to cart</span>
                        <span><i class="fa-solid fa-cart-shopping"></i></span>
                      </li>
                    </ul>
                    <ul class="flavwrapper">
                      <li class="flavicon flavcart">
                        <span class="flavtooltip">Go Back</span>
                        <span
                          ><router-link to="/products"
                            ><i
                              id="routeflav"
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
  </section>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    flavour() {
      return this.$store.state.flavour;
    },
  },

  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getFlavour", this.$route.params.id);
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
#singleflavour {
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
#singleflavcard {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  width: 60rem;
  height: fit-content;
  margin-top: 15rem;
  color: white;
  margin-bottom: 3rem;
  box-shadow: 4px 4px 8px black;
}
#singleflavname {
  font-size: 3rem;
}
#routeflav {
  color: white;
  font-size: 2rem;
}
#viewflavlink {
  text-decoration: none;
}
.flavwrapper {
  display: inline-flex;
  list-style: none;
  margin-top: 3rem;
}

.flavwrapper .flavicon {
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

.flavwrapper .flavtooltip {
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

.flavwrapper .flavtooltip::before {
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

.flavwrapper .flavicon:hover .flavtooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.flavwrapper .flavicon:hover span,
.flavwrapper .flavicon:hover .flavtooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.flavwrapper .flavcart:hover,
.flavwrapper .flavcart:hover .flavtooltip,
.flavwrapper .flavcart:hover .flavtooltip::before {
  background: grey;
  color: black;
}
</style>
