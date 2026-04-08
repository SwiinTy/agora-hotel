import React from 'react';

export default function GizlilikPolitikasi() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-24 lg:py-32 text-gray-800 font-sans">
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-12 uppercase tracking-widest text-center border-b border-black/10 pb-8 text-black">
          Gizlilik Politikası
        </h1>
        
        <div className="space-y-10 text-sm leading-relaxed text-gray-700">
          <section>
            <p>
              Bu gizlilik politikası, <strong>agorahotelapart.com</strong> İnternet sitesi kapsamında kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında sizi bilgilendirmeyi amaçlamaktadır. Güvenliğiniz bizim için önemli. Bu sebeple, bizimle paylaşacağınız kişisel verileriniz hassasiyetle korunmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">Veri Sorumlusu</h2>
            <p className="mb-4 text-base">
              Kişisel Verilerin Korunması Kanunu'na (KVKK) göre veri sorumlusu olarak, ziyaret etmekte olduğunuz İnternet sitesi kapsamında hangi verilerinizin işleneceği konusunda sizi aydınlatıyoruz.
            </p>
            <ul className="bg-gray-50 p-6 rounded-lg space-y-2 border border-gray-100">
              <li><strong>Ünvan:</strong> Agora Apart Hotel</li>
              <li><strong>Adres:</strong> Saray Mah. Bebek Sok. No:7 Alanya / Antalya, Türkiye</li>
              <li><strong>E-posta:</strong> ozcancnn@gmail.com</li>
              <li><strong>Telefon:</strong> +90 552 593 35 07</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">Toplanan Kişisel Veriler</h2>
            <p>Bu İnternet sitesi ve rezervasyon sistemimiz tarafından toplanan verileriniz:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Ad, Soyad, T.C. Kimlik veya Pasaport Numarası</li>
              <li>İletişim Bilgileri (Telefon, E-posta, Adres)</li>
              <li>Cihaz bilgileri ve IP adresi</li>
              <li>Rezervasyon tarihleri ve tercihleri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">Verilerin İşlenme Amaçları</h2>
            <p>
              Kişisel verileriniz; rezervasyon kaydınızın oluşturulması, konaklama hizmetinin sunulması, yasal bildirimlerin (KBS) yerine getirilmesi, hizmet kalitesinin artırılması ve gerektiğinde yasal merciler ile bilgi paylaşılabilmesi amaçları ile işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">Veri İşlemenin Hukuki Dayanağı</h2>
            <p>
              Kişisel verileriniz, KVKK madde 5 uyarınca; bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması ve veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması durumlarında işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">KVKK Kapsamında Haklarınız</h2>
            <p className="mb-4">KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili şu haklara sahiptir:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kişisel verilerinin işlenip işlenmediğini öğrenme.</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme.</li>
              <li>Verilerin düzeltilmesini, silinmesini veya yok edilmesini isteme.</li>
              <li>Kanuna aykırı işleme sebebiyle zarara uğraması halinde zararın giderilmesini talep etme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider">Çerez Kullanımı</h2>
            <p>
              İnternet sitemiz, ziyaretçi deneyimini artırmak ve performans analizi yapmak amacıyla düşük boyutlu metin dosyaları olan çerezleri (cookies) kullanmaktadır. Tarayıcı ayarlarınızdan çerez tercihlerinizi değiştirebilirsiniz.
            </p>
          </section>

          <section className="border-t border-black/10 pt-8 pb-12">
            <h2 className="text-lg font-bold text-black mb-2 uppercase tracking-wider">Onay ve Yürürlük</h2>
            <p className="italic">
              Bu Gizlilik Politikası, <strong>8 Nisan 2026</strong> tarihinde güncellenmiş olup yürürlüğe girmiştir. Sitemiz üzerinden rezervasyon yapan tüm kullanıcılar bu politikayı kabul etmiş sayılır.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}