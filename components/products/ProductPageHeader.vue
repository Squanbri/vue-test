<template>
  <div :class="$style.wrapper">
    <h3 :class="$style.header">Добавление товара</h3>

    <my-select
      :options="['go', 'python', 'rust', 'javascript']"
      :default="'По умолчанию'"
    />
  </div>
</template>

<script>

</script>

<style module lang="scss">
  .wrapper {
    display: flex;
    justify-content: space-between
  }

  .header {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin: 0;
  }
</style>
