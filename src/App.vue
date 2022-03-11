<template>
  <div class="app">
    <alert v-for="alert in alerts" :key="alert.id" :type="alert.type">
      {{ alert.message }}
      <template #close="{ toggle }">
        <v-icon @click="removeAlert(toggle, alert.id)">mdi-close</v-icon>
      </template>
    </alert>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Alert from './components/Alert';

export default {
  name: 'App',
  components: { Alert },
  computed: {
    ...mapGetters({
      alerts: 'alert/alerts'
    })
  },
  methods: {
    removeAlert(toggle, alertID) {
      this.$store.dispatch('alert/removeAlert', alertID);
      toggle();
    }
  }
};
</script>
