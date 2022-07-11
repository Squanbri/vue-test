/* eslint-disable import/default */
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, numeric } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'Поле является обязательным'
})

extend('numeric', {
  ...numeric,
  message: 'Поле должно быть числом'
})
