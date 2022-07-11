<template>
  <div :class="$style.wrapper">
    <my-loader v-show="isProductsLoading" />

    <product-page-header />

    <div :class="$style.body">
      <product-form />

      <transition-group
        :move-class="$style.moveClass"
        :enter-active-class="$style.enterActiveClass"
        :enter-class="$style.enterClass"
        :enter-to-class="$style.enterToClass"
        :leave-active-class="$style.leaveActiveClass"
        :leave-to-class="$style.leaveToClass"
        :name="$style.products"
        :class="$style.products"
        tag="ul"
      >
        <li
          v-for="(product) in products"
          :key="product.id"
        >
          <product-card :product="product" />
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
      isProductsLoading: 'products/getProductsLoading'
    })
  },
  beforeCreate() {
    this.$store.commit('products/initializeStore')

    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      const isAddProductMutation = mutation.type === 'products/addProduct'
      const isRemoveProductMutation = mutation.type === 'products/removeProduct'

      if (isAddProductMutation || isRemoveProductMutation) {
        localStorage.setItem('products', JSON.stringify(this.products))
      }
    })
  },
  mounted() {
    setTimeout(() => this.setProductsLoading(false), 100)
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    ...mapMutations({
      setProductsLoading: 'products/setProductsLoading'
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

    list-style: none;
  }

  .moveClass { transition: transform .5s ease; }

  .enterActiveClass { transition: all .5s; }
  .enterClass {
    opacity: 0;
    transform: translateX(-50px);
  }
  .enterToClass {
    opacity: 1;
    transform: translateX(0px);
  }

  .leaveActiveClass { transition: all .5s;}
  .leaveToClass {
    transform: translateX(50px);
    opacity: 0;
  }
</style>
