<template>
  <div class="container home">
    <div class="wrapper d-flex">
      <div class="col-12 col-md-6 justify-end flex-col">
        <p class="slogan">
          Hızlı <br />
          Kolay <br />
          Temazsız <br />
          Şekilde Çıktı Al
        </p>
        <p class="slogan-text">
          Campus Printer, birçok noktayaki yazıcı otomatlar sayesinde belge
          yazdırma işlemini <strong>hızlı, kolay ve temasız</strong> hale
          getirir.
        </p>
        <router-link :to="{ hash: 'print' }">
          <cp-button size="large" hover-animation="heart-attack">
            Hemen Dene
          </cp-button>
        </router-link>
      </div>
      <div class="col-12 col-md-6 justify-center">
        <img src="../../assets/main-page-illustrator.svg" alt="" />
      </div>
    </div>
    <upload-area />
  </div>
</template>

<script>
import UploadArea from './UploadArea.vue';
import CPButton from '@/components/UI/CPButton.vue';

export default {
  name: 'Home-Page',
  components: { UploadArea, 'cp-button': CPButton }
};
</script>

<style lang="scss" scoped>
.slogan {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 500;
  &-text {
    font-size: 24px;
    margin-bottom: 20px;
    width: 80%;
  }
}
</style>
