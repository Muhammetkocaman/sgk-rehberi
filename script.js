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
