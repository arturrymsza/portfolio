var projectsnav = document.getElementById("projectssidenav");
var aboutnav = document.getElementById("aboutsidenav");

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
props: ['background', 'logo', 'picture', 'title', 'short', 'description', 'picture2', 'description2'],
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
        <div class="content-footer"></div>
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
            :description2="brand.description2">
            </card>
        </div>
    </div>`,
    data() {
        brands= [
            {
              index: 1,
              background: 'url(../img/rozklad.jpg)',
              logo: '../img/logo-rozklad.png',
              picture:  '../img/rozklad2.jpg',
              title: 'Interaktywny Rozkład Jazdy',
              short: 'aplikacja webowa',
              description: 'Nulla fermentum ullamcorper justo sed aliquet. Nullam egestas sollicitudin rhoncus.',
              picture2: '',
              description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              index: 2,
              background: 'url(../img/czarnyogon.jpg)',
              logo: '../img/logo_czarnyogon.png',
              picture:  '',
              title: 'Czarny Ogon',  
              short: 'strona www, logo, grafika',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
              picture2: '',
              description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
            },
            {
                index: 3,
                background: 'url(../img/kolej.jpg)',
                logo: '../img/logo_muzeum.png',
                picture:  '',
                title: 'Muzeum Kolejnictwa', 
                short: 'oprawa graficzna wystawy', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 4,
                background: 'url(../img/szyca.jpg)',
                logo: '../img/logo_szyca.png',
                picture:  '',
                title: 'Krawiectwo Szyca', 
                short: 'strona www, logo, grafika', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 5,
                background: 'url(../img/driveforyou.jpg)',
                logo: '../img/logo_drive.png',
                picture:  '../img/driveforyou.jpg',
                title: 'Drive for You',  
                short: 'strona www, logo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 6,
                background: 'url(../img/packland.jpg)',
                logo: '../img/logo_packland.png',
                picture:  '../img/driveforyou.jpg',
                title: 'Packland',  
                short: 'sklep internetowy, logo, grafika',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 7,
                background: 'url(../img/sprytny.jpg)',
                logo: '../img/logo_sprytny.png',
                picture:  '../img/driveforyou.jpg',
                title: 'Sprytny Rozkład',
                short: 'strona www, logo',  
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 8,
                background: 'url(../img/hotelik.jpg)',
                logo: '../img/logo_hotel.png',
                picture:  '../img/hotelik.jpg',
                title: 'Hotelik Kościerzyna', 
                short: 'strona www, logo', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 9,
                background: 'url(../img/cohannah.jpg)',
                logo: '../img/logo_cohannah.png',
                picture:  '../img/cohannah.jpg',
                title: 'Cohannah.com',
                short: 'sklep internetowy, logo',  
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 10,
                background: 'url(../img/drutex.jpg)',
                logo: '../img/logo-rozklad.png',
                picture:  '',
                title: 'Drutex', 
                short: 'wizja logo i identyfikacji wizualnej', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 11,
                background: 'url(../img/apartamenty.jpg)',
                logo: '../img/logo-rozklad.png',
                picture:  '',
                title: 'Apartamenty Darłówko',  
                short: 'projekt ulotki',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 12,
                background: 'url(../img/game.jpg)',
                logo: '../img/logo-rozklad.png',
                picture:  '',
                title: 'Tea Break Game',  
                short: 'aplikacja webowa (gra)',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 13,
                background: 'url(../img/owoce.jpg)',
                logo: '../img/logo-rozklad.png',
                picture:  '',
                title: 'Lubelskie Owoce',  
                short: 'logo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
              },
              {
                index: 14,
                background: 'url(../img/wlad_tlo.png)',
                logo: '../img/wlad_obraz.png',
                picture:  '',
                title: 'Gmina Władysławowo', 
                short: 'logo - propozycja', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
                picture2: '',
                description2: 'aliquet auctor erat, ut maximus dolor consectetur et.'  
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