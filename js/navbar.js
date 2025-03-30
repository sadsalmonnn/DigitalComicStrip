
window.addEventListener('DOMContentLoaded', function () {
  let navbar = document.getElementsByTagName("nav")[0];
  let creditstab = document.getElementsByClassName("popup")[0];
  let blackcover = document.getElementsByClassName("cover")[0];

  let authortab = document.getElementsByClassName("popup")[1];

  let returnicons = document.getElementsByClassName("return");


  blackcover.addEventListener("click", function (e) {
    blackcover.style.zIndex = "-1";
    creditstab.style.zIndex = "-1";
    authortab.style.zIndex = "-1";
    creditstab.style.opacity = "0";
    authortab.style.opacity = "0";
  });


  navbar.children[1].addEventListener("click", function (e) {
    blackcover.style.zIndex = "2";
    creditstab.style.zIndex = "4";
    creditstab.style.opacity = "1";
    authortab.style.opacity = "1";
  });

  navbar.children[2].addEventListener("click", function (e) {
    blackcover.style.zIndex = "2";
    authortab.style.zIndex = "4";
    creditstab.style.opacity = "1";
    authortab.style.opacity = "1";
  });


  for (let i = 0; i < returnicons.length; i++) {
    returnicons[i].addEventListener("click", function (e) {
      blackcover.style.zIndex = "-1";
      creditstab.style.zIndex = "-1";
      authortab.style.zIndex = "-1";
      creditstab.style.opacity = "0";
      authortab.style.opacity = "0";
    });
  }
});