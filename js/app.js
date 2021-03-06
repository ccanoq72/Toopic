
var  btnMenuOpen = document.getElementById("btnMenuOpen"),
     btnMenuClose = document.getElementById("btnMenuClose"),
     menuResponsive = document.getElementById("menuBar"),
     enlaces = document.getElementById("enlaces");

     
     btnMenuOpen.addEventListener("click", function () {
          menuResponsive.classList.add("active");
     });

     
     btnMenuClose.addEventListener("click", function () {
          menuResponsive.classList.remove("active");
     });

    
     enlaces.addEventListener("click", function () {
          menuResponsive.style.transitionDelay = "0.5s";
          menuResponsive.classList.remove("active");
     });




var  contenedor = document.querySelector('.slider'),
     btnIzquierdo = document.getElementById("btn-izquierda"),
     btnDerecho = document.getElementById("btn-derecha");

     
     btnDerecho.addEventListener("click", function () {
          contenedor.scrollLeft += contenedor.offsetWidth;  
     });

     
     btnIzquierdo.addEventListener("click", function () {
          contenedor.scrollLeft -= contenedor.offsetWidth;  
     });




var formulario = document.getElementById("formulario");

     function validar(e) {
          var  inputNombre = document.getElementById("nombre"),
               inputEmail = document.getElementById("email"),
               inpuComents = document.getElementById("comentarios"),
               alertSuccess = document.getElementById("alertSuccess"),
               alertError = document.getElementById("alertError");

          if (inputNombre.value == 0 || inputEmail.value == 0 || inpuComents.value == 0) {
               e.preventDefault();
               alertError.classList.remove("hide");
               alertError.classList.add("show");

               setTimeout(function() {
                    alertError.classList.remove("show");
                    alertError.classList.add("hide"); 
               }, 2000);     
          }else{
               e.preventDefault();
               alertSuccess.classList.remove("hide");
               alertSuccess.classList.add("show");

               setTimeout(function() {
                    alertSuccess.classList.remove("show");
                    alertSuccess.classList.add("hide"); 
               }, 2000);               
               inputNombre.value = "";
               inputEmail.value = "";
               inpuComents.value = "";
          }
     }



formulario.addEventListener("submit", validar);





var  btnTop = document.getElementById("btn-top"),
     logo = document.getElementById("logo");



window.addEventListener("scroll", function (){
     var  scroll = document.documentElement.scrollTop,
          fullSize = document.documentElement.offsetHeight,
          sizeVP = document.documentElement.clientHeight;


     if (scroll > 100) {
          btnTop.classList.add("show");
     }else{
          btnTop.classList.remove("show");
     }


     if (fullSize == (scroll + sizeVP)) {
         btnTop.classList.add("scrollFinal"); 
     }else{
          btnTop.classList.remove("scrollFinal");
     }
});



btnTop.addEventListener("click", function () {
     window.scrollTo(0,0);
});


logo.addEventListener("click", function () {
     window.scrollTo(0,0);
});