<template>
  <div class="wrapper d-flex">
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
