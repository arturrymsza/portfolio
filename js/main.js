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
template: `
<div class="card" :style="{transform: activeTransform}" :class="{ project: openProject }" 
@mouseover="showText" @mouseleave="noText" @click="project">
    <div class="content">
        <div class="content-header">
            <img class="content-logo" src="../img/logo-rozklad.png" alt="">
            <img class="content-picture" src="../img/rozklad2.jpg" alt="">
        </div>
        <div class="content-description">
            <h2>Interaktywny Rozkład Jazdy KM Kościerzyna</h2>
            <p>Nulla fermentum ullamcorper justo sed aliquet. Nullam egestas sollicitudin rhoncus. 
            In eget dolor vitae orci interdum luctus quis in nulla. Fusce eget lacinia ligula. 
            Sed egestas, lacus sit amet iaculis maximus, quam arcu egestas quam, vitae eleifend est est eu risus. 
            Etiam pharetra libero congue est bibendum varius. Cras tincidunt tellus quis felis imperdiet consectetur. 
            Morbi id enim mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec in dolor vel velit porttitor cursus. Donec est mauris, lobortis vel tellus vitae, lobortis malesuada massa. 
            Etiam a consectetur nisl, sit amet venenatis eros. Phasellus magna nunc, vestibulum in pretium sed, faucibus id felis. 
            Ut et dapibus tortor.</p>
        </div>
        <div class="content-description2">
            <img src="" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi ullamcorper sapien erat, ut eleifend mi ultricies in. 
            Duis at sapien ex. Quisque maximus mauris ut mi sodales luctus. 
            Mauris vitae ligula et turpis feugiat vehicula vel nec leo. 
            Aliquam aliquet auctor erat, ut maximus dolor consectetur et. 
            In nec est auctor, ullamcorper enim sed, elementum odio. 
            Sed ultricies nibh id egestas porta. Maecenas vehicula congue sollicitudin. 
            Donec tristique lorem et neque auctor, ut sagittis enim ultrices. 
            Duis gravida tincidunt odio. Integer ullamcorper volutpat tincidunt. 
            Sed consequat scelerisque nulla. Nam nec auctor nunc.</p>
        </div>
        <div class="content-footer"></div>
    </div>
 </div>
`,
data() {
    return {
        activeTransform: 'scale(1) skewX(-14deg)',
        openProject: false,
  /*      text: 'fajny',
        brand: [
            {
              brandId: 1,
              brandTitle: 'Interaktywny rozkład jazdy',
              brandImage:  '../img/opinie.jpg',
              brandLogo: '',  
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
              variantQuantity: 0     
            }
          ],*/
    }
},
methods: {
    showText() {
        this.activeTransform =  'scale(1.07) skewX(-14deg)'
    },
    noText() {
        this.activeTransform =  'scale(1) skewX(-14deg)'
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
            <card :style="{backgroundImage: background1}">
            </card>
            <card></card>
            <card></card>
            <card></card>
            <card></card>
        </div>
    </div>`,
    data() {
        background1 = 'url(../img/rozklad.jpg)'
    },
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