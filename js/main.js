var projectsnav = document.getElementById("projectssidenav");
var aboutnav = document.getElementById("aboutsidenav");

alert('UWAGA! STRONA W BUDOWIE! Wiele elementów nie działa prawidłowo! Wersja tylko na komputer! Brak responsywności!');

function openNav1() {
    projectsnav.style.width = "100%";
}
function closeNav1() {
    projectsnav.style.width = "0";
}

function openNav2() {
    aboutnav.style.width = "100%";
}
function closeNav2() {
    aboutnav.style.width = "0";
}

Vue.component('card',{
props: ['background', 'logo', 'picture', 'title', 'short', 'description', 'picture2', 'description2', 'link', 'footerlink'],
template: `
<div class="card" :style="{transform: activeTransform, backgroundImage: background}" :class="{ project: openProject }" 
@mouseover="showText" @mouseleave="noText" @click="project">
    <div class="title">
        <h2>{{ title }}</h2>
        <p>{{ short }}</p>
    </div>
    <div class="content">
        <div class="content-header">
            <img class="content-logo" :src="logo" alt="">
            <img class="content-picture" :src="picture" alt="">
        </div>
        <div class="content-description">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
        <div class="content-description2">
            <img :src="picture2" alt="">
            <p>{{ description2 }}</p>
        </div>
        <div class="content-footer">
          <a :href="link" target="_blank">{{  footerlink  }}</a>
        </div>
    </div>
 </div>
`,
data() {
    return {
        activeTransform: 'scale(1) skewX(-12deg)',
        openProject: false     
    }
},
methods: {
    showText() {
        this.activeTransform =  'scale(1.07) skewX(-12deg)'
    },
    noText() {
        this.activeTransform =  'scale(1) skewX(-12deg)'
    },
    project() {
        this.openProject = !this.openProject
    }
}
});

Vue.component('page',{
    template: 
    `<div>
        <a href="javascript:void(0)" class="closebtn1" onclick="closeNav1()">x</a>
        <div class="sidenav linesnav">
            <card 
            v-for="brand in brands"
            :key="brand.index"
            :background="brand.background"
            :logo="brand.logo"
            :picture="brand.picture"
            :title="brand.title"
            :short="brand.short"
            :description="brand.description"
            :picture2="brand.picture2"
            :description2="brand.description2"
            :link="brand.link"
            :footerlink="brand.footerlink">
            </card>
        </div>
    </div>`,
    data() {
        brands= [
            {
              index: 1,
              background: 'url(img/rozklad.jpg)',
              logo: 'img/logo-rozklad.png',
              picture:  'img/rozklad2.jpg',
              title: 'Interaktywny Rozkład Jazdy',
              short: 'aplikacja webowa',
              description: 'Pomysł na stworzenie aplikacji webowej - interaktywnego rozkładu jazdy komunikacji miejskiej w Kościerzynie zrodził się z potrzeby szybkiego sprawdzenia rozkładu jazdy przeze mnie i moich bliskich. Pomyślałem, że taka aplikacja przyda się wszystkim, którzy chcą skorzystać z komunikacji miejskiej w Kościerzynie. Na stronie możecie sprawdzić zarówno kiedy odjeżdża wasz najbliższy autobus, jak i zobaczyć cały rozkład z wybranego przystanku, w wybranym kierunku. W menu jest też możliwość sprawdzenia przebiegu poszczególnych linii oraz pobrania oficjalnego rozkładu jazdy w formacie pdf ze strony Miasta Kościerzyna. Projekt powstał całkowicie społecznie - pro publico bono.',
              picture2: 'img/rozklad_laptop.png',
              description2: 'Projekt jest aplikacją webową, z większością elementów Progressive Web Apps, jednak bez możliwości korzystania offline. Mechanizm oparty jest w całości o czysty JavaScript. Prosty styl zbudowałem w CSS za pomocą preprocesora Scss. Struktura to oczywiście HTML 5. Osobiście zaprojektowałem także logo projektu, które oparte jest o symbolikę herbu Kościerzyny (niedźwiedź pod dębem).',
              link: 'http://koscierzynarozklad.pl',
              footerlink: 'koscierzynarozklad.pl'
            },
            {
              index: 2,
              background: 'url(img/czarnyogon.jpg)',
              logo: 'img/logo_czarnyogon.png',
              picture:  'img/pies_top.jpg',
              title: 'Czarny Ogon',  
              short: 'strona www, logo, grafika',
              description: 'Dla mobilnego salonu urody dla zwierząt "Czarny Ogon" stworzyłem stronę internetową, logo, projekty wizytówki i baneru, a także grafiki do mediów społecznościowych, projekt oklejenia samochodu i ulotki.',
              picture2: 'img/pies_ulotka.jpg',
              description2: 'Strona internetowa powstała w oparciu o CMS Wordpress, z wykorzystaniem HTML, CSS i Javascript. Zawiera między innymi ciekawy, dynamiczny cennik umożliwiający automatyczny dobór cen i pakietów do rasy psa. Logo posiada dynamiczny przekaz, symbolizujący jednocześnie psa i bańki symbolizujące mycie. Wszystkie materiały tj. ulotki, banery, wizytówki oraz oklejenie samochodu, wraz ze stroną internetową, tworzą spójną identyfikację wizualną.',
              link: 'http://czarnyogon.pl',
              footerlink: 'czarnyogon.pl'  
            },
            {
                index: 3,
                background: 'url(img/kolej.jpg)',
                logo: 'img/logo_muzeum.png',
                picture:  'img/muzeum_plansza2.png',
                title: 'Muzeum Kolejnictwa', 
                short: 'oprawa graficzna wystawy', 
                description: 'Na zamówienie Muzeum Kolejnictwa w Kościerzynie stworzyłem projekty 8 plansz i plakatu wystawy pt. "Historia Kolei w Wolnym Mieście Gdańsku"',
                picture2: 'img/muzeum_plansza.png',
                description2: 'Projekt jest utrzymany w stylu właściwym dla epoki. Także kolorystyka, fonty i inne detale starają się nawiązywać do czasów, które opisują.',
                link: 'http://muzeumkolejnictwa.com.pl/',
                footerlink: 'muzeumkolejnictwa.com.pl' 
              },
              {
                index: 4,
                background: 'url(img/muzeum_samoch_plakat.jpg)',
                logo: 'img/logo_muzeum.png',
                picture:  'img/muzeum_samochod.jpg',
                title: 'Muzeum Kolejnictwa', 
                short: 'oprawa graficzna wystawy', 
                description: 'Projekty 8 plansz i plakatu wystawy pt. "250 lat samochodu" stworzone dla Muzeum Kolejnictwa w Kościerzynie',
                picture2: 'img/muzeum_samochodII.jpg',
                description2: 'Projekt oparty jest na założeniu utrzymania żywej kolorystyki tła, z czarno-białym drugim tłem nawiązującym do tematu planszy. Często stosowałem wycięte sylwetki postaci lub przedmiotów. Fonty starają się nawiązywać do klimatu jaki tworzy temat.',
                link: 'http://muzeumkolejnictwa.com.pl/',
                footerlink: 'muzeumkolejnictwa.com.pl' 
              },
              {
                index: 5,
                background: 'url(img/szyca.jpg)',
                logo: 'img/logo_szyca.png',
                picture:  'img/szyca1.png',
                title: 'Krawiectwo Szyca', 
                short: 'strona www, logo, grafika', 
                description: 'Krawictwo Szyca to projekt, który zaczął się od stworzenia logo oraz identyfikacji wizualnej zakładu krawieckiego mojej babci. Pierwotnie obejmował on logo oraz projekty szyldów i wizytówek.',
                picture2: 'img/szyca3.png',
                description2: 'Później został stworzony projekt strony internetowej, z wykorzystaniem SVG oraz animacji. Strona wpisuje sie w stworzoną wcześniej identyfikacje wizualną zachowując i rozwijając jej określone cechy.',
                link: 'https://arturrymsza.github.io/Szyca_Page/',
                footerlink: 'arturrymsza.github.io/Szyca_Page'  
              },
              {
                index: 6,
                background: 'url(img/driveforyou.jpg)',
                logo: 'img/logo_drive.png',
                picture:  'img/driveforyou.jpg',
                title: 'Drive for You',  
                short: 'strona www, logo',
                description: 'Strona internetowa firmy świadczącej usługi w zakresie transferów lotniskowych z lotniska w Gdańsku, jak również innych pasażerskich usług transportowych.',
                picture2: 'img/driveforyou2.jpg',
                description2: 'Oprócz strony internetowej zostało stworzone proste, typograficzne logo firmy.',
                link: 'https://arturrymsza.github.io/driveforyou/',
                footerlink: 'driveforyou.pl'  
              },
              {
                index: 7,
                background: 'url(img/packland.jpg)',
                logo: 'img/logo_packland.png',
                picture:  'img/packland2.jpg',
                title: 'Packland',  
                short: 'sklep internetowy, logo, grafika',
                description: 'Sklep internetowy stworzony dla firmy Packland, w oparciu o platformę Prestashop, jednak z licznymi modyfikacjami kodu.',
                picture2: 'img/packland3.jpg',
                description2: 'Dla firmy Packland stworzyliśmy także logo oraz projekty wszelkich materiałów graficznych.',
                link: 'http://packland.sklep.pl',
                footerlink: 'packland.sklep.pl'  
              },
              {
                index: 8,
                background: 'url(img/sprytny.jpg)',
                logo: 'img/logo_sprytny.png',
                picture:  'img/sprytny2.jpg',
                title: 'Sprytny Rozkład',
                short: 'strona www, logo',  
                description: 'Sprytny rozkład to nazwa ofertowa produktu, jakim jest interaktywny rozkład jazdy, skierowana do przewoźników lub organizatorów transportu publicznego, zainteresowanych wdrożeniem takiego rozwiązania na swojej sieci transportowej.',
                picture2: 'img/sprytny3.jpg',
                description2: 'Stworzyliśmy typograficzne logo oraz prostą stronę - wizytówkę opisującą korzyści z wdrożenia naszego produktu. Jest również prosty formularz kontaktowy powiązany z organizatorem poczty Mailchimp.',
                link: 'http://sprytnyrozklad.ovh/',
                footerlink: 'sprytnyrozklad.ovh'  
              },
              {
                index: 9,
                background: 'url(img/hotelik.jpg)',
                logo: 'img/logo_hotel.png',
                picture:  'img/hotelik.jpg',
                title: 'Hotelik Kościerzyna', 
                short: 'strona www, logo', 
                description: 'Dla "Hoteliku Kościerzyna" stworzyłem stronę, tak naprawdę złożoną z kilku podstron, gdzie każda dotyczy innego obiektu firmy. Na każdej z podstron występuja elelementy opisowe, galerie, cennik, mapa Google.',
                picture2: 'img/hotelik2.jpg',
                description2: 'Oprócz strony internetowej stworzyłem logo.',
                link: 'http://hotelik-koscierzyna.pl/',
                footerlink: 'hotelik-koscierzyna.pl'  
              },
              {
                index: 10,
                background: 'url(img/cohannah.jpg)',
                logo: 'img/logo_cohannah.png',
                picture:  'img/cohannah.jpg',
                title: 'Cohannah.com',
                short: 'sklep internetowy, logo',  
                description: 'Cohannah.com to nieistniejący już sklep internetowy z artykułami dziecięcymi, stworzony w oparciu o platformę Prestashop, przy dużej ingerencji w kod szablonu i dużej jego personalizacji.',
                picture2: 'img/cohannah2.png',
                description2: 'Oprócz samego sklepu internetowego stworzyłem także logo sklepu, a także wszelkie grafiki użyte zarówno na stronie internetowej, jak i na Facebooku.',
                link: '',
                footerlink: 'cohannah.com'  
              },
              {
                index: 11,
                background: 'url(img/drutex.jpg)',
                logo: 'img/logo_drutex.png',
                picture:  'img/drutex1.jpg',
                title: 'Drutex', 
                short: 'wizja logo i identyfikacji wizualnej', 
                description: 'Moja wizja logotypu oraz identyfikacji wizualnej firmy Drutex. Oprócz projektu logo, zawiera ona projekty wizytówek, papeterii, notatników, kopert czy oklejenia samochodów.',
                picture2: 'img/drutex2.jpg',
                description2: 'Jest to wyłącznie moja wizja i pomysł, jak alternatywa dla obecnie funkcjonującej identyfikacji wizualnej.',
                link: '',
                footerlink: ''  
              },
              {
                index: 12,
                background: 'url(img/apartamenty.jpg)',
                logo: 'img/logo_apartamenty.png',
                picture:  'img/apartamenty2.jpg',
                title: 'Apartamenty Darłówko',  
                short: 'projekt ulotki',
                description: 'Dla firmy "Apartamenty Darłówko" zaprojektowaliśmy ulotkę',
                picture2: 'img/ulotka-srodek7.png',
                description2: 'Projekt bazuje na identyfikacji wizualnej występującej na stronie firmy oraz na logotypie firmy i wpisuje sie w ten sam styl oraz kolorystykę',
                link: '',
                footerlink: ''  
              },
              {
                index: 13,
                background: 'url(img/game.jpg)',
                logo: '',
                picture:  'img/game.jpg',
                title: 'Tea Break Game',  
                short: 'aplikacja webowa (gra)',
                description: 'Internetowa wersja gry papier, nożyce, kamień. Prosta gra stworzona w Javascripcie, mogąca rozładować emocje, czy zrelaksować się na chwilkę. Po prostu oderwać',
                picture2: '',
                description2: '',
                link: 'https://arturrymsza.github.io/Tea_break_game/',
                footerlink: 'zagraj w "Tea Break Game"'  
              },
              {
                index: 14,
                background: 'url(img/owoce.jpg)',
                logo: 'img/logo_owoce.png',
                picture:  '',
                title: 'Lubelskie Owoce',  
                short: 'logo',
                description: 'Logo stworzone dla grupy sadownczej z Lubelszczyzny',
                picture2: 'img/lubelskieowoce.png',
                description2: 'Logo złożne jest z symbolicznych kontur jabłka, wiśni i porzeczki, będących przedmiotem produkcji grupy sadowniczej',
                link: '',
                footerlink: ''  
              },
              {
                index: 15,
                background: 'url(img/wlad_tlo.png)',
                logo: 'img/wlad_obraz.png',
                picture:  '',
                title: 'Gmina Władysławowo', 
                short: 'logo - propozycja', 
                description: 'Propozycja logotypu zgłoszona na konkurs ogłoszony przez Urząd Gminy Władysławowo na projekt logotypu. Niestety wybrany został inny projekt.',
                picture2: 'img/wladyslawowo.png',
                description2: 'Logo typograficzne, gdzie litera "A" została zastąpoina sygnetem symbolizującym latarnie morską w Rozewiu i jacht na jej tle. Lazurowy kolor sygnetu ma kojarzyć się z wakacjami nad morzem.',
                link: '',
                footerlink: ''  
              }
          ]
    }
});

var portfolio = new Vue({
  el: '#app',
  data: {
  text:'testowy'
  },
  methods: {
      changeText(){
      this.text = 'nowy testowy'
      }
  }

});