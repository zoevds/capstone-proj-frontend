import router from "../router/index";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    product: null,
    products: null,
    flavour: null,
    Token: null,
    flavours: null,
    asc: true,
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
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
      state.token = token;
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
    // REGISTER/ SIGN UP
    signUp: async (context, payload) => {
      fetch("https://zoe-capstone-api.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          user_fullname: payload.user_full_name,
          user_email: payload.user_email,
          user_password: payload.user_password,

          join_date: "2023-06-03",
          user_type: "user",
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
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
});
