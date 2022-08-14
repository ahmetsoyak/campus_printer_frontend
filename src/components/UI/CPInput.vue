<template>
  <div class="d-block">
    <label class="d-block mb-2">{{ label }}</label>
    <input
      :type="type"
      :class="classes"
      :maxlength="maxlength"
      :placeholder="placeholder"
    />
    <div v-if="!hideDetails" class="input--control">{{ errorMessages }}</div>
  </div>
</template>

<script>
export default {
  name: 'CP-Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorMessages: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    hideDetails: {
      type: Boolean
    },
    maxlength: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      let classes = 'input';
      if (this.outlined) {
        classes += 'input--oulined';
      }
      return classes;
    }
  }
};
</script>
