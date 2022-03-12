<template>
  <div class="wrapper">
    <h1 class="upload-area__title text-center">Belgeni Yükle</h1>
    <div class="wrapper-file-area d-flex">
      <div class="col-12 col-md-6 justify-center align-center">
        <img
          class="upload-area__img"
          src="../../assets/my-files-illustrator.svg"
          alt=""
        />
      </div>
      <div id="print" class="col-12 col-md-6">
        <file-uploader />
      </div>
    </div>
  </div>
</template>

<script>
import FileUploader from '/src/components/FileUpload/FileUploader.vue';

export default {
  components: { FileUploader },
  name: 'Upload-Area'
};
</script>

<style lang="scss" scoped>
.upload-area {
  &__title {
    margin-bottom: 20px;
  }
  &__img {
    height: 50%;
  }
}
</style>
