<template>
  <div>
    <checkbox v-model="isChecked" name="contractCheckbox" class="mb-5">
      <template #label>
        <u class="pointer" @click="isShown = true">
          Mesafeli satış sözleşmesini
        </u>
        onaylıyorum.
      </template>
    </checkbox>
    <modal :isShown.sync="isShown">
      <div class="modal">
        <div class="d-flex justify-end pointer" @click="isShown = false">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1>Mesafeli satış sözleşmesi</h1>
        <br />
        <p>MESAFELİ SATIŞ SÖZLEŞMESİ</p>
        <br />
        <p class="pb-5 contract">
          MADDE 1- TARAFLAR 1.1. SATICI: Ünvanı: Campus Printer - / İSTANBUL
          ALICI("TÜKETİCİ"): Adı/Soyadı/Ünvanı: Test Kişisi Adresi : - / Türkiye
          Telefon: - Email: - VKN: Vergi Kimlik Numarası Beyan Edilmemiştir
          MADDE 2- KONU İşbu sözleşmenin konusu, TÜKETİCİ'nin
          www.hepsiburada.com internet sitesinden elektronik ortamda siparişini
          yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı
          ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması
          Hakkındaki Kanun hükümleri gereğince tarafların hak ve
          yükümlülüklerinin saptanmasıdır. MADDE 3- SÖZLEŞME KONUSU ÜRÜN, ÖDEME
          VE TESLİMATA İLİŞKİN BİLGİLER 3.1- Sözleşme konusu mal veya hizmetin
          adı, adeti, KDV dahil satış fiyatı, ödeme şekli ve temel nitelikleri
          Ürün Adı ve Temel Nitelikleri Adet Satış Bedeli (KDV dahil toplam Türk
          Lirası) JBL Clip 3 IPX7 Su Geçirmez Taşınabilir Bluetooth Hoparlör
          Yeşil 1 699,00 3.2- Ödeme Şekli : Havale/EFT ile ödeme 3.3- Diğer
          yandan vadeli satışların sadece Bankalara ait kredi kartları ile
          yapılması nedeniyle, TÜKETİCİ, ilgili faiz oranlarını ve temerrüt
          faizi ile ilgili bilgileri bankasından ayrıca teyit edeceğini,
          yürürlükte bulunan mevzuat hükümleri gereğince faiz ve temerrüt faizi
          ile ilgili hükümlerin Banka ve TÜKETİCİ arasındaki kredi kartı
          sözleşmesi kapsamında uygulanacağını kabul, beyan ve taahhüt eder.
          Ayrıca, Kredili satış imkanının Bankalar tarafından sadece Banka
          Müşterisi olan TÜKETİCİ'ye sağlanması nedeniyle, TÜKETİCİ, ilgili faiz
          oranlarını ve temerrüt faizi ile ilgili bilgileri bankasından ayrıca
          teyit edeceğini, yürürlükte bulunan mevzuat hükümleri gereğince faiz
          ve temerrüt faizi ile ilgili hükümlerin Banka ve TÜKETİCİ arasındaki
          Anında/Mesafeli Alışveriş Kredisi sözleşmesi kapsamında uygulanacağını
          kabul, beyan ve taahhüt eder. Kredi verme ve detaylı ödeme planınızın
          oluşturulması Bankanız inisiyatifindedir. 3.4 - İade Prosedürü:
          TÜKETİCİ'nin cayma hakkını kullandığı durumlarda ya da siparişe konu
          olan ürünün çeşitli sebeplerle tedarik edilememesi veya hakem heyeti
          kararları ile TÜKETİCİ'ye bedel iadesine karar verilen durumlarda,
          ödeme seçeneklerine ilişkin iade prosedürü aşağıda belirtilmiştir: a)
          Kredi Kartı ile Ödeme Seçeneklerinde İade Prosedürü Alışveriş kredi
          kartı ile ve taksitli olarak yapılmışsa, TÜKETİCİ ürünü kaç taksit ile
          aldıysa Banka TÜKETİCİ'ye geri ödemesini taksitle yapmaktadır. SATICI
          bankaya ürün bedelinin tamamını tek seferde ödedikten sonra, Banka
          poslarından yapılan taksitli harcamaların TÜKETİCİ'nin kredi kartına
          iadesi durumunda, konuya müdahil tarafların mağdur duruma düşmemesi
          için talep edilen iade tutarları, yine taksitli olarak hamil taraf
          hesaplarına Banka tarafından aktarılır. TÜKETİCİ'nin satış iptaline
          kadar ödemiş olduğu taksit tutarları, eğer iade tarihi ile kartın
          hesap kesim tarihleri çakışmazsa her ay karta 1 (bir) iade yansıyacak
          ve TÜKETİCİ iade öncesinde ödemiş olduğu taksitleri satışın taksitleri
          bittikten sonra, iade öncesinde ödemiş olduğu taksitleri sayısı kadar
          ay daha alacak ve mevcut borçlarından düşmüş olacaktır. Kart ile
          alınmış mal ve hizmetin iadesi durumunda SATICI, Banka ile yapmış
          olduğu sözleşme gereği TÜKETİCİ'ye nakit para ile ödeme yapamaz.
          SATICI, bir iade işlemi söz konusu olduğunda ilgili yazılım aracılığı
          ile iadesini yapacak olup, SATICI ilgili tutarı Banka'ya nakden veya
          mahsuben ödemekle yükümlü olduğundan yukarıda anlatmış olduğumuz
          prosedür gereğince TÜKETİCİ'ye nakit olarak ödeme yapılamamaktadır.
          Kredi kartına iade, SATICI'nın Banka'ya bedeli tek seferde ödemesinden
          sonra, Banka tarafından yukarıdaki prosedür gereğince yapılacaktır.
          TÜKETİCİ, bu prosedürü okuduğunu ve kabul ettiğini kabul ve taahhüt
          eder. b) Havale/EFT Ödeme Seçeneklerinde İade Prosedürü İade,
          TÜKETİCİ'den banka hesap bilgileri istenerek, TÜKETİCİ'nin belirttiği
          hesaba (hesabın fatura adresindeki kişinin adına veya kullanıcı üyenin
          adına olması şarttır) havale ve EFT şeklinde yapılacaktır. SATICI
          bankaya ürün bedelinin tamamını tek seferde geri öder. Havale/EFT
          yoluyla alınmış mal ve hizmetin iadesi durumunda SATICI, Banka ile
          yapmış olduğu sözleşme gereği TÜKETİCİ'ye nakit para ile ödeme
          yapamaz. SATICI, bir iade işlemi söz konusu olduğunda ilgili yazılım
          aracılığı ile iadesini yapacak olup, SATICI ilgili tutarı Banka'ya
          nakden veya mahsuben ödemekle yükümlü olduğundan yukarıda anlatmış
          olduğumuz prosedür gereğince TÜKETİCİ'ye nakit olarak ödeme
          yapılamamaktadır. TÜKETİCİ, bu prosedürü okuduğunu ve kabul ettiğini
          kabul ve taahhüt eder. c) Alışveriş Kredisi ile Ödeme Seçeneklerinde
          İade Prosedürü İade, TÜKETİCİ'den banka hesap bilgileri
          istenerek,TÜKETİCİ'nin belirttiği hesaba (hesabın fatura adresindeki
          kişinin adına veya kullanıcı üyenin adına olması şarttır) havale ve
          EFT şeklinde yapılacaktır. SATICI bankaya ürün bedelinin tamamını tek
          seferde geri öder. Kredi yoluyla alınmış mal ve hizmetin iadesi
          durumunda SATICI, Banka ile yapmış olduğu sözleşme gereği TÜKETİCİ'ye
          nakit para ile ödeme yapamaz. SATICI, bir iade işlemi söz konusu
          olduğunda ilgili yazılım aracılığı ile iadesini yapacak olup, SATICI
          ilgili tutarı Banka'ya nakden veya mahsuben ödemekle yükümlü
          olduğundan yukarıda anlatmış olduğumuz prosedür gereğince TÜKETİCİ'ye
          nakit olarak ödeme yapılamamaktadır. TÜKETİCİ, bu prosedürü okuduğunu
          ve kabul ettiğini kabul ve taahhüt eder. 3.5- Teslimat Şekli ve Adresi
          : Teslimat Adresi : İstanbul / Türkiye Teslim Edilecek Kişi: Test
          Kişisi Fatura Adresi : İstanbul / Türkiye Paketleme, kargo ve teslim
          masrafları TÜKETİCİ tarafından karşılanmaktadır. Kargo ücreti 0,00 -TL
          olup, kargo fiyatı sipariş toplam tutarına eklenmektedir. Ürün
          bedeline dahil değildir. Teslimat , anlaşmalı kargo şirketi aracılığı
          ile, TÜKETİCİ'nin yukarıda belirtilen adresinde elden teslim
          edilecektir. Teslim anında TÜKETİCİ'nin adresinde bulunmaması
          durumunda dahi Firmamız edimini tam ve eksiksiz olarak yerine getirmiş
          olarak kabul edilecektir. Bu nedenle, TÜKETİCİ'nin ürünü geç teslim
          almasından ve/veya hiç teslim almamasından kaynaklanan zararlardan ve
          giderlerden SATICI sorumlu değildir. SATICI, sözleşme konusu ürünün
          sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa
          garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden
          sorumludur. 3.6. Hızlı ve Kolay Alışveriş: Siparişin onaylanması
          sonrasında, ""TÜKETİCİ"" sipariş onaylanma ekranında hızlı ve kolay
          alışveriş bölümünde TÜKETİCİ ""ONAY"" sekmesini tıklaması ve
          müşterinin sistemde kayıtlı cep telefonuna gelen SMS doğrulama
          aktivasyon kodunu, 180 saniye içerisinde sitede yer alan ilgili bölüme
          girmesi halinde kargo firması, teslimat adresi, ödeme seçim ve
          bilgilerinin kendi onayıyla ""müşteri profil bilgileri"" altında
          kaydedilerek saklanmasını kabul eder. ""TÜKETİCİ'NİN"" rızası ile
          kaydedilen ilgili bilgiler ""müşterinin profil bilgileri"" altında
          saklanacak olup ""TÜKETİCİ'NİN"" talebi durumunda bu bilgiler
          istenildiğinde ""müşteri profilinden"" çıkartılır. MADDE 4- CAYMA
          HAKKI TÜKETİCİ , SATICI ile imzaladığı işbu Mesafeli Satış
          Sözleşmesi'nden 14 (ondört) gün içinde herhangi bir gerekçe
          göstermeksizin ve cezai şart ödemeksizin cayma hakkına sahiptir.
          TÜKETİCİ, sözleşme konusu malı, cayma hakkını kullandığı tarihten
          itibaren 10 gün içinde satıcıya ya da satıcının belirlediği taşıyıcıya
          iade etmekle yükümlüdür. Cayma hakkı süresi, hizmet ifasına ilişkin
          sözleşmelerde sözleşmenin kurulduğu gün; mal teslimine ilişkin
          sözleşmelerde ise TÜKETİCİ'nin veya TÜKETİCİ tarafından belirlenen
          üçüncü kişinin malı teslim aldığı gün başlar. Ancak TÜKETİCİ,
          sözleşmenin kurulmasından malın teslimine kadar olan süre içinde de
          cayma hakkını kullanabilir. Cayma hakkı süresinin belirlenmesinde; a)
          Tek sipariş konusu olup ayrı ayrı teslim edilen mallarda, TÜKETİCİ'nin
          veya TÜKETİCİ tarafından belirlenen üçüncü kişinin son malı teslim
          aldığı gün, b) Birden fazla parçadan oluşan mallarda, TÜKETİCİ'nin
          veya TÜKETİCİ tarafından belirlenen üçüncü kişinin son parçayı teslim
          aldığı gün, c) Belirli bir süre boyunca malın düzenli tesliminin
          yapıldığı sözleşmelerde, TÜKETİCİ'nin veya TÜKETİCİ tarafından
          belirlenen üçüncü kişinin ilk malı teslim aldığı gün esas alınır.
          Cayma bildiriminizi cayma hakkı süresi dolmadan İnternet Sitesi'nde
          yer alan kişisel üyelik sayfanızdaki kolay iade seçeneği üzerinden
          gerçekleştirebilirsiniz. Cayma hakkınız kapsamında öngörülen taşıyıcı
          sipariş edilen ürünün tarafınıza teslim edildiği kargo firması olup,
          İnternet Sitesi'nde yer alan kişisel üyelik sayfanızdaki kolay iade
          seçeneğinde geri gönderime ilişkin detaylar açıklanmıştır. Tüketici
          aşağıdaki sözleşmelerde cayma hakkını kullanamaz: a) Fiyatı finansal
          piyasalardaki dalgalanmalara bağlı olarak değişen ve SATICI veya
          sağlayıcının kontrolünde olmayan mal veya hizmetlere ilişkin
          sözleşmeler. b) Tüketicinin istekleri veya kişisel ihtiyaçları
          doğrultusunda hazırlanan mallara ilişkin sözleşmeler. c) Çabuk
          bozulabilen veya son kullanma tarihi geçebilecek malların teslimine
          ilişkin sözleşmeler. ç) Tesliminden sonra ambalaj, bant, mühür, paket
          gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve
          hijyen açısından uygun olmayanların teslimine ilişkin sözleşmeler. d)
          Tesliminden sonra başka ürünlerle karışan ve doğası gereği
          ayrıştırılması mümkün olmayan mallara ilişkin sözleşmeler. e) Malın
          tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları
          açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve
          bilgisayar sarf malzemelerine ilişkin sözleşmeler. f) Abonelik
          sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli
          yayınların teslimine ilişkin sözleşmeler. g) Belirli bir tarihte veya
          dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama,
          yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş
          zamanın değerlendirilmesine ilişkin sözleşmeler. ğ) Elektronik ortamda
          anında ifa edilen hizmetler veya TÜKETİCİ'ye anında teslim edilen
          gayrimaddi mallara ilişkin sözleşmeler. h) Cayma hakkı süresi sona
          ermeden önce, TÜKETİCİ'nin onayı ile ifasına başlanan hizmetlere
          ilişkin sözleşmeler. TÜKETİCİ'nin ""Alışveriş Kredisi"" ile ödeme
          seçeneğini seçmesi halinde, TÜKETİCİ, Anında/Mesafeli Alışveriş
          Kredisi Sözleşmesi'nden cayma hakkının, Banka ve TÜKETİCİ arasındaki
          Anında/Mesafeli Alışveriş Kredisi sözleşmesi kapsamında uygulanacağını
          kabul, beyan ve taahhüt eder. TÜKETİCİ'nin, SATICI ile imzaladığı işbu
          Mesafeli Satış Sözleşmesi'nden cayması, Banka ile arasındaki
          Anında/Mesafeli Alışveriş Kredisi Sözleşmesi'ni otomatikman SONA
          ERDİRMEYECEKTİR. TÜKETİCİ'nin, Anında/Mesafeli Alışveriş Kredisi
          Sözleşmesi'nden cayması için cayma talebini Anında/Mesafeli Alışveriş
          Kredisi Sözleşmesi'nde belirtilen süreler içerisinde, yine
          Anında/Mesafeli Alışveriş Kredisi Sözleşmesi'nde öngörülen usule uygun
          olarak kredi veren Banka'ya yöneltmesi gerekmektedir. Bu kapsamda,
          TÜKETİCİ tarafından Banka'ya yapılması gereken bildirimin hiç
          yapılmaması veya geç yapılması durumunda ya da Banka ile TÜKETİCİ
          arasındaki kredi ilişkisi ile ilgili Üye İşyeri'nin yani SATICI'nın
          hiçbir sorumluluğu doğmayacaktır. MADDE 5- GENEL HÜKÜMLER 5.1-
          TÜKETİCİ, www.hepsiburada.com internet sitesinde sözleşme konusu ürüne
          ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik
          ortamda gerekli teyidi verdiğini beyan eder. 5.2- Ürün sözleşme
          tarihinden itibaren en geç 30 gün içerisinde teslim edilecektir.
          Ürününün teslim edilmesi anına kadar tüm sorumluluk SATICI'ya aittir.
          5.3- Sözleşme konusu ürün, TÜKETİCİ'dan başka bir kişi/kuruluşa teslim
          edilecek ise, teslim edilecek kişi/kuruluşun teslimatı kabul
          etmemesinden SATICI sorumlu tutulamaz. 5.4- SATICI, sözleşme konusu
          ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve
          varsa garanti belgeleri ve kullanım kılavuzları ile teslim
          edilmesinden sorumludur. 5.5- Sözleşme konusu ürünün teslimatı için
          işbu sözleşmenin bedelinin TÜKETİCİ'nin tercih ettiği ödeme şekli ile
          ödenmiş olması şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya
          banka kayıtlarında iptal edilir ise, SATICI ürünün teslimi
          yükümlülüğünden kurtulmuş kabul edilir. 5.6- Ürünün tesliminden sonra
          TÜKETİCİ'ya ait kredi kartının TÜKETİCİ'nin kusurundan kaynaklanmayan
          bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak
          kullanılması nedeni ile ilgili banka veya finans kuruluşun ürün
          bedelini SATICI'ya ödememesi halinde, TÜKETİCİ'nin kendisine teslim
          edilmiş olması kaydıyla ürünün SATICI'ya gönderilmesi zorunludur. 5.7-
          Garanti belgesi ile satılan ürünlerden olan veya olmayan ürünlerin
          ayıplı (arızalı, bozuk vb.) halinde veya garanti kapsamında ve
          şartları dahilinde arızalanması veya bozulması halinde gerekli
          onarımın yetkili servise yaptırılması için sözkonusu ürünler SATICI'ya
          gönderilebilir, bu takdirde kargo giderleri SATICI tarafından
          karşılanacaktır. 5.8- 385 sayılı vergi usul kanunu genel tebliği
          uyarınca iade işlemlerinin yapılabilmesi için tarafınıza göndermiş
          olduğumuz iade bölümü bulunan faturada ilgili bölümlerin eksiksiz
          olarak doldurulması ve imzalandıktan sonra tarafımıza ürün ile
          birlikte geri gönderilmesi gerekmektedir. 5.9- Tüketici, İnternet
          Sitesi üzerinden ""eskiyi getir-yeniyi götür"" adı altında sunulan
          kampanyadan yararlanmasının kampanya koşullarını tam ve zamanında
          yerine getirmesi şartına bağlı olduğunu, bu kapsamda kampanyadan
          faydalanmak için İnternet Sitesi’nde belirtilen kampanya koşullarını
          tam ve zamanında yerine getirmesi gerektiğini, aksi takdirde söz
          konusu kampanyadan yararlanamayacağını kabul, beyan ve taahhüt eder.
          Bu kapsamda satın alınan ürüne ilişkin fatura, kampanya şartlarının
          Tüketici tarafından sağlanıp sağlanmadığının belirlenmesi akabinde
          düzenlenecektir. 5.10- Satışı ilgili mevzuatlar gereği resmi merciler
          nezdinde gerçekleştirilecek resmi işlemler ile tamamlanması öngörülen
          ürünler için Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi bir
          ön protokol niteliğindedir. Bu ürünlerin toplam bedeline satışa
          ilişkin resmi işlemlerin tamamlanması sırasında ortaya çıkacak
          masraflar dahil değildir. Söz konusu masraflar TÜKETİCİ tarafından
          resmi işlemlerin yerine getirilmesi esnasında ödenecektir. Bu
          satışlar, resmi merciler nezdinde resmi işlemlerin yerine getirilmesi
          ile tamamlanmış sayılacaktır. Bu kapsamda cayma hakkı, kargo /
          teslimat ve benzeri nitelikteki uygulama alanı bulunmayan hükümler bu
          ürünler için geçerli olmayacaktır. MADDE 6- UYUŞMAZLIK VE YETKİLİ
          MAHKEME İşbu sözleşme ile ilgili çıkacak ihtilaflarda; Türk
          Mahkemeleri yetkili olup; uygulanacak hukuk Türk Hukuku'dur. Türkiye
          Cumhuriyeti sınırları içerisinde geçerli olmak üzere her yıl Ticaret
          Bakanlığı tarafından ilan edilen değere kadar olan ihtilaflar için
          TÜKETİCİ işleminin yapıldığı veya TÜKETİCİ ikametgahının bulunduğu
          yerdeki İl veya İlçe Tüketici Hakem Heyetleri,söz konusu değerin
          üzerindeki ihtilaflarda ise TÜKETİCİ işleminin yapıldığı veya TÜKETİCİ
          ikametgahının bulunduğu yerdeki Tüketici Mahkemeleri Yetkili
          olacaktır. Siparişin gerçekleşmesi durumunda TÜKETİCİ işbu sözleşmenin
          tüm koşullarını kabul etmiş sayılır. SATICI : UMUT İNTERNET HİZMETLERİ
          SAN. VE TİC. ALICI(""TÜKETİCİ"") : Test Kişisi Tarih : 13.08.1990
        </p>
      </div>
    </modal>
  </div>
</template>

<script>
import Checkbox from './UI/Checkbox.vue';
import Modal from './UI/Modal.vue';

export default {
  name: 'Distance-Sales-Contract',
  components: { Checkbox, Modal },
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {
    isChecked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  data() {
    return {
      isShown: false
    };
  }
};
</script>

<style lang="scss" scoped>
.modal {
  width: 60vw;
  height: 70vh;
  padding: 40px;
  .contract {
    overflow-y: auto;
    max-height: 80%;
  }
}
</style>
