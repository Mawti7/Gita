var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
  for (blink of tablinks) {
    blink.classList.remove("active-link");
  }

  for (bcontent of tabcontents) {
    bcontent.classList.remove("active-tab");
  }

  currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
sidemeu.style.right = "200px"; {
 for (blink of tabcontents) {
   blink.classlist.remove("active-tab");
  }
 }

const nav = document.querySelector(".navbar");
    window.onscroll = () => {
        if (window.scrollY > window.innerHeight / 2) { // Check if scrolled down 50vh
            nav.classList.add("discroll");
            console.log('dorr')
        } else {
            nav.classList.remove("discroll");
        }
    };
