import React from 'react';

export default function KullanimKosullari() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-24 lg:py-32 text-gray-800 font-sans text-black">
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-12 uppercase tracking-widest text-center border-b border-black/10 pb-8">
          Kullanım Koşulları
        </h1>
        
        <div className="space-y-10 text-sm leading-relaxed text-gray-700">
          <section>
            <p className="text-base">
              Bu Kullanım Koşulları, <strong>agorahotelapart.com</strong> adresindeki İnternet sitesini kullanırken uymanız gereken kuralları içermektedir. Lütfen İnternet sitesini kullanmaya devam etmeden önce bu koşulları dikkatli bir şekilde okuyunuz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider text-black">Kapsam ve Değişiklikler</h2>
            <p>
              <strong>agorahotelapart.com</strong> adresindeki İnternet sitesi, <strong>Agora Apart Hotel</strong> tarafından işletilmektedir. Bu Kullanım Koşulları, İnternet sitesi kullanımı sırasında uygulanacak kuralları ve tarafların hak ve yükümlülüklerini belirlemektedir. İnternet sitesini kullanmaya devam ettiğiniz takdirde bu koşulları kabul ettiğiniz varsayılacaktır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider text-black">Hizmet İçeriği ve Kullanım</h2>
            <p>
              Bu İnternet sitesi tarafından sunulan hizmetler, yasal mevzuatlara uygun bir şekilde kullanılmak üzere tasarlanmıştır. Kullanıcılar, İnternet sitesini kullanırken tüm yasa, tüzük ve yönetmelikler ile uluslararası sözleşmelere ve teamüllere uymakla yükümlüdür. Agora Apart Hotel, herhangi bir zamanda, herhangi bir nedenle, önceden bildirimde bulunmaksızın hizmetlerini değiştirme, askıya alma veya sonlandırma hakkını saklı tutar.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider text-black">Kullanıcı Yükümlülükleri</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Yasalara aykırı ve suç teşkil eder nitelikte paylaşımlarda bulunmamak.</li>
              <li>Üçüncü kişilerin fikri mülkiyet haklarını ihlal eder nitelikte eylemlerde bulunmamak.</li>
              <li>Kötü amaçlı yazılımları yaymamak veya güvenlik açıklarını istismar etmemek.</li>
              <li>Sunulan hizmetleri amacına aykırı bir şekilde veya kötüye kullanmamak.</li>
              <li>Kayıt sırasında ve hizmet kullanımı süresince doğru ve güncel iletişim bilgileri sağlamak.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider text-black">Fikri Mülkiyet Hakları</h2>
            <p>
              İnternet sitesinde yer alan tüm içerik, tasarım, logo, yazılım ve sair materyaller, <strong>Agora Apart Hotel</strong> fikri mülkiyet ve telif haklarına haiz olup, yasal mevzuatlarınca korunmaktadır. Bu içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider text-black">Sorumluluk Sınırları</h2>
            <p>
              Agora Apart Hotel, İnternet sitesinin kullanımından doğabilecek doğrudan veya dolaylı hiçbir zarardan sorumlu tutulamaz. İnternet sitemiz, "olduğu gibi" sunulmaktadır ve kesintisiz veya hatasız çalışacağına dair herhangi bir garanti verilmemektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4 uppercase tracking-wider text-black">Uyuşmazlık Çözümü</h2>
            <p>
              Bu İnternet sitesinin kullanımından doğabilecek uyuşmazlıklarda, <strong>Alanya Mahkemeleri ve İcra Daireleri</strong> yetkili olacaktır. Bu koşullar, Türkiye Cumhuriyeti kanunlarına göre yorumlanacak ve uygulanacaktır.
            </p>
          </section>

          <section className="border-t border-black/10 pt-8 pb-12">
            <h2 className="text-lg font-bold text-black mb-2 uppercase tracking-wider text-black">Son Hükümler</h2>
            <p className="italic">
              Bu Kullanım Koşulları, <strong>8 Nisan 2026</strong> tarihinde yürürlüğe girmiş olup, İnternet sitesini kullanmaya devam ettiğiniz takdirde kabul ettiğiniz varsayılacaktır.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}