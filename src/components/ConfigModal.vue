<template>
  <div>
    <button class="btn" @click="isShown = true">İncele ve Onayla</button>
    <modal :isShown.sync="isShown">
      <div class="modal">
        <div class="d-flex justify-end pointer" @click="isShown = false">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="row modal-body">
          <div class="col-12 col-sm-7">
            <embed
              src="http://www.africau.edu/images/default/sample.pdf"
              width="100%"
              height="100%"
              type="application/pdf"
            />
          </div>
          <div class="col-12 col-sm-5">Burası inputlar</div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from './UI/Modal.vue';

export default {
  name: 'Config-Modal',
  components: { Modal },
  data() {
    return {
      isShown: true
    };
  }
};
</script>

<style lang="scss" scoped>
.modal {
  height: 80vh;
  min-width: 80vw !important;
  &-body {
    height: calc(100% - 16px);
  }
}
</style>
