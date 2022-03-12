<template>
  <div id="uploader" class="file-uploader">
    <file-list v-if="filelist.length > 0" :files="files" />
    <div class="overlay"></div>
    <div class="file-uploader__area">
      <input
        type="file"
        id="fileInput"
        class="d-none"
        @change="onChange"
        ref="file"
        accept=".pdf"
      />

      <label for="fileInput" class="d-flex flex-col align-center text-center">
        Sürekle Bırak <br />
        veya <br /><br />
        <a class="button-action">Dosya Seç</a>
      </label>
    </div>
  </div>
</template>

<script>
import FileList from './FileList.vue';

export default {
  name: 'File-Uploader-Component',
  components: { FileList },
  delimiters: ['${', '}'], // Avoid Twig conflicts
  data() {
    return {
      filelist: [] // Store uploaded files
    };
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
    }
  }
};
window.addEventListener('load', function () {
  const body = document.getElementsByTagName('body')[0];
  const uploader = document.getElementById('uploader');
  const fileInput = document.getElementById('fileInput');
  if (uploader) {
    body.addEventListener('dragover', (event) => {
      event.preventDefault();
      if (!event.currentTarget.classList.contains('dragover')) {
        uploader.classList.add('dragover');
      }
    });
    body.addEventListener('drop', (event) => {
      event.preventDefault();
      console.log('drop');
      const files = event.dataTransfer.files;
      handleFiles(files);
      console.log(fileInput.files);
      dragEnd();
    });
    body.addEventListener('dragleave', (event) => {
      event.preventDefault();
      if (event.currentTarget.classList.contains('dragover')) {
        dragEnd();
      }
    });
    body.addEventListener('dragend', dragEnd);
  }
  function dragEnd() {
    uploader.classList.remove('dragover');
  }
  function handleFiles(files) {
    [...files].forEach(uploadFile);
  }
  function uploadFile(file) {
    let url = 'YOUR URL HERE';
    let formData = new FormData();

    formData.append('file', file);

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(() => {
        /* Done. Inform the user */
      })
      .catch(() => {
        /* Error. Inform the user */
      });
  }
});
</script>

<style lang="scss" scoped>
.file-uploader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__area {
    width: 70%;
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    &.animate {
      animation: activehover 1.5s infinite;
    }
  }
  .overlay {
    display: none;
  }
  &.dragover {
    .overlay {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: rgba($color: #000000, $alpha: 0.6);
      top: 0;
      left: 0;
    }
  }
}
</style>
