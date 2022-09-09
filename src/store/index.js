import router from "../router/index";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null || {
      user_id: 17,
      user_fullname: "zuhrah palmer",
      user_email: "zuhrahpalmer@gmail.com",
      user_billing_address: "millie",
      user_shipping_address: "doctorplace",
      user_order_date: "18/05/2022",
      user_password:
        "$2a$10$nEdNZ84XWintNqNP/Oy.yutkh1f1AGJcAyiHAH7JxXPwf/tIYTa0a",
      user_type: "admin",
      user_cart: [
        {
          cartid: 2,
          flavour: "",
          product_desc:
            "VMAX 1.0 is one of the first disposable vapes that we made back in 2020",
          product_name: "VMAX 1.0",
          product_price: "380",
          product_imgURL:
            "https://i.postimg.cc/qMctDyfL/pexels-jonathan-cooper-9419514.jpg",
          product_weight: "18",
          product_category: "1.0",
        },
      ],
      user_gender: "female",
    },
    users: null,
    product: null,
    products: null,
    flavour: null,
    Token: null,
    flavours: null,
    cart: null,
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
            context.dispatch("getcart");
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
    deleteUser: async (context, id) => {
      console.log(id);
      await fetch("https://zoe-capstone-api.herokuapp.com/users/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getUsers");
        });
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

    //cart
    getcart: async (context, id) => {
      id = context.state.user.user_id;
      await fetch(
        // "https://zoe-capstone-api.herokuapp.com" + "/users/" + id + "/cart",
        "http://localhost:3000" + "/users/" + id + "/cart",
        {
          // await fetch("http://localhost:3000/users/" + id + "/cart", {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.Token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data != null) {
            context.commit("setCart", data.results);
            context.state.cart = data.results;
          } else {
            context.commit("setCart", null);
          }
        });
    },
    addTocart: async (context, item, id) => {
      id = context.state.user.user_id;
      console.log(item);
      await fetch(
        // "https://zoe-capstone-api.herokuapp.com" + "/users/" + id + "/cart",
        "http://localhost:3000" + "/users/" + id + "/cart",
        {
          // await fetch("http://localhost:3000/users/" + id + "/cart", {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.Token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.state.msg = data.msg;
          context.dispatch("getcart");
        });
    },
    clearcart: async (context, id) => {
      id = context.state.user.user_id;
      await fetch(
        // "https://zoe-capstone-api.herokuapp.com" + "/users/" + id + "/cart",
        "http://localhost:3000" + "/users/" + id + "/cart",
        {
          // await fetch("http://localhost:3000/users/" + id + "/cart", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.Token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          context.dispatch("getcart", id);
        });
    },
    deletecartItem: async (context, list, id) => {
      console.log(list);
      id = context.state.user.user_id;
      await fetch(
        // "https://zoe-capstone-api.herokuapp.com" +
        //   "/users/" +
        //   id +
        //   "/cart/" +
        //   list.cartid,
        "http://localhost:3000/users/" + id + "/cart/" + list.cartid,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.Token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // context.state.msg = data.msg;
          context.dispatch("getcart");
        });
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
