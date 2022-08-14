<template>
  <div class="wrapper">
    <h1 class="text-center mb-5">TALEBİNİ ALDIK</h1>
    <div class="row">
      <div class="col-12 col-md-6 justify-center">
        <img
          src="../../../assets/completed-illustrator.svg"
          class="completed-image"
          alt=""
        />
      </div>
      <div class="col-12 col-md-6 flex-col">
        <h3 class="mb-5">
          Talebini aldık. Ödemen gerçekleştiği zaman aşağıdaki kodu kullanrak
          çıktını alabilirsin.
        </h3>
        <h1 class="mb-5 text-center">KOD: XYZ123</h1>
        <form @submit.prevent="submit" class="row align-center">
          <cp-input
            class="col-10 mr-3"
            type="email"
            v-model="email"
            placeholder="E-mail"
            label="Kodu E-postana göndermemizi ister misin?"
          />
          <cp-button type="submit" varient="primary">Gönder</cp-button>
        </form>
        <p>
          Çevrendeki Campus Printer’ları görmek için
          <a href="/show-printers">tıkla</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CPInput from '@/components/UI/CPInput.vue';
import CPButton from '@/components/UI/CPButton.vue';

export default {
  components: { 'cp-input': CPInput, 'cp-button': CPButton },
  name: 'Checkout-Completed',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('alert/addAlert', {
        type: 'success',
        message: 'Kod başarıyla E-posta adresine gönderildi.'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.completed-image {
  width: 70%;
}
</style>
