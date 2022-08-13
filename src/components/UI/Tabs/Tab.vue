<template>
  <div class="tabs__content" v-if="data.selectedTitle === title">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tab-UI',
  inject: ['data'],
  computed: {},
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
