<template>
  <form :class="$style.form">
    <my-input
      v-model="name"
      label="Наименование товара"
      name="name"
      placeholder="Введите наименование товара"
      required
    />

    <my-textarea
      v-model="description"
      label="Описание товара"
      name="description"
      placeholder="Введите описание товара"
    />

    <my-input
      v-model="imageUrl"
      label="Ссылка на изображение товара"
      name="imageUrl"
      placeholder="Введите ссылку"
      required
    />

    <my-input
      v-model="price"
      label="Цена товара"
      name="price"
      placeholder="Введите цену"
      required
    />

    <my-button>Добавить товар</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      imageUrl: '',
      price: ''
    }
  }
}
</script>

<style module>
  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 332px;
    height: 440px;

    padding: 24px;

    background-color: $c_white;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }
</style>
