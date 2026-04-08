import React from 'react';

export default function MesafeliSatisSozlesmesi() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-24 lg:py-32 text-foreground font-sans text-black">
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-12 uppercase tracking-widest text-center border-b border-black/10 pb-8">
          Mesafeli Satış Sözleşmesi
        </h1>
        
        <div className="space-y-10 text-sm leading-relaxed text-gray-800">
          
          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 1 / TARAFLAR</h2>
            <p className="mb-2"><strong>1.1. TESİS:</strong> Saray Mah. Bebek Sok. No:7 Alanya / Antalya adresinde yerleşik, 0552 593 35 07 telefon numarasına sahip <strong>AGORA APART HOTEL</strong> (Bundan böyle OTEL olarak anılacaktır).</p>
            <p><strong>1.2. MÜŞTERİ:</strong> Sistemi kullanarak rezervasyon yapan, kişisel bilgilerini giren ve sistemi onaylayarak şartları peşinen kabul eden kullanıcıdır.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 2 / KONU</h2>
            <p>2.1. İşbu sözleşme Müşterinin web sitesi üzerinden aşağıda açıklanan koşullar çerçevesinde konaklama hizmeti alımı çerçevesindeki rezervasyonunu içerir. Sözleşme bedelinde fiyat artışı olması halinde fark talep edilmez.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 3 / SÖZLEŞME BEDELİ VE ÖDEME</h2>
            <p>3.1. Sözleşme bedeline KDV dahildir.</p>
            <p>3.2. Rezervasyonda belirtilmeyen ekstralar (restaurant, içecek vb.) otel çıkışında ayrıca ödenir.</p>
            <p>3.3. Yapılması gereken iadelerde, ödemenin yapıldığı kredi kartına veya banka hesabına 30 gün içerisinde geri ödeme yapılır.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 4 / KONAKLAMA KURALLARI</h2>
            <p>4.1. Otele giriş saati 14:00, çıkış saati 12:00'dir. Erken giriş veya geç çıkış talepleri otelin uygunluk durumuna ve ek ücrete tabi olabilir.</p>
            <p>4.2. Müşteri, otel demirbaşlarına verdiği zararlardan bizzat sorumludur.</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 5 / İPTAL VE İADE KOŞULLARI</h2>
            <div className="space-y-4">
              <p>Müşteri tarafından yapılan iptallerde aşağıdaki kademeli iade sistemi uygulanır:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Giriş tarihine 15 gün ve daha fazla süre kala:</strong> Rezervasyon bedelinin <strong>tamamı (%100)</strong> iade edilir.</li>
                <li><strong>Giriş tarihine 15 günden az, 7 günden fazla süre kala:</strong> Rezervasyon bedelinin <strong>%50'si</strong> iade edilir, kalan %50 kesinti olarak uygulanır.</li>
                <li><strong>Giriş tarihine 7 gün veya daha az süre kala:</strong> Herhangi bir <strong>iade yapılmaz</strong>. Bedelin tamamı kesinti olarak yansıtılır.</li>
                <li><strong>No-Show (Gelmeme):</strong> Müşterinin giriş gününde tesise gelmemesi durumunda iade talebinde bulunulamaz.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 6 / MÜCBİR SEBEPLER</h2>
            <p>6.1. Doğal afet, teknik arıza, grev veya protesto gibi otelin elinde olmayan durumlardan dolayı hizmetin aksamasından tesis sorumlu tutulamaz.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 7 / ŞİKAYET VE YETKİLİ MAHKEME</h2>
            <p>7.1. Müşteri şikayetlerini hizmet sırasında yetkiliye bildirmelidir. Uyuşmazlıklarda Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.</p>
          </section>

          <section className="border-t border-black/10 pt-8 pb-12">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 8 / DİJİTAL ONAY</h2>
            <p className="italic font-medium text-gray-900">
              Bu sözleşme 8 maddeden ibaret olup, müşterinin ödeme aşamasında "Okudum, Onaylıyorum" kutucuğunu işaretlemesiyle birlikte yürürlüğe girmiş sayılır. Islak imza şartı aranmaksızın dijital onay yasal olarak bağlayıcıdır.
            </p>
          </section>
          
        </div>
      </main>
    </div>
  );
}