<template>
  <ValidationObserver ref="form" v-slot="{ invalid }">
    <form :class="$style.form">
      <ValidationProvider v-slot="{ errors }" rules="required">
        <my-input
          v-model="name"
          label="Наименование товара"
          name="name"
          placeholder="Введите наименование товара"
          required
        />

        <span :class="$style.errorMessage">{{ errors[0] }}</span>
      </ValidationProvider>

      <my-textarea
        v-model="description"
        label="Описание товара"
        name="description"
        placeholder="Введите описание товара"
      />

      <ValidationProvider v-slot="{ errors }" rules="required">
        <my-input
          v-model="imageUrl"
          label="Ссылка на изображение товара"
          name="imageUrl"
          placeholder="Введите ссылку"
          required
        />

        <span :class="$style.errorMessage">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" rules="required|numeric">
        <my-input
          v-model="price"
          label="Цена товара"
          name="price"
          placeholder="Введите цену"
          required
        />

        <span :class="$style.errorMessage">{{ errors[0] }}</span>
      </ValidationProvider>

      <my-button :on-click="onSubmit" :disabled="invalid">
        Добавить товар
      </my-button>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      name: '',
      description: '',
      imageUrl: '',
      price: 0
    }
  },
  methods: {
    resetForm() {
      this.name = ''
      this.description = ''
      this.imageUrl = ''
      this.price = 0

      this.$refs.form.reset()
    },
    onSubmit(event) {
      this.$refs.form.validate()
        .then((isValid) => {
          if (isValid) {
            this.onAddProduct()

            this.resetForm()
          }
        })
    },
    onAddProduct () {
      this.addProduct({
        id: Date.now(),
        image: this.imageUrl,
        name: this.name,
        description: this.description,
        price: this.price
      })
    },
    ...mapMutations({
      addProduct: 'products/addProduct'
    })
  }
}
</script>

<style module lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 332px;
    min-height: 440px;

    padding: 24px;

    background-color: $c_white;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }

  .errorMessage {
    font-size: 8px;
    color: $c_red;
  }
</style>
