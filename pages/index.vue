<template>
  <div :class="$style.wrapper">
    <product-page-header />

    <div :class="$style.body">
      <product-form />

      <div :class="$style.products">
        <product-card v-for="(item, index) in 10" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
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
