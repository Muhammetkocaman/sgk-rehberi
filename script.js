// Sosyal Güvenlik Hukuku Rehberi - Ana JavaScript Dosyası

const siteData = {
    primData: {
        '4a': { 
            title: '4/a (İşçi - Standart)', 
            description: 'Bir veya birden fazla işverene bağlı olarak hizmet akdi ile çalışanların standart prim yapısıdır. Primler işçi ve işveren arasında paylaşılır ve devlet katkısı bulunur.', 
            payers: { 
                labels: ['İşçi Payı', 'İşveren Payı', 'Devlet Katkısı'], 
                data: [15, 22.75, 1], 
                backgroundColor: ['#38bdf8', '#fb923c', '#a78bfa'] 
            }, 
            breakdown: [
                { branch: 'Kısa Vadeli Sigorta Kolları', rate: '2,25%', details: 'İş Kazası, Meslek Hastalığı, Hastalık, Analık' },
                { branch: 'Uzun Vadeli Sigorta Kolları', rate: '20%', details: 'Malullük, Yaşlılık, Ölüm' },
                { branch: 'Genel Sağlık Sigortası', rate: '12,5%', details: 'Sağlık Hizmetleri' },
                { branch: 'İşsizlik Sigortası', rate: '4%', details: 'İşsizlik Maaşı' },
                { branch: 'TOPLAM', rate: '38,75%', details: 'Genel Toplam Oran' }
            ], 
            note: '<strong>5 Puanlık İndirim:</strong> İşveren, primlerini düzenli öderse ve SGK\'ya borcu yoksa, ödemesi gereken %22,75\'lik payın 5 puanı Hazine tarafından karşılanır ve işveren yükü <strong>%17,75</strong>\'e düşer.' 
        },
        '4b': { 
            title: '4/b (Bağ-Kur)', 
            description: 'Kendi adına ve hesabına bağımsız çalışan esnaf, sanatkâr, şirket ortakları ve diğer serbest meslek mensuplarının prim yapısıdır.', 
            payers: { 
                labels: ['Sigortalının Kendisi'], 
                data: [34.75], 
                backgroundColor: ['#34d399'] 
            }, 
            breakdown: [
                { branch: 'Kısa Vadeli Sigorta Kolları', rate: '2,25%', details: 'İş Kazası, Meslek Hastalığı, Analık (şartlı)' },
                { branch: 'Uzun Vadeli Sigorta Kolları', rate: '20%', details: 'Malullük, Yaşlılık, Ölüm' },
                { branch: 'Genel Sağlık Sigortası', rate: '12,5%', details: 'Sağlık Hizmetleri' },
                { branch: 'TOPLAM', rate: '34,75%', details: 'Genel Toplam Oran' }
            ], 
            note: '<strong>Tek Ödeyici:</strong> Primlerin tamamını sigortalının <strong>kendisi</strong> öder. İşsizlik sigortası (Esnaf Ahilik Sandığı) primi şu an için aktif olarak uygulanmamaktadır.' 
        },
        '4c': { 
            title: '4/c (Kamu Görevlisi)', 
            description: 'Kamu idarelerinde 657 sayılı Devlet Memurları Kanunu\'na veya diğer personel kanunlarına tabi olarak çalışanların prim yapısıdır.', 
            payers: { 
                labels: ['Memur Payı', 'Kurum Payı'], 
                data: [14, 20.5], 
                backgroundColor: ['#60a5fa', '#f87171'] 
            }, 
            breakdown: [
                { branch: 'Uzun Vadeli Sigorta Kolları', rate: '20%', details: 'Malullük, Yaşlılık, Ölüm' },
                { branch: 'Genel Sağlık Sigortası', rate: '12,5%', details: 'Sağlık Hizmetleri' },
                { branch: 'TOPLAM', rate: '≈34,75%', details: 'Genel Toplam Oran (Fiili hizmet zammı hariç)' }
            ], 
            note: '<strong>Kurum Tarafından Ödeme:</strong> Primler, çalıştığı kamu kurumu tarafından memurun maaşından kesilerek SGK\'ya ödenir. İşçi-işveren paylaşımı yerine memur-kurum paylaşımı vardır.' 
        },
        'istegeBagli': { 
            title: 'İsteğe Bağlı', 
            description: 'Zorunlu sigortalı olmayanların, primlerini kendileri ödeyerek emeklilik ve sağlık haklarından yararlandığı sistemdir.', 
            payers: { 
                labels: ['Sigortalının Kendisi'], 
                data: [32], 
                backgroundColor: ['#34d399'] 
            }, 
            breakdown: [
                { branch: 'Uzun Vadeli Sigorta Kolları', rate: '20%', details: 'Malullük, Yaşlılık, Ölüm' },
                { branch: 'Genel Sağlık Sigortası', rate: '12%', details: 'Sağlık Hizmetleri' },
                { branch: 'TOPLAM', rate: '32%', details: 'Genel Toplam Oran' }
            ], 
            note: '<strong>Kapsam:</strong> Sadece emeklilik (4/b statüsünde sayılır) ve sağlık hakkı verir. Rapor parası (hastalık) ve işsizlik maaşı gibi hakları kapsamaz.' 
        },
        'emekliSgdp': { 
            title: 'Emekli (SGDP\'li)', 
            description: 'Emekli aylığı alırken bir işverene bağlı olarak 4/a kapsamında çalışmaya devam eden kişilerden alınan Sosyal Güvenlik Destek Primi (SGDP) yapısıdır.', 
            payers: { 
                labels: ['Emekli İşçi', 'İşveren'], 
                data: [7.5, 24.75], 
                backgroundColor: ['#38bdf8', '#fb923c'] 
            }, 
            breakdown: [
                { branch: 'Kısa Vadeli Sigorta Kolları', rate: '2,25%', details: 'İş Kazası, Meslek Hastalığı' },
                { branch: 'Sosyal Güvenlik Destek Primi', rate: '30%', details: 'Emekli Aylığını Etkilemez' },
                { branch: 'TOPLAM', rate: '32,25%', details: 'Genel Toplam Oran' }
            ], 
            note: '<strong>Emekliliğe Etkisi Yoktur:</strong> Ödenen bu primler, mevcut emekli maaşını <strong>artırmaz.</strong> Sadece çalışırken oluşabilecek iş kazası gibi risklere karşı güvence sağlar.' 
        },
        'stajyer': { 
            title: 'Stajyer/Öğrenci', 
            description: 'Mesleki eğitim gören veya üniversitede kısmi zamanlı çalışan öğrencilerin prim yapısıdır. Amaç, eğitim/çalışma sırasındaki risklere karşı korumaktır.', 
            payers: { 
                labels: ['Okul / İşveren'], 
                data: [6], 
                backgroundColor: ['#c084fc'] 
            }, 
            breakdown: [
                { branch: 'Kısa Vadeli Sigorta Kolları', rate: '1%', details: 'İş Kazası, Meslek Hastalığı' },
                { branch: 'Genel Sağlık Sigortası', rate: '5%', details: 'Sağlık Hizmetleri' },
                { branch: 'TOPLAM', rate: '6%', details: 'Genel Toplam Oran' }
            ], 
            note: '<strong>Emekliliğe Sayılmaz:</strong> Bu statüde ödenen primler, emeklilik için gereken prim gün sayısına dahil <strong>edilmez.</strong>' 
        },
        'gss': { 
            title: 'Sadece GSS\'li', 
            description: 'Herhangi bir zorunlu sigortalılığı olmayan ve gelir testi sonucunda hane içi kişi başı geliri asgari ücretin 1/3\'ünden fazla çıkan kişilerin ödediği primdir.', 
            payers: { 
                labels: ['Sigortalının Kendisi'], 
                data: [3], 
                backgroundColor: ['#34d399'] 
            }, 
            breakdown: [
                { branch: 'Genel Sağlık Sigortası', rate: '3%', details: 'Sadece Sağlık Hizmetleri' },
                { branch: 'TOPLAM', rate: '3%', details: 'Genel Toplam Oran' }
            ], 
            note: '<strong>Sadece Sağlık:</strong> Bu prim sadece sağlık hizmetlerinden yararlanma hakkı verir. Emeklilik veya diğer sigorta haklarını <strong>kapsamaz.</strong> Prim, brüt asgari ücretin %3\'ü olarak hesaplanır.' 
        }
    },
    sections: {
        giris: `
            <h1 class="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Sosyal Güvenlik Hukukuna İnteraktif Bir Bakış</h1>
            <p class="text-lg text-slate-600 mb-6">Bu rehber, Türkiye'deki sosyal güvenlik sisteminin temel taşlarını oluşturan konuları anlaşılır ve interaktif bir şekilde sunmak için tasarlanmıştır. Karmaşık yasal kavramları, prim oranlarını ve sigortalılık statülerini kolayca keşfedebilirsiniz.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-2 text-slate-800">Neler Öğreneceksiniz?</h3>
                    <ul class="list-disc list-inside space-y-2 text-slate-600">
                        <li>Sigortalılık ilişkisinin nasıl kurulduğunu ve sona erdiğini.</li>
                        <li>4/a, 4/b ve 4/c statülerinin temel farklarını.</li>
                        <li>Kısa ve Uzun Vadeli Sigorta Kollarının neler olduğunu.</li>
                        <li>Primlerin neye göre ve nasıl hesaplandığını (PEK).</li>
                        <li>Farklı sigortalı grupları için prim oranlarını.</li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-2 text-slate-800">Nasıl Kullanılır?</h3>
                    <p class="text-slate-600">Soldaki menüyü kullanarak ilgilendiğiniz konular arasında gezinebilirsiniz. "Prim Oranları" gibi interaktif bölümlerde farklı grupları seçerek verileri dinamik olarak inceleyebilirsiniz. Bilgi kutucuklarına tıklayarak detayları görebilirsiniz.</p>
                </div>
            </div>`,
        'temel-kavramlar': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Sigortalılık İlişkisi</h1>
            <div class="space-y-4 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>İlişkinin Tanımı ve Özellikleri</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <p class="mb-2">Bir kişinin kanunda belirtilen şartlar altında çalışmaya başlamasıyla, kendiliğinden ve zorunlu olarak SGK ile arasında kurulan hukuki bağdır. Bu ilişki bir sözleşmeye değil, doğrudan kanuna dayanır.</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li><strong>Zorunludur:</strong> Kişinin veya işverenin iradesine bağlı değildir. Bundan feragat edilemez.</li>
                            <li><strong>Kanundan Doğar:</strong> Kaynağı 5510 Sayılı Kanun'dur. Tüm hak ve yükümlülükler bu kanunda belirtilmiştir.</li>
                            <li><strong>Kamu Hukuku Niteliğindedir:</strong> Taraflar eşit değildir. Devlet kamu gücüyle bu ilişkiyi kurar ve kurallarını belirler.</li>
                        </ul>
                        <div class="key-point"><strong>Önemli:</strong> Sigortalılık ilişkisi, sigortalı ile <strong>SGK</strong> arasında kurulur. İşveren bu ilişkinin bir tarafı değil, prim ödeme gibi yükümlülükleri olan üçüncü bir kişidir.</div>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>Başlangıcı, Bildirilmesi ve Sona Ermesi</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <p><strong>Başlangıç:</strong> Sigortalılık, kişinin <strong>fiilen çalışmaya başladığı an</strong> başlar. İşverenin SGK'ya yaptığı bildirim (işe giriş bildirgesi) kurucu değil, sadece durumu tespit edici niteliktedir. Bildirim yapılmasa bile kişi o gün sigortalı sayılır.</p>
                        <p><strong>Bildirim:</strong> İşverenlerin, işe başlayan sigortalıları yasal süreler içinde (genellikle işe başlamadan bir gün önce) SGK'ya bildirme yükümlülüğü vardır. Bu yükümlülüğün ihlali idari para cezalarına neden olur.</p>
                        <p><strong>Sona Erme:</strong> Sigortalılığı doğuran çalışmanın sona ermesiyle (işten ayrılma, ticari faaliyetin bitmesi, memuriyetten ayrılma vb.) ilişki sona erer. İşveren, işten ayrılışı da 10 gün içinde SGK'ya bildirmek zorundadır.</p>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>4/a, 4/b ve 4/c Statüleri</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                         <p class="mb-4">Sosyal güvenlik reformu ile eski SSK, Bağ-Kur ve Emekli Sandığı tek çatı altında toplanmış ve sigortalılar çalışma statülerine göre şu şekilde sınıflandırılmıştır:</p>
                         <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead class="bg-slate-100"><tr><th class="p-3 font-semibold">Statü</th><th class="p-3 font-semibold">Eski Adı</th><th class="p-3 font-semibold">Kapsamı</th><th class="p-3 font-semibold">Prim Ödemesi</th></tr></thead>
                                <tbody>
                                    <tr class="border-b"><td class="p-3 font-medium text-sky-600">4/a</td><td class="p-3">SSK</td><td class="p-3">Bir işverene bağlı, hizmet akdi ile çalışanlar (İşçiler).</td><td class="p-3">İşçi ve işveren tarafından paylaşılır.</td></tr>
                                    <tr class="border-b"><td class="p-3 font-medium text-emerald-600">4/b</td><td class="p-3">Bağ-Kur</td><td class="p-3">Kendi adına ve hesabına bağımsız çalışanlar (Esnaf, şirket ortağı).</td><td class="p-3">Tamamını sigortalının kendisi öder.</td></tr>
                                    <tr><td class="p-3 font-medium text-rose-600">4/c</td><td class="p-3">Emekli Sandığı</td><td class="p-3">Kamu idarelerinde çalışanlar (Memurlar).</td><td class="p-3">Kurumu tarafından maaşından kesilir.</td></tr>
                                </tbody>
                            </table>
                         </div>
                    </div>
                </div>
            </div>`,
        'istisnalar': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Kapsam ve İstisnalar</h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-4 text-rose-600">🚫 Sigortalı Sayılmayanlar</h3>
                    <p class="text-slate-500 mb-4">Kanun, belirli durumlardaki kişileri zorunlu sigortalılık kapsamının tamamen dışında tutmuştur.</p>
                    <ul class="space-y-3 text-slate-600">
                        <li><strong>İşverenin Ücretsiz Çalışan Eşi:</strong> Aynı konutta yaşayan ve bir hizmet akdi/ücret olmaksızın eşine yardım eden kişi.</li>
                        <li><strong>Yakın Hısımlar:</strong> Aynı konutta yaşayan 3. dereceye kadar hısımlar arasında, ailevi yardımlaşma niteliğindeki ücretsiz işler.</li>
                        <li><strong>Ev Hizmetlerinde Az Çalışanlar:</strong> Ayda 10 günden az çalışanlar (İş kazası sigortası yaptırılabilir).</li>
                        <li><strong>Askerlik Yapanlar:</strong> Er, erbaş ve yedek subay okulu öğrencileri.</li>
                        <li><strong>Hükümlü ve Tutuklular:</strong> Cezaevi atölyelerinde eğitim ve rehabilitasyon amaçlı çalışanlar.</li>
                    </ul>
                </div>
                 <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-4 text-sky-600">⭐ Özel Olarak Düzenlenenler (Sınırlı Kapsam)</h3>
                    <p class="text-slate-600 mb-3">Bu kişiler tam sigortalı sayılmaz, sadece belirli risklere karşı korunurlar ve bu süreler genellikle emekliliğe sayılmaz.</p>
                    <ul class="space-y-3 text-slate-600">
                        <li><strong>Çırak ve Stajyer Öğrenciler:</strong> Sadece iş kazası, meslek hastalığı ve hastalık sigortası kapsamındadırlar. Emeklilik primi ödenmez.</li>
                        <li><strong>İŞKUR Kursiyerleri:</strong> Kurs süresince iş kazası, meslek hastalığı ve genel sağlık sigortası kapsamındadırlar. Emeklilik primi ödenmez.</li>
                    </ul>
                </div>
            </div>`,
        'pek': `
            <h1 class="text-3xl font-bold text-teal-700 mb-2">Prime Esas Kazanç (PEK)</h1>
            <p class="text-lg text-slate-600 mb-6">SGK primlerinin üzerinden hesaplandığı brüt kazançlar toplamıdır. Sadece maaş değil, ek ödemeleri de içerir.</p>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white p-6 rounded-xl shadow text-center">
                    <h4 class="text-slate-500 font-semibold">PEK Alt Sınırı (Taban)</h4>
                    <p class="text-3xl font-bold text-teal-600" id="pek-taban">26.005,50 TL</p>
                    <p class="text-sm text-slate-500">(Brüt Asgari Ücret)</p>
                </div>
                 <div class="bg-white p-6 rounded-xl shadow text-center">
                    <h4 class="text-slate-500 font-semibold">PEK Üst Sınırı (Tavan)</h4>
                    <p class="text-3xl font-bold text-teal-600" id="pek-tavan">195.041,25 TL</p>
                    <p class="text-sm text-slate-500">(Brüt Asgari Ücret x 7,5)</p>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow">
                <div class="flex border-b mb-4">
                    <button id="btn-dahil" class="pek-toggle-btn flex-1 p-3 font-semibold border-b-2 border-teal-600 text-teal-600">PEK'e Dahil Olanlar</button>
                    <button id="btn-haric" class="pek-toggle-btn flex-1 p-3 font-semibold text-slate-500">PEK'e Dahil Olmayanlar</button>
                </div>
                <div id="content-dahil" class="pek-content">
                    <ul class="list-disc list-inside space-y-2 text-slate-600">
                        <li>Brüt Ücret / Maaş</li>
                        <li>Fazla Mesai Ücretleri</li>
                        <li>Prim ve İkramiyeler</li>
                        <li>Yemek, Çocuk, Aile Yardımlarının istisna tutarını aşan kısımları</li>
                    </ul>
                </div>
                <div id="content-haric" class="pek-content" style="display:none;">
                     <ul class="list-disc list-inside space-y-2 text-slate-600">
                        <li>Ayni Yardımlar (Erzak kolisi, işyerinde çıkan yemek vb.)</li>
                        <li>Yemek Kartları (Ticket vb.)</li>
                        <li>Doğum, Evlenme, Ölüm Yardımları</li>
                        <li>Görev Yollukları (Harcırah)</li>
                        <li>Kıdem ve İhbar Tazminatı</li>
                    </ul>
                </div>
                <div class="key-point"><strong>Neden Önemli?</strong> SGK'ya bildirilen PEK tutarınız ne kadar yüksekse, gelecekte alacağınız <strong>emekli maaşı</strong> ve hastalık durumunda alacağınız <strong>rapor parası</strong> da o kadar yüksek olur.</div>
            </div>`,
        'prim-oranlari': `
            <h1 class="text-3xl font-bold text-teal-700 mb-2">Prim Oranları Paneli</h1>
            <p class="text-lg text-slate-600 mb-6">Aşağıdaki butonları kullanarak farklı sigortalı gruplarının prim yapılarını interaktif olarak inceleyin.</p>
             <nav class="mb-8">
                <div id="nav-container-prim" class="flex flex-wrap justify-center gap-2 md:gap-3"></div>
            </nav>
            <div id="content-area-prim" class="bg-white p-6 rounded-2xl shadow-lg transition-opacity duration-500 ease-in-out min-h-[500px]">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div class="lg:col-span-3">
                        <h2 id="group-title-prim" class="text-2xl font-bold text-slate-900 mb-4"></h2>
                        <p id="group-description-prim" class="text-slate-600 mb-6"></p>
                        <div id="breakdown-table-prim" class="overflow-x-auto"></div>
                    </div>
                    <div class="lg:col-span-2 flex flex-col items-center gap-6">
                        <div class="w-full">
                             <h3 class="text-xl font-semibold text-center mb-2 text-slate-700">Prim Ödeyenlerin Payı</h3>
                             <div class="chart-container">
                                <canvas id="payerChart"></canvas>
                            </div>
                        </div>
                        <div id="important-note-prim" class="w-full bg-teal-50 border-l-4 border-teal-500 text-teal-800 p-4 rounded-r-lg">
                        </div>
                    </div>
                </div>
            </div>`,
        'finansman-surecleri': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Finansman: Ödeme ve Yaptırımlar</h1>
             <div class="space-y-4 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>Prim Belgeleri</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <p>İşverenler, çalıştırdıkları sigortalıların prime esas kazançlarını ve prim gün sayılarını <strong>Aylık Prim ve Hizmet Belgesi (APHB)</strong> ile SGK'ya bildirmek zorundadır. Bu belge, sigortalının hizmetlerinin kayıt altına alınmasının ve emeklilik haklarının hesaplanmasının temelidir.</p>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>Primlerin Ödenmesi</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <p><strong>4/a (İşçi):</strong> Primler, ilgili ayı takip eden ayın sonuna kadar işveren tarafından ödenir.</p>
                        <p><strong>4/b (Bağ-Kur):</strong> Primler, sigortalının kendisi tarafından ilgili ayın sonuna kadar ödenir.</p>
                    </div>
                </div>
                 <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>Ödememenin Yaptırımları</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <p class="mb-2">Primlerin zamanında ve eksiksiz ödenmemesi durumunda SGK tarafından çeşitli yaptırımlar uygulanır:</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li><strong>Gecikme Cezası ve Gecikme Zammı:</strong> Ödenmeyen prim borcuna aylık olarak yüksek oranlarda faiz işletilir.</li>
                            <li><strong>İdari Para Cezaları (İPC):</strong> Belgelerin yasal süresinde verilmemesi, eksik bildirim yapılması gibi usulsüzlükler için uygulanır.</li>
                            <li><strong>Teşviklerden Yararlanamama:</strong> 5 puanlık prim indirimi gibi devlet teşviklerinden yararlanma hakkı kaybedilir.</li>
                            <li><strong>Sağlık Hizmetlerinden Yararlanamama:</strong> Özellikle 4/b sigortalıları için 60 günden fazla prim borcu olması durumunda sağlık hizmetleri durdurulabilir.</li>
                        </ul>
                    </div>
                </div>
            </div>`,
        'kisa-vadeli': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Kısa Vadeli Sigorta Kolları</h1>
            <p class="text-slate-600 mb-6">Sigortalının çalışma hayatı sırasında karşılaşabileceği ani ve kısa süreli risklere karşı güvence sağlar. Temel amaç, gelir kaybını önlemek ve sağlık durumunu iyileştirmektir.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-2">İş Kazası ve Meslek Hastalığı</h3>
                    <p>İşin yürütümü sırasında meydana gelen ve sigortalıyı bedence veya ruhça zarara uğratan olaylardır. Sağlanan haklar:</p>
                     <ul class="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Geçici İş Göremezlik Ödeneği (Rapor Parası):</strong> İstirahat süresince gelir kaybını karşılar.</li>
                        <li><strong>Sürekli İş Göremezlik Geliri:</strong> Kalıcı bir iş gücü kaybı durumunda sürekli gelir bağlanır.</li>
                        <li><strong>Ölüm Geliri:</strong> Olay sonucu vefat eden sigortalının hak sahiplerine gelir bağlanır.</li>
                        <li><strong>Evlenme ve Cenaze Ödeneği:</strong> Belirli durumlarda sağlanan tek seferlik ödemelerdir.</li>
                     </ul>
                </div>
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-2">Hastalık ve Analık</h3>
                    <p>Sigortalının iş kazası dışındaki nedenlerle hastalanması veya kadın sigortalının hamilelik/doğum süreçlerini kapsar. Sağlanan haklar:</p>
                     <ul class="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Geçici İş Göremezlik Ödeneği (Rapor Parası):</strong> Hastalık nedeniyle çalışılamayan günler için ödenir. Hak kazanmak için son 1 yılda en az 90 gün prim ödenmiş olmalıdır.</li>
                        <li><strong>Emzirme Ödeneği:</strong> Doğum yapan sigortalı kadına veya sigortalı erkeğin sigortasız eşine verilen tek seferlik ödemedir.</li>
                     </ul>
                </div>
            </div>`,
        'uzun-vadeli': `
             <h1 class="text-3xl font-bold text-teal-700 mb-6">Uzun Vadeli Sigorta Kolları</h1>
             <p class="text-slate-600 mb-6">Sigortalının hayatının ilerleyen dönemlerinde karşılaşabileceği kalıcı risklere karşı uzun süreli güvence sağlar. Temel amaç, yaşlılık, malullük ve ölüm sonrası için kalıcı bir gelir sağlamaktır.</p>
             <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-2">Malullük Sigortası</h3>
                    <p>Çalışma gücünü veya meslekte kazanma gücünü en az <strong>%60</strong> oranında kaybeden ve en az 10 yıl sigortalılık süresi ile 1800 gün primi olan sigortalılara malullük aylığı bağlanmasını sağlar.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-2">Yaşlılık Sigortası</h3>
                    <p>Belirli bir <strong>yaşı</strong>, <strong>prim ödeme gün sayısını</strong> ve <strong>sigortalılık süresini</strong> tamamlayan kişilere yaşlılık aylığı (emekli maaşı) bağlanmasını sağlar. Bu şartlar sigortalının işe giriş tarihine ve statüsüne göre değişir.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-2">Ölüm Sigortası</h3>
                    <p>Belirli şartlarda primi olan sigortalının vefatı halinde geride kalan hak sahiplerine (eş, çocuk, anne/baba) ölüm aylığı (dul/yetim maaşı) bağlanmasını sağlar.</p>
                </div>
             </div>`,
        'gss': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Genel Sağlık Sigortası (GSS)</h1>
            <p class="text-slate-600 mb-6">Türkiye'de ikamet eden vatandaşların (istisnalar hariç) ekonomik durumlarına ve sigortalılık statülerine bakılmaksızın sağlık hizmetlerinden eşit, ulaşılabilir ve kaliteli bir şekilde yararlanmalarını sağlayan zorunlu bir sigorta koludur.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-4 text-sky-600">Kimler Kapsamdadır?</h3>
                    <ul class="space-y-3 text-slate-600 list-disc list-inside">
                        <li>Tüm zorunlu sigortalılar (4/a, 4/b, 4/c) ve bakmakla yükümlü oldukları kişiler.</li>
                        <li>Emekliler ve bakmakla yükümlü oldukları kişiler.</li>
                        <li>İsteğe bağlı sigortalılar.</li>
                        <li>İşsizlik ödeneği alanlar.</li>
                        <li>Gelir testi sonucuna göre primi devlet tarafından ödenenler veya primini kendi ödeyenler.</li>
                    </ul>
                </div>
                 <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-xl mb-4 text-emerald-600">Sağlanan Haklar ve Şartlar</h3>
                     <p class="text-slate-600 mb-3">GSS kapsamında, SGK ile anlaşmalı tüm sağlık hizmeti sunucularından (devlet hastaneleri, üniversite hastaneleri, özel hastaneler) yararlanma hakkı bulunur.</p>
                    <ul class="space-y-3 text-slate-600 list-disc list-inside">
                        <li>Ayakta ve yatarak muayene ve tedavi hizmetleri.</li>
                        <li>İlaç temini (belirli katılım payı ile).</li>
                        <li>Tıbbi malzeme ve ortez/protez temini.</li>
                        <li>Acil sağlık hizmetleri.</li>
                    </ul>
                </div>
            </div>`,
        'ortak-hukumler': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Ortak Hükümler</h1>
             <div class="space-y-4 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>Hizmet Birleştirilmesi</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <p>Kişinin çalışma hayatı boyunca farklı sigortalılık statülerinde (4/a, 4/b, 4/c) geçen prim ödeme gün sayılarının, emeklilik işlemleri sırasında birleştirilmesidir.</p>
                        <div class="key-point"><strong>Kritik Kural:</strong> Emeklilik statüsü, sigortalının emeklilik talebinden önceki <strong>son yedi yıllık (2520 gün)</strong> fiili hizmet süresi içinde en fazla hangi statüde prim ödendiğine göre belirlenir. Hizmet süreleri eşitse, en son tabi olunan statü esas alınır.</div>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>Hizmet Borçlanması</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <p class="mb-2">Sigortalıların, kanunda belirtilen bazı prim ödenmemiş sürelerini, primlerini sonradan toplu olarak ödeyerek sigortalılık gün sayısına ekletmesidir. Bu işlem, emeklilik için eksik günlerin tamamlanmasını sağlar. Başlıca borçlanma türleri:</p>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Askerlik Borçlanması</li>
                            <li>Doğum Borçlanması (en fazla 3 çocuk için)</li>
                            <li>Yurt Dışı Hizmet Borçlanması</li>
                            <li>Ücretsiz İzin Süreleri</li>
                        </ul>
                    </div>
                </div>
            </div>`,
        'kanunlar': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Temel Kanunlar: 5502 ve 5510</h1>
            <p class="text-slate-600 mb-8">Sosyal güvenlik sistemi iki temel kanun üzerine kuruludur. Biri sistemi yönetecek kurumu (SGK), diğeri ise sistemin içeriğini ve kurallarını belirler.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-xl shadow flex flex-col">
                    <h3 class="font-bold text-xl mb-2 text-slate-800">5502 Sayılı Kanun (Kurum)</h3>
                    <p class="text-slate-600 mb-4 flex-grow">Bu kanun, sosyal güvenlik sisteminin <strong>idari yapısını</strong> kurar. En temel amacı, dağınık haldeki üç büyük kurumu (SSK, Bağ-Kur, Emekli Sandığı) tek bir çatı altında birleştirmektir.</p>
                    <div class="key-point"><strong>Cevapladığı Soru:</strong> Sistemi <strong>KİM</strong> yönetecek? <br><strong>Cevap:</strong> Sosyal Güvenlik Kurumu (SGK).</div>
                </div>
                 <div class="bg-white p-6 rounded-xl shadow flex flex-col">
                    <h3 class="font-bold text-xl mb-2 text-slate-800">5510 Sayılı Kanun (Sistem)</h3>
                    <p class="text-slate-600 mb-4 flex-grow">Bu kanun, sosyal güvenlik sisteminin <strong>içeriğini ve esaslarını</strong> düzenler. Kimlerin sigortalı sayılacağını, hangi primlerin ödeneceğini, hangi haklardan (emeklilik, sağlık vb.) yararlanılacağını belirler.</p>
                     <div class="key-point"><strong>Cevapladığı Soru:</strong> Sistemin <strong>KURALLARI</strong> nelerdir? <br><strong>Cevap:</strong> Haklar, yükümlülükler, sigorta kolları.</div>
                </div>
            </div>`,
        'tarihsel-gelisim': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Türk Sosyal Güvenlik Sisteminin Tarihsel Gelişimi</h1>
            <p class="text-lg text-slate-600 mb-8">2006 reformu öncesinde Türkiye'deki sosyal güvenlik sistemi dağınık bir yapıya sahipti ve farklı çalışan gruplarına hizmet veren bağımsız kurumlardan oluşuyordu.</p>
            
            <div class="space-y-6 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>📜 Reform Öncesi Dağınık Yapı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <p class="mb-4">2006 yılındaki büyük sosyal güvenlik reformu öncesinde, Türkiye'deki sistem farklı çalışan gruplarına hizmet veren, birbirinden bağımsız ve farklı mevzuatlara tabi kurumlardan oluşuyordu.</p>
                        
                        <div class="bg-red-50 p-4 rounded-lg mb-4">
                            <h5 class="font-bold text-red-700 mb-2">⚠️ Dağınık Yapının Sorunları</h5>
                            <ul class="text-sm space-y-1">
                                <li>• Her kurumun farklı kanunu, finansmanı ve hakları</li>
                                <li>• Emeklilik yaşı, prim gün sayısı farklılıkları</li>
                                <li>• Norm ve standart birliğinin olmaması</li>
                                <li>• Aktüeryal dengelerin bozulması</li>
                                <li>• Sistemde karmaşıklık ve eşitsizlikler</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Kritik Nokta:</strong> Bu dağınık yapı, reformun en temel gerekçelerinden biri olmuştur. Farklı çalışan grupları arasında eşitsizlikler ve kurumların mali dengelerinin bozulması reform ihtiyacını doğurmuştur.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🏛️ Tarihsel Milat Kanunları</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="space-y-4">
                            <div class="border-l-4 border-blue-500 pl-4">
                                <h4 class="font-bold text-blue-600 mb-2">📅 1936 - 3008 Sayılı İş Kanunu</h4>
                                <p class="text-sm mb-2">Türkiye'de sosyal sigortacılığın temellerini atan kanun</p>
                                <ul class="text-sm space-y-1">
                                    <li>• Yaşlılık, malullük, ölüm sigorta kollarını ilk kez düzenledi</li>
                                    <li>• Modern sosyal güvenlik sisteminin başlangıcı</li>
                                    <li>• İşçiler için temel koruma sağladı</li>
                                </ul>
                            </div>
                            
                            <div class="border-l-4 border-green-500 pl-4">
                                <h4 class="font-bold text-green-600 mb-2">📅 1950 - 5434 Sayılı Emekli Sandığı Kurumu</h4>
                                <p class="text-sm mb-2">Devlet memurları ve kamu görevlilerini kapsayan sistem</p>
                                <ul class="text-sm space-y-1">
                                    <li>• Kendi kanunu ve finansman yapısına sahipti</li>
                                    <li>• Memurlar için özel emeklilik sistemi</li>
                                    <li>• Daha avantajlı şartlar sağlıyordu</li>
                                </ul>
                            </div>
                            
                            <div class="border-l-4 border-purple-500 pl-4">
                                <h4 class="font-bold text-purple-600 mb-2">📅 1971 - 1479 Sayılı Bağ-Kur</h4>
                                <p class="text-sm mb-2">Bağımsız çalışanları sosyal güvenceye kavuşturdu</p>
                                <ul class="text-sm space-y-1">
                                    <li>• Esnaf, sanatkâr ve serbest meslek mensupları</li>
                                    <li>• Kendi adına ve hesabına çalışanlar</li>
                                    <li>• Şirket ortakları dahil edildi</li>
                                </ul>
                            </div>
                            
                            <div class="border-l-4 border-amber-500 pl-4">
                                <h4 class="font-bold text-amber-600 mb-2">📅 1983 - 2925 ve 2926 Sayılı Kanunlar</h4>
                                <p class="text-sm mb-2">Tarım sektörü için özel düzenlemeler</p>
                                <ul class="text-sm space-y-1">
                                    <li>• Tarım SSK: Tarım işçileri için</li>
                                    <li>• Tarım Bağ-Kur: Çiftçiler için</li>
                                    <li>• Daha dar kapsamlı sigorta kolları</li>
                                    <li>• Sektörel özellikler dikkate alındı</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>⚖️ Eski Sistemin Kurumsal Yapısı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h5 class="font-bold text-blue-700 mb-2">SSK (Sosyal Sigortalar Kurumu)</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• İşçileri kapsıyordu</li>
                                    <li>• En geniş sigortalı kitlesi</li>
                                    <li>• Sanayi ve hizmet sektörü</li>
                                    <li>• Tam kapsam sigorta kolları</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">Bağ-Kur</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Esnaf ve sanatkârlar</li>
                                    <li>• Serbest meslek mensupları</li>
                                    <li>• Şirket ortakları</li>
                                    <li>• Sınırlı sigorta kapsamı</li>
                                </ul>
                            </div>
                            <div class="bg-purple-50 p-4 rounded-lg">
                                <h5 class="font-bold text-purple-700 mb-2">Emekli Sandığı</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Devlet memurları</li>
                                    <li>• Kamu görevlileri</li>
                                    <li>• En avantajlı sistem</li>
                                    <li>• Erken emeklilik imkanı</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="key-point"><strong>📊 Sınav Notu:</strong> Reform öncesi sistemin en belirgin özelliği, farklı çalışan grupları arasında norm ve standart birliğinin olmamasıydı. Bu durum sosyal adaletsizliklere ve mali dengesizliklere yol açtı.</div>
                    </div>
                </div>
            </div>`,
        'sosyal-guvenlik-reformu': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">2006-2008 Sosyal Güvenlik Reformu</h1>
            <p class="text-lg text-slate-600 mb-8">Türkiye'nin sosyal güvenlik tarihindeki en kapsamlı dönüşüm olan reform, dağınık yapıyı birleştirerek modern ve sürdürülebilir bir sistem oluşturmuştur.</p>
            
            <div class="space-y-6 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🎯 Reformun Temel Amaçları</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-700 mb-3">🏢 Kurumsal Bütünleşme (Tek Çatı)</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• SSK, Bağ-Kur, Emekli Sandığı birleştirildi</li>
                                    <li>• Sosyal Güvenlik Kurumu (SGK) kuruldu</li>
                                    <li>• Dağınık yapı ortadan kaldırıldı</li>
                                    <li>• Tek bir kurumsal kimlik oluşturuldu</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="font-bold text-green-700 mb-3">⚖️ Hukuki Bütünleşme (Norm Birliği)</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• Tüm sigortalılar için eşit haklar</li>
                                    <li>• Standart emeklilik koşulları</li>
                                    <li>• Mevzuat tek kanunda toplandı</li>
                                    <li>• Sosyal adalet sağlandı</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="key-point"><strong>Reformun Felsefesi:</strong> "Farklı çalışan grupları arasında eşitsizliği ortadan kaldırmak ve sürdürülebilir bir sosyal güvenlik sistemi kurmak."</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>📜 Temel Kanunlar ve Tarihler</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="space-y-4">
                            <div class="border-l-4 border-blue-500 pl-4">
                                <h4 class="font-bold text-blue-600 mb-2">📅 2006 - Reform Başlangıcı</h4>
                                <p class="text-sm mb-2">Sosyal güvenlik reformu kanunlarının çıkarılması</p>
                                <ul class="text-sm space-y-1">
                                    <li>• Tasarıların hazırlanması</li>
                                    <li>• Sosyal taraflarla görüşmeler</li>
                                    <li>• Reform ihtiyacının belirlenmesi</li>
                                </ul>
                            </div>
                            
                            <div class="border-l-4 border-green-500 pl-4">
                                <h4 class="font-bold text-green-600 mb-2">📅 1 Ekim 2008 - Tam Yürürlük</h4>
                                <p class="text-sm mb-2">Reform kanunlarının tam olarak uygulanmaya başladığı tarih</p>
                                <ul class="text-sm space-y-1">
                                    <li>• SGK resmen faaliyete başladı</li>
                                    <li>• 5502 ve 5510 sayılı kanunlar yürürlüğe girdi</li>
                                    <li>• Eski kurumlar lağvedildi</li>
                                    <li>• Yeni sistem tam olarak hayata geçti</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-amber-50 p-4 rounded-lg mt-4">
                            <h5 class="font-bold text-amber-700 mb-2">🔥 Sınav İpucu</h5>
                            <p class="text-sm"><strong>2006 = Başlangıç</strong>, <strong>1 Ekim 2008 = Tam Yürürlük</strong> tarihleri sınavların en sık sorulan konularındandır!</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>⚖️ İki Temel Kanun: 5502 vs 5510</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-700 mb-3">🏢 5502 Sayılı SGK Kanunu</h4>
                                <p class="text-sm mb-3 font-medium">"Kurum" - Kurumsal yapıyı düzenler</p>
                                <ul class="text-sm space-y-1">
                                    <li>• <strong>SGK'nın kurulması</strong></li>
                                    <li>• <strong>Organları:</strong> Genel Kurul, Yönetim Kurulu</li>
                                    <li>• <strong>Görevleri:</strong> Yönetim, denetim</li>
                                    <li>• <strong>Yapısı:</strong> Teşkilat şeması</li>
                                    <li>• <strong>Mali Yapı:</strong> Bütçe, harcama</li>
                                </ul>
                                <div class="mt-3 p-2 bg-blue-100 rounded text-xs">
                                    <strong>Cevapladığı Soru:</strong> Sistemi <strong>KİM</strong> yönetecek?
                                </div>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="font-bold text-green-700 mb-3">📋 5510 Sayılı Sistem Kanunu</h4>
                                <p class="text-sm mb-3 font-medium">"Sistem" - İçeriği ve kuralları düzenler</p>
                                <ul class="text-sm space-y-1">
                                    <li>• <strong>Sigortalılık:</strong> Kim sigortalı olur?</li>
                                    <li>• <strong>Primler:</strong> Ne kadar ödenir?</li>
                                    <li>• <strong>Haklar:</strong> Hangi yardımlar?</li>
                                    <li>• <strong>Emeklilik:</strong> Nasıl şartlar?</li>
                                    <li>• <strong>Sağlık:</strong> GSS kapsamı</li>
                                </ul>
                                <div class="mt-3 p-2 bg-green-100 rounded text-xs">
                                    <strong>Cevapladığı Soru:</strong> Sistem <strong>NASIL</strong> çalışacak?
                                </div>
                            </div>
                        </div>
                        
                        <div class="key-point"><strong>📊 Sınav Notu:</strong> 5502 Sayılı Kanun = Kurum (Kim?), 5510 Sayılı Kanun = Sistem (Ne, nasıl, ne zaman?). Bu ayrım sınavların temel konusudur!</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🔄 Reformun Sonuçları</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">✅ Olumlu Sonuçlar</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Sosyal adaletsizliklerin azalması</li>
                                    <li>• Tek norm ve standart</li>
                                    <li>• Mali sürdürülebilirlik</li>
                                    <li>• İdari verimlilik artışı</li>
                                    <li>• Koordinasyon problemlerinin çözümü</li>
                                </ul>
                            </div>
                            <div class="bg-orange-50 p-4 rounded-lg">
                                <h5 class="font-bold text-orange-700 mb-2">⚠️ Geçiş Zorlukları</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Kazanılmış hakların korunması</li>
                                    <li>• İdari adaptasyon süreci</li>
                                    <li>• Personel entegrasyonu</li>
                                    <li>• Sistem alışkanlıklarının değişmesi</li>
                                    <li>• Mevzuat uyumlaştırması</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="key-point"><strong>Sonuç:</strong> Reform, Türkiye'nin sosyal güvenlik sistemini 21. yüzyılın gereklerine uygun hale getiren tarihsel bir dönüşüm olmuştur.</div>
                    </div>
                </div>
            </div>`,
        'sgk-yapisi': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Sosyal Güvenlik Kurumu (SGK) Yapısı</h1>
            <p class="text-lg text-slate-600 mb-8">SGK, kamu tüzel kişiliğine sahip, idari ve mali açıdan özerk, Çalışma ve Sosyal Güvenlik Bakanlığı'nın ilgili bir kuruluşudur.</p>
            
            <div class="space-y-6 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🏢 Hukuki Yapısı ve Özellikleri</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-700 mb-3">🏦 Kamu Tüzel Kişiliği</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• Bağımsız hukuki kimliye sahip</li>
                                    <li>• Kendi adına işlem yapabilir</li>
                                    <li>• Mal varlığına sahiptir</li>
                                    <li>• Dava açabilir ve açılabilir</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="font-bold text-green-700 mb-3">🎯 İdari ve Mali Özerklik</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• Kendi bütçesini hazırlar</li>
                                    <li>• Gelir-gider yönetimi yapar</li>
                                    <li>• Personel işlemleri yürütür</li>
                                    <li>• Yatırım kararları alır</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                            <h5 class="font-bold text-yellow-700 mb-2">🔗 Bakanlıkla İlişki</h5>
                            <p class="text-sm mb-2"><strong>"Bağlı" değil, "İlgili" kuruluş</strong></p>
                            <ul class="text-sm space-y-1">
                                <li>• Hiyerarşik bağ bulunmaz</li>
                                <li>• Özerkliğini korur</li>
                                <li>• Genel politika koordinasyonu vardır</li>
                                <li>• Hesap verme sorumluluğu bulunur</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Kritik Ayrım:</strong> SGK'nın "bağlı" değil "ilgili" kuruluş olması, özerkliğini ve bağımsız karar alma yetisini gösterir.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>📅 Genel Kurul - Denetim ve Danışma Organı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Kompozisyon ve Üyeler</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div class="bg-red-50 p-3 rounded-lg">
                                <h5 class="font-bold text-red-700 mb-2 text-sm">Hükümet Temsilcileri</h5>
                                <ul class="text-xs space-y-1">
                                    <li>• Bakanlık temsilcileri</li>
                                    <li>• Hazine temsilcisi</li>
                                    <li>• Sayıştay temsilcisi</li>
                                </ul>
                            </div>
                            <div class="bg-blue-50 p-3 rounded-lg">
                                <h5 class="font-bold text-blue-700 mb-2 text-sm">İşçi Temsilcileri</h5>
                                <ul class="text-xs space-y-1">
                                    <li>• Konfederasyon temsilcileri</li>
                                    <li>• Memur sendikası temsilcileri</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-3 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2 text-sm">İşveren Temsilcileri</h5>
                                <ul class="text-xs space-y-1">
                                    <li>• İşveren konfederasyonu</li>
                                    <li>• Esnaf odaları temsilcileri</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Görevleri</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>Yıllık Faaliyet Raporları:</strong> Kurumun performansını değerlendirir</li>
                            <li><strong>Mali Durum İncelemesi:</strong> Gelir-gider dengesini analiz eder</li>
                            <li><strong>Tavsiye Kararları:</strong> Kurumun gelişimi için öneriler sunar</li>
                            <li><strong>Sosyal Diyalog:</strong> Sosyal taraflar arasında köprü kurma</li>
                        </ul>
                        
                        <div class="key-point"><strong>İşlev:</strong> Genel Kurul, karar verici değil danışma organıdır. Sosyal tarafların sisteme katılımını sağlar.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🏢 Yönetim Kurulu - En Üst Karar Organı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Kompozisyon</h4>
                        <div class="bg-purple-50 p-4 rounded-lg mb-4">
                            <ul class="text-sm space-y-1">
                                <li>• <strong>Başkan:</strong> SGK Başkanı (Yönetim Kurulu Başkanı)</li>
                                <li>• <strong>Üyeler:</strong> Çeşitli bakan temsilcileri</li>
                                <li>• <strong>Uzmanlar:</strong> Alanda deneyimli kişiler</li>
                                <li>• <strong>Atama:</strong> Cumhurbaşkanı tarafından</li>
                            </ul>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Temel Görevleri</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h5 class="font-bold text-blue-700 mb-2">Stratejik Kararlar</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Kurum politikalarını belirler</li>
                                    <li>• Uzun vadeli planlar yapar</li>
                                    <li>• Performans hedefleri koyar</li>
                                    <li>• Risk yönetimi politikaları</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">Mali Kararlar</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Bütçeyi onaylar</li>
                                    <li>• Taşınmaz alım-satımına karar verir</li>
                                    <li>• Yatırım kararları alır</li>
                                    <li>• Mali tablo ve raporları onaylar</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Atama Yetkileri</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>SGK Başkanı:</strong> Yönetim Kurulu SGK Başkanını atar</li>
                            <li><strong>Genel Müdürler:</strong> Üst düzey yöneticilerin atanması</li>
                            <li><strong>Bölge Müdürleri:</strong> Taşra teşkilatı yöneticileri</li>
                        </ul>
                        
                        <div class="key-point"><strong>Yetki Alanı:</strong> Yönetim Kurulu, SGK'nın en üst karar organıdır ve tüm stratejik konularda son sözü söyler.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>💼 Başkanlık Teşkilatı - İcra Organı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Hiyerarşik Yapı</h4>
                        <div class="space-y-4">
                            <div class="border-l-4 border-red-500 pl-4">
                                <h5 class="font-bold text-red-600 mb-2">👑 SGK Başkanı</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• En üst düzey yürütün</li>
                                    <li>• Yönetim Kurulu kararlarını uygular</li>
                                    <li>• Kurumu temsil eder</li>
                                    <li>• Genel koordinasyonu sağlar</li>
                                </ul>
                            </div>
                            
                            <div class="border-l-4 border-blue-500 pl-4">
                                <h5 class="font-bold text-blue-600 mb-2">🏢 Genel Müdürlükler (Merkez)</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Sigorta Primleri GM</li>
                                    <li>• Sosyal Sigorta GM</li>
                                    <li>• Sağlık Hizmetleri GM</li>
                                    <li>• Strateji Geliştirme GM</li>
                                    <li>• Teftiş Kurulu GM</li>
                                </ul>
                            </div>
                            
                            <div class="border-l-4 border-green-500 pl-4">
                                <h5 class="font-bold text-green-600 mb-2">🌍 Taşra Teşkilatı</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• İl Müdürlükleri (81 ilde)</li>
                                    <li>• İlçe Müdürlükleri</li>
                                    <li>• Sosyal Güvenlik Merkezleri</li>
                                    <li>• Hizmet İletim Noktaları</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="key-point"><strong>İşlev:</strong> Başkanlık Teşkilatı, Yönetim Kurulu'nun aldığı kararları hayata geçiren operasyonel birimlerdir.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🩺 Sosyal Sigorta Yüksek Sağlık Kurulu</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Kurul Yapısı ve Üyelik</h4>
                        <div class="bg-red-50 p-4 rounded-lg mb-4">
                            <ul class="text-sm space-y-1">
                                <li>• <strong>Tıp Profesorleri:</strong> Çeşitli tıp dalından uzmanlar</li>
                                <li>• <strong>SGK Temsilcileri:</strong> Kurumsal perspektif sağlayanlar</li>
                                <li>• <strong>Bağımsız Üyeler:</strong> Objektif değerlendirme yapanlar</li>
                                <li>• <strong>Uzmanlık Alanları:</strong> Ortopedi, nöroloji, psikiyatri vb.</li>
                            </ul>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Temel Görevleri</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h5 class="font-bold text-blue-700 mb-2">Maluliyet Tespiti</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Meslekte kazanma gücü kaybı oranı</li>
                                    <li>• Çalışma kapasitesi değerlendirmesi</li>
                                    <li>• Maluliyet derece tespiti</li>
                                    <li>• Meslek hastalığı ilişkisi</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">İtiraz Değerlendirme</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Hekim rapor itirazları</li>
                                    <li>• Maluliyet derece itirazları</li>
                                    <li>• İş kazası ilişki itirazları</li>
                                    <li>• Sağlık kurulu itirazları</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Karar Verme Süreci</h4>
                        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                            <ul class="text-sm space-y-1">
                                <li>• <strong>Bağımsız Değerlendirme:</strong> Objektif tıbbi kriterlere dayansın</li>
                                <li>• <strong>Oybirliği veya Oyçokluğu:</strong> Kolektif karar alma</li>
                                <li>• <strong>Dosya İncelemesi:</strong> Tüm tıbbi belgeler değerlendirilir</li>
                                <li>• <strong>Kesin Karar:</strong> SGK'yı bağlayan nihai karar</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Kritik Özellik:</strong> Kurulun kararları SGK'yı bağlar ve son derece teknik konularda nihai yetkiye sahiptir.</div>
                    </div>
                </div>
            </div>`,
        '4a-detay': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">4/a Sigortalılığı (İşçi) - Detaylı İnceleme</h1>
            <p class="text-lg text-slate-600 mb-8">Bir veya birden fazla işverene bağlı olarak hizmet akdi ile çalışanların sigortalılık ilişkisi ve prosedürleri.</p>
            
            <div class="space-y-6 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>📋 Sigortalılığın Başlangıcı ve Bildirilmesi</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Başlangıç Anı</h4>
                        <p class="mb-4">Sigortalılık, işçinin <strong>fiilen çalışmaya başladığı tarih ve saatten</strong> itibaren başlar. İşverenin SGK'ya bildirim yapıp yapmaması bu durumu değiştirmez.</p>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Bildirim Yükümlülüğü</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>İşe Giriş Bildirgesi:</strong> İşçinin çalışmaya başlamasından en geç bir gün önce SGK'ya verilmelidir</li>
                            <li><strong>SGK Web Servisi:</strong> e-Bordro sistemi üzerinden elektronik ortamda yapılır</li>
                            <li><strong>Acil Durum Bildirgesi:</strong> İş kazası riskinin yüksek olduğu işlerde günlük bildirim zorunluluğu</li>
                        </ul>
                        
                        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
                            <h5 class="font-bold text-red-700 mb-2">⚠️ Geç Bildirim Cezaları</h5>
                            <ul class="list-disc list-inside text-sm text-red-600 space-y-1">
                                <li>Süresi içinde bildirilmeyen her sigortalı için <strong>idari para cezası</strong></li>
                                <li>2024 yılı için yaklaşık 500 TL/sigortalı (her yıl güncellenir)</li>
                                <li>Kasten bildirilmeyenlere <strong>ağır idari para cezası</strong></li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Kritik Nokta:</strong> İşveren bildirimi yapmasa bile işçi o tarihten itibaren sigortalıdır ve tüm haklardan yararlanabilir. SGK denetiminde tespit edilirse geriye dönük primler tahsil edilir.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🔄 Sigortalılığın Sona Ermesi</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Sona Erme Sebepleri</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>İşten Ayrılma:</strong> İşçinin kendi isteği veya işverenin feshi</li>
                            <li><strong>Emeklilik:</strong> Yaşlılık aylığı bağlanması</li>
                            <li><strong>Ölüm:</strong> Sigortalının vefatı</li>
                            <li><strong>Statü Değişikliği:</strong> 4/b veya 4/c'ye geçiş</li>
                        </ul>
                        
                        <h4 class="font-bold text-blue-600 mb-3">İşten Çıkış Bildirgesi</h4>
                        <div class="bg-blue-50 p-4 rounded-lg mb-4">
                            <ul class="list-disc list-inside text-sm space-y-1">
                                <li><strong>Süre:</strong> İşten ayrılıştan itibaren 10 gün içinde</li>
                                <li><strong>İçerik:</strong> Ayrılış tarihi, nedeni, kıdem tazminatı bilgileri</li>
                                <li><strong>Özel Durumlar:</strong> İş kazası, ölüm gibi durumlarda acil bildirim</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Dikkat:</strong> İşçi çalışmayı bıraksa bile işveren bildirimi yapmazsa sigortalılık devam eder ve prim borcu birikir.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🎯 Sigorta Kolları Kapsamı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Tam Kapsam (Bütün Sigorta Kolları)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">🩹 Kısa Vadeli Sigorta Kolları</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• İş Kazası</li>
                                    <li>• Meslek Hastalığı</li>
                                    <li>• Hastalık</li>
                                    <li>• Analık (Doğum)</li>
                                </ul>
                            </div>
                            <div class="bg-purple-50 p-4 rounded-lg">
                                <h5 class="font-bold text-purple-700 mb-2">⏳ Uzun Vadeli Sigorta Kolları</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Malullük</li>
                                    <li>• Yaşlılık (Emeklilik)</li>
                                    <li>• Ölüm</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-teal-50 p-4 rounded-lg mb-4">
                            <h5 class="font-bold text-teal-700 mb-2">🏥 Ek Sigortalar</h5>
                            <ul class="text-sm space-y-1">
                                <li>• <strong>Genel Sağlık Sigortası (GSS):</strong> Sağlık hizmetleri</li>
                                <li>• <strong>İşsizlik Sigortası:</strong> İşsizlik maaşı ve aktif işgücü programları</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Tam Koruma:</strong> 4/a sigortalıları tüm sigorta kollarından yararlanır. Bu en kapsamlı sosyal güvenlik korumasıdır.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>⚖️ Hak ve Yükümlülükler</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">İşçinin Hakları</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li>Tüm sigorta kollarından yararlanma</li>
                            <li>Sigortalılık sürelerinin emekliliğe sayılması</li>
                            <li>İşsizlik maaşı alma (şartları sağlarsa)</li>
                            <li>Sağlık hizmetlerinden yararlanma</li>
                            <li>Bakmakla yükümlü olduğu kişileri sigortalı yapma</li>
                        </ul>
                        
                        <h4 class="font-bold text-blue-600 mb-3">İşçinin Yükümlülükleri</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li>İşçi payı primlerin maaşından kesilmesine razı olma</li>
                            <li>Sigortalılıkla ilgili değişiklikleri işverene bildirme</li>
                            <li>Sağlık hizmetlerini gereksiz yere kullanmama</li>
                        </ul>
                        
                        <h4 class="font-bold text-blue-600 mb-3">İşverenin Yükümlülükleri</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li>Zamanında ve doğru bildirim yapma</li>
                            <li>Hem işçi hem işveren payı primleri ödeme</li>
                            <li>İş sağlığı ve güvenliği tedbirlerini alma</li>
                            <li>Bordro ve belgelerini düzenli tutma</li>
                        </ul>
                    </div>
                </div>
            </div>`,
        '4b-detay': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">4/b Sigortalılığı (Esnaf/Bağ-Kur) - Detaylı İnceleme</h1>
            <p class="text-lg text-slate-600 mb-8">Kendi adına ve hesabına bağımsız çalışan esnaf, sanatkâr, şirket ortakları ve serbest meslek mensuplarının sigortalılık ilişkisi.</p>
            
            <div class="space-y-6 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🏪 Sigortalı Sayılanlar</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-700 mb-3">Esnaf ve Sanatkârlar</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• Ticaret odası kayıtlı tacirler</li>
                                    <li>• Esnaf ve sanatkârlar odası üyeleri</li>
                                    <li>• Muhtarlık belgesine dayalı faaliyette bulunanlar</li>
                                    <li>• Seyyar satıcılar (ruhsatlı)</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="font-bold text-green-700 mb-3">Şirket Ortakları</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• Kollektif şirket ortakları</li>
                                    <li>• Komanditer şirket komandite ortakları</li>
                                    <li>• Limited şirket ortakları (%10+ pay)</li>
                                    <li>• Kooperatif ortakları (çalışanlar)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-purple-50 p-4 rounded-lg mb-4">
                            <h4 class="font-bold text-purple-700 mb-3">Serbest Meslek Mensupları</h4>
                            <ul class="text-sm space-y-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <li>• Avukatlar</li>
                                <li>• Mühendisler</li>
                                <li>• Mimar</li>
                                <li>• Doktorlar</li>
                                <li>• Muhasebeciler</li>
                                <li>• Eczacılar</li>
                                <li>• Diş hekimleri</li>
                                <li>• Veteriner hekimler</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Temel Kriter:</strong> Kendi adına ve hesabına, bağımsız olarak faaliyet göstermek. Başkasına bağımlı çalışma durumunda 4/a kapsamına girer.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>📝 Sigortalılığın Başlangıcı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Başlangıç Şartları</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>18 yaşını doldurmak</strong> (Erken evlilik halinde 16 yaş)</li>
                            <li><strong>Fiilen faaliyete başlamak</strong></li>
                            <li><strong>Ticari kayıt/ruhsat almak</strong> (faaliyet türüne göre)</li>
                            <li><strong>Başka bir zorunlu sigortalılığının bulunmaması</strong></li>
                        </ul>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Bildirim Prosedürü</h4>
                        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                            <ul class="list-disc list-inside text-sm space-y-1">
                                <li><strong>Süre:</strong> Faaliyete başladığı tarihten itibaren 1 ay içinde</li>
                                <li><strong>Yer:</strong> SGK il/ilçe müdürlükleri veya e-Devlet</li>
                                <li><strong>Belgeler:</strong> Kimlik, ticari kayıt, adres belgesi</li>
                                <li><strong>Prim Ödeme:</strong> Kayıt tarihinden itibaren başlar</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Önemli:</strong> Geç kayıt olma durumunda geriye dönük prim borcu doğmaz, ancak o süre emekliliğe sayılmaz.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🎯 Sigorta Kolları ve Kapsamı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Kapsam Dahilindeki Sigorta Kolları</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">✅ Kapsamdakiler</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Malullük Sigortası</li>
                                    <li>• Yaşlılık Sigortası</li>
                                    <li>• Ölüm Sigortası</li>
                                    <li>• Genel Sağlık Sigortası</li>
                                    <li>• İş Kazası (şartlı)</li>
                                    <li>• Meslek Hastalığı (şartlı)</li>
                                    <li>• Analık (doğum) (şartlı)</li>
                                </ul>
                            </div>
                            <div class="bg-red-50 p-4 rounded-lg">
                                <h5 class="font-bold text-red-700 mb-2">❌ Kapsam Dışı</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Hastalık Sigortası</li>
                                    <li>• İşsizlik Sigortası</li>
                                    <li>• Klasik rapor parası</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-orange-50 p-4 rounded-lg mb-4">
                            <h5 class="font-bold text-orange-700 mb-2">⚠️ Şartlı Haklar</h5>
                            <ul class="text-sm space-y-1">
                                <li>• <strong>İş Kazası:</strong> Sadece işyerinde, iş nedeniyle</li>
                                <li>• <strong>Meslek Hastalığı:</strong> Belirli mesleklere özgü</li>
                                <li>• <strong>Analık:</strong> Doğum izni ve doğum yardımı</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Sınırlı Koruma:</strong> 4/b sigortalıları temel emeklilik ve sağlık hizmetlerinden yararlanır, ancak hastalık sigortası ve işsizlik güvencesi yoktur.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>💰 Prim Ödeme ve Mali Yükümlülükler</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Prim Matrahı Seçenekleri</h4>
                        <div class="overflow-x-auto mb-4">
                            <table class="w-full border-collapse">
                                <thead class="bg-slate-100">
                                    <tr>
                                        <th class="p-3 font-semibold border">Matrah Türü</th>
                                        <th class="p-3 font-semibold border">2024 Tutarı</th>
                                        <th class="p-3 font-semibold border">Aylık Prim</th>
                                        <th class="p-3 font-semibold border">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-3 border font-medium">Asgari</td>
                                        <td class="p-3 border">26.005,50 TL</td>
                                        <td class="p-3 border">~9.040 TL</td>
                                        <td class="p-3 border text-sm">En düşük prim ödeme</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border font-medium">Orta</td>
                                        <td class="p-3 border">39.008,25 TL</td>
                                        <td class="p-3 border">~13.560 TL</td>
                                        <td class="p-3 border text-sm">Standart tercih</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border font-medium">Üst</td>
                                        <td class="p-3 border">65.013,75 TL</td>
                                        <td class="p-3 border">~22.600 TL</td>
                                        <td class="p-3 border text-sm">Yüksek emekli maaşı</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Ödeme Koşulları</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>Ödeme Tarihi:</strong> Her ayın sonuna kadar</li>
                            <li><strong>Gecikme Zammı:</strong> Geciken her gün için %0,1 faiz</li>
                            <li><strong>Borcun Yapılandırılması:</strong> Belirli dönemlerde af kanunları</li>
                            <li><strong>İcra Takibi:</strong> 60 günden fazla gecikmelerde başlar</li>
                        </ul>
                        
                        <div class="key-point"><strong>Matrah Seçimi:</strong> Yüksek matrah seçmek emekli maaşını artırır ancak aylık prim yükünü de artırır. Seçim bir kez yapılır, değiştirmek için özel şartlar gerekir.</div>
                    </div>
                </div>
            </div>`,
        '4c-detay': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">4/c Sigortalılığı (Memur) - Detaylı İnceleme</h1>
            <p class="text-lg text-slate-600 mb-8">Kamu idarelerinde 657 sayılı Devlet Memurları Kanunu veya diğer personel kanunlarına tabi olarak çalışanların sigortalılık sistemi.</p>
            
            <div class="space-y-6 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🏛️ Sigortalı Sayılanlar</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-700 mb-3">Devlet Memurları</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• 657 sayılı kanuna tabi memurlar</li>
                                    <li>• Büyükelçiler, konsoloslar</li>
                                    <li>• Milli Eğitim personeli</li>
                                    <li>• Sağlık personeli (kamu)</li>
                                    <li>• Adliye personeli</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="font-bold text-green-700 mb-3">Özel Kanunlu Personel</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• Akademik personel (2547 sayılı)</li>
                                    <li>• Yargı mensupları (hakimler, savcılar)</li>
                                    <li>• Güvenlik personeli (polis, asker)</li>
                                    <li>• Belediyelerde 657'ye tabi olanlar</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-purple-50 p-4 rounded-lg mb-4">
                            <h4 class="font-bold text-purple-700 mb-3">Sözleşmeli Personel</h4>
                            <ul class="text-sm space-y-1">
                                <li>• Kamu kurumlarında 657 sayılı kanuna tabi sözleşmeli personel</li>
                                <li>• Geçici personel (belirli süreli)</li>
                                <li>• İşçi statüsünde olmayanlar</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Ayırt Edici Özellik:</strong> Kamu gücü kullanma yetkisi olan veya kamu hizmeti ifa eden, 657 sayılı kanun kapsamındaki personeldir.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>📋 Sigortalılığın Başlangıcı ve İşlemleri</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Memuriyete Atama Süreci</h4>
                        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                            <ol class="list-decimal list-inside text-sm space-y-1">
                                <li><strong>KPSS Sınavı:</strong> Kamu personeli seçme sınavı</li>
                                <li><strong>Başvuru ve Değerlendirme:</strong> Kuruma başvuru, belge kontrolü</li>
                                <li><strong>Atama Kararı:</strong> Resmi atama emrinin çıkması</li>
                                <li><strong>Göreve Başlama:</strong> Fiilen çalışmaya başlama</li>
                                <li><strong>SGK Kaydı:</strong> Kurumun SGK'ya bildirim yapması</li>
                            </ol>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Sigortalılığın Başlangıcı</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>Atama Tarihi:</strong> Resmi atama emrinde belirtilen tarih</li>
                            <li><strong>Göreve Başlama:</strong> Fiilen çalışmaya başladığı tarih</li>
                            <li><strong>Sicil İşlemleri:</strong> Personel sicil kayıtlarının tutulması</li>
                            <li><strong>Bordro Kaydı:</strong> Maaş bordrolarına dahil edilme</li>
                        </ul>
                        
                        <div class="key-point"><strong>Otomatik Kayıt:</strong> Memur olarak atananlar otomatik olarak 4/c kapsamına girer. Ayrı bir başvuru gerekmez.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🎯 Sigorta Kolları Kapsamı</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Kapsam Dahilindeki Sigorta Kolları</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">✅ Tam Kapsam</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Malullük Sigortası</li>
                                    <li>• Yaşlılık Sigortası</li>
                                    <li>• Ölüm Sigortası</li>
                                    <li>• Genel Sağlık Sigortası</li>
                                </ul>
                            </div>
                            <div class="bg-yellow-50 p-4 rounded-lg">
                                <h5 class="font-bold text-yellow-700 mb-2">⚠️ Kısmi Kapsam</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• İş Kazası (görev başında)</li>
                                    <li>• Meslek Hastalığı (sınırlı)</li>
                                    <li>• Analık (doğum izni)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-red-50 p-4 rounded-lg mb-4">
                            <h5 class="font-bold text-red-700 mb-2">❌ Kapsam Dışı</h5>
                            <ul class="text-sm space-y-1">
                                <li>• Hastalık Sigortası (rapor parası)</li>
                                <li>• İşsizlik Sigortası</li>
                                <li>• Genel iş kazası kapsamı</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Özel Durum:</strong> Memurlar hastalık raporu aldıklarında maaşları kesilmez, bu nedenle ayrı hastalık sigortasına ihtiyaç duymazlar.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>💰 Emeklilik Sistemi ve Özellikleri</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Emeklilik Koşulları (Genel)</h4>
                        <div class="overflow-x-auto mb-4">
                            <table class="w-full border-collapse">
                                <thead class="bg-slate-100">
                                    <tr>
                                        <th class="p-3 font-semibold border">Emeklilik Türü</th>
                                        <th class="p-3 font-semibold border">Yaş Şartı</th>
                                        <th class="p-3 font-semibold border">Hizmet Süresi</th>
                                        <th class="p-3 font-semibold border">Prim Gün Sayısı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-3 border font-medium">Yaşlılık (Normal)</td>
                                        <td class="p-3 border">65 yaş</td>
                                        <td class="p-3 border">25 yıl</td>
                                        <td class="p-3 border">9.000 gün</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border font-medium">Erken Emeklilik</td>
                                        <td class="p-3 border">60 yaş</td>
                                        <td class="p-3 border">30 yıl</td>
                                        <td class="p-3 border">10.800 gün</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border font-medium">Kadın (Özel)</td>
                                        <td class="p-3 border">58-60 yaş</td>
                                        <td class="p-3 border">20-25 yıl</td>
                                        <td class="p-3 border">Değişken</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Maaş Hesaplama Sistemi</h4>
                        <div class="bg-blue-50 p-4 rounded-lg mb-4">
                            <ul class="list-disc list-inside text-sm space-y-1">
                                <li><strong>Emekli İkramiyesi:</strong> Son maaşın belli katları</li>
                                <li><strong>Aylık Bağlama Oranı:</strong> Hizmet süresine göre %35-80 arası</li>
                                <li><strong>Intibak İşlemleri:</strong> Maaş güncellemeleri</li>
                                <li><strong>Derece Terfisi:</strong> Emeklilikte maaş artışı</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Avantaj:</strong> 4/c emekliliği genellikle diğer statülere göre daha erken yaşta ve daha yüksek maaşla emeklilik imkanı sağlar.</div>
                    </div>
                </div>
            </div>`,
        'istege-bagli-detay': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">İsteğe Bağlı Sigortalılık - Detaylı İnceleme</h1>
            <p class="text-lg text-slate-600 mb-8">Zorunlu sigortalı olmayanların kendi isteğiyle SGK sistemine dahil olarak emeklilik ve sağlık haklarından yararlanabildiği sigortalılık türüdür.</p>
            
            <div class="space-y-6 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🎯 Kimler Başvurabilir?</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Genel Şartlar</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>18 yaşını doldurmuş olmak</strong></li>
                            <li><strong>Herhangi bir zorunlu sigortalılığının bulunmaması</strong></li>
                            <li><strong>Türkiye'de ikamet etmek</strong></li>
                            <li><strong>Daha önce en az 5 yıl prim ödemiş olmak</strong> (yeni başvurular için)</li>
                        </ul>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="font-bold text-green-700 mb-3">✅ Başvurabilenler</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• İşsiz olanlar</li>
                                    <li>• Ev hanımları</li>
                                    <li>• Öğrenciler (18+ yaş)</li>
                                    <li>• Emekli olanlar (ek güvence için)</li>
                                    <li>• Yurtdışında yaşayanlar</li>
                                    <li>• Serbest çalışanlar (4/b kapsamında olmayanlar)</li>
                                </ul>
                            </div>
                            <div class="bg-red-50 p-4 rounded-lg">
                                <h4 class="font-bold text-red-700 mb-3">❌ Başvuramayanlar</h4>
                                <ul class="text-sm space-y-1">
                                    <li>• 4/a sigortalıları</li>
                                    <li>• 4/b sigortalıları</li>
                                    <li>• 4/c sigortalıları</li>
                                    <li>• Hiç prim ödememiş olanlar</li>
                                    <li>• 18 yaş altındakiler</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="key-point"><strong>Önemli:</strong> İsteğe bağlı sigortalılık, zorunlu sigortalılığın alternatifi değil, tamamlayıcısıdır. Öncelik her zaman zorunlu sigortalılıktadır.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>📝 Başvuru Süreci ve Koşulları</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Başvuru Prosedürü</h4>
                        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                            <ol class="list-decimal list-inside text-sm space-y-1">
                                <li><strong>Başvuru Dilekçesi:</strong> SGK il/ilçe müdürlüklerine</li>
                                <li><strong>Belge Kontrolü:</strong> Kimlik, ikametgah, sigortalılık geçmişi</li>
                                <li><strong>Prim Matrah Seçimi:</strong> Ödeyebileceği tutarı belirleme</li>
                                <li><strong>Onay Süreci:</strong> SGK'nın değerlendirmesi</li>
                                <li><strong>Prim Ödemeye Başlama:</strong> Onaydan sonra 30 gün içinde</li>
                            </ol>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Gerekli Belgeler</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li>Kimlik fotokopisi</li>
                            <li>İkametgah belgesi</li>
                            <li>Sigortalılık belge çıktısı (e-Devlet'ten)</li>
                            <li>Gelir beyanı (varsa)</li>
                            <li>Yurtdışı ikamet belgesi (yurtdışında yaşayanlar için)</li>
                        </ul>
                        
                        <div class="bg-orange-50 p-4 rounded-lg mb-4">
                            <h5 class="font-bold text-orange-700 mb-2">⚠️ Dikkat Edilecek Hususlar</h5>
                            <ul class="text-sm space-y-1">
                                <li>• İlk 3 aylık prim peşin ödenmelidir</li>
                                <li>• Başvuru tarihinden itibaren geri sayım başlar</li>
                                <li>• İptal durumunda 5 yıl bekleme süresi vardır</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Bekleme Süresi:</strong> İsteğe bağlı sigortalılıktan ayrıldıktan sonra 5 yıl boyunca yeniden başvuru yapılamaz.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🎯 Kapsam ve Haklar</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Sağlanan Haklar</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">✅ Kapsam Dahilinde</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Malullük Sigortası</li>
                                    <li>• Yaşlılık Sigortası (Emeklilik)</li>
                                    <li>• Ölüm Sigortası</li>
                                    <li>• Genel Sağlık Sigortası</li>
                                    <li>• Hak sahiplerinin sağlık sigortası</li>
                                </ul>
                            </div>
                            <div class="bg-red-50 p-4 rounded-lg">
                                <h5 class="font-bold text-red-700 mb-2">❌ Kapsam Dışı</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• İş Kazası Sigortası</li>
                                    <li>• Meslek Hastalığı Sigortası</li>
                                    <li>• Hastalık Sigortası (rapor parası)</li>
                                    <li>• Analık Sigortası</li>
                                    <li>• İşsizlik Sigortası</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Emeklilik Koşulları</h4>
                        <div class="overflow-x-auto mb-4">
                            <table class="w-full border-collapse">
                                <thead class="bg-slate-100">
                                    <tr>
                                        <th class="p-3 font-semibold border">Cinsiyet</th>
                                        <th class="p-3 font-semibold border">Yaş Şartı</th>
                                        <th class="p-3 font-semibold border">Prim Gün Sayısı</th>
                                        <th class="p-3 font-semibold border">Sigortalılık Süresi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-3 border font-medium">Erkek</td>
                                        <td class="p-3 border">65 yaş</td>
                                        <td class="p-3 border">7.200 gün</td>
                                        <td class="p-3 border">25 yıl</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border font-medium">Kadın</td>
                                        <td class="p-3 border">65 yaş</td>
                                        <td class="p-3 border">7.200 gün</td>
                                        <td class="p-3 border">25 yıl</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="key-point"><strong>Sigortalılık Statüsü:</strong> İsteğe bağlı sigortalılar 4/b statüsünde sayılır ve emeklilik hesaplamalarında bu statü esas alınır.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>💰 Prim Ödeme Sistemi</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Prim Matrahı ve Ödeme</h4>
                        <div class="bg-blue-50 p-4 rounded-lg mb-4">
                            <ul class="list-disc list-inside text-sm space-y-1">
                                <li><strong>Prim Oranı:</strong> %32 (20% emeklilik + 12% sağlık)</li>
                                <li><strong>Minimum Matrah:</strong> Brüt asgari ücretin %35'i</li>
                                <li><strong>Maksimum Matrah:</strong> Brüt asgari ücretin %100'ü</li>
                                <li><strong>Ödeme Zamanı:</strong> Her ayın sonuna kadar</li>
                            </ul>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">2024 Yılı Prim Tutarları</h4>
                        <div class="overflow-x-auto mb-4">
                            <table class="w-full border-collapse">
                                <thead class="bg-slate-100">
                                    <tr>
                                        <th class="p-3 font-semibold border">Matrah Oranı</th>
                                        <th class="p-3 font-semibold border">Matrah Tutarı</th>
                                        <th class="p-3 font-semibold border">Aylık Prim</th>
                                        <th class="p-3 font-semibold border">Emekli Maaşı Etkisi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-3 border">%35 (Minimum)</td>
                                        <td class="p-3 border">9.102 TL</td>
                                        <td class="p-3 border">2.913 TL</td>
                                        <td class="p-3 border text-sm">Düşük maaş</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border">%50</td>
                                        <td class="p-3 border">13.003 TL</td>
                                        <td class="p-3 border">4.161 TL</td>
                                        <td class="p-3 border text-sm">Orta maaş</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border">%100 (Maksimum)</td>
                                        <td class="p-3 border">26.005 TL</td>
                                        <td class="p-3 border">8.322 TL</td>
                                        <td class="p-3 border text-sm">Yüksek maaş</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="key-point"><strong>Matrah Değişikliği:</strong> Yılda bir kez olmak üzere matrah oranı değiştirilebilir. Değişiklik bir sonraki yılın Ocak ayından geçerli olur.</div>
                    </div>
                </div>
            </div>`,
        'kismen-sigortali': `
            <h1 class="text-3xl font-bold text-teal-700 mb-6">Kısmen (Bazı Sigorta Kolları Bakımından) Sigortalılar</h1>
            <p class="text-lg text-slate-600 mb-8">Tüm sigorta kollarından değil, sadece belirli sigorta kollarından yararlanan veya özel düzenlemelere tabi olan sigortalı gruplarıdır.</p>
            
            <div class="space-y-6 accordion-container">
                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🎓 Stajyer ve Öğrenci Sigortalıları</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Kapsama Dahil Olanlar</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h5 class="font-bold text-blue-700 mb-2">Stajyerler</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• İşyerinde mesleki eğitim görenler</li>
                                    <li>• Çıraklık eğitimi alanlar</li>
                                    <li>• Usta-çırak ilişkisi içindekiler</li>
                                    <li>• Beceri eğitimi alanlar</li>
                                </ul>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">Öğrenciler</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Üniversite öğrencileri (part-time)</li>
                                    <li>• Meslek lisesi öğrencileri</li>
                                    <li>• Kursiyerler (İŞKUR vb.)</li>
                                    <li>• Staj yapan öğrenciler</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Sigorta Kapsamı</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">✅ Kapsam Dahili</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• İş Kazası Sigortası</li>
                                    <li>• Meslek Hastalığı Sigortası</li>
                                    <li>• Genel Sağlık Sigortası</li>
                                </ul>
                            </div>
                            <div class="bg-red-50 p-4 rounded-lg">
                                <h5 class="font-bold text-red-700 mb-2">❌ Kapsam Dışı</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Malullük Sigortası</li>
                                    <li>• Yaşlılık Sigortası</li>
                                    <li>• Ölüm Sigortası</li>
                                    <li>• Hastalık Sigortası</li>
                                    <li>• İşsizlik Sigortası</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
                            <h5 class="font-bold text-yellow-700 mb-2">💰 Prim Ödeme</h5>
                            <ul class="text-sm space-y-1">
                                <li>• <strong>Prim Oranı:</strong> %6 (İş kazası %1 + GSS %5)</li>
                                <li>• <strong>Ödeyici:</strong> İşveren/Kurum</li>
                                <li>• <strong>Matrah:</strong> Günlük asgari ücret</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Önemli:</strong> Bu süreler emekliliğe sayılmaz, sadece eğitim/staj süresince koruma sağlar. Asıl amaç iş kazası riskine karşı güvencedir.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>👨‍💼 Proje Personeli ve Geçici İşçiler</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Tanımı ve Kapsamı</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>Proje Personeli:</strong> Belirli bir proje için sınırlı süreyle çalışanlar</li>
                            <li><strong>Mevsimlik İşçiler:</strong> Tarım, turizm sektöründe geçici çalışanlar</li>
                            <li><strong>Günlük İşçiler:</strong> Günlük/haftalık çalışma yapanlar</li>
                            <li><strong>Kampanya İşçileri:</strong> Belirli dönemler için çalışanlar</li>
                        </ul>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Sigortalılık Durumu</h4>
                        <div class="bg-blue-50 p-4 rounded-lg mb-4">
                            <p class="text-sm mb-2"><strong>Genel Kural:</strong> 30 günden az çalışanlar için özel düzenlemeler vardır.</p>
                            <ul class="list-disc list-inside text-sm space-y-1">
                                <li>30 günden az: Sadece iş kazası sigortası</li>
                                <li>30 gün ve üzeri: Tam sigortalılık (4/a)</li>
                                <li>Aralıklı çalışma: Gün toplamı esas alınır</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Kritik Nokta:</strong> Çalışma süresi 30 günü geçerse otomatik olarak tam sigortalılığa (4/a) geçiş yapar.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🏠 Ev Hizmetlerinde Çalışanlar</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Ev Hizmetlerinin Tanımı</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li>Ev temizliği, yemek yapma, çocuk bakımı</li>
                            <li>Yaşlı bakımı, hasta bakımı</li>
                            <li>Bahçıvanlık, kapıcılık (ev için)</li>
                            <li>Özel konut ve müştemilatında çalışma</li>
                        </ul>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Sigortalılık Koşulları</h4>
                        <div class="overflow-x-auto mb-4">
                            <table class="w-full border-collapse">
                                <thead class="bg-slate-100">
                                    <tr>
                                        <th class="p-3 font-semibold border">Çalışma Süresi</th>
                                        <th class="p-3 font-semibold border">Sigortalılık Durumu</th>
                                        <th class="p-3 font-semibold border">Kapsam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-3 border">Ayda 10 günden az</td>
                                        <td class="p-3 border">Sigortalı değil</td>
                                        <td class="p-3 border">İsteğe bağlı iş kazası sigortası</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border">Ayda 10-30 gün</td>
                                        <td class="p-3 border">Kısmi sigortalı</td>
                                        <td class="p-3 border">İş kazası + GSS</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 border">Ayda 30+ gün</td>
                                        <td class="p-3 border">Tam sigortalı</td>
                                        <td class="p-3 border">Tüm sigorta kolları</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="bg-orange-50 p-4 rounded-lg mb-4">
                            <h5 class="font-bold text-orange-700 mb-2">⚠️ Dikkat Edilecek Hususlar</h5>
                            <ul class="text-sm space-y-1">
                                <li>• Birden fazla evde çalışma durumunda günler toplanır</li>
                                <li>• İşveren bildirim yapmakla yükümlüdür</li>
                                <li>• Prim ödemesinde işveren sorumludur</li>
                            </ul>
                        </div>
                        
                        <div class="key-point"><strong>Özel Durum:</strong> Ev hizmetlerinde çalışanlar için özel prim oranları ve kolaylıklar vardır.</div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow">
                    <button class="accordion-header w-full text-left p-5 font-semibold text-lg flex justify-between items-center"><span>🌍 Yabancı Uyruklu Sigortalılar</span><span class="transform transition-transform duration-300">▼</span></button>
                    <div class="accordion-content px-5 pb-5 text-slate-600">
                        <h4 class="font-bold text-blue-600 mb-3">Sigortalılık Koşulları</h4>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><strong>Çalışma İzni:</strong> Geçerli çalışma izni bulunmalı</li>
                            <li><strong>İkamet İzni:</strong> Türkiye'de legal ikamet</li>
                            <li><strong>Sosyal Güvenlik Anlaşması:</strong> Ülkeler arası anlaşmalar</li>
                            <li><strong>Süreli/Süresiz:</strong> İzin türüne göre farklılık</li>
                        </ul>
                        
                        <h4 class="font-bold text-blue-600 mb-3">Özel Durumlar</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-bold text-green-700 mb-2">✅ Tam Kapsam</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Süresiz çalışma izni olanlar</li>
                                    <li>• 1 yıldan uzun süreli izin</li>
                                    <li>• Anlaşmalı ülke vatandaşları</li>
                                    <li>• Mülteci statüsündekiler</li>
                                </ul>
                            </div>
                            <div class="bg-yellow-50 p-4 rounded-lg">
                                <h5 class="font-bold text-yellow-700 mb-2">⚠️ Sınırlı Kapsam</h5>
                                <ul class="text-sm space-y-1">
                                    <li>• Kısa süreli çalışma izni</li>
                                    <li>• Geçici koruma altındakiler</li>
                                    <li>• Belirli projeler için gelenler</li>
                                    <li>• Turist vizesiyle çalışanlar</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="key-point"><strong>Sosyal Güvenlik Anlaşmaları:</strong> Türkiye'nin sosyal güvenlik anlaşması olan ülke vatandaşları için özel düzenlemeler ve hak transferleri vardır.</div>
                    </div>
                </div>
            </div>`
    }
};

// Ana uygulama fonksiyonları
document.addEventListener('DOMContentLoaded', () => {
    initializeContent();
    initializeNavigation();
    initializeAccordions();
    initializePEKToggles();
    initializePrimRatesPanel();
    initializeScrollProgress();
    initializeMobileOptimizations();
    initializeEducationalFeatures();
    initializeMobileMenu();
});

// İçeriği başlat
function initializeContent() {
    const mainContainer = document.querySelector('main');
    Object.keys(siteData.sections).forEach(key => {
        const section = document.getElementById(key);
        if (section) {
            section.innerHTML = siteData.sections[key];
        }
    });
}

// Navigasyonu başlat
function initializeNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentSections = document.querySelectorAll('.content-section');

    function showSection(hash) {
        const targetId = hash ? hash.substring(1) : 'giris';
        let sectionFound = false;
        
        contentSections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
                sectionFound = true;
            } else {
                section.classList.remove('active');
            }
        });
        
        if (!sectionFound) {
            document.getElementById('giris').classList.add('active');
        }

        sidebarLinks.forEach(link => {
             const linkHash = link.getAttribute('href');
             if ((sectionFound && linkHash === hash) || (!sectionFound && linkHash === '#giris')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = e.currentTarget.getAttribute('href');
            window.location.hash = hash;
        });
    });

    window.addEventListener('hashchange', () => {
        showSection(window.location.hash);
    });
    
    showSection(window.location.hash || '#giris');
}

// Accordion işlevselliğini başlat
function initializeAccordions() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.accordion-header')) {
            const header = e.target.closest('.accordion-header');
            const content = header.nextElementSibling;
            const icon = header.querySelector('span:last-child');
            const isOpening = !content.style.maxHeight;

            // Diğer tüm accordionları kapat
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            document.querySelectorAll('.accordion-header span:last-child').forEach(i => i.style.transform = 'rotate(0deg)');
            
            // Seçili accordion'u aç
            if (isOpening) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        }
    });
}

// PEK toggle butonlarını başlat
function initializePEKToggles() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('pek-toggle-btn')) {
            const btn = e.target;
            const pekToggleBtns = document.querySelectorAll('.pek-toggle-btn');
            
            pekToggleBtns.forEach(b => {
                b.classList.remove('border-teal-600', 'text-teal-600');
                b.classList.add('text-slate-500');
            });
            
            btn.classList.add('border-teal-600', 'text-teal-600');
            btn.classList.remove('text-slate-500');
            
            const targetId = btn.id === 'btn-dahil' ? 'content-dahil' : 'content-haric';
            document.querySelectorAll('.pek-content').forEach(content => {
                content.style.display = content.id === targetId ? 'block' : 'none';
            });
        }
    });
}

// Prim oranları panelini başlat
function initializePrimRatesPanel() {
    const navContainerPrim = document.getElementById('nav-container-prim');
    const groupTitlePrim = document.getElementById('group-title-prim');
    const groupDescriptionPrim = document.getElementById('group-description-prim');
    const breakdownTableContainerPrim = document.getElementById('breakdown-table-prim');
    const importantNotePrim = document.getElementById('important-note-prim');
    const contentAreaPrim = document.getElementById('content-area-prim');
    const ctx = document.getElementById('payerChart')?.getContext('2d');
    let payerChart;

    function createNavButtonsPrim() {
        if (!navContainerPrim) return;
        
        Object.keys(siteData.primData).forEach(key => {
            const button = document.createElement('button');
            button.textContent = siteData.primData[key].title;
            button.dataset.key = key;
            button.className = 'nav-button px-3 py-2 text-sm md:text-base font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-all duration-200';
            button.addEventListener('click', () => {
                updateUIPrim(key);
                document.querySelectorAll('#nav-container-prim .nav-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
            navContainerPrim.appendChild(button);
        });
    }

    function updateUIPrim(key) {
        const data = siteData.primData[key];
        contentAreaPrim.style.opacity = 0;
        
        setTimeout(() => {
            groupTitlePrim.textContent = data.title;
            groupDescriptionPrim.textContent = data.description;
            importantNotePrim.innerHTML = data.note;
            
            // Tablo oluştur
            let tableHTML = `
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th class="py-3 px-4 bg-slate-100 font-semibold text-sm text-slate-600 border-b border-slate-200 rounded-tl-lg">Sigorta Kolu</th>
                            <th class="py-3 px-4 bg-slate-100 font-semibold text-sm text-slate-600 border-b border-slate-200">Oran</th>
                            <th class="py-3 px-4 bg-slate-100 font-semibold text-sm text-slate-600 border-b border-slate-200 rounded-tr-lg">Kapsam</th>
                        </tr>
                    </thead>
                    <tbody>`;
                    
            data.breakdown.forEach(item => {
                const isTotal = item.branch.toUpperCase() === 'TOPLAM';
                tableHTML += `
                    <tr class="hover:bg-slate-50">
                        <td class="py-3 px-4 border-b border-slate-200 ${isTotal ? 'font-bold' : ''}">${item.branch}</td>
                        <td class="py-3 px-4 border-b border-slate-200 ${isTotal ? 'font-bold' : ''}">${item.rate}</td>
                        <td class="py-3 px-4 border-b border-slate-200 text-sm text-slate-500">${item.details}</td>
                    </tr>`;
            });
            
            tableHTML += `</tbody></table>`;
            breakdownTableContainerPrim.innerHTML = tableHTML;
            
            // Grafik güncelle
            if (payerChart) { 
                payerChart.destroy(); 
            }
            
            if (ctx) {
                payerChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: { 
                        labels: data.payers.labels, 
                        datasets: [{ 
                            data: data.payers.data, 
                            backgroundColor: data.payers.backgroundColor, 
                            borderColor: '#ffffff', 
                            borderWidth: 4, 
                            hoverOffset: 8 
                        }] 
                    },
                    options: { 
                        responsive: true, 
                        maintainAspectRatio: false, 
                        cutout: '60%', 
                        plugins: { 
                            legend: { 
                                position: 'bottom', 
                                labels: { 
                                    padding: 20, 
                                    boxWidth: 15, 
                                    font: { size: 14 } 
                                } 
                            }, 
                            tooltip: { 
                                callbacks: { 
                                    label: function(context) { 
                                        let label = context.label || ''; 
                                        if (label) { 
                                            label += ': '; 
                                        } 
                                        if (context.parsed !== null) { 
                                            label += context.parsed + '%'; 
                                        } 
                                        return label; 
                                    } 
                                } 
                            } 
                        } 
                    }
                });
            }
            
            contentAreaPrim.style.opacity = 1;
        }, 300);
    }
    
    // İlk yükleme
    createNavButtonsPrim();
    const firstButtonPrim = document.querySelector('#nav-container-prim .nav-button');
    if (firstButtonPrim) {
        firstButtonPrim.classList.add('active');
        updateUIPrim(firstButtonPrim.dataset.key);
    }
}

// Scroll Progress Bar
function initializeScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;
    
    function updateScrollProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = Math.min(scrolled, 100) + '%';
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // İlk yükleme
}

// Mobil Optimizasyonları
function initializeMobileOptimizations() {
    // Mobil dokunmatik gestures
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipeGesture();
    });
    
    function handleSwipeGesture() {
        const swipeThreshold = 50;
        const swipeDistance = touchStartY - touchEndY;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            // Mobilde sidebar otomatik kapanması için gesture desteği
            const sidebar = document.querySelector('aside');
            if (window.innerWidth <= 768 && sidebar) {
                // Swipe up: scroll to top
                if (swipeDistance > 0) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        }
    }
    
    // Viewport height fix for mobile browsers
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
}

// Eğitimsel Özellikler
function initializeEducationalFeatures() {
    // Reading time estimation
    addReadingTimeEstimation();
    
    // Highlight important terms
    highlightEducationalTerms();
    
    // Add section completion tracking
    initializeSectionProgress();
}

function addReadingTimeEstimation() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        const text = section.textContent || section.innerText;
        const words = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words/minute
        
        const h1 = section.querySelector('h1');
        if (h1 && readingTime > 0) {
            const badge = document.createElement('span');
            badge.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-4';
            badge.innerHTML = `📖 ${readingTime} dk okuma`;
            h1.appendChild(badge);
        }
    });
}

function highlightEducationalTerms() {
    const importantTerms = [
        'sigortalılık', 'prime esas kazanç', 'PEK', 'SGK', 
        'Bağ-Kur', 'SSK', 'Emekli Sandığı', 'GSS',
        'kısa vadeli', 'uzun vadeli', 'malullük', 'yaşlılık'
    ];
    
    const sections = document.querySelectorAll('.content-section p, .content-section li');
    sections.forEach(element => {
        let html = element.innerHTML;
        importantTerms.forEach(term => {
            const regex = new RegExp(`\\b(${term})\\b`, 'gi');
            html = html.replace(regex, '<mark class="bg-yellow-200 px-1 rounded font-medium">$1</mark>');
        });
        element.innerHTML = html;
    });
}

function initializeSectionProgress() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const completedSections = JSON.parse(localStorage.getItem('sgk-completed-sections') || '[]');
    
    // Mark completed sections
    completedSections.forEach(sectionId => {
        const link = document.querySelector(`[href="#${sectionId}"]`);
        if (link) {
            link.classList.add('completed');
            const checkmark = document.createElement('span');
            checkmark.innerHTML = '✓';
            checkmark.className = 'text-green-500 font-bold ml-auto';
            link.appendChild(checkmark);
        }
    });
    
    // Track section completion on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
                const sectionId = entry.target.id;
                if (!completedSections.includes(sectionId)) {
                    completedSections.push(sectionId);
                    localStorage.setItem('sgk-completed-sections', JSON.stringify(completedSections));
                }
            }
        });
    }, { threshold: 0.7 });
    
    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });
}

// Mobil Menü Sistemi
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    if (!mobileMenuBtn || !sidebar || !overlay) return;
    
    // Menü toggle fonksiyonu
    function toggleMobileMenu() {
        sidebar.classList.toggle('mobile-open');
        overlay.classList.toggle('active');
        
        // Icon değiştirme
        const icon = mobileMenuBtn.querySelector('svg path');
        if (sidebar.classList.contains('mobile-open')) {
            icon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // X icon
        } else {
            icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger icon
        }
    }
    
    // Menüyü kapatma fonksiyonu
    function closeMobileMenu() {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('svg path');
        icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    }
    
    // Event listeners
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    // Sidebar link'lerine tıklandığında menüyü kapat
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Window resize'da kontrol
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // ESC tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
            closeMobileMenu();
        }
    });
}
