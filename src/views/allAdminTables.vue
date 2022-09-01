<template>
  <section id="admintables">
    <!-- USER TABLE -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">FullName</th>
          <th scope="col">Email</th>
          <th scope="col">Billing Address</th>
          <th scope="col">Shipping Address</th>
          <th scope="col">Order Date</th>
          <th scope="col">User Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
export default {};
</script>
<style>
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
}
</style>
