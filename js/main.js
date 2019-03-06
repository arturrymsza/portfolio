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
<div class="card" :style="{transform: activeScale}" :class="{ project: openProject }" @mouseover="showText" @mouseleave="noText" @click="project">
  <slot name="header"></slot>
  <slot name="content"></slot>
  <p>test</p>
</div>
`,
data() {
    return {
        activeScale: 'scale(1)',
        openProject: false
    }
},
methods: {
    showText() {
        this.activeScale =  'scale(1.07)'
    },
    noText() {
        this.activeScale =  'scale(1)'
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
                <h2 slot="header">Tytuł test</h2>
                <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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