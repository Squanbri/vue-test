<template>
  <button
    :type="type"
    :class="buttonClasses"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    onClick: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return {
        [this.$style.disabled]: this.disabled,
        [this.$style.button]: true
      }
    }
  }
}
</script>

<style module lang="scss">
  .button {
    width: 100%;

    color: $c_white;

    padding: 10px 0;

    border: none;
    border-radius: 10px;
    background-color: $c_green;

    cursor: pointer;

    &.disabled {
      background-color: $c_muted;
      pointer-events: none;
    }
  }
</style>
