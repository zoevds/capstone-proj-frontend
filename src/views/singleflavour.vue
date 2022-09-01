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
#viewflavlink {
  text-decoration: none;
}
</style>
