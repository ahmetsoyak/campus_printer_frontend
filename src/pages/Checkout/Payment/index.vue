<template>
  <div class="wrapper">
    <h1 class="upload-area__title text-center mb-5">Ödeme Yap</h1>
    <div class="row">
      <div class="col-12 col-md-6 flex-col">
        <payment-tabs />
      </div>
      <div class="col-12 col-md-6 justify-center">
        <img
          src="../../../assets/payment-illustrator.svg"
          class="payment-image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import PaymentTabs from '@/components/Payment/PaymentTabs.vue';
export default {
  name: 'Checkout-Payment',
  components: { PaymentTabs }
};
</script>

<style lang="scss" scoped>
.payment-image {
  width: 60%;
}
</style>
