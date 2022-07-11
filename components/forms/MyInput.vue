<template>
  <label :class="$style.label">
    <span :class="required ? $style.required : ''">{{ label }}</span>
    <input
      type="text"
      :class="$style.input"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
    >
  </label>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
      this.$emit('keyup', event.target.value)
    }
  }
}
</script>

<style module lang="scss">
  .label {
    display: flex;
    flex-direction: column;

    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;

    .input {
      height: 36px;

      font-size: 12px;
      line-height: 15px;

      background-color: $c_white;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

      border: none;
      border-radius: 4px;

      padding: 10px 16px;
    }

    span {
      position: relative;
      width: fit-content;
      margin-bottom: 4px;
    }

    span.required:before {
      content: '';
      display: block;

      position: absolute;
      right: -4px;

      width: 4px;
      height: 4px;

      background-color: $c_red;

      border-radius: 50%;
    }
  }
</style>
