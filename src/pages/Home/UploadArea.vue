<template>
  <div class="wrapper">
    <h1 class="upload-area__title mb-4 text-center">Belgeni Yükle</h1>
    <div class="wrapper-file-area d-flex">
      <div class="col-12 col-md-6 justify-center align-center">
        <img
          class="upload-area__img"
          src="../../assets/my-files-illustrator.svg"
          alt=""
        />
      </div>
      <div id="print" class="col-12 col-md-6">
        <file-uploader v-if="files.length == 0" :files.sync="files" />
        <div
          v-else
          class="container-fluid d-flex flex-col align-center justify-center"
        >
          <file-list v-model="files" class="mb-3" />
          <config-modal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfigModal from '@/components/ConfigModal.vue';
import FileList from '/src/components/FileUpload/FileList.vue';
import FileUploader from '/src/components/FileUpload/FileUploader.vue';

export default {
  name: 'Upload-Area',
  components: { FileUploader, FileList, ConfigModal },
  data() {
    return {
      files: []
    };
  }
};
</script>

<style lang="scss" scoped>
.upload-area__img {
  height: 50%;
}
</style>
