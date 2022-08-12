<template>
  <div>
    <ul>
      <li
        class="cursor-pointer"
        v-for="(tabTitle, index) in tabTitles"
        :key="index"
        @click="selectTitle(tabTitle)"
      >
        {{ tabTitle }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tabs-UI',
  data() {
    return {
      tabTitles: [],
      selectedTitle: ''
    };
  },
  provide() {
    const data = {};
    Object.defineProperty(data, 'selectedTitle', {
      enumerable: true,
      get: () => this.selectedTitle
    });
    return { data };
  },
  created() {
    this.tabTitles = this.$slots.default.map(
      (tab) => tab.componentOptions.propsData.title
    );
    this.selectedTitle = this.tabTitles[0];
  },
  methods: {
    selectTitle(title) {
      this.selectedTitle = title;
    }
  }
};
</script>
