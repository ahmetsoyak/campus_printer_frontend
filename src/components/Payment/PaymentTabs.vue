<template>
  <tabs>
    <tab title="Havale / EFT">
      <p class="mb-6">
        Havale/EFT ile ödeme yapmak için aşağıdaki IBAN numaralarına sipariş
        tutarını, açıklama kısmına bir sonraki ekranda verilecek
        <b>çıktı alma kodunu</b> yazınız.
      </p>
      <h3 class="mb-8">
        Campus Printer Göztepe Şubesi/İstanbul <br /><br />
        TR13 3558 4726 5148 9512 **
      </h3>
      <distance-sales-contract v-model="isContractConfirmed" />
      <cp-button varient="primary" :disabled="!isContractConfirmed">
        Onayla ve Yazırma Kodunu Al
      </cp-button>
    </tab>
    <tab title="Kredi Kartı">Kredi Kartı</tab>
  </tabs>
</template>

<script>
import DistanceSalesContract from '../DistanceSalesContract.vue';
import Tab from '../UI/Tabs/Tab.vue';
import Tabs from '../UI/Tabs/Tabs.vue';
import CPButton from '../UI/CPButton.vue';

export default {
  name: 'Payment-Tabs',
  components: { Tab, Tabs, DistanceSalesContract, 'cp-button': CPButton },
  data() {
    return {
      isContractConfirmed: false
    };
  }
};
</script>
