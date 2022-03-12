<template>
  <ul class="mt-4" v-if="this.files.length" v-cloak>
    <li class="text-sm p-1" v-for="(file, key) in files" :key="key">
      {{ file.name }}
      <button
        type="btn"
        @click="remove(filelist.indexOf(file))"
        title="Remove file"
      >
        remove
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'File-List',
  props: {
    files: {
      type: Array,
      required: true
    }
  },
  methods: {
    remove(i) {
      this.filelist.splice(i, 1);
    }
  }
};
</script>
