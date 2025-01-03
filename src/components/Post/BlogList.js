 const blogData = [
  {
    
    "id": 1,
    "title": "Naruto",
    "image": "/fotolar/naruto.jpg",
    "body":"Japonyadaki Konoha bölgesinde yaşayan insanlar Naruto isimli küçük bir çocuğun içinde kyubi(9 kuyruklu efsanevi tilki) olduğuna inanmışlar, uğursuzluk getireceğini düşünerek, onu hep dışlamışlardır. Naruto nun ise tek amacı kendini, konoha halkına kabul ettirebilmektir. Bu itilmişliğin arasında naruto ninja akademisine gitmeye karar verir ve macera başlar."
  },
  {
    
    "id": 2,
    "title": "HxH",
    "image": "/fotolar/hxh.jpg",
    "body":"Hikayemizin ana karakteri Gon Freecs, ufak bir köylü adasında yaşayan ve babasını ölü sanan 12 yaşında bir çocuktur. Bir gün babasının aslında yaşadığını ve dünyada bilinen en iyi avcılardan biri olduğunu öğrenir. Böylece hem babasını daha iyi anlayabilmek hem de babasını bulabilmek için avcı sınavına katılmaya ve avcı olmaya karar verir. Fakat bu sınav o kadar kolay olmayacaktır. Çünkü sınava her sene yüzlerce insan katılır ve bazen tek bir kişi bile geçemez."
  },
  {
    
    "id": 3,
    "title": "Tokyo Ghoul",
    "image": "/fotolar/tokyo_ghoul.jpg",
    "body":"Tokyo'da insanları yiyen gizemli hortlakların neden olduğu gerilim dolu bir korku hikayesi başlar. Bu gizemli hortlakların verdiği korku tüm insanları etkisi altına almıştır. Sıradan bir üniversite öğrencisi olan Kaneki, tıpkı kendisi gibi bir kitap kurdu olan Rize'yle Café Anteiku'da karşılaşır. Kaneki, kaderinin bir gecede değişeceğinin farkında değildir."
  },
  {
    
    "id": 4,
    "title": "Monster",
    "image": "/fotolar/monster.png",
    "body":"Dr. Tenma, Almanya'da oldukça iyi bir konuma gelmiş, ünlü ve yetenekli bir beyin cerrahıdır. Daha öncelikli bir hasta yüzünden eşini kaybetmiş bir kadının, kocasının ardından ağlamasını gördükten sonra bundan sonra hiç bir hastasına sosyal statüsüne göre öncelik tanımayacağına dair kendi kendine karar verir. Bu kararından sonra, kafasından vurulmuş bir çocuğu, belediye başkanına tercih eder. Bu kararı ona hastanedeki pozisyonuna, kariyerine, geleceğine ve nişanlısına mal olur. Tedavi ettiği çocuk bir süre sonra ortadan kaybolur. Bunu izleyen günlerde hastane müdürü ve Dr. Tenma'yı suçlayan bir kaç doktor öldürülür. Tenma, eski pozisyonuna getirilir; ama bu, onu cinayetlerdeki bir numaralı şüpheli yapmaya yeter."
  },
  {
    
    "id": 5,
    "title": "Another",
    "image": "/fotolar/another.jpg",
    "body":"Hikâye, Yomiyama Ortaokulu'nda gizemli bir öğrenci olan Mei Misaki ile tanışarak kendini sınıfının kurbanı ile ilgili insanların ve insanların etrafındaki korkunç ve anlamsız ölümlerle ilgili bir gizem içinde bulan Kōichi Sakakibara adında bir çocuk üzerinde durmaktadır."
  },
  {
    
    "id": 6,
    "title": "Ergo Proxy",
    "image": "/fotolar/ergo_proxy.jpg",
    "body":" Ergo Proxy, distopik bir gelecekte geçen felsefi ve bilimkurgu temalı bir anime. İnsanlar kapalı şehirlerde yaşıyor ve robotlar (AutoReiv) günlük hayatın bir parçası. Bir gün, bu robotlar 'Cogito' virüsü ile bilinç kazanmaya başlar. Ana karakter Re-l Mayer, bu olayları araştırırken gizemli varlıklar olan Proxies ile karşılaşır. Göçmen Vincent Law ile birlikte, Romdonun karanlık sırlarını ve Proxiesin insanlıkla bağlantısını keşfederler. Anime, varoluş, bilinç ve özgür irade gibi felsefi konuları işler."
  },
  {
    
    "id": 7,
    "title": "Demon Slayer",
    "image": "/fotolar/demon_slayer.jpg",
    "body":" Seri, ailesi katledildikten ve küçük kız kardeşi Nezuko'nun bir iblis hâline gelmesinden sonra iblis avcısı olmak isteyen Tanjiro Kamado'nun hikâyesini anlatmaktadır."
  },
  {
    
    "id": 8,
    "title": "Attack On Titan",
    "image": "/fotolar/aot.jpg",
    "body":" Birkaç yüzyıl önce, insanlar devler tarafından neredeyse tamamen yok edilmiştir. Bu devler uzun boyludur, zeki değildirler ve insanları yerler. Küçük bir grup insan, çareyi en büyük devlerden bile uzun olan yüksek duvarlarla çevrili bir şehire kendilerini kapatarak bulmuşlardır. Günümüze gelindiğinde şehirde 100 yıldır hiç dev görülmemiştir. Genç çocuk Eren ve üvey kız kardeşi Mikasa, büyük bir dev tarafından şehrin duvarlarının yıkılışına tanık olurlar. Devler şehre akın etmeye başlar ve iki çocuk da annelerinin canlı canlı yenişine korku içinde tanıklık ederler. Eren her bir devi öldürüp tüm insanlığın intikamını alacağına yemin eder."
  },
  {
    
    "id": 9,
    "title": "Bungou Stray Dogs",
    "image": "/fotolar/bsd.jpg",
    "body":" Yetimhaneden atılan Nakajima Atsushi'nin ne bir kalacak yeri, ne de karnını doyuracak yemeği vardır. Nehir kenarında, açlıkla cebelleşirken, intihara kalkışan bir adamı kurtarır. Kurtardığı adam, Dazai Osamu, ve onun ortağı Kunikida, oldukça önemli bir dedektiflik dairesinin mensuplarıdırlar. Özel güçlere sahip olan bu kişiler, askeriye ya da polis için tehlikeli olan vakalarla ilgilenirler. Tam da Atsushi'nin civarda olduğu vakitlerde yine o civarda beliren bir kaplanın peşine düşmüşlerdir. Kaplan vakasının çözülmesinin ardından, artık Atsushi'nin yolu gelecekte Dazai ve diğer dedektiflerle daha çok kesişecektir."
  },
  {
    
    "id": 10,
    "title": "Death Note",
    "image": "/fotolar/death_note.jpg",
    "body":" Yagami Light, zeki ve derslerinde gayet başarılı bir lise öğrencisidir. Light için bu dünyada en önemli şey adalettir. Haberlere yansıyan cinayetlerden ve insanların yozlaşmasından son derece bıkmıştır. Bir şinigami olan Ryuk, Şinigami Dünyasında hep aynı şeyleri yapmaktan sıkılmıştır ve eğlenmek için sahip olduğu iki Ölüm Defteri' nden birini dünyaya atar. Bu defteri Light bulur. Defteri açtığında ilk olarak kuralları okur. Bu deftere ismi yazılan kişi ölür. maddesini görünce bunu bir şaka zanneder. Ama yine de defteri alır. Eve geldiğinde televizyondaki haberlerde bir rehin tutma haberi yayınlanır. Şüphelinin ismi ve yüzü televizyonda açıklanır. Light, tereddüte düşse de böyle bir şeyin gerçekleşmesinin imkansız olduğu düşüncesine inandığı için şüphelinin ismini deftere yazar. 40 saniye sonra televizyondan şüphelinin kalp krizi geçirip öldüğünü öğrenince defterin gerçek olduğunu anlar. Light, bu defteri kullanarak dünyaya adaleti sağlamak ve Yeni Dünyanın Tanrısı olmak ister. Suçluların sürekli kalp krizi geçirerek ölmesi, insanlara bu ölümlerin tesadüf olmadığını hissettirmiştir. Halk tarafından Light' a Kira (Jap: Katil) ismi verilir. Bazı insanlar Kira' yı adalet adına yaptıklarından dolayı desteklerken, bazı insanlar ise bunun insanlık dışı olduğu gerekçesiyle Kira' yı desteklemez. Light, insanların kendisini desteklememesine aldırmaz. Ona göre ister iyi ister kötü olsun, karşısına çıkan herkesi yok edecektir."
  },
  {
    
    "id": 11,
    "title": "Death Parade",
    "image": "/fotolar/death_parade.jpg",
    "body":" Death Parade adlı animeye göre insanlar ölünce ruhları gidecekleri son duraktan önce gizemli kulelerde bulunan yine gizemli barlara yollanır. Burada onları bir barmen ama aynı zamanda bir yargıç olan birisi karşılar. Bu barlara gelen insanlar öldüklerinden ilk bakışta bihaberdir ve öldüklerini bırakın yakın geçmişlerini bile hatırlayamazlardır. Yargıç ise tam tersine ölen şahısların tüm hafızalarına sahiptir. Yargıç, kafası karışık ve ölü olduklarını bilmeyen çifte (her bara birbirinden alakasız iki kişi gelir) bir oyun oynayacaklarını ve oyun bitince bardan çıkabileceklerini söyler. Oyun oynamak istemeyenlere ise yargıç bunu pek önermez. Yani bir nevi onları zorlar. Bu oyunlar ise ilk bakışta basit görünen şeylerdir. Bilardo oynamak, dart oynamak, kart oynamak gibi. Çiftler oyunlarını oynadıkça hafızalarını geri kazanmaya başlarlar ve akabinde de ölü olduklarını hatırlarlar. Bu işlem sırasında ise doğal olarak ruh halleri değişir ve yargıcın dediğine göre karanlık tarafları açığa çıkar. Yargıç da çiftler gelmeden önce elde ettiği hafızalarına ve oyunlar esnasındaki davranışlarına göre hükmünü verir. Ruh ya yeniden doğuş için reenkarnasyona gidecektir ya da sonsuz boşlukta sürekli bir düşüş haline olacaktır. "
  },
  {
    
    "id": 12,
    "title": "Dr. Stone",
    "image": "/fotolar/dr_stone.jpg",
    "body": "2017 yılında günlerden bir gün nedeni bilinmeden tüm dünyaya yayılan yeşil bir ışık sonucu 3700 yıl boyunca insanlar taşlaşmışlardır. 3700 yıl sonra hikayedeki ana karakterimiz İshigami Senku etrafındaki taştan kabuk kırılarak hayata döner.Tam bir bilim insanı olup her şey hakkında bilgisi olan karakterimiz Senku döner dönmez insanları taşlardan kurtarmanın ve geri döndüğünde neredeyse eski dünyadan hiçbir izin kalmadığı bu ilkel dünyada bilimi kullanarak dünyayı kurtarmanın derdine düşer."
  },
  {
    
    "id": 13,
    "title": "Haikyuu",
    "image": "/fotolar/haikyuu.jpg",
    "body":" Küçük ortaokul öğrencisi Hinata Shōyō, televizyonda ulusal şampiyonaları gördükten sonra voleybola birdenbire aşık olur. Kısa boyuna rağmen (162 cm) oynayışını gördükten sonra şampiyonaların yıldızı olan 'Küçük Dev' lakaplı oyuncunun izinden gitmeye karar verir. Okulunda bir voleybol takımı kurar ve kendi kendine çalışır. Sonunda 3 diğer üye Hinata'nın ortaokuldaki son yılında takıma katılır, daha sonra da Hinata'nın ısrarı üzerine farklı takımlardaki arkadaşları da sadece turnuvalara gidebilmeleri için voleybol takımına girer. Ama turnuvanın ilk maçında içinde 'Sahaların Kralı' lakaplı Tobio Kageyama'nın bulunduğu, turnuvanın favori takımına yenilirler. Hinata'nın takımını bu yenilgiden sonra perişan haldedirler ve canları yanmıştır. Bir gün Kageyama'yı yeneceğine söz verir."
  },
  {
    
    "id": 14,
    "title": "Hellsing",
    "image": "/fotolar/hellsing.jpg",
    "body":" Avrupa'da vampirlere karşı verilen savaşta en önde savaşan kurum olan Hellsing Örgütü ve gizli silahı Alucard, son görevde bir köyü neredeyse tamamen zombi haline getiren ve onların kanıyla beslenen bir vampire karşı savaşmaya giderler. Aynı köye bir süre önce gönderilen polis güçleri saldırıya uğramış ve içlerinden sadece acemi polis memuru Seras Victoria sağ kalmıştır. Seras, tam vampirin eline düşmüşken içeri Alucard girer ancak dövüş sırasında Seras yaralanır. Ona ölmek üzere olduğunu söyleyen Alucard, Seras'a iki seçenek sunar. Seras ya orada ölecektir ya da Alucard'ın kanını içerek yeniden doğacaktır. Bunun üzerine Seras ikincisini seçer. Araştırmaları esnasında yeni bir tür vampir ile karşılaşırlar. Ancak bu tür doğuştan ya da bir vampir ısırığı ile değil yapay yollarla oluşmaktadır."
  },
  {
    
    "id": 15,
    "title": "Howl no Ugoku Shiro ",
    "image": "/fotolar/howls_mov_castle.png",
    "body":" Yürüyen Şato, kendisine yapılan büyünün etkisini yok etmeye çalışan genç bir kızın hikayesini anlatıyor. Sıradan bir genç kız olan Sophie şeytani bir cadı tarafından büyüyle doksan yaşında bir kadına dönüşür. Sophie artık fazlasıyla yaşlanmış ve çevresi tarafından tanınmaz bir görünüme bürünmüştür. Bu yüzden büyük bir umutsuzluğa kapılan ve yaşadığı yeri terk etmek zorunda kalan Sophie, Howl isimli yürüyen bir şatoda yaşayan bir büyücünün yanına yerleşir. Bu şatoda yaşayan cinlerden biri de Sophie ile aynı kaderi paylaşmaktadır. Aynı amaç etrafında buluşan ikili kendilerine yapılan kara büyünün etkisini yok etmeye çalışacaklardır. Bu sırada şatonun dışında patlak veren savaş ülkenin birlik ve beraberliğini tehdit etmektedir. İkili artık hem kendileri için hem de ülkeleri için canları pahasına savaşmak zorunda kalacaktır. Animasyon dehası Hayao Miyazaki imzalı olan film animasyon türünün en yaratıcı yapıtlarından biri."
  },
  {
    
    "id": 16,
    "title": "Jujutsu Kaisen",
    "image": "/fotolar/jjk.png",
    "body":" Jujutsu Kaisen'de tüm canlı varlıklar vücutlarında doğuştan var olan lanetli enerji ile doğarlar. Lanetli enerjinin bulunma sebebi insanların bedenlerinde ortaya çıkan olumsuz duygular yüzündendir. Normal insanlar bu türde bir enerji akışını kontrol edemezler dolayısıyla da lanetli enerjiyi yavaş yavaş kayberler. Aynı zamanda lanetli enerjinin kaybı sonrası oluşan Lanetler, birincil hedefi insanlığa zarar getirmek olan ölü bedenlere benzeyenler ruhsal varlıkların varolmasına sebep olur. Normal insanların aksine Jujutsu Büyücüleri bedenlerindeki lanetli enerjini akışını kontrol edebilen bu sayede dışarıya salımını da azaltan ve gerektiğinde kendi istekleri doğrultusunda kullanmasına izen verebilen insanlardır. Yüksek Seviyeli Büyücüler ve Lanetler bu enerjiyi iyileştirebilir ve Lanetli Teknikleri gerçekleştirmek için kullanabilirler. Lanetli Teknik kullanıcıya ve ailesine özgü olma eğilimindedir. Lanetli Tekniğin gelişmiş biçimine Etki Alanı adı verilir. Lanetli enerji saldırılarının çok daha etkili ve güçlü olacağı bu alan Etki alanının içinde bulunan kişiler veyahut dışarıdan Lanetli Enerji gücü ile kırılabilir."
  },
  {
    
    "id": 17,
    "title": "Spy X Family",
    "image": "/fotolar/spyxfamily.jpg",
    "body":" Westalis ve Ostanianın rakip ulusları arasındaki barış durumunu korumak için, [ a ] ​​Twilight kod adlı bir Westalian ajanı, Ostania'daki Ulusal Birlik Partisi lideri Donovan Desmondı gözetlemekle görevlendirilir. Ancak, Desmondun bilindiği gibi içine kapanık olması nedeniyle, Twilightın ona yaklaşabilmesinin tek yolu, bir çocuğu Desmondun oğullarıyla aynı özel okula kaydettirmek ve bir veli gibi davranmaktır.Bunu başarmak ve mutlu bir aile imajı sunmak için Loid Forger takma adını yaratır, Anya adında genç bir yetim kızı evlat edinir ve Yor Briar adında bir kadınla evlenir. Ancak, kendisinin bilmediği bir şekilde Anya zihin okuyabilmektedir ve Yor aslında profesyonel bir suikastçıdır. Ne Loid ne de Yor birbirlerinin gerçek kimliklerini veya Anya'nın gerçek mesleklerini bildiğini bilmemektedir. Aile daha sonra Bond adını verdikleri önsezi yeteneklerine sahip bir köpeği yanlarına alırlar. Bu bilinmeyen faktörlere ve Twilight'ın yıllarca casusluk yapması nedeniyle ara sıra yaşadığı sağduyu kayıplarına rağmen, görevini yerine getirebilmek için mükemmel baba ve koca rolünü oynamayı öğrenmelidir."
  },
  {
    
    "id": 18,
    "title": "Tonari no Totoro ",
    "image": "/fotolar/totoro.jpg",
    "body":" 1950'lerde Japonya'da Mei ve Satsuki, bir üniversitede profesör olan babalarıyla birlikte, bir hastanede tedavi gören annelerine daha yakın olmak için bir köye taşınırlar. Çok geçmeden küçük kardeş Mei, orman ruhlarını görmeye başlar ve en sonunda Totoro ile tanışır. İki kız kardeşin hayatı, annelerinin hastalığı, günlük olaylar, Totoro ve çeşitli orman ruhlarıyla birlikte değişik bir hal almaya başlar."
  },
  {
    
    "id": 19,
    "title": "Hotarubi no Mori e  ",
    "image": "/fotolar/hotarubi.jpg",
    "body":" Manga, Hotaru adında genç bir kızın ve maske takan garip bir genç adam olan Gin ile altı yaşında büyükbabasının kır evinin yakınındaki bir dağ ormanında tanıştığı arkadaşlığının hikâyesini anlatmaktadır. Hotaru, arkadaşının doğaüstü olduğunu ve Gin'e dokunmanın onu sonsuza dek ortadan kaldıracağını öğrenir. Hotaru, her yaz Gin ile vakit geçirmek için geri döner ve ikisi de sınırlamalarla mücadele ederken ilişkileri olgunlaşır."
  },
  {
    
    "id": 20,
    "title": "Tokyo Revengers",
    "image": "/fotolar/tokyo_revengers.jpg",
    "body":" Takemichi Hanagaki, çaresiz ve ümitsiz bir durumda olan serbest çalışandır. Ortaokulda tanıştığı ve hayatı boyunca çıktığı tek kız olan Hinata Tachibana ile kardeşi Naoto'nun acımasız Tokyo Manji Çetesi tarafından öldürüldüğünü duyar. Ertesi gün istasyon platformundaki kalabalık tarafından raylara itilir. Öleceğini düşünerek gözlerini kapatır fakat tekrar açtığında zamanda 12 yıl öncesine 2005 yılına geriye gittiğini fark eder. Hayatının en iyi yıllarına dönen Takemichi, kız arkadaşını kurtarıp sürekli kaçtığı kendisini değiştirerek hayattan intikam alma kararı alır."
  },

]

export default blogData;




