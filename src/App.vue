<template>
  <div class="app container home">
    <nav class="d-flex justify-space-between">
      <router-link :to="{ name: 'home' }">
        <h1>Campus Printer</h1>
      </router-link>
      <!-- <div class="d-grid links text-right">
        <a href="#how-it-works">NASIL ÇALIŞIR?</a>
        <a href="#pricing">FİYATLANDIRMA</a>
        <a href="#contact">İLETİŞİM</a>
      </div> -->
    </nav>
    <alert v-for="alert in alerts" :key="alert.id" :alert="alert">
      {{ alert.message }}
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
  }
};
</script>

<style lang="scss" scoped>
nav {
  padding: 40px 0;
  .links {
    gap: 0 50px;
    align-items: center;
    grid-template-columns: max-content min-content min-content;
    a {
      font-weight: 500;
      text-decoration: none;
      color: black;
      gap: 0 20px;
      cursor: pointer;
      transition: all 200ms;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
a {
  text-decoration: none;
}
</style>
