<template>
  <div v-if="data.selectedTitle === title">
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
  },
  watch: {
    data: {
      handler: function (newVal) {
        console.log(newVal);
      },
      deep: true
    }
  }
};
</script>
