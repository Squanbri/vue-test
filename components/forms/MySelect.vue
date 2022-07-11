<template>
  <div :class="$style.wrapper" @blur="open = false">
    <div :class="selectClasses" @click="open = !open">
      {{ selected }}
    </div>

    <div :class="optionsClasses">
      <div
        v-for="(option, i) of options"
        :key="i"
        :class="$style.option"
        @click="onSelect(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      open: false,
      selected: this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null
    }
  },
  computed: {
    selectClasses() {
      return {
        [this.$style.selector]: true,
        [this.$style.open]: this.open
      }
    },
    optionsClasses() {
      return {
        [this.$style.options]: true,
        [this.$style.selectHide]: !this.open
      }
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },
  methods: {
    onSelect(option) {
      this.selected = option
      this.open = false
      this.$emit('change', option)
    }
  }
}
</script>

<style module lang="scss">
  .wrapper {
    position: relative;
    width: fit-content;
    min-width: 160px;
    height: 36px;

    background: $c_white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    * {
      color: $c_grey;
      font-size: 12px;
    }
  }

  .selector {
    display: flex;
    align-items: center;

    padding: 10px 30px 10px 16px;

    height: 100%;
    cursor: pointer;
    user-select: none;

    &.open {
      // styles for open selector
    }

    &::after {
      content: "";
      position: absolute;
      right: 16px;

      width: 8px;
      height: 6px;
      background-image: url('~assets/icons/arrow-to-down.svg')
    }
  }

  .options {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;

    overflow: hidden;
    border-radius: 0px 0px 4px 4px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

    transform: translateY(-3px);

    .option {
      background: $c_white;
      padding: 10px 16px;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: $c_white;
        background-color: $c_grey;
      }
    }
  }

  .selectHide {
    display: none;
  }
</style>
