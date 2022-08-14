<template>
  <div :class="classes">
    <slot />
    <i
      v-if="closeable"
      class="alert__close-icon fa-solid fa-xmark"
      @click="removeAlert(alert.id)"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'Alert-Component',
  props: {
    alert: {
      type: Object,
      required: true
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return `alert alert--${this.alert.type}`;
    }
  },
  methods: {
    removeAlert(alertID) {
      this.$store.dispatch('alert/removeAlert', alertID);
    }
  }
};
</script>
