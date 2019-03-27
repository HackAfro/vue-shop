<template>
  <div class="product-list">
    <Product
      v-for="product in products"
      :product="product"
      :key="product.name"
      @addtocart="onAddToCart($event)"
      @removeitem="onRemoveItem($event)"
    />
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "ProductList",
  props: ["products"],
  components: {
    Product
  },
  methods: {
    onAddToCart(item) {
      this.$emit("additem", item);
    },
    onRemoveItem(item) {
      console.log('remove', item);
      this.$emit("removeitem", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  padding: 10px 0;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}
</style>
