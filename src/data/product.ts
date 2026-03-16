// 1. Definisikan Deskripsi per Kategori agar file tetap rapi
const DESCRIPTIONS = {
  waistbag: {
    id: 'Hadirkan koleksi waistbag eksklusif untuk skala bisnis Anda. Dirancang dengan desain ergonomis dan material tangguh, Wartiwan Industri Nusantara siap memproduksi artikel ini dengan spesifikasi dan detail branding yang sepenuhnya dapat disesuaikan dengan identitas brand Anda.',
    en: 'Present an exclusive waistbag collection for your business scale. Designed with ergonomic shapes and rugged materials, Wartiwan Industri Nusantara is ready to manufacture these articles with specifications and branding details fully customizable to your brand identity.',
  },
  backpack: {
    id: 'Wujudkan lini produk andalan berskala besar dengan koleksi backpack berkapasitas optimal dan berdaya tahan tinggi. Melalui fasilitas manufaktur PT WIN, setiap kompartemen dan konstruksi jahitan siap dikustomisasi secara presisi untuk membawa kebanggaan brand Anda di setiap aktivitas konsumen.',
    en: "Realize your large-scale flagship product line with our high-capacity, durable backpack collection. Through PT WIN's manufacturing facilities, every compartment and stitch construction is ready to be precisely customized to carry your brand pride in every consumer activity.",
  },
  totebag: {
    id: 'Tingkatkan daya tarik visual lini fesyen Anda melalui seri totebag yang serbaguna dan estetis. Kami memadukan kepraktisan gaya kasual dengan teknik pemotongan bahan yang akurat, menawarkan kanvas atau nilon berkualitas sebagai ruang sempurna untuk menonjolkan karakter desain brand Anda.',
    en: 'Enhance the visual appeal of your fashion line through our versatile and aesthetic totebag series. We blend casual practicality with accurate material cutting techniques, offering high-quality canvas or nylon as the perfect canvas.',
  },
  slingbag: {
    id: 'Jawab kebutuhan mobilitas kaum urban dengan lini sling bag berdesain compact dan dinamis. Kami memastikan setiap detail fungsional mulai dari kelancaran ritsleting hingga durabilitas strap diproduksi melalui standar quality control yang ketat.',
    en: 'Meet urban mobility needs with our compact and dynamic sling bag line. We ensure every functional detail, from smooth zippers to strap durability, is produced through strict quality control standards.',
  },
  totepack: {
    id: 'Hadirkan inovasi multifungsi dalam katalog Anda lewat desain totepack hibrida yang praktis. Dirancang untuk transisi penggunaan yang fleksibel dari jinjing menjadi ransel, tim manufaktur kami siap mengeksekusi kerumitan pola ini dengan material pilihan terbaik.',
    en: 'Introduce multifunctional innovation to your catalog with our practical hybrid totepack design. Designed for a flexible transition from carry-on to backpack, our manufacturing team is ready to execute these complex patterns.',
  },
  pouch: {
    id: 'Lengkapi variasi produk ritel Anda dengan seri pouch serbaguna yang mengedepankan efisiensi tata ruang dan kerapian. Wartiwan Industri Nusantara mengakomodasi penambahan branding khusus untuk menyempurnakan portofolio aksesoris brand Anda.',
    en: 'Complete your retail product variety with our versatile pouch series that prioritizes space efficiency and neatness. Wartiwan Industri Nusantara accommodates custom branding to perfect your accessory portfolio.',
  },
  shoesbag: {
    id: 'Tingkatkan nilai tambah lini produk sport dan traveling Anda dengan shoes bag fungsional. Menggunakan material yang mudah dibersihkan serta konstruksi jahitan yang tangguh, PT WIN memastikan setiap detail diproduksi secara presisi.',
    en: 'Enhance the value of your sports and travel product lines with functional shoes bags. Using easy-to-clean materials and tough stitch construction, PT WIN ensures every detail is precisely manufactured.',
  },
  travelbag: {
    id: 'Optimalkan pengalaman perjalanan konsumen Anda dengan tas travel berkapasitas luas dan konstruksi kokoh. Kami menyediakan opsi material premium yang tahan cuaca untuk memastikan keamanan barang bawaan di setiap perjalanan.',
    en: "Optimize your consumers' travel experience with spacious, sturdily constructed travel bags. We provide premium weather-resistant material options to ensure the safety of belongings on every journey.",
  },
};

// 2. Export Data Product
export const product = {
  waistbag: [
    {
      title: 'Waistbag-1',
      url: '/assets/product/waistbag/waistbag.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
    {
      title: 'Waistbag-2',
      url: '/assets/product/waistbag/waistbag2.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
    {
      title: 'Waistbag-3',
      url: '/assets/product/waistbag/waistbag3.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
    {
      title: 'Waistbag-4',
      url: '/assets/product/waistbag/waistbag4.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
    {
      title: 'Waistbag-5',
      url: '/assets/product/waistbag/waistbag5.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
    {
      title: 'Waistbag-6',
      url: '/assets/product/waistbag/waistbag6.jpg',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
    {
      title: 'Waistbag-7',
      url: '/assets/product/waistbag/waistbag7.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
    {
      title: 'Waistbag-8',
      url: '/assets/product/waistbag/waistbag8.png',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
    {
      title: 'Waistbag-9',
      url: '/assets/product/waistbag/waistbag9.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.waistbag,
    },
  ],
  backpack: [
    {
      title: 'Backpack-1',
      url: '/assets/product/backpack/backpack1.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-2',
      url: '/assets/product/backpack/backpack2.webp',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-3',
      url: '/assets/product/backpack/backpack3.png',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-4',
      url: '/assets/product/backpack/backpack4.webp',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-5',
      url: '/assets/product/backpack/backpack5.webp',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-6',
      url: '/assets/product/backpack/backpack6.webp',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-7',
      url: '/assets/product/backpack/backpack7.png',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-8',
      url: '/assets/product/backpack/backpack8.png',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-9',
      url: '/assets/product/backpack/backpack9.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
    {
      title: 'Backpack-10',
      url: '/assets/product/backpack/backpack10.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.backpack,
    },
  ],
  totepack: [
    {
      title: 'totepack-1',
      url: '/assets/product/totepack/totepack1.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.totepack,
    },
    {
      title: 'totepack-2',
      url: '/assets/product/totepack/totepack2.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.totepack,
    },
    {
      title: 'totepack-3',
      url: '/assets/product/totepack/totepack3.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.totepack,
    },
    {
      title: 'totepack-4',
      url: '/assets/product/totepack/totepack4.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.totepack,
    },
  ],
  travelbag: [
    {
      title: 'travel-bag',
      url: '/assets/product/travel-bag/travel-bag.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.travelbag,
    },
    {
      title: 'travel-bag-1',
      url: '/assets/product/travel-bag/Travel bag.jpg',
      imageClass: '',
      description: DESCRIPTIONS.travelbag,
    },
    {
      title: 'travel-bag-2',
      url: '/assets/product/travel-bag/Travel bag.png',
      imageClass: '',
      description: DESCRIPTIONS.travelbag,
    },
    {
      title: 'travel-bag-3',
      url: '/assets/product/travel-bag/travel-bag.png',
      imageClass: '',
      description: DESCRIPTIONS.travelbag,
    },
  ],
  slingbag: [
    {
      title: 'sling-bag-1',
      url: '/assets/product/sling-bag/sling-bag.jpg',
      imageClass: '',
      description: DESCRIPTIONS.slingbag,
    },
    {
      title: 'sling-bag-2',
      url: '/assets/product/sling-bag/sling-bag2.jpg',
      imageClass: '',
      description: DESCRIPTIONS.slingbag,
    },
    {
      title: 'sling-bag-3',
      url: '/assets/product/sling-bag/sling-bag3.webp',
      imageClass: '',
      description: DESCRIPTIONS.slingbag,
    },
    {
      title: 'sling-bag-4',
      url: '/assets/product/sling-bag/sling-bag4.png',
      imageClass: '',
      description: DESCRIPTIONS.slingbag,
    },
  ],
  shoesbag: [
    {
      title: 'shoes-bag-1',
      url: '/assets/product/shoes-bag/shoes-bag.png',
      imageClass: '',
      description: DESCRIPTIONS.shoesbag,
    },
    {
      title: 'shoes-bag-2',
      url: '/assets/product/shoes-bag/shoes-bag2.webp',
      imageClass: '',
      description: DESCRIPTIONS.shoesbag,
    },
    {
      title: 'shoes-bag-3',
      url: '/assets/product/shoes-bag/shoes-bag3.jpg',
      imageClass: '',
      description: DESCRIPTIONS.shoesbag,
    },
  ],
  totebag: [
    {
      title: 'totebag-1',
      url: '/assets/product/totebag/mills-exodus-totebag-07805070-exodus_totebag-3.webp',
      imageClass: '',
      description: DESCRIPTIONS.totebag,
    },
    {
      title: 'totebag-2',
      url: '/assets/product/totebag/Totebag.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.totebag,
    },
    {
      title: 'totebag-3',
      url: '/assets/product/totebag/Totebag.jpg.png',
      imageClass: '',
      description: DESCRIPTIONS.totebag,
    },
    {
      title: 'totebag-4',
      url: '/assets/product/totebag/Totebag (1).jpeg',
      imageClass: '',
      description: DESCRIPTIONS.totebag,
    },
  ],
  pouch: [
    {
      title: 'pouch-1',
      url: '/assets/product/pouch/pouch.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.pouch,
    },
    {
      title: 'pouch-2',
      url: '/assets/product/pouch/pouch2.jpg',
      imageClass: '',
      description: DESCRIPTIONS.pouch,
    },
    {
      title: 'pouch-3',
      url: '/assets/product/pouch/pouch3.jpeg',
      imageClass: '',
      description: DESCRIPTIONS.pouch,
    },
  ],
};
