const priceFormatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  minimumFractionDigits: 2
});
export default {
  methods: {
    formatPrice(price) {
      return priceFormatter.format(price);
    }
  }
};
