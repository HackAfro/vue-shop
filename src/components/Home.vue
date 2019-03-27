<template>
  <div class="main">
    <section class="banners">
      <div v-for="banner in banners" :key="banner.src">
        <img :src="banner.src" :alt="banner.alt">
      </div>
    </section>
    <section class="product-area">
      <!-- <ProductList
        :products="products"
      /> -->
    </section>
  </div>
</template>

<script>
import ProductList from "./ProductList";

export default {
  name: "Home",
  components: {
    ProductList
  },
  data() {
    return {
      banners: [
        {
          src:
            "https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=510",
          alt: "A tasty treat"
        },
        {
          src:
            "https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&cs=tinysrgb&dpr=2&h=300&w=510",
          alt: "Chocolate covered pancakes"
        },
        {
          src:
            "https://images.pexels.com/photos/68899/pexels-photo-68899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=510",
          alt: "Burger and fries"
        },
        {
          src:
            "https://images.pexels.com/photos/165776/pexels-photo-165776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=510",
          alt: "Get ready to slice"
        }
      ]
    };
  },
  async mounted() {
    const res = await fetch("http://localhost:4000/products");
    const products = await res.json();
    this.$store.dispatch("loadItems", products);
  },
  computed: {
    products() {
      return this.$store.state.items;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 90%;
  margin: auto;
  padding: 20px 15px;
  margin-top: 30px;

  .banners {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      width: 26%;
      margin-right: 10px;
      img {
        height: 200px;
        width: 100%;
        max-width: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }
  }
}
</style>
