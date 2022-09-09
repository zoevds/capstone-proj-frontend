import router from "../router/index";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    flavour: null,
    Token: null,
    flavours: null,
    cart: [],
    asc: true,
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    setFlavours: (state, flavours) => {
      state.flavours = flavours;
    },
    setFlavour: (state, flavour) => {
      state.flavour = flavour;
    },
    setToken: (state, token) => {
      state.Token = token;
    },
    setCart: (state, cart) => {
      state.cart = cart;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    logout: (state) => {
      (state.user = ""),
        (state.Token = ""),
        (state.users = ""),
        (state.product = ""),
        (state.products = "");
    },
    sortByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.products.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    },
  },
  actions: {
    //  LOGIN
    login: async (context, payload) => {
      let res = await fetch(
        "https://zoe-capstone-api.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_email: payload.user_email,
            user_password: payload.user_password,
          }),
        }
      );
      let data = await res.json();

      if (data.token) {
        context.commit("setToken", data.token);

        // Verify token
        //
        fetch("https://zoe-capstone-api.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("setUser", data.user);
          });

        router.push("/products");
      }
    },

    // CREATE USER
    createUser: async (context, user) => {
      fetch("https://zoe-capstone-api.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      // console.log(
      //   `user ${(user.user_fullname, user.user_email)} created successfully`
      // );
    },
    // CREATE PRODUCT
    createproduct: async (context, product) => {
      // console.log(product);
      fetch("https://zoe-capstone-api.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((products) => {
          console.log(products);
          // context.dispatch("getproducts", product);
        });
    },
    // CREATE FLAVOUR
    createflavour: async (context, flavour) => {
      // console.log(product);
      fetch("https://zoe-capstone-api.herokuapp.com/flavours", {
        method: "POST",
        body: JSON.stringify(flavour),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((products) => {
          console.log(flavours);
          // context.dispatch("getproducts", product);
        });
    },
    // DELETE PRODUCT
    // deleteFlight: async (context, id) => {
    //   await fetch("https://capstone-api-mudassar.herokuapp.com/flights/" + id, {
    //     // await fetch("http://localhost:3000/cars/" + id, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // console.log(data);
    //       context.dispatch("getFlights");
    //     });
    // },
    // ADD TO CART
    addToCart: async (context, id) => {
      this.state.cart.product.push(id);
      context.dispatch("updateCart", this.state.cart);
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter((product) => product.id != id);
      context.commit("removeFromCart", newCart);
    },
    // USERS
    // SHOW ALL USERS
    getUsers: async (context) => {
      fetch("https://zoe-capstone-api.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => context.commit("setUsers", data))
        .catch((err) => console.log(err.message));
    },
    // SHOW ONE USER
    getUser: async (context, id) => {
      console.log(user.user_id);
      fetch("https://zoe-capstone-api.herokuapp.com/users/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setUsers", data))
        .catch((err) => console.log(err.message));
    },
    // PRODUCTS
    // SHOW ALL PRODUCTS
    getProducts: async (context) => {
      fetch("https://zoe-capstone-api.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => context.commit("setProducts", data))
        .catch((err) => console.log(err.message));
    },

    // SHOW ONE PRODUCT
    getProduct: async (context, id) => {
      fetch("https://zoe-capstone-api.herokuapp.com/products/" + id)
        .then((response) => response.json())
        .then((data) => context.commit("setProduct", data));
    },
    // ADD A PRODUCT
    addProduct: async (context, product) => {
      fetch("https://zoe-capstone-api.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },
    // DELETE A PRODUCT
    deleteProduct: async (context, id) => {
      fetch("https://zoe-capstone-api.herokuapp.com/products/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },
    // FLAVOURS
    // SHOW ALL FLAVOURS
    getFlavours: async (context) => {
      fetch("https://zoe-capstone-api.herokuapp.com/flavours")
        .then((res) => res.json())
        .then((data) => context.commit("setFlavours", data))
        .catch((err) => console.log(err.message));
    },
    // SHOW ONE FLAVOUR
    getFlavour: async (context, id) => {
      fetch("https://zoe-capstone-api.herokuapp.com/flavours/" + id)
        .then((response) => response.json())
        .then((json) => context.commit("setFlavour", json));
    },
    // UPDATE A PRODUCT
    updateProduct: async (context, product) => {
      const {
        product_name,
        product_desc,
        product_category,
        product_price,
        product_imgURL,
        product_weight,
        stock,
        flavour,
      } = product;
      fetch("https://zoe-capstone-api.herokuapp.com/products/" + id, {
        method: "PUT",
        body: JSON.stringify({
          product_name: product_name,
          product_desc: product_desc,
          product_category: product_category,
          product_price: product_price,
          product_imgURL: product_imgURL,
          product_weight: product_weight,
          stock: stock,
          flavour: flavour,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
