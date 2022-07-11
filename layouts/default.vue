<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main :class="$style.main">
    <Nuxt />
  </main>
</template>

<style module lang="scss">
  .main {
    background-color: $c_background;
    width: 1376px;
    margin: auto;
    padding-top: 32px;
  }
</style>
