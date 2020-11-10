
/*smooth scroll*/
$(document).ready(function(){
  $(".scroll").on('click', function(event) {
    if (this.hash !== "") {
      var sScroll = this.hash;
      $('html, body').animate({
        scrollTop: $(sScroll).offset().top
      }, 1000 , 'easeInOutExpo');
    }
      event.preventDefault();
  });
});


/*ganti bg-nav*/
$(document).ready(function(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if (wScroll >= 695) {
            $('nav').addClass('bg-navbar');
        }else{
            $('nav').removeClass('bg-navbar');
        }

        $('.fix').css({
                'transform': 'translate(0px, '+wScroll/2+'px)'                
            });
    });

});


/*modal*/
$('.dat').on('click', function(){
  var dataGambar = $(this).attr('data');
    $('.img').empty();
    $('.img').append("<img src='../gambar/galery/"+dataGambar+"' class='img-fluid' alt='Responsive image'>");
});


// $(document).ready(function() {
//   var lebar = $(window).width();
//   var tinggi = $(window).height();
//   if ( lebar > tinggi) total = lebar - tinggi
//     else if (tinggi > lebar) total = tinggi - lebar
//   // total = total - 20;
//   $('.modal-body').css("height", total+'px');
//   console.log(total);

  
// });


/*validation*/
/*(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();*/


/*validationCheck*/
/*$('.form-check-input').on('click', function(){
    $('.uncheck').css({
        'border': '1px solid #28A745'
    });
});
*/

/*hide login*/

/*$('.baru').on('click', function(){
  $('#login').addClass('none');
  $('#daftar').removeClass('none');
  
});

$('.lama').on('click', function(){
  $('#daftar').addClass('none');
  $('#login').removeClass('none');
  
});*/

/*hapus pesan*/

/*setTimeout(
    function(){
      $('.alert').remove();
    }, 10000);*/