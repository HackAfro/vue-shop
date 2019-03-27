<template>
  <header>
    <div class="brand">
      <img src="../assets/logo-2.svg" alt="avatar">
      <h5>Just fruits</h5>
    </div>
    <div class="nav">
      <ul>
        <li>
          <img src="../assets/cart.svg" alt="cart">
          <span class="badge" v-if="cart.length > 0">{{ cart.length }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  background-color: white;
  margin: 0;
  padding: 5px 5%;
  color: whitesmoke;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: rgb(242, 247, 236);

  .brand {
    flex: 1;
    display: flex;
    align-items: center;

    img {
      height: 35px;
      border-radius: 50%;
      margin-right: 17px;
    }

    h5 {
      font-family: "Josefin Sans", sans-serif;
      font-size: 17px;
      margin: 0;
      letter-spacing: 0.4px;
      color: rgb(83, 158, 17);
      opacity: 0.7;
      text-transform: uppercase;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    display: flex;

    li {
      display: flex;
      align-items: center;
      position: relative;

      img {
        width: 40px;
      }

      .badge {
        height: 20px;
        width: 20px;
        font-size: 11px;
        color: white;
        background-color: rgb(83, 158, 17);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: -10px;
        border-radius: 50%;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Header",
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>