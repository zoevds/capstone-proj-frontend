<template>
  <section id="cart">
    <div id="cart-cont" class="container">
      <div id="cartcard" class="card">
        <h1 id="cartheading1">Your Cart</h1>
        <div v-if="cartproducts">
          <div v-for="product in cartproducts" :key="product.product_id">
            <h4>Price:R {{ product.product_price }}</h4>
          <img v-bind:src="product.product_imgURL" class="mb-2" alt="product" />
          <h3>{{ product.product_name }}</h3>
          <p>{{ product.product_category }}</p>
          Quantity:
          <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button @click="deleteFromCart(product.product_id)" class="btn-area">
            <i class="fa fa-trash"></i>
            <span class="btn2">Remove</span>
          </button>
          <div class="right-bar">
            <p class="d-flex justify-content- gap-3">
              <span>Subtotal: R{{ product.product_price }}</span>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
@font-face {
  font-family: brush;
  src: url(../assets/BajigurBrushFont-GO3wy.ttf);
}
#cart {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/5ygxj4JC/Screenshot-2022-09-08-094044.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 100vh;
}
#cartcard {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  width: 55rem;
  height: 32rem;
  /* margin-top: 6rem; */
}
#cart-cont {
  padding: 8rem;

  margin-left: 10rem;
}
#cartheading1 {
  color: white;
  font-family: brush;
  font-size: 3rem;
  text-shadow: 4px 4px 8px black;
  padding: 2rem;
}
@media only screen and (max-width: 600px) {
  #cartcard {
    width: 22rem;
    height: 32rem;

    margin-left: -17rem;
  }
}
</style>
