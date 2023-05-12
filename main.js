//რესპონსივში ბურგერ-მენიუ
let menu = document.querySelector('.burger-menu');
menu.onclick = function(){
  let navbar = document.querySelector('.nav-bar');
  navbar.classList.toggle('active');
}


//ენის არჩევა (jQuery)
$("select").click(function() {
  var open = $(this).data("isopen");
  if(open) {
  window.location.href = $(this).val()
  }
  $(this).data("isopen", !open);
  });


//სქროლის ღილაკი
  let toTop = document.querySelector('.to-top');
toTop.style.display = 'none';
window.addEventListener('scroll', () =>{
  if(this.scrollY > 300){
    toTop.style.display = 'flex';
  }else{
    toTop.style.display = 'none';
  }
})
toTop.onclick = function (){
  window.scrollTo({
    top:0
  });
}