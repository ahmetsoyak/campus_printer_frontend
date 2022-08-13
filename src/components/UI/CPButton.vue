<template>
  <button
    :disabled="disabled"
    :class="[
      'btn',
      `btn--${varient}`,
      `btn--${size}`,
      `btn_hover--${hoverAnimation}`,
      block ? 'btn--block' : '',
      disabled ? 'btn--disabled' : ''
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CPButton-UI',
  props: {
    varient: {
      type: String,
      default: 'primary',
      validator: (variant) => ['primary', 'secondary', 'text'].includes(variant)
    },
    size: {
      type: String,
      default: 'normal',
      validator: (size) => ['small', 'normal', 'large'].includes(size)
    },
    hoverAnimation: {
      type: String,
      default: null,
      validator: (size) => ['heart-attack'].includes(size)
    },
    block: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  }
};
</script>
