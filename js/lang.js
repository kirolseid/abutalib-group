var arrLang = {
    "en": {
      "navHOME": "HOME",
      "navnews": "NEWS",
      "navservies": "SERVICES",
      "navprojects": "PROJECTS",
      "navABOUT": "About Us",
      "navCONTACT": "Contact Us",
       "aboutsecTitleh2": "ABOUT",
       "aboutsecTitleh6": "ABOUT US",
       "aboutsecb": "Abutailb Group ",

       "aboutsecp": "is a leading real estate developer with more than 20 years of experience in the Egyptian market. Our deeply rooted market insights and expertise were poured to aid in the development of our real estate product that saw the light we have managed to crystallize our understanding of the market needs and the preferences of the clients in one destination for luxury that is traced across all the projects of the company",
       "aboutseca": "SEE MORE ",
       "navCONTACT": "Contact Us",
       "navCONTACT": "Contact Us",
    },
    "ar": {
      "navHOME": "الرائسية",
      "navABOUT": "عننا",
      "navCONTACT": "تواصل معنا",
      "navnews": "اخبار",
      "navservies": "خدمتنا",
      "navprojects": "مشروعتنا",
      "aboutsecTitleh2": "عنا",
       "aboutsecTitleh6": "عنا",
       "aboutsecp": "هي شركة تطوير عقاري رائدة تتمتع بخبرة تزيد عن 20 عامًا في السوق المصري. تم سكب رؤيتنا وخبراتنا العميقة في السوق للمساعدة في تطوير منتجنا العقاري الذي شهد الضوء الذي تمكنا من بلورة فهمنا لاحتياجات السوق وتفضيلات العملاء في وجهة واحدة للرفاهية التي يتم تتبعها عبر الجميع مشاريع الشركة",
       "aboutsecb": "ابو طالب جروب ",
       "aboutseca": "المزيد",
    }
  };

function changeLanguage(lang) {

}

  $(document).ready(function() {
    // The default language is English
    // console.log(location.hash);
    var language =localStorage.getItem('lang')
    console.log('ddd',language);
    
    if(language=='en'){
        $('#style').attr('href','css/style.css')
        var lang = "en";
        location.hash = lang;

    }else if(language=='ar'){
        $('#style').attr('href','css/arstyle.css')

        var lang = "ar";
        location.hash = lang;

    }else{
        $('#style').attr('href','css/style.css')
        var lang = "en";
        location.hash = lang;

    }
    
    $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  // get/set the selected language
  $(".translate").click(function() {
    var lang = $(this).attr("id");
    if(lang== "en"){
        localStorage.setItem('lang','en')
        $('#style').attr('href','css/style.css')
        
    }else if(lang== "ar"  ){
        localStorage.setItem('lang','ar')
        $('#style').attr('href','css/arstyle.css')


    }
      location.hash = lang;
      location.reload();
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
