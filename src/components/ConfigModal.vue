<template>
  <div>
    <button class="btn" @click="isShown = true">İncele ve Onayla</button>
    <modal :isShown.sync="isShown">
      <div class="modal">
        <div class="d-flex justify-end pointer" @click="isShown = false">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="row modal-body">
          <div class="col-12 col-sm-8">
            <embed
              :src="file.url"
              width="100%"
              height="100%"
              type="application/pdf"
            />
          </div>
          <form @submit.prevent="submit" class="col-12 col-sm-4 form">
            <div class="d-flex justify-space-between">
              <span>Yazdır</span>
              <span>{{ pageCount }}</span>
            </div>
            <div class="form-item">
              <label for="" class="form-label">Sayfalar</label>
              <select-list
                class="form-select"
                :options="pageOptions"
                v-model="configs.pages"
              />
              <input
                v-if="configs.pages == 'custom'"
                type="text"
                class="form-input"
                v-model="customPages"
                placeholder="Örn: 1-3, 8, 11-13"
              />
            </div>
            <div class="form-item">
              <label for="" class="form-label">Kopya Sayısı</label>
              <input
                type="number"
                step="1"
                min="1"
                class="form-input"
                v-model="configs.copyNumber"
              />
            </div>
            <div class="form-item">
              <label for="" class="form-label">Kağıt Yönü</label>
              <select-list
                class="form-select"
                :options="[
                  { key: 'portrait', label: 'Dikey' },
                  { key: 'landscape', label: 'Yatay' }
                ]"
                v-model="configs.layout"
              />
            </div>
            <div class="form-item">
              <label for="" class="form-label">
                Her Kağıttaki Sayfa Sayısı
              </label>
              <select-list
                class="form-select"
                :options="perSheetOptions"
                v-model="configs.pagesPerSheet"
              />
            </div>
            <div class="form-item">
              <label for="" class="form-label"> Tek Yön / Arkalı Önlü </label>
              <select-list
                class="form-select"
                :options="[
                  { key: 'single', label: 'Tek Yön' },
                  { key: 'double', label: 'Arkalı Önlü' }
                ]"
                v-model="configs.pageSide"
              />
            </div>
          </form>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from './UI/Modal.vue';
import SelectList from './UI/SelectList.vue';

export default {
  name: 'Config-Modal',
  components: { Modal, SelectList },
  computed: {
    pageCount() {
      const pageSide = this.configs.pageSide === 'single' ? 1 : 2;
      const numberOfPage =
        this.countSelectedPages / (this.configs.pagesPerSheet * pageSide);
      return Math.ceil(numberOfPage) * this.configs.copyNumber;
    },
    countSelectedPages() {
      if (this.configs.pages == 'all') return this.file.pageCount;
      const half = this.file.pageCount / 2;
      if (this.configs.pages == 'odd') return Math.ceil(half);
      if (this.configs.pages == 'even') return Math.floor(half);
      const splited = this.customPages.split(',');
      var counter = 0;
      splited.forEach((item) => {
        let itemSplit = item.split('-');
        if (itemSplit.length == 1) {
          counter += 1;
        } else if (itemSplit.length >= 2) {
          let from = parseInt(itemSplit[0]);
          let to = parseInt(itemSplit[1]);
          counter += to - from + 1;
        }
      });
      return counter;
    }
  },
  data() {
    return {
      isShown: true,
      file: {
        url: 'http://www.africau.edu/images/default/sample.pdf',
        pageCount: 5
      },
      customPages: '',
      pageOptions: [
        { key: 'all', label: 'Tüm Sayfalar' },
        { key: 'odd', label: 'Sadece Tek Sayfalar' },
        { key: 'even', label: 'Sadece Çift Sayfalar' },
        { key: 'custom', label: 'Özel' }
      ],
      perSheetOptions: [
        { key: '1', label: '1' },
        { key: '2', label: '2' },
        { key: '4', label: '4' },
        { key: '6', label: '6' },
        { key: '9', label: '9' },
        { key: '16', label: '16' }
      ],
      pageOption: null,
      configs: {
        pages: 'all',
        layout: 'portrait',
        copyNumber: 1,
        pagesPerSheet: 1,
        pageSide: 'single'
      }
    };
  },
  methods: {
    submit(event) {
      console.log(event);
    }
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
.form {
  flex-direction: column;
}
// .config-form {
//   border-spacing: 20px;
//   td {
//     vertical-align: text-top;
//   }
//   .pages-input {
//     display: flex;
//     flex-direction: column;
//     .form-select {
//       margin-bottom: 4px;
//     }
//   }
// }
</style>
