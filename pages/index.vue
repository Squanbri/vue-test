<template>
  <div :class="$style.wrapper">
    <product-page-header />

    <div :class="$style.body">
      <product-form />

      <div :class="$style.products">
        <product-card
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      products: 'products/getProducts'
    })
  }
}
</script>

<style module lang="scss">
  .body {
    display: flex;

    margin-top: 16px;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    margin-left: 16px;
  }
</style>
