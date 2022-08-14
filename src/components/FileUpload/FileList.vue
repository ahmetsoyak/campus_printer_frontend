<template>
  <ul class="mt-4" v-if="this.files.length">
    <li class="text-sm p-1" v-for="(file, key) in files" :key="key">
      {{ file.name }}
      <cp-button
        size="small"
        varient="secondary"
        title="Remove file"
        @click="remove(key)"
      >
        <i class="fa-solid fa-xmark mr-1"></i>
        Sil
      </cp-button>
    </li>
  </ul>
</template>

<script>
import CPButton from '../UI/CPButton.vue';

export default {
  name: 'File-List',
  components: { 'cp-button': CPButton },
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  computed: {
    files: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    remove(i) {
      this.files = this.files.filter((value, index) => !index == i);
    }
  }
};
</script>
