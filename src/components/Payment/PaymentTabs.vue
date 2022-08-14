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
      <cp-button
        @click="submit"
        varient="primary"
        :disabled="!isContractConfirmed"
      >
        Onayla ve Yazırma Kodunu Al
      </cp-button>
    </tab>
    <tab title="Kredi Kartı">
      <form @submit.prevent="submit">
        <cp-input
          type="number"
          label="Kart numarası"
          placeholder="•••• •••• •••• ••••"
        />
        <cp-input
          label="Kart üzerindeki isim"
          placeholder="Kart sahibinin adı ve soyadı"
        />
        <div class="row">
          <cp-input
            class="col col-6 mr-4"
            label="Kart numarası"
            placeholder="Ay / Yıl"
          />
          <cp-input
            class="col col-6"
            placeholder="CVC/CVV"
            label="Güvenlik Numarası"
          />
        </div>
        <distance-sales-contract v-model="isContractConfirmed" />
        <cp-button
          type="submit"
          varient="primary"
          :disabled="!isContractConfirmed"
        >
          Onayla ve Yazırma Kodunu Al
        </cp-button>
      </form>
    </tab>
  </tabs>
</template>

<script>
import Tab from '../UI/Tabs/Tab.vue';
import Tabs from '../UI/Tabs/Tabs.vue';
import CPInput from '../UI/CPInput.vue';
import CPButton from '../UI/CPButton.vue';
import DistanceSalesContract from '../DistanceSalesContract.vue';

export default {
  name: 'Payment-Tabs',
  components: {
    Tab,
    Tabs,
    'cp-input': CPInput,
    'cp-button': CPButton,
    DistanceSalesContract
  },
  data() {
    return {
      isContractConfirmed: false
    };
  },
  methods: {
    submit() {
      console.log('lsdfkml');
      // TODO make an API call
      this.$router.push({
        name: 'checkout.completed',
        params: {
          uid: 'Cgdnd3Mtd2l6EAM6BwgAEEcQsAM6BwgA'
        }
      });
    }
  }
};
</script>
