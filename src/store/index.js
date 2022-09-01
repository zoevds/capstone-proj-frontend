import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    product: null,
    products: null,
    flavour: null,
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
  },
  actions: {
    // USER
    // LOGIN USER
    login: async (context, payload) => {
      const { user_email, user_password } = payload;
      const response = await fetch(
        `https://zoe-capstone-api.herokuapp.com/users?email=${user_email}&password=${user_password}`
      );
      const userData = await response.json();
      if (userData.length) return context.commit("setUser", userData[0]);
      if (!userData.length) return alert("No user found");
    },
    // REGISTER USER
    register: async (context, user) => {
      fetch("`https://zoe-capstone-api.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
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
