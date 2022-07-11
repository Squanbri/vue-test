<template>
  <button
    :type="type"
    :class="$style.button"
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
    // eslint-disable-next-line vue/require-default-prop
    onClick: {
      type: Function
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
  }
</style>
