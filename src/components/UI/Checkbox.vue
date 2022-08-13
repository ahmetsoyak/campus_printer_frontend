<template>
  <div>
    <input
      type="checkbox"
      class="mr-2"
      :name="name"
      :id="name"
      v-model="checkboxValue"
    />
    <label :for="name">
      <slot name="label"> {{ label }} </slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox-UI',
  props: {
    value: {
      type: Boolean
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    checkboxValue: {
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
