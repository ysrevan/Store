const langData= {
  az:["Hesab","Səbət","YENİ GƏLƏNLƏR","İndi isti","110$-dan başlayan Retro Gələcək üçün Remiks","REDAKSİYALAR","İndi isti","Yağışdan sonra günəş şüası kimi evinizə işıq və xoşbəxtlik gətirir","SEÇİLƏN","İstənilən yerə gətirin","Ev və uzaq üçün mükəmməl portativ dinamik","Flash Sövdələşmələr","Bütün Məhsullara Baxın","Şəhər yük maşını və paletli ekskavator 10812 (26 ədəd)",
      "11 düymlük Tablet Pro 2020 Space Grey","Oyun İdarəetmə Konsolu USB Simli əlaqə Gamepad",
      "AF 1 Shadow Qadın İdman ayaqqabısı (Krem Rəng)","V 11 Heyvanlar üçün Şnursuz Tozsoran","Pikachu Poke Plush-39In (Jumbo ölçülü)", 
     "Pul Geri Zəmanət","Sifariş etdiyiniz məhsulu və ya pulunuzu geri alın","Daha ətraflı","Pulsuz çatdırılma",
    "100$-dan yuxarı Sifarişlərə Çatdırılma Pulsuzdur","Təfərrüatlar","24/7 Müştəri Xidmətləri","Bir insanla danışmaq istəyirsiniz? Söhbət seçin və ya bizə zəng edin",
  "Dəstək alın","Bu Həftə Sevimli Sövdələşmələrimiz","Bütün Sövdələşmələrə Baxın","Mətbəx Alətləri və Aksesuarları",
  "Yataqdan qalxmağa dəyər cazibədar mətbəx əşyaları və bahem toxunuşları","Ekran Pulsuz Əyləncə, Hər kəs?",
"Oyunlardan və bulmacalardan sənət və sənətkarlığa qədər,hər yaşa uyğun əyləncəli fəaliyyətlər əldə edin","Bahar Fling","Üslublar, bu qiymətlər, vaxt - demək istəyirəm ki, bu, olması lazım idi!",
"Trend Brendlər","Ən çox satanlar","Bütün Məhsullara Baxın","1Tb Oyun konsolu-Simsiz Oyun Padd-Qara","Taxta Saat",
"Palıd ağacında 45 çərçivəli kreslo haqqında","4-ü 1-də konvertasiya edilə bilən avtomobil oturacağı","Khlr Design Hammershoi Vaza 25 sm",
"Zürafə Oyuncağı və Diş Kaşıyıcı 2 Parça Hədiyyə Dəsti","Daha çox kateqoriyaları araşdırın","Bütün Kateqoriyalara Baxın","Mebel","Ayaqqabılar","Smartfonlar",
"Hava Təmizləyiciləri","Oyuncaqlar","Qulaqlıqlar","Zəng edin","Bizə səhər 8-dən axşam 12-ə qədər zəng edin.","E-poçt","Cavab müddətimiz 1 ilə 3 iş günüdür.",
"Mesaj Göndər","Gəlin əlaqəni kəsməyək","Tövsiyələr, məsləhətlər, yeniləmələr, tanıtımlar və s. alın.","Alış-veriş üçün ən yaxşısı",
"Sed do eiusmod tempor incididuntut worke dolor magna.","Bizi Tanıyın","Bizim haqqımızda","Yeni & Bloq","Karyera","İnvestorlar","Bizimlə əlaqə saxlayın",
"Yardım Mərkəzi","Tez-tez verilən suallar","Əlçatanlıq","Əlaqə","Ölçü Bələdçisi","Ödəniş üsulu","Sifarişi izləyin","Çatdırılma və Quraşdırılma",
"Qaytarma & Mübadilə","Qiymət Riyaziyyat Zəmanəti"],

  en:["Account","Cart","NEW ARRIVALS","Hot Right Now","Retro Remixed For The Future Starting at $110","EDITORIALS","Hot Right Now","It bring light and happiness to your house, like a sun beam after the rain","FEATURED","Bring it anywhere","The perfect portable speaker for home and away","Flash Deals","See All Products","Town Truck &  Tracked  Excavator 10812 (26 Pieces)",
      "11-inch Tablet Pro 2020 Space Gray","Game Controller Console USB Wired connection Gamepad",
      "AF 1 Shadow Women's Sneaker  (Cream Color)","V 11 Animal Cord-Free Vacuum Cleaner","Pikachu Poke Plush-39In (Jumbo sized)",
     "Money Back Guarantee","Get the item you ordered or your money back","Learn More","Free Shipping","Free Shipping On Orders Over 100$",
    "Details","24/7 Customer Service","Want to talk to a person? Choose chat or call us","Get Support","Our Favorite Deals This Week",
  "See All Deals","Kitchen Tools & Accessories","Charming kitchen ware and bahemian touches worth getting out of bed for",
,"Screen Free Fun, Anyone?","From games and & puzzles to arts & crafts,get fun activites for every age","The Spring Fling","The styles,those prices,the timing-I mean,it's like it was meant to be!",
"Tranding Brands","Top Sellers","See All Products","1Tb Gaming console-Wireless Game Padd-Black","Wooden Time Clock",
"The About a Chair ac 45 Frame in Oak Wood With a","4-in-1 Convertible Car Seat","Khlr Design Hammershoi Vase 25cm",
"Giraffe Toy & Baby Teether 2 Piece Gift Set","Explore More Categories","See All Categories","Furniture","Shoes","Smartphones",
"Air Puifiers","Toys","Headphones","Call","Call us from 8am to 12am ET.","Email","Our response time is 1 to 3 business days.",
"Send a Message","Let’s keep in touch","Get recommendations, tips, updates, promotions and more.","Best For Shopping",
"Sed do eiusmod tempor incididuntut labore dolore magna.","Get to Know Us","About Us","New & Blog","Careers","Investors",
"Contact Us","Help Center","FAQ's","Accessibility","Feedback","Size Quide","Payment Method","Track Order","Shipping & Delivery",
"Return & Exchange","Price Math Guarantee"]
}

const langBtn = document.querySelector('#lang-btn')
const langItem = document.querySelectorAll('.search')
function multiLang (){
  if (langBtn.innerHTML == 'AZ') {
      langBtn.innerHTML = 'EN';
      for (let i in langData.az) {
        langItem[i].innerHTML = langData.az[i]
      }
      localStorage.setItem('lang','AZ')
  }else{
    langBtn.innerHTML = 'AZ';
    for (let i in langData.en) {
      langItem[i].innerHTML = langData.en[i] 
    }
    localStorage.setItem('lang','EN');
  }
}

langBtn.onclick = multiLang

if(localStorage.getItem('lang') === 'AZ'){
  langBtn.innerHTML = 'EN';
  for (let i in langData.az) {
    langItem[i].innerHTML = langData.az[i]
  }
}else{
  langBtn.innerHTML = 'AZ';
  for (let i in langData.en) {
    langItem[i].innerHTML = langData.en[i]
   }
}  


const darkBtn = document.querySelector('#dark-btn')
function toggleDarkMode() {
  const nav = document.querySelector('nav')
  if (document.body.classList.toggle('dark-mode')) {
      darkBtn.innerHTML = 'Light';
      document.querySelector('nav').className = "navbar navbar-expand-lg bg-dark navbar-dark";
      localStorage.setItem('mode', 'dark');
  }else {
      darkBtn.innerHTML = 'Dark';
      document.querySelector('nav').className = "navbar navbar-expand-lg bg-light navbar-light";
      localStorage.setItem('mode', 'light');
  }
}

darkBtn.onclick = toggleDarkMode;

if (localStorage.getItem('mode') === 'light') {
  document.body.classList.remove('dark-mode');
  darkBtn.innerHTML = 'Dark';
} else {
  document.body.classList.add('dark-mode');
  darkBtn.innerHTML = 'Light';
  document.querySelector('nav').className = "navbar navbar-expand-lg bg-dark navbar-dark";
}
