<template>
  <dialog :open="isShown">
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  name: 'Modal-Component',
  props: {
    isShown: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.6);
  .modal {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    min-width: 50%;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
  }
}
</style>
