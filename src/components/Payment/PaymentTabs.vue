<template>
  <tabs>
    <tab title="Havale">Havale</tab>
    <tab title="Kredi Kartı">Kredi Kartı</tab>
  </tabs>
</template>

<script>
import Tab from '../UI/Tabs/Tab.vue';
import Tabs from '../UI/Tabs/Tabs.vue';

export default {
  name: 'Payment-Tabs',
  components: { Tab, Tabs }
};
</script>
