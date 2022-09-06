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
            <tr>
              <th scope="row">8</th>
              <td>Zoe Van Der Schyff</td>
              <td>zoevanderschyff13@gmail.com</td>
              <td>555 avenue</td>
              <td>frontstreet bayview</td>
              <td>03/05/2022</td>
              <td>admin</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Fatima Galant</td>
              <td>fatgal11@gmail.com</td>
              <td>25 ocean view</td>
              <td>montague beach</td>
              <td>07/03/2022</td>
              <td>user</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Natheerah Abrahams</td>
              <td>natab24@gmail.com</td>
              <td>ostridge bridge</td>
              <td>cavendish microwave</td>
              <td>12/12/2022</td>
              <td>user</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Muneer palmer</td>
              <td>munpal28@gmail.com</td>
              <td>7 de laan</td>
              <td>mozamque avenue</td>
              <td>17/09/2022</td>
              <td>user</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>Ricardo Ronan Moses</td>
              <td>riricarcardodo@gmail.com</td>
              <td>8 de lane</td>
              <td>7 eleven</td>
              <td>07/09/2022</td>
              <td>user</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Uzair Damonse</td>
              <td>uzda24@gmail.com</td>
              <td>millie</td>
              <td>doctorplace</td>
              <td>18/05/2022</td>
              <td>user</td>
              <td></td>
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
                />
                <!-- input 1 -->
                <!-- input 2 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Image URL"
                />
                <!-- input 2 -->
                <!-- input 3 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Description"
                />
                <!-- input 3 -->
                <!-- input 4 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Price"
                />
                <!-- input 4 -->
                <!-- input 5 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product weight"
                />
                <!-- input 5 -->
                <!-- input 6 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Product Category"
                />
                <!-- input 6 -->
              </div>
              <div class="modal-footer bg-dark">
                <button type="button" class="btn btn-primary">Save</button>
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
              <th scope="col">Edit Product</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>VMAX 1.0</td>
              <td>
                VMAX 1.0 is one of the first disposable vapes that we made back
                in 2020
              </td>
              <td>1.0</td>
              <td>R380</td>
              <td>
                <img
                  id="prodimage"
                  src="https://i.postimg.cc/qMctDyfL/pexels-jonathan-cooper-9419514.jpg"
                  alt="prodimage"
                />
              </td>
              <td>18</td>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>VMAX 1.5</td>
              <td>
                VMAX 1.5 is of the newer vapes made in 2020 with more crisp
                smoke
              </td>
              <td>1.5</td>
              <td>R400</td>
              <td>
                <img
                  id="prodimg"
                  src="https://i.postimg.cc/43hLyzmt/pexels-thorn-yang-4834387.jpg"
                  alt="prodimg"
                />
              </td>
              <td>18</td>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>VMAX 2.0</td>
              <td>VMAX 2.0 has twice the amount of puffs than the 1.0 model</td>
              <td>2.0</td>
              <td>R480</td>
              <td>
                <img
                  id="prodimg"
                  src="https://i.postimg.cc/TYpHBMfC/pexels-ali-hassan-5533351.jpg"
                  alt=""
                />
              </td>
              <td>25</td>
              <td>3</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>VMAX 2.5</td>
              <td>VMAX 2.5 has twice the amount of puffs than the 1.5 model</td>
              <td>2.5</td>
              <td>R500</td>
              <td>
                <img
                  id="prodimg"
                  src="https://i.postimg.cc/9XqLBPpn/pexels-olena-bohovyk-11587589.jpg"
                  alt="prodimg"
                />
              </td>
              <td>29</td>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>VMAX 250</td>
              <td>
                VMAX 255 has 4 times the amount of puffs than the 2.5 model
              </td>
              <td>255</td>
              <td>R700</td>
              <td>
                <img
                  id="prodimg"
                  src="https://i.postimg.cc/sfwgwSg5/pexels-lemkhanzar-12721921.jpg"
                  alt="prodimg"
                />
              </td>
              <td>35</td>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>VMAX max</td>
              <td>
                VMAX max has 6 times the amount of puffs than the 2.5 model
              </td>
              <td>max</td>
              <td>R800</td>
              <td>
                <img
                  id="prodimg"
                  src="https://i.postimg.cc/N0jcyCRV/pexels-parich-sitthichai-4030818.jpg"
                  alt="prodimg"
                />
              </td>
              <td>40</td>
              <td>6</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>VMAX pro</td>
              <td>
                VMAX pro has 6 times the amount of puffs than the max model
              </td>
              <td>pro</td>
              <td>R950</td>
              <td>
                <img
                  id="prodimg"
                  src="https://i.postimg.cc/DzLqX5Fr/pexels-kateryna-naidenko-7398925.jpg"
                  alt="prodimg"
                />
              </td>
              <td>48</td>
              <td>6</td>
              <td></td>
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
                />
                <!-- input 1 -->
                <!-- input 2 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Flavour Description"
                />
                <!-- input 2 -->
                <!-- input 3 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Flavour image URL"
                />
                <!-- input 3 -->
                <!-- input 4 -->
                <input
                  type="text"
                  name="text"
                  class="input"
                  placeholder="Flavour Price"
                />
                <!-- input 4 -->
              </div>
              <div class="modal-footer bg-dark">
                <button type="button" class="btn btn-primary">Save</button>
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
            <tr>
              <th scope="row">1</th>
              <td>Strawberry</td>
              <td>strawberry taste like candy in your mouth</td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/fydsJTVS/strawberry-flavour.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R250</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>blueberry</td>
              <td>blueberry is like bubble gum and grape</td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/bJmJPvKx/blueberry-crisp.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R270</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mint</td>
              <td>Its Minty like apple fresh toothpaste</td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/RV70CX5C/mint-flavour.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R300</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Bubblegum</td>
              <td>
                Bubblegum tastes true-to-flavour of a sweet soft pink
                wintergreen bubblegum.
              </td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/4x3TC5XS/bubblegum.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R320</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Banana</td>
              <td>
                Banana flavor is creamy, sweet, and tasty just like the real
                thing.
              </td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/hGFM8DZ1/banana.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R260</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Mango</td>
              <td>
                The flavour presents us fruity, succulent tastes of fresh mangos
                on exhale, accompanied by a cool, crisp note of mint.
              </td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/Y0j1KZyS/mango-flavour.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R360</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>litchi</td>
              <td>
                Litchi flavor best described as a cross between a mellow pear,
                sweet berry and zesty grape.
              </td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/xjkRZbr3/litchi-flavour.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R380</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>litchi Rasberry</td>
              <td>
                Litchi and fruity raspberry that spread luxuriously over your
                taste buds.
              </td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/XY2B3QdG/litchi-rasberry.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R400</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Watermelon</td>
              <td>
                This flavour is a blend of watermelon, apple, and strawberry
                flavor. It has a crisp, sweet taste that will make you feel as
                though you are sipping on a fruit cocktail.
              </td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/rsCC9xb1/watermelon-flavour.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R370</td>

              <td></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Passion Fruit</td>
              <td>
                Passion Fruit has a zesty and tart taste and is therefore best
                suited to vapers who like sour vape juices.
              </td>
              <td>
                <img
                  id="flavimg"
                  src="https://i.postimg.cc/pT0P56Vz/passion-fruit.jpg"
                  alt="flavimg"
                />
              </td>
              <td>R400</td>

              <td></td>
            </tr>
          </tbody>
        </table>
        <!-- PRODUCT TABLE -->
      </div>
    </div>
  </section>
</template>
<script>
export default {};
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
