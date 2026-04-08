import React from 'react';

export default function IptalIadeKosullari() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-24 lg:py-32 text-gray-800 font-sans text-black">
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-12 uppercase tracking-widest text-center border-b border-black/10 pb-8">
          İptal ve İade Koşulları
        </h1>
        
        <div className="space-y-10 text-base leading-relaxed">
          <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">Rezervasyon İptal Kuralları</h2>
            <p className="mb-6">Agora Apart Hotel bünyesinde yapılan rezervasyonlarda aşağıdaki iptal ve iade süreleri uygulanmaktadır:</p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded">100% İADE</span>
                <p><strong>Giriş tarihine 15 gün ve daha fazla süre kala</strong> yapılan iptallerde, ödenen tutarın tamamı kesintisiz olarak iade edilir.</p>
              </li>
              
              <li className="flex items-start gap-4">
                <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded">50% İADE</span>
                <p><strong>Giriş tarihine 15 günden az, 7 günden fazla (8-14 gün) süre kala</strong> yapılan iptallerde, toplam tutarın %50'si iade edilir.</p>
              </li>
              
              <li className="flex items-start gap-4">
                <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded">İADE YOK</span>
                <p><strong>Giriş tarihine 7 gün veya daha az süre kala</strong> yapılan iptallerde veya otele gelinmemesi (No-Show) durumunda iade yapılmaz.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">İade Süreci Hakkında</h2>
            <p>
              Onaylanan iadeler, rezervasyon sırasında kullanılan kredi kartına veya banka hesabına, bankanızın işlem süresine bağlı olarak <strong>30 iş günü</strong> içerisinde yansıtılmaktadır. 
            </p>
            <p className="mt-4 italic text-sm text-gray-500">
              * Bu koşullar Mesafeli Satış Sözleşmesi'nin bir parçası olup, rezervasyon onaylandığında kabul edilmiş sayılır.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}