<template>
  <section id="admintables">
    <div class="row">
      <div class="col">
        <h1 id="usertable1">User Table</h1>
        <!-- add user modal -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Add User
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-dark text-light">
                <h5 class="modal-title" id="exampleModalLabel1">Add User</h5>
                <button
                  type="button"
                  class="btn-close bg-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body bg-dark">
                <!-- input 1 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="User Full Name"
                />
                <!-- input 1 -->
                <!-- input 2 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder=" User Email"
                />
                <!-- input 2 -->
                <!-- input 3 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="User Billing address"
                />
                <!-- input 3 -->
                <!-- input 4 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="User Shipping Address"
                />
                <!-- input 4 -->
                <!-- input 5 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="User Order Date"
                />
                <!-- input 5 -->
                <!-- input 6 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="User Type"
                />
                <!-- input 6 -->
              </div>
              <div class="modal-footer bg-dark">
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>

        <!-- add user modal -->
        <!-- USER TABLE -->
        <table id="usertable" class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FullName</th>
              <th scope="col">Email</th>
              <th scope="col">Billing Address</th>
              <th scope="col">Shipping Address</th>
              <th scope="col">Order Date</th>
              <th scope="col">User Type</th>
              <th scope="col">Edit User</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.user_id">
              <td>{{ user.user_id }}</td>
              <td>{{ user.user_fullname }}</td>
              <td>{{ user.user_email }}</td>
              <td>{{ user.user_billing_address }}</td>
              <!-- <td>
                <img v-bind:src="user.user_imgURL" />
              </td> -->
              <td>{{ user.user_shipping_address }}</td>
              <td>{{ user.user_order_date }}</td>
              <td>{{ user.user_type }}</td>
              <td>
                <button type="btn">
                  <i class="fa-solid fa-pen-to-square" @click="toggleModal"></i>
                </button>
                <button type="btn" @click="deleteproduct">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- USER TABLE -->
      </div>
      <div class="col">
        <h1 id="producttable1">Product Table</h1>
        <!-- add product modal -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Add Product
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel2"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-dark text-light">
                <h5 class="modal-title" id="exampleModalLabel2">Add Product</h5>
                <button
                  type="button"
                  class="btn-close bg-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body bg-dark">
                <!-- input 1 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Name"
                  v-model="product_name"
                />
                <!-- input 1 -->
                <!-- input 2 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Image URL"
                  v-model="product_imgURL"
                />
                <!-- input 2 -->
                <!-- input 3 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Description"
                  v-model="product_desc"
                />
                <!-- input 3 -->
                <!-- input 4 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Price"
                  v-model="product_price"
                />
                <!-- input 4 -->
                <!-- input 5 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product weight"
                  v-model="product_weight"
                />
                <!-- input 5 -->
                <!-- input 6 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Category"
                  v-model="product_category"
                />
                <input
                  type="number"
                  name="number"
                  class="input"
                  placeholder="Stock"
                  v-model="stock"
                />
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="flavour"
                  v-model="flavour"
                />
                <!-- input 6 -->
              </div>
              <div class="modal-footer bg-dark">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="createproduct"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- add product modal -->
        <!--  PRODUCT TABLE -->
        <table id="producttable" class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Img URL</th>
              <th scope="col">Weight</th>
              <th scope="col">Stock</th>
              <th scope="col">Flavour</th>
              <th scope="col">Edit Product</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.product_id">
              <td>{{ product.product_id }}</td>
              <td>{{ product.product_name }}</td>
              <td>{{ product.product_desc }}</td>
              <td>{{ product.product_category }}</td>
              <td>{{ product.product_price }}</td>
              <td>
                <img v-bind:src="product.product_imgURL" class="product.img" />
              </td>
              <td>{{ product.product_weight }}</td>
              <td>{{ product.stock }}</td>
              <td>{{ product.flavour }}</td>
              <td>
                <button type="btn">
                  <i class="fa-solid fa-pen-to-square" @click="toggleModal"></i>
                </button>
                <button type="btn" @click="deleteproduct">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- PRODUCT TABLE -->
      </div>
      <div class="col">
        <h1 id="flavourtable1">Flavour Table</h1>
        <!-- add flavour modal -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
        >
          Add Flavour
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel3"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-dark text-light">
                <h5 class="modal-title" id="exampleModalLabel3">Add Flavour</h5>
                <button
                  type="button"
                  class="btn-close bg-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body bg-dark">
                <!-- input 1 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Flavour Name"
                  v-model="flavour_name"
                />
                <!-- input 1 -->
                <!-- input 2 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Flavour Description"
                  v-model="flavour_desc"
                />
                <!-- input 2 -->
                <!-- input 3 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Flavour image URL"
                  v-model="flavour_imgURL"
                />
                <!-- input 3 -->
                <!-- input 4 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Flavour Price"
                  v-model="flavour_price"
                />
                <!-- input 4 -->
              </div>
              <div class="modal-footer bg-dark">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="createflavour"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- add flavour modal -->
        <!--  PRODUCT TABLE -->
        <table id="flavourtable" class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Img Url</th>
              <th scope="col">Price</th>
              <th scope="col">Edit Flavour</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="flavour in flavours" :key="flavour.flavour_id">
              <td>{{ flavour.flavour_id }}</td>
              <td>{{ flavour.flavour_name }}</td>
              <td>{{ flavour.flavour_desc }}</td>
              <td>
                <img v-bind:src="flavour.flavour_imgURL" class="product.img" />
              </td>
              <td>{{ flavour.flavour_price }}</td>

              <td>
                <button type="btn">
                  <i class="fa-solid fa-pen-to-square" @click="toggleModal"></i>
                </button>
                <button type="btn" @click="deleteproduct">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- PRODUCT TABLE -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getUsers");
    this.$store.dispatch("getFlavours");
  },
  data() {
    return {
      product_name: "",
      product_desc: "",
      product_category: "",
      product_price: "",
      product_imgURL: "",
      product_weight: "",
      stock: "",
      flavour: "",
    };
  },
  data() {
    return {
      flavour_name: "",
      flavour_desc: "",
      flavour_imgURL: "",
      flavour_price: "",
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
    flavours() {
      return this.$store.state.flavours;
    },
  },
  methods: {
    createproduct() {
      return this.$store.dispatch("createproduct", {
        product_name: this.product_name,
        product_desc: this.product_desc,
        product_category: this.product_category,
        product_price: this.product_price,
        product_imgURL: this.product_imgURL,
        product_weight: this.product_weight,
        stock: this.stock,
        flavour: this.flavour,
      });
    },
    createflavour() {
      return this.$store.dispatch("createflavour", {
        flavour_name: this.flavour_name,
        flavour_desc: this.flavour_desc,
        flavour_imgURL: this.flavour_imgURL,
        flavour_price: this.flavour_price,
      });
    },
  },
};
</script>
<style scoped>
#admintables {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/zvc7Mc9S/pexels-hugo-heimendinger-1766236.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-size: 100% 100%; */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}
#usertable,
#producttable,
#flavourtable {
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
  /* padding: 3rem; */
  color: white;
  width: 85rem;
  margin-left: 5rem;
}
#prodimage,
#prodimg,
#flavimg {
  width: 10rem;
}
#usertable1 {
  color: white;
  margin-top: 8rem;
  text-shadow: 5px 5px 10px black;
}
img.product\.img {
  width: 15%;
  height: auto;
}
#producttable1,
#flavourtable1 {
  color: white;
  margin-top: 2rem;
  text-shadow: 5px 5px 10px black;
}
/* table inputs */
.input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 500;
  font-size: 0.8vw;
  color: #fff;
  background-color: rgb(28, 28, 30);
  box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.4vw;
  width: 25rem;
  transition: 0.4s;
  margin-bottom: 1rem;
}

.input:hover {
  box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
}

.input:focus {
  box-shadow: 0 0 0 0.15vw skyblue;
}
#exampleModal {
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
}
</style>
