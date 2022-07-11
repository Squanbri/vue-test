<template>
  <div :class="$style.wrapper">
    <h3 :class="$style.header">Добавление товара</h3>

    <my-select
      :options="['По возрастанию цены', 'По убыванию цены', 'По имени']"
      :default="'По умолчанию'"
      @change="onSelectSort"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    onSelectSort(option) {
      const sorts = {
        'По возрастанию цены': this.sortByPriceAsc,
        'По убыванию цены': this.sortByPriceDesc,
        'По имени': this.sortByName
      }

      sorts[option]?.()
    },
    ...mapMutations({
      sortByPriceAsc: 'products/sortByPriceAsc',
      sortByPriceDesc: 'products/sortByPriceDesc',
      sortByName: 'products/sortByName'
    })
  }
}
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
