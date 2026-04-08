import React from 'react';

export default function MesafeliSatisSozlesmesi() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-24 lg:py-32 text-foreground font-sans">
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-12 uppercase tracking-widest text-center border-b border-black/10 pb-8">
          Mesafeli Satış Sözleşmesi
        </h1>
        
        <div className="space-y-10 text-sm leading-relaxed text-gray-800">
          
          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 1 / TARAFLAR</h2>
            <p className="mb-2"><strong>1.1. TESİS:</strong> Saray Mah. Bebek Sok. No:7 Alanya / Antalya adresinde yerleşik, 0552 593 35 07 telefon numarasına sahip <strong>AGORA APART HOTEL</strong> (Bundan böyle OTEL olarak anılacaktır).</p>
            <p><strong>1.2. MÜŞTERİ:</strong> Sistemi kullanarak rezervasyon yapan, tüm kişisel bilgilerini giren ve dijital onay vererek şartları peşinen kabul eden kullanıcıdır.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 2 / KONU</h2>
            <p>2.1. İşbu sözleşme Müşterinin web sitesi üzerinden aşağıda açıklanan koşullar çerçevesinde konaklama hizmeti alımı çerçevesindeki rezervasyonunu içerir. Sözleşme bedelinde fiyat artışı olması halinde, ilave olarak aradaki fark tüketiciden talep edilmeyeceği gibi, tesis tarafından yapılan kampanya indirimlerinin de tüketiciye iadesi söz konusu değildir.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 3 / SÖZLEŞME BEDELİ VE ÖDEME</h2>
            <p>3.1. Sözleşme bedeline KDV dahildir.</p>
            <p>3.2. Belirtilmemiş hizmetler ve otelde alınacak ekstra ürün ve hizmetler ayrı ücrete tabidir. Bu ekstralar otel çıkışında ödenir.</p>
            <p>3.3. Yapılması gereken iadelerde, rezervasyon için kullanılan kredi kartına veya müşteri banka hesabına 30 gün içerisinde ödeme yapılır.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 4 / UYGULAMA KURALLARI</h2>
            <p>4.1. Yanıcı, patlayıcı veya çevresine rahatsızlık veren eşyalar ile kesici, delici ve ateşli silahların tesislere sokulması yasaktır.</p>
            <p>4.2. Otele giriş saati 14:00, çıkış saati 12:00'dir.</p>
            <p>4.3. Müşteri konaklama sırasında otelde bulunan demirbaşlara verdiği zararlardan bizzat sorumludur.</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 5 / İPTAL VE FESİH KOŞULLARI</h2>
            <div className="space-y-4">
              <p>Müşteri tarafından yapılan iptallerde aşağıdaki kurallar uygulanır:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Giriş tarihine 15 gün ve daha fazla süre kala:</strong> Rezervasyon bedelinin %100'ü (tamamı) müşteriye iade edilir.</li>
                <li><strong>Giriş tarihine 15 günden az, 7 günden fazla süre kala:</strong> Rezervasyon bedelinin %50'si iade edilir, %50'si hizmet bedeli olarak kesilir.</li>
                <li><strong>Giriş tarihine 7 gün veya daha az süre kala:</strong> Herhangi bir iade yapılmaz. Rezervasyon bedelinin %100'ü kesinti olarak uygulanır.</li>
                <li><strong>No-Show (Gelmeme):</strong> Müşterinin giriş gününde tesise gelmemesi durumunda iade talebinde bulunulamaz.</li>
              </ul>
              <p>5.3. Otel gerekli gördüğü durumlarda (mücbir sebep vb.) rezervasyonu iptal edebilir. Bu durumda müşterinin ödediği ücretin tamamı iade edilir.</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 6 / MÜCBİR SEBEPLER</h2>
            <p>6.1. Doğa afetler, toplumsal olaylar, teknik arızalar, grev ve protesto gibi otelin kontrolü dışındaki sebeplerle hizmetin eksik olması veya verilememesi durumlarından tesis sorumlu tutulamaz.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 7 / ŞİKAYET VE ÇÖZÜM</h2>
            <p>7.1. Müşteri şikayetçi olduğu hususları hizmetin ifası sırasında yetkiliye bildirmekle yükümlüdür. Hizmeti sonuna kadar kullanıp sonradan iade talep edilmesi iyi niyet kurallarıyla bağdaşmaz.</p>
            <p>7.2. Uyuşmazlıklarda Tüketici Mahkemesi veya Tüketici Hakem Heyeti yetkilidir.</p>
          </section>

          <section className="border-t border-black/10 pt-8 pb-12">
            <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">MADDE 8 / DİJITAL ONAY VE GEÇERLİLİK</h2>
            <p className="italic">İşbu sözleşme 8 maddeden ibaret olup, müşterinin web sitesi üzerinden rezervasyonunu tamamlaması ve "Sözleşmeyi Okudum, Onaylıyorum" kutucuğunu işaretlemesiyle birlikte yürürlüğe girmiş sayılır. Islak imza şartı aranmaksızın dijital onay yasal olarak bağlayıcıdır.</p>
          </section>
          
        </div>
      </main>
    </div>
  );
}