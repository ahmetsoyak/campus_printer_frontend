<template>
  <div ref="uploader" class="file-uploader d-flex flex-col">
    <div class="overlay"></div>
    <div class="file-uploader__area">
      <input
        ref="file"
        type="file"
        accept=".pdf"
        id="fileInput"
        class="d-none"
        @input="onChange"
      />

      <label for="fileInput" class="d-flex flex-col align-center text-center">
        Sürekle Bırak <br />
        veya <br /><br />
        <cp-button varient="secondary" size="large" @click="$refs.file.click()">
          Dosya Seç
        </cp-button>
      </label>
    </div>
  </div>
</template>

<script>
import CPButton from '../UI/CPButton.vue';

export default {
  name: 'File-Uploader-Component',
  components: { 'cp-button': CPButton },
  props: {
    files: {
      type: Array,
      required: true
    }
  },
  methods: {
    onChange(event) {
      let file = event.target.files[0];
      this.$emit('update:files', [{ name: file.name, type: file.type }]);
    },
    dragEnd() {
      this.$refs.uploader.classList.remove('dragover');
    },
    uploadFile(file) {
      // let url = 'YOUR URL HERE';
      // let formData = new FormData();
      // formData.append('file', file);
      // fetch(url, {
      //   method: 'POST',
      //   body: formData
      // })
      //   .then(() => {
      //     /* Done. Inform the user */
      //   })
      //   .catch(() => {
      //     /* Error. Inform the user */
      //   });
      return {
        name: file.name,
        type: file.type
      };
    }
  },
  mounted() {
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('dragover', (event) => {
      event.preventDefault();
      if (!this.$refs.uploader.classList.contains('dragover')) {
        this.$refs.uploader.classList.add('dragover');
      }
    });
    body.addEventListener('drop', (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      this.$emit('update:files', [this.uploadFile(file)]);
      this.dragEnd();
    });
    body.addEventListener('mouseleave', (event) => {
      event.preventDefault();
      if (this.$refs.uploader.classList.contains('dragover')) {
        this.dragEnd();
      }
    });
    body.addEventListener('dragend', () => {
      this.dragEnd();
    });
  }
};
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
