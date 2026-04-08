import React from 'react';

export default function MesafeliSatisSozlesmesi() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-foreground font-sans">
      <h1 className="text-3xl font-serif font-bold mb-8 uppercase tracking-wide border-b pb-4">
        Mesafeli Satış Sözleşmesi
      </h1>
      
      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">MADDE 1 / TARAFLAR</h2>
          <p><strong>1.1. TESİS:</strong> Saray Mah. Bebek Sok. No:7 Alanya / Antalya adresinde yerleşik, 0552 593 35 07 telefon numarasına sahip AGORA APART HOTEL.</p>
          <p><strong>1.2. MÜŞTERİ:</strong> Sistemi kullanarak rezervasyon yapan ve şartları peşinen kabul eden kullanıcıdır.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">MADDE 5 / İPTAL VE İADE KOŞULLARI</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>15 gün ve daha fazla süre kala:</strong> Ücretin tamamı (%100) iade edilir.</li>
            <li><strong>15 günden az, 7 günden fazla süre kala:</strong> Ücretin %50'si iade edilir, %50'si kesinti olarak uygulanır.</li>
            <li><strong>7 gün veya daha az süre kala:</strong> İade yapılmaz, rezervasyon bedelinin tamamı kesinti olarak uygulanır.</li>
            <li><strong>No-Show (Gelmeme):</strong> Herhangi bir iade yapılmaz.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">MADDE 8 / ONAY</h2>
          <p>Müşteri, ödeme sayfasında ilgili kutucuğu işaretlediğinde işbu sözleşmenin tüm şartlarını kabul etmiş sayılır. Dijital onay yasal olarak geçerlidir.</p>
        </section>
        
        {/* Diğer maddeleri de buraya benzer şekilde ekleyebilirsin aga */}
      </div>
    </main>
  );
}