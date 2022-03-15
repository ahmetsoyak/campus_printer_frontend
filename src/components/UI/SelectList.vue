<template>
  <select class="form-select" label="label" v-model="selected">
    <option v-for="option in options" :value="option.key" :key="option.key">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select-List',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Array, Object]
    }
  },
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>
