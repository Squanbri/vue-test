<template>
  <div
    :class="$style.card"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <img :class="$style.image" src="~/assets/images/product_image_default.png">

    <div :class="$style.info">
      <span :class="$style.title">Наименование товара</span>

      <p :class="$style.description">
        Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк
      </p>

      <span :class="$style.price">10 000 руб.</span>
    </div>

    <button
      v-if="isHover"
      :class="$style.delete"
    />
  </div>
</template>

<script>
export default {
  name: 'MyTextarea',
  data() {
    return {
      isHover: false
    }
  }
}
</script>

<style module lang="scss">
  .card {
    position: relative;

    width: 332px;
    height: 423px;

    background-color: $c_white;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    cursor: pointer;
  }

  .image {
    width: 100%;
    height: 200px;
  }

  .info {
    padding: 16px;
  }

  .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: $c_black;
  }

  .description {
    font-size: 16px;
    line-height: 20px;
    color: $c_black;
    height: 80px;
    margin: 16px 0 32px;
  }

  .price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: $c_black;
  }

  .delete {
    position: absolute;
    top: -8px;
    right: -8px;

    width: 32px;
    height: 32px;

    border: none;

    background-color: $c_red;
    background-image: url('~/assets/icons/delete.svg');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    cursor: pointer;
  }
</style>
