// ===============================================
// 1. DATA KULINER LENGKAP (38 KABUPATEN/KOTA JATIM)
// TELAH DITAMBAHKAN PROPERTI "id" UNTUK KESTABILAN FITUR FAVORIT
// ===============================================
const dataKuliner = [
    // 1. Kota Surabaya
    { id: "sby-01", city: "Kota Surabaya", food: "Rawon", desc: "Sup hitam legendaris kebanggaan Jawa Timur! Kuah hitam pekat dari kluwek berpadu dengan daging sapi empuk. Disajikan hangat dengan tauge pendek yang renyah, telur asin, dan sambal terasi. Aromanya yang khas selalu bikin rindu pulang ke Jawa Timur.", image: "rawon_sby.jpg" },
    { id: "sby-02", city: "Kota Surabaya", food: "Rujak Cingur", desc: "Salad tradisional dengan cita rasa berani. Perpaduan sayuran, buah, tahu, tempe, dan Cingur (hidung sapi) yang kenyal. Kuncinya ada pada siraman bumbu petis udang yang pekat, gurih, dan pedas menggigit.", image: "rujakcingur_sby.jpg" },
    { id: "sby-03", city: "Kota Surabaya", food: "Lontong Balap", desc: "Kuliner yang konon penjualnya harus 'balapan' berebut pembeli. Terdiri dari lontong, tahu goreng, lentho (kacang tolo goreng), dan tauge yang melimpah, disiram kuah bening gurih dan sedikit petis. Nikmat dipadukan dengan Sate Kerang.", image: "lontongbalap_sby.jpg" },

    // 2. Kabupaten Sidoarjo
    { id: "sido-01", city: "Kabupaten Sidoarjo", food: "Kupang Lontong", desc: "Kuliner unik pesisir Sidoarjo. Kupang (kerang putih super kecil) dimasak dengan kuah bawang putih dan jeruk nipis, disajikan dengan lontong dan lentho. Kuahnya segar, gurih, dan biasanya didampingi es kelapa muda.", image: "kupanglontong_sidoarjo.jpg" },
    { id: "sido-02", city: "Kabupaten Sidoarjo", food: "Bandeng Asap Sidoarjo", desc: "Bandeng segar yang diasap dengan metode khusus hingga kering dan matang sempurna. Proses pengasapan menghilangkan bau lumpur khas bandeng, menghasilkan daging yang padat, gurih, dan siap disantap tanpa perlu digoreng lagi.", image: "bandengasap_sidoarjo.jpg" },

    // 3. Kabupaten Gresik
    { id: "gres-01", city: "Kabupaten Gresik", food: "Nasi Krawu", desc: "Nasi pulen di atas daun pisang dengan suwiran daging sapi dan jeroan. Kuncinya ada pada dua jenis serundeng (kelapa sangrai) beda warna—kuning dan merah—serta sambal terasi yang pedasnya 'nendang'.", image: "nasikrawu_gresik.jpg" },
    { id: "gres-02", city: "Kabupaten Gresik", food: "Otak-otak Bandeng", desc: "Olahan ikan bandeng yang legendaris. Daging ikan dikeluarkan, dihaluskan, dicampur bumbu khas dan santan, lalu dimasukkan kembali ke kulit bandeng utuh. Rasanya gurih, padat, dan sangat nikmat.", image: "otakotak_gresik.jpg" },

    // 4. Kabupaten Lamongan
    { id: "lamo-01", city: "Kabupaten Lamongan", food: "Soto Lamongan", desc: "Salah satu soto paling populer di Indonesia. Ciri khasnya adalah kuah kuning yang kaya rempah dan taburan bubuk 'Koya' (kerupuk udang & bawang putih) yang membuat kuah menjadi kental dan gurih.", image: "sotolamongan.jpg" },
    { id: "lamo-02", city: "Kabupaten Lamongan", food: "Nasi Boran", desc: "Menu sarapan khas yang dijajakan secara lesehan. Nasi hangat disajikan di pincuk daun pisang dengan aneka lauk seperti ikan bandeng, ayam, jeroan, dan Ikan Sili asap. Disiram bumbu merah pedas yang kental.", image: "nasiboran_lamongan.jpg" },
    { id: "lamo-03", city: "Kabupaten Lamongan", food: "Tahu Campur Lamongan", desc: "Hidangan malam yang kaya rasa. Isinya berupa tahu goreng, lontong, tauge, perkedel singkong, dan selada, disiram kuah kental hitam dari petis udang dan rempah yang kuat. Rasanya gurih, manis, dan sedikit asam segar.", image: "tahucampur_lamongan.jpg" },

    // 5. Kota Malang
    { id: "malang-01", city: "Kota Malang", food: "Bakso Malang", desc: "Semangkuk kebahagiaan dengan tekstur beragam. Bakso halus, bakso urat, tahu, siomay, dan yang paling ikonik: Pangsit Goreng Mekar dan Bakso Goreng. Disiram kuah kaldu sapi bening yang segar dan gurih.", image: "bakso_malang.jpg" },
    { id: "malang-02", city: "Kota Malang", food: "Cwie Mie Malang", desc: "Mie tipis kenyal dengan rasa asin gurih (bukan manis). Topping-nya berupa ayam cincang putih halus menyerupai abon, selada segar, dan disajikan di dalam mangkuk yang terbuat dari kulit pangsit goreng renyah.", image: "cwiemie_malang.jpg" },
    { id: "malang-03", city: "Kota Malang", food: "Orem-Orem", desc: "Sajian sederhana namun ngangenin. Ketupat iris disajikan dengan sayur tempe kuah santan kuning kental, tauge, dan mendol (perkedel tempe khas Malang). Sering disajikan saat sarapan atau makan siang.", image: "oremorem_malang.jpg" },

    // 6. Kabupaten Bangkalan (Madura)
    { id: "bang-01", city: "Kabupaten Bangkalan", food: "Nasi Serpang", desc: "Kaya rasa dalam satu piring! Nasi khas Bangkalan ini punya lauk yang sangat beragam: pepes ikan tongkol, kerang, soun kecap, telur asin masir, serundeng, dan sambal terasi. Variasi lauknya mencerminkan kekayaan hasil laut Madura.", image: "nasiserpaang_bangkalan.jpg" },
    { id: "bang-02", city: "Kabupaten Bangkalan", food: "Topak Ladeh", desc: "Lontong Madura yang berkuah santan kental, kaya rempah, dan berwarna kuning kemerahan karena penggunaan cabai yang banyak. Disajikan dengan taburan daging dan kerupuk puli (kerupuk dari beras).", image: "topakledeh_bangkalan.jpg" },

    // 7. Pamekasan / Sumenep (Digabung untuk filter)
    { id: "pame-01", city: "Kabupaten Pamekasan", food: "Sate Laler", desc: "Meskipun namanya 'Sate Lalat' (laler), ini adalah sate ayam dengan potongan daging yang sangat kecil. Ukuran yang mini memungkinkan bumbu meresap sempurna. Rasanya manis, gurih, dan sangat empuk.", image: "satelaler_sumenep.jpg" },
    { id: "pame-02", city: "Kabupaten Pamekasan", food: "Kaldu Kokot", desc: "Sop legendaris dari Sumenep. Sop kental berbahan dasar kacang hijau yang dimasak dengan Kokot (kikil/kaki sapi) beserta sumsum tulangnya. Rasanya gurih, creamy, dan sangat mengenyangkan, cocok untuk menghangatkan badan.", image: "kaldukokot_sumenep.jpg" },

    // 8. Kabupaten Tulungagung
    { id: "tulu-01", city: "Kabupaten Tulungagung", food: "Ayam Lodho", desc: "Ayam kampung yang dipanggang/asap terlebih dahulu sebelum dimasak dalam kuah santan pedas super kental. Proses pengasapan memberikan aroma bakar yang unik dan daging yang empuk. Wajib disantap dengan Nasi Gurih (Uduk).", image: "ayamlodho_tulungaggung.jpg" },
    { id: "tulu-02", city: "Kabupaten Tulungagung", food: "Nasi Tumpuk / Nasi Gegok", desc: "Nasi dibungkus daun pisang berbentuk segitiga yang berisi nasi, lauk, dan sambal teri pedas. Porsinya mungil namun sangat mengenyangkan karena nasinya yang pulen. Kuliner khas yang sering dijual di daerah pegunungan.", image: "nasitumpuk_tulungaggung.jpg" },

    // 9. Kabupaten Madiun
    { id: "madi-01", city: "Kabupaten Madiun", food: "Nasi Pecel Madiun", desc: "Sarapan sehat sejuta umat. Sayuran rebus (bayam, kenikir, kembang turi) disiram sambal kacang Madiun yang legit dan beraroma daun jeruk. Disajikan di pincuk daun pisang dengan rempeyek kacang yang renyah.", image: "pecelpincuk_madiun.jpg" },
    { id: "madi-02", city: "Kabupaten Madiun", food: "Tepo Tahu Madiun", desc: "Tahu goreng yang dipotong, dicampur tepo (ketupat khas Madiun), telur dadar, dan tauge, disiram kuah kecap manis encer yang segar dengan irisan daun seledri dan taburan kacang goreng.", image: "tepotahu_madiun.jpg" },

    // 10. Kabupaten Banyuwangi
    { id: "banyu-01", city: "Kabupaten Banyuwangi", food: "Rujak Soto", desc: "Fusi kuliner yang mind-blowing. Bumbu rujak sayur (kacang & petis) di dalam mangkuk, lalu disiram dengan kuah Soto Daging panas dan jeroan. Rasanya? Unik, gurih, segar, kental, dan sangat khas Lare Osing!", image: "rujaksoto_banyuwangi.jpg" },
    { id: "banyu-02", city: "Kabupaten Banyuwangi", food: "Nasi Tempong", desc: "Sesuai namanya, pedasnya seperti ditampar (tempong)! Nasi putih dengan lauk sederhana (ikan asin, ayam goreng, tahu, tempe) dan lalapan rebus. Bintang utamanya adalah sambal mentah ranti yang super pedas dan segar.", image: "nasitempong_banyuwangi.jpg" },
    { id: "banyu-03", city: "Kabupaten Banyuwangi", food: "Sego Cawuk", desc: "Sarapan tradisional yang disiram kuah unik: perpaduan parutan kelapa muda, jagung bakar, dan cabai. Lauk wajibnya adalah rica-rica kepala ikan laut dan peyek udang. Rasanya pedas, manis, dan creamy.", image: "segocawuk_banyuwangi.jpg" },

    // 11. Kabupaten Ponorogo
    { id: "pono-01", city: "Kabupaten Ponorogo", food: "Sate Ponorogo", desc: "Berbeda dari sate Madura, potongan daging ayamnya besar, pipih, dan direndam bumbu rempah sebelum dibakar, menghasilkan rasa manis gurih yang meresap. Disajikan dengan bumbu kacang yang lebih halus dan berwarna cokelat muda.", image: "sateayam_ponorogo.jpg" },
    { id: "pono-02", city: "Kabupaten Ponorogo", food: "Sego Lawuhan", desc: "Nasi yang disajikan dengan aneka lauk tradisional seperti Dadar Jagung (Perkedel Jagung), bothok, dan sayur lodeh yang berkuah santan kental. Makanan ini mencerminkan kuliner pedesaan yang sederhana namun kaya rasa.", image: "segolawuhan_ponorogo.jpg" },

    // 12. Kota & Kabupaten Kediri
    { id: "kedi-01", city: "Kota/Kabupaten Kediri", food: "Nasi Tumpang", desc: "Ciri khas Tumpang adalah sambal tumpang yang terbuat dari tempe semangit (tempe yang difermentasi lanjut) dimasak santan dan rempah. Disiramkan di atas nasi, urap sayur, dan Punten (nasi yang dipadatkan).", image: "nasitumpang_kediri.jpg" },
    { id: "kedi-02", city: "Kota/Kabupaten Kediri", food: "Tahu Kuning (Tahu Takwa)", desc: "Tahu Kediri yang berwarna kuning cerah, didapatkan dari rendaman kunyit. Teksturnya padat, lembut, dan rasanya gurih karena bumbu rempah. Merupakan oleh-oleh wajib dari Kediri.", image: "tahukuning_kediri.jpg" },

    // 13. Kabupaten Jombang
    { id: "jomb-01", city: "Kabupaten Jombang", food: "Sego Sadukan", desc: "Nasi yang porsinya kecil (sak sadukan = satu suapan) dengan lauk kering sederhana, seperti mie goreng, suwiran ayam, dan sambal teri. Nasi ini biasanya dibungkus daun pisang atau kertas dan dijual pada malam hari.", image: "segosadukan_jombang.jpg" },
    { id: "jomb-02", city: "Kabupaten Jombang", food: "Sambelan Wader", desc: "Ikan Wader (ikan air tawar berukuran kecil) yang digoreng garing lalu dimasak dengan sambal pedas berlimpah. Rasa gurih ikan yang renyah berpadu sempurna dengan sambal yang mantap.", image: "sambelwader_jombang.jpg" },

    // 14. Kota & Kabupaten Mojokerto
    { id: "mojo-01", city: "Kota/Kabupaten Mojokerto", food: "Onde-Onde Mojokerto", desc: "Jajanan pasar berbentuk bulat dengan taburan biji wijen di luar dan isian kacang hijau manis di dalam. Onde-onde Mojokerto terkenal karena kulitnya yang kenyal dan isiannya yang padat.", image: "ondeonde_mojokerto.jpg" },
    { id: "mojo-02", city: "Kota/Kabupaten Mojokerto", food: "Sate Klopo", desc: "Sate daging sapi yang sebelum dibakar dilumuri parutan kelapa berbumbu. Hasilnya adalah sate yang gurih, smokey, dengan sensasi kriuk dari kelapa yang terbakar.", image: "sateklopo_mojokerto.jpg" },

    // 15. Kabupaten Blitar
    { id: "bli-01", city: "Kabupaten Blitar", food: "Nasi Ampok", desc: "Makanan pokok berbahan dasar jagung yang ditumbuk (diselep) dan dimasak. Nasi Ampok biasanya disajikan dengan urap sayur, ikan asin, dan sambal cabe rawit yang pedasnya luar biasa.", image: "nasiampok_blitar.jpg" },
    { id: "bli-02", city: "Kabupaten Blitar", food: "Pecel Punten", desc: "Pengganti nasi dalam hidangan pecel. Punten adalah nasi yang dikukus, ditumbuk, dan dipadatkan, memberikan tekstur lembut dan kenyal. Disajikan dengan sayuran dan siraman sambal pecel khas Blitar.", image: "pecelpunten_blitar.jpg" },

    // 16. Kabupaten Nganjuk
    { id: "ngaj-01", city: "Kabupaten Nganjuk", food: "Nasi Becek", desc: "Perpaduan antara soto kambing dan gulai. Kuahnya bersantan kuning kental dengan rasa rempah yang kuat, berisi potongan daging kambing dan jeroan. Disajikan dengan sate kambing yang dilepas dari tusuknya.", image: "nasibecek_nganjuk.jpg" },
    { id: "ngaj-02", city: "Kabupaten Nganjuk", food: "Ayam Panggang Nganjuk", desc: "Ayam kampung yang dimasak dengan bumbu rujak (santan pedas kental) lalu dipanggang atau dibakar. Rasanya manis, pedas, dan gurih, merupakan hidangan wajib saat acara adat.", image: "ayampanggang_nganjuk.jpg" },

    // 17. Kabupaten Pacitan
    { id: "paci-01", city: "Kabupaten Pacitan", food: "Nasi Tiwul", desc: "Makanan pokok pengganti nasi dari singkong yang dikeringkan (gaplek). Tiwul dikenal sebagai makanan yang mengenyangkan dan rendah gula, sering disajikan dengan aneka lauk dan sayur.", image: "nasitiwul_pacitan.jpg" },
    { id: "paci-02", city: "Kabupaten Pacitan", food: "Soto Pacitan", desc: "Soto dengan kuah bening gurih yang khas karena taburan gepok (semacam emping/kerupuk dari singkong). Isian utamanya adalah suwiran ayam kampung dan tauge pendek.", image: "soto_pacitan.jpg" },

    // 18. Kabupaten Trenggalek
    { id: "treng-01", city: "Kabupaten Trenggalek", food: "Nasi Gegok", desc: "Versi mini Nasi Tumpuk. Nasi yang porsinya sangat kecil, dibungkus daun pisang, dan di dalamnya terdapat isian sambal teri pedas. Sering menjadi bekal atau jajanan murah di sekitar Trenggalek.", image: "nasigegok_trenggalek.jpg" },
    { id: "treng-02", city: "Kabupaten Trenggalek", food: "Sego Godong Jati", desc: "Nasi yang disajikan di atas daun Jati. Aroma daun jati memberikan wangi yang khas pada nasi. Lauknya sederhana, seringkali berupa Urap-Urap dan lauk pauk kering. Merupakan simbol hidangan pedesaan.", image: "segogodhongjati_trenggalek.jpg" },

    // 19. Kabupaten Ngawi
    { id: "ngawi-01", city: "Kabupaten Ngawi", food: "Tepo Tahu Ngawi", desc: "Mirip dengan Tepo Tahu Madiun, namun khas Ngawi menambahkan kerupuk puli yang banyak dan kacang goreng dalam kuah kecap manisnya. Tepo (ketupat) yang digunakan juga lebih padat.", image: "tepotahu_ngawi.jpg" },
    { id: "ngawi-02", city: "Kabupaten Ngawi", food: "Pecel Lethok", desc: "Pecel dengan bumbu kacang yang dicampur Lethok (sambal dari tempe semangit yang dimasak dengan santan). Kombinasi ini menghasilkan rasa pedas gurih yang creamy dan lebih kental dari pecel biasa.", image: "pecellethok_ngawi.jpg" },

    // 20. Kabupaten Magetan
    { id: "maga-01", city: "Kabupaten Magetan", food: "Tepo Tahu Magetan", desc: "Hidangan Tepo Tahu khas Magetan yang dikenal memiliki rasa kuah kecap yang lebih pedas dan medok (kental) dibandingkan daerah lain, sering ditambahkan telur dadar.", image: "tepotahu_magetan.jpg" },
    { id: "maga-02", city: "Kabupaten Magetan", food: "Ayam Panggang Gandu", desc: "Ayam kampung yang dimasak dengan bumbu rempah sederhana lalu dipanggang di atas bara api. Bumbu rempah yang meresap hingga ke tulang menjadi ciri khas hidangan dari Gandu, Magetan ini.", image: "ayampangganggandu_magetan.jpg" },

    // 21. Kota & Kabupaten Pasuruan
    { id: "pasu-01", city: "Kota/Kabupaten Pasuruan", food: "Nasi Punel", desc: "Nasi yang teksturnya sangat pulen dan lembut. Disajikan di atas daun pisang dengan taburan serundeng, sate kerang, lentho, tahu bumbu bali, dan irisan daging empal.", image: "nasipulen_pasuruan.jpg" },
    { id: "pasu-02", city: "Kota/Kabupaten Pasuruan", food: "Rawon Nguling", desc: "Rawon legendaris yang berasal dari daerah Nguling, Pasuruan. Kuahnya lebih bening dan rasa rempahnya lebih ringan, sangat digemari karena dagingnya yang empuk dan potongan kluwek yang lebih sedikit.", image: "rawonngguling_pasuruan.jpg" },

    // 22. Kota & Kabupaten Probolinggo
    { id: "probo-01", city: "Kota/Kabupaten Probolinggo", food: "Soto Kraksaan", desc: "Soto ayam dengan kuah santan yang gurih dan sedikit kental. Keunikannya menggunakan ayam jantan kampung dan disajikan dengan kerupuk udang kecil-kecil serta kentang kukus sebagai pelengkap.", image: "sotokraaksan_probolinggo.jpg" },
    { id: "probo-02", city: "Kota/Kabupaten Probolinggo", food: "Nasi Grombyang", desc: "Nasi yang disajikan dengan kuah daging sapi berlimpah sehingga terlihat Grombyang (bergoyang). Kuahnya kental dengan bumbu yang kaya, disajikan dengan irisan daging dan bawang goreng.", image: "nasigrombyang_probolinggo.jpg" },

    // 23. Kabupaten Lumajang
    { id: "luma-01", city: "Kabupaten Lumajang", food: "Lontong Petis", desc: "Lontong dengan kuah petis yang kental dan gurih. Biasanya dilengkapi dengan tahu, tauge, dan kikil sapi. Lumajang memiliki versi Petis yang lebih kental dan hitam pekat.", image: "lontongpetis_lumajang.jpg" },
    { id: "luma-02", city: "Kabupaten Lumajang", food: "Sate Jeroan (Sate Senduro)", desc: "Sate dari jeroan sapi, kambing, atau ayam yang dibumbui rempah kuning khas Lumajang. Sate ini dikenal karena bumbunya yang manis dan aroma bakarnya yang kuat.", image: "satejeroan_lumajang.jpg" },

    // 24. Kabupaten Jember
    { id: "jemb-01", city: "Kabupaten Jember", food: "Nasi Pecel Gudeg", desc: "Pecel yang diperkaya dengan gudeg (nangka muda manis) sebagai salah satu lauknya. Gudeg memberikan dimensi rasa manis yang unik berpadu dengan gurih dan pedasnya sambal pecel.", image: "pecelgudeg_jember.jpg" },
    { id: "jemb-02", city: "Kabupaten Jember", food: "Soto Daging Jember", desc: "Soto daging sapi dengan kuah kuning santan yang kaya bumbu. Ciri khasnya adalah penggunaan kencur dan jinten yang lebih menonjol, memberikan aroma rempah yang kuat dan hangat.", image: "sotodaging_jember.jpg" },

    // 25. Kabupaten Bondowoso
    { id: "bond-01", city: "Kabupaten Bondowoso", food: "Nasi Mamong", desc: "Nasi yang dibungkus daun pisang, berisi nasi, sayur rebung (tunas bambu) yang dimasak pedas, dan lauk udang/ayam. Mamong berarti bersemangat, mencerminkan rasa pedasnya yang membangkitkan selera.", image: "nasimamong_bondowoso.jpg" },
    { id: "bond-02", city: "Kabupaten Bondowoso", food: "Nasi Pecel Gulung", desc: "Nasi Pecel yang disajikan dengan konsep unik. Nasi dicampur bumbu, sayur, dan lauk lalu digulung di dalam daun pisang, mirip seperti sushi versi tradisional.", image: "nasipecelgulung_bondowoso.jpg" },

    // 26. Kabupaten Situbondo
    { id: "situ-01", city: "Kabupaten Situbondo", food: "Tajin Palappa", desc: "Bubur (Tajin) yang disajikan dengan lodeh (sayur nangka muda kuah santan) dan disiram Palappa (bumbu dari parutan kelapa dan cabai). Rasa gurih dan pedasnya sangat khas pesisir.", image: "tajinpalapa_situbondo.jpg" },
    { id: "situ-02", city: "Kabupaten Situbondo", food: "Nasi Karak", desc: "Nasi yang dicampur dengan Karak (nasi kering/ampok), disajikan dengan lauk sederhana seperti parutan kelapa berbumbu (serundeng) dan ikan asin. Makanan khas yang murah dan mengenyangkan.", image: "nasikarak_situbondo.jpg" },

    // 27. Kabupaten Sampang
    { id: "samp-01", city: "Kabupaten Sampang", food: "Nasi Ghulung", desc: "Nasi yang dimasak dengan parutan kelapa berbumbu, lalu digulung di dalam daun pisang. Disajikan dengan ikan laut dan Campor (sup kental) di sampingnya. Rasanya sangat gurih.", image: "nasigulung_sampang.jpg" },
    { id: "samp-02", city: "Kabupaten Sampang", food: "Campor Sampang", desc: "Mirip dengan soto, namun kuahnya lebih kental dan dimasak dengan bumbu petis. Isiannya lontong, tauge, daging, dan diberi taburan kerupuk. Rasanya kuat, gurih, dan hangat.", image: "campor_sampang.jpg" },

    // 28. Kabupaten Tuban
    { id: "tuba-01", city: "Kabupaten Tuban", food: "Kare Rajungan", desc: "Rajungan (kepiting laut) segar dimasak dengan bumbu kare pedas super nendang hingga kuahnya meresap ke dalam cangkang. Dagingnya manis, kuahnya membakar lidah tapi bikin nagih.", image: "karerajungan_tuban.jpg" },
    { id: "tuba-02", city: "Kabupaten Tuban", food: "Becek Menthok", desc: "Menthok (entok) yang dimasak dengan kuah santan pedas kental. Dagingnya yang tebal dimasak hingga empuk, dengan bumbu rempah yang sangat kuat dan medok.", image: "becekmenthok_tuban.jpg" },

    // 29. Kabupaten Bojonegoro
    { id: "bojo-01", city: "Kabupaten Bojonegoro", food: "Nasi Buwuhan", desc: "Nasi hajatan khas desa (Buwuhan) yang kini jadi kuliner favorit. Nasi putih hangat disajikan di daun jati, dengan lauk momoh (daging sapi bumbu), tewel (nangka muda), dan mie kuning. Aroma daun jati adalah kuncinya.", image: "nasibuwuhan_bojonegoro.jpg" },
    { id: "bojo-02", city: "Kabupaten Bojonegoro", food: "Sego Tiwul Bojonegoro", desc: "Nasi Tiwul (dari singkong) yang disajikan dengan sambal pencit (sambal mangga muda) dan ikan wader goreng. Kombinasi rasa gurih, pedas, dan asam segar sangat khas daerah ini.", image: "segotiwul_bojonegoro.jpg" },

    // 30. Kota Batu
    { id: "batu-01", city: "Kota Batu", food: "Sate Kelinci", desc: "Sate daging kelinci yang empuk dan rendah lemak, dibakar dengan sempurna. Disajikan dengan bumbu kacang manis gurih yang lembut. Merupakan kuliner wajib bagi wisatawan yang berkunjung ke daerah pegunungan.", image: "satekelinci_batu.jpg" },
    { id: "batu-02", city: "Kota Batu", food: "Pos Ketan Legenda", desc: "Ketan (beras ketan) kukus hangat yang disajikan dengan aneka topping modern, seperti keju, cokelat, atau durian. Jajanan yang wajib dicoba saat cuaca dingin di Kota Batu.", image: "posketanlegenda_batu.jpg" },

    // 31. Kabupaten Malang
    { id: "kmal-01", city: "Kabupaten Malang", food: "Bakso Bakar Malang", desc: "Varian Bakso Malang yang dimasak dengan cara dibakar setelah dilumuri bumbu kecap pedas. Bakso yang kenyal berpadu dengan aroma asap yang harum dan glaze bumbu yang manis-pedas. Wajib dicoba sebagai camilan hangat.", image: "baksobakar_malang.jpg" },
    { id: "kmal-02", city: "Kabupaten Malang", food: "Rawon Brintik", desc: "Rawon khas Malang yang memiliki kuah lebih kental dan medok (kaya rasa) dibandingkan Rawon Surabaya. Disajikan dengan tauge, telur asin, dan sambal mangga muda yang segar untuk menetralisir kekayaan kuah.", image: "rawonbenthik_malang.jpg" },

    // 32. Kabupaten Kediri
    { id: "kedi-03", city: "Kabupaten Kediri", food: "Getuk Pisang", desc: "Camilan tradisional yang ikonik. Terbuat dari pisang raja nangka yang dikukus, dihaluskan, dan dipadatkan. Warnanya ungu kemerahan karena proses alami. Rasanya manis, sedikit asam, dan memiliki aroma pisang yang kuat.", image: "gethukpisang_kediri.jpg" },

    // 33. Kabupaten Blitar
    { id: "bli-03", city: "Kabupaten Blitar", food: "Pecel Tumpang Blitar", desc: "Hidangan unik perpaduan dua bumbu. Sambal pecel (kacang) dicampur dengan sambal tumpang (tempe semangit berbumbu santan). Ini menghasilkan pecel dengan kuah yang lebih kental, gurih, dan memiliki aroma tempe yang khas.", image: "nasitumpang_kediri.jpg" },
    { id: "bli-04", city: "Kabupaten Blitar", food: "Es Drop", desc: "Es krim tradisional yang legendaris, dibekukan dalam bentuk balok. Teksturnya padat seperti sorbet dengan rasa santan dan gula merah yang khas. Rasanya ringan, manis, dan dinginnya pas.", image: "esdrop_blitar.jpg" },

    // 34. Kabupaten Probolinggo
    { id: "probo-03", city: "Kabupaten Probolinggo", food: "Nasi Jagung", desc: "Makanan pokok yang sering dikonsumsi di daerah pesisir Probolinggo. Nasi yang terbuat dari jagung ditumbuk, disajikan dengan lauk sederhana seperti ikan asin, urap kelapa, dan sambal terasi mentah. Makanan yang menyehatkan dan mengenyangkan.", image: "nasijagung_probolinggo.jpg" },
    { id: "probo-04", city: "Kabupaten Probolinggo", food: "Gudeg Probolinggo", desc: "Berbeda dengan gudeg manis dari Jawa Tengah, gudeg Probolinggo (terbuat dari nangka muda) dimasak dengan kuah santan yang lebih ringan dan rasanya lebih gurih asin (seperti sayur lodeh), dan memiliki warna lebih pucat.", image: "gudeg_probolinggo.jpg" },

    // 35. Kabupaten Pasuruan
    { id: "pasu-03", city: "Kabupaten Pasuruan", food: "Sate Komoh", desc: "Sate dari daging sapi yang dipotong besar-besar, dimasak dengan bumbu kental berwarna merah kecokelatan sebelum dibakar. Bumbu komoh yang meresap memberikan rasa manis, pedas, dan gurih.", image: "satekomoh_pasuruan.jpg" },
    { id: "pasu-04", city: "Kabupaten Pasuruan", food: "Sambel Wader", desc: "Ikan wader (ikan kecil air tawar) yang digoreng garing lalu dimasak dengan sambal. Wader Pasuruan dikenal renyah, dan dimasak dengan sambal ulek yang pedas dan berminyak.", image: "sambelwader_pasuruan.jpg" },

    // 36. Kabupaten Mojokerto
    { id: "mojo-03", city: "Kabupaten Mojokerto", food: "Sayur Tewel", desc: "Sayur lodeh dengan bahan utama Tewel (nangka muda) yang dimasak dengan kuah santan kental, krecek, dan bumbu kuning. Sangat populer sebagai lauk harian, sering disantap dengan nasi jagung.", image: "sayurtewel_mojokerto.jpg" },
    { id: "mojo-04", city: "Kabupaten Mojokerto", food: "Kerupuk Rambak Sapi", desc: "Kerupuk yang terbuat dari kulit sapi yang diolah hingga renyah. Kerupuk Rambak Mojokerto terkenal karena kualitasnya yang bagus, renyah, dan gurih, sangat cocok dimakan bersama nasi campur.", image: "krupukrambaksapi_mojokerto.jpg" },

    // 37. Kabupaten Madiun (Tambahan)
    { id: "madi-03", city: "Kabupaten Madiun", food: "Sego Resek", desc: "Nasi goreng unik yang terlihat resek (berantakan/kotor) karena dicampur dengan mie kuning, sayuran, dan irisan jeroan yang banyak. Rasanya pedas gurih dan dimasak dengan bumbu kecap yang manis.", image: "segoresek_madiun.jpg" },
    { id: "madi-04", city: "Kabupaten Madiun", food: "Brem Madiun", desc: "Oleh-oleh khas Madiun. Makanan ringan padat yang terbuat dari sari ketan fermentasi. Rasanya manis, sedikit asam, dan memberikan sensasi dingin ketika digigit. Sering dijual dalam bentuk balok.", image: "brem_madiun.jpg" },

    // 38. Kabupaten Sumenep (Tambahan)
    { id: "sume-01", city: "Kabupaten Sumenep", food: "Nasi Jagung Sumenep", desc: "Nasi yang terbuat dari jagung, disajikan dengan lauk ikan tongkol atau cumi yang dimasak bumbu pedas (pedas gurih) dan kelapa urap pedas. Makanan khas yang mencerminkan budaya pertanian dan pesisir.", image: "nasijagung_sumenep.jpg" },
    { id: "sume-02", city: "Kabupaten Sumenep", food: "Sate Daging Sumenep", desc: "Sate dari daging sapi atau kambing muda, dengan bumbu kacang yang lebih manis dan creamy. Sate Sumenep juga dikenal menggunakan sedikit santan dalam bumbu kacangnya, menghasilkan rasa yang sangat lembut.", image: "satedaging_sumenep.jpg" },

    // Data yang overlap/merujuk ke beberapa wilayah
    { id: "pame-03", city: "Kabupaten Sumenep", food: "Sate Laler (Madura)", desc: "Meskipun namanya 'Sate Lalat' (laler), ini adalah sate ayam dengan potongan daging yang sangat kecil. Ukuran yang mini memungkinkan bumbu meresap sempurna. Rasanya manis, gurih, dan sangat empuk.", image: "satelaler_sumenep.jpg" },
    { id: "pame-04", city: "Kabupaten Sumenep", food: "Kaldu Kokot (Madura)", desc: "Sop legendaris dari Sumenep. Sop kental berbahan dasar kacang hijau yang dimasak dengan Kokot (kikil/kaki sapi) beserta sumsum tulangnya. Rasanya gurih, creamy, dan sangat mengenyangkan, cocok untuk menghangatkan badan.", image: "kaldukokot_sumenep.jpg" },
    
];

// ===============================================
// 2. INISIALISASI ELEMEN DOM
// ===============================================
const foodContainer = document.getElementById('foodContainer');
const cityFilter = document.getElementById('cityFilter');
const searchBar = document.getElementById('searchBar');
const mainContent = document.getElementById('mainContent');
const welcomeModal = document.getElementById('welcomeModal');

// Variabel elemen modal detail
const detailModal = document.getElementById('foodDetailModal');
const detailImage = document.getElementById('detailImage');
const detailBadge = document.getElementById('detailBadge');
const detailTitle = document.getElementById('detailTitle');
const detailDesc = document.getElementById('detailDesc');


// ===============================================
// 3. FUNGSI LOGIKA APLIKASI
// ===============================================

// ===============================================
// FUNGSI LOCAL STORAGE (FAVORIT PERSISTEN)
// ===============================================
let favoriteIds = []; 
const STORAGE_KEY = 'kulinerJatimFavorites';

function loadFavorites() {
    const savedFavorites = localStorage.getItem(STORAGE_KEY);
    // Jika ada data tersimpan, parse JSON-nya, jika tidak, pakai array kosong
    favoriteIds = savedFavorites ? JSON.parse(savedFavorites) : [];
}

function saveFavorites() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
}

// Fungsi untuk menambah/menghapus item ke/dari favorit
window.toggleFavorite = function(foodId, event) {
    // Mencegah kartu makanan membuka detail modal saat tombol favorit diklik
    event.stopPropagation(); 

    const index = favoriteIds.indexOf(foodId);
    
    if (index > -1) {
        // Jika sudah ada, hapus dari favorit (Unfavorite)
        favoriteIds.splice(index, 1);
        console.log(`Dihapus dari favorit: ${foodId}`);
    } else {
        // Jika belum ada, tambahkan ke favorit
        favoriteIds.push(foodId);
        console.log(`Ditambahkan ke favorit: ${foodId}`);
    }

    saveFavorites(); // Simpan perubahan ke Local Storage
    
    // Perbarui tampilan kartu makanan (agar ikonnya berubah)
    filterFood(); 
}

// ===============================================
// FUNGSI MODAL DAN FILTER
// ===============================================

// Fungsi untuk menutup modal dan menampilkan halaman utama (Dipanggil dari event di index.html)
window.closeModal = function() {
    welcomeModal.style.display = 'none';
    mainContent.style.display = 'block';
    loadFavorites(); // MUAT FAVORIT SEBELUM RENDERING PERTAMA
    renderFoodCards(dataKuliner); // Render data setelah modal ditutup
    populateCityFilter();
}

// Fungsi untuk mengisi opsi dropdown filter
function populateCityFilter() {
    // Menggunakan Set untuk mendapatkan daftar kota/kabupaten unik dan mengurutkannya
    const cities = [...new Set(dataKuliner.map(item => item.city))].sort();
    
    // Menghapus opsi lama, kecuali opsi default ("Semua Daerah")
    cityFilter.innerHTML = '<option value="">Semua Daerah</option>'; 
    
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
}

// FUNGSI UNTUK MERENDER KARTU MAKANAN (MEMASTIKAN ANIMASI)
function renderFoodCards(data) {
    foodContainer.innerHTML = '';
    
    if (data.length === 0) {
        foodContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 50px;">Maaf, kuliner tidak ditemukan.</p>';
    }

    data.forEach((item, index) => { 
        const isFavorite = favoriteIds.includes(item.id);
        const favIconClass = isFavorite ? 'fas' : 'far'; 

        const card = document.createElement('div');
        card.className = 'food-card';
        card.setAttribute('onclick', `showFoodDetail('${item.id}')`);
        card.style.cursor = 'pointer'; 

        // --- ATRIBUT AOS (Pastikan ini ada) ---
        const delay = (index % 3) * 100; // Delay berurutan per 3 kolom
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay); 
        card.setAttribute('data-aos-duration', '600'); 
        // ------------------------------------

        const foodImageHtml = `
            <div class="food-image-container">
                <img src="images/${item.image}" alt="Foto ${item.food}" class="food-image-actual">
                <button class="favorite-btn" onclick="toggleFavorite('${item.id}', event)">
                    <i class="${favIconClass} fa-heart"></i>
                </button>
            </div>
        `;

        card.innerHTML = `
            ${foodImageHtml} 
            <div class="card-content">
                <span class="city-badge">${item.city}</span>
                <h3>${item.food}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        foodContainer.appendChild(card);
    });

    // --- BARIS KRUSIAL: Memaksa AOS memeriksa elemen baru ---
    if (typeof AOS !== 'undefined') {
        AOS.refreshHard(); // Gunakan refreshHard untuk memaksa deteksi
    }
}

// Fungsi utama untuk filter dan pencarian (Dipanggil dari event di index.html)
window.filterFood = function() {
    const searchTerm = searchBar.value.toLowerCase();
    const selectedCity = cityFilter.value;

    const filteredData = dataKuliner.filter(item => {
        // Cek kecocokan dengan input pencarian (nama makanan, deskripsi, atau kota)
        const matchesSearch = item.food.toLowerCase().includes(searchTerm) || 
                              item.desc.toLowerCase().includes(searchTerm) ||
                              item.city.toLowerCase().includes(searchTerm);
        
        // Cek kecocokan dengan filter dropdown (jika filter tidak kosong)
        const matchesCity = selectedCity === "" || item.city === selectedCity;

        return matchesSearch && matchesCity; // Harus cocok keduanya
    });

    renderFoodCards(filteredData);
}

// ===============================================
// FITUR LEVEL 1: POP-UP DETAIL MAKANAN (UPDATE ID)
// ===============================================

// Fungsi untuk membuka detail (Menerima ID Makanan)
window.showFoodDetail = function(foodId) {
    // Cari objek makanan di array dataKuliner berdasarkan ID
    const item = dataKuliner.find(food => food.id === foodId);

    if (!item) {
        console.error("Data makanan tidak ditemukan untuk ID:", foodId);
        return;
    }
    
    // Masukkan data ke dalam elemen HTML modal
    detailImage.src = `images/${item.image}`;
    detailBadge.textContent = item.city;
    detailTitle.textContent = item.food;
    detailDesc.textContent = item.desc;

    // Tampilkan Modal
    detailModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Menghilangkan scroll utama
}

// Fungsi untuk menutup detail
window.closeFoodDetail = function() {
    detailModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Mengembalikan scroll
}

// Menutup modal jika klik di luar area putih (background gelap)
window.onclick = function(event) {
    if (event.target == detailModal) {
        closeFoodDetail();
    }
}

// Event Listener: Muat favorit saat DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    loadFavorites(); // Muat data favorit dari sesi sebelumnya
    // Catatan: renderFoodCards dan populateCityFilter dipanggil di closeModal()
});
// Fungsi untuk mengisi opsi dropdown filter
function populateCityFilter() {
    // Menggunakan Set untuk mendapatkan daftar kota/kabupaten unik dan mengurutkannya
    const cities = [...new Set(dataKuliner.map(item => item.city))].sort();

    // Menghapus opsi lama, kecuali opsi default ("Semua Daerah")
    cityFilter.innerHTML = `
        <option value="">Semua Daerah</option>
        <option value="__favorites__">❤️ Makanan Favorit</option> 
        `; 

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
}
