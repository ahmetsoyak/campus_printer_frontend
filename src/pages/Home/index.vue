<template>
  <div class="container home">
    <nav class="d-flex justify-space-between">
      <h1>Campus Printer</h1>
      <div class="d-grid links text-right">
        <a href="#how-it-works">NASIL ÇALIŞIR?</a>
        <a href="#pricing">FİYATLANDIRMA</a>
        <a href="#contact">İLETİŞİM</a>
      </div>
    </nav>
    <div class="wrapper d-flex">
      <div class="col-12 col-md-6 justify-end flex-col">
        <p class="slogan">
          Hızlı <br />
          Kolay <br />
          Temazsız <br />
          Şekilde Çıktı Al
        </p>
        <p class="slogan-text">
          Campus Printer, birçok noktayaki yazıcı otomatlar sayesinde belge
          yazdırma işlemini hızlı, kolay ve temasız hale getirir.
        </p>
        <button class="btn-action">Hemen Dene</button>
      </div>
      <div class="col-12 col-md-6 justify-center">
        <img src="../../assets/main-page-illustrator.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-Page'
};
</script>

<style lang="scss" scoped>
nav {
  padding: 40px 0;
  .links {
    gap: 0 50px;
    align-items: center;
    grid-template-columns: max-content min-content min-content;
    a {
      font-weight: 500;
      text-decoration: none;
      color: black;
      gap: 0 20px;
      cursor: pointer;
      transition: all 500ms;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
.slogan {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 500;
  &-text {
    font-size: 24px;
    margin-bottom: 20px;
    width: 80%;
  }
}
</style>
