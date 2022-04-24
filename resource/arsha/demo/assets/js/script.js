$(document).ready(function () {
  $('.preload img').delay(500).fadeOut(500);
  $('.preload .wev').delay(500).fadeOut(500);
  $('.preload').delay(1500).fadeOut(1000);
  $('input').val('');
  $('textarea').val('');
  resizepage();
  editOrUp();

  if (localStorage.getItem('themes') != '') {
    $('body').addClass(localStorage.getItem('themes'));
  }

  $('.toggle-switch').click(function () {
    $('body').toggleClass('dark');
    $('.fa-moon').toggleClass('hidden');
    $('.fa-sun').toggleClass('hidden');
    $('.fa-moon').toggleClass('unhide');
    $('.fa-sun').toggleClass('unhide');

    if ($('body')[0].classList.contains('dark')) {
      $('.text-mode').html('Ligth Mode');
      localStorage.setItem('themes', 'dark');
    } else {
      $('.text-mode').html('Dark Mode');
      localStorage.removeItem('themes', 'dark');
    }
  })

  $('.minimize-icon').click(function () {
    $('.sidebar').toggleClass('minimize');
  })

  $(".up").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  $(".custom-file-input").on("change", function() {
    let fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });


  $('.form-input').keyup(function () {
    if ($(this).val().length > 0) {
      $(this.labels[0]).addClass('label-active');
    } else {
      $(this.labels[0]).removeClass('label-active');
    }
  })

  $('.edit').on('click', function(){
    let id = $(this).data('id');

    $.ajax({
      url: 'http://localhost/tugas_akhir/tugas/reg/',
      method: 'POST',
      data: {id : id},
      dataType: 'json',

      success: function(data) {
        $('#id').val(id);
        $('.custom-file-label').html(data.img);
        $('#title').val(data.title);
        $($('#title')[0].labels[0]).addClass('label-active');
        $('#content').val(data.reading);
        $($('#content')[0].labels[0]).addClass('label-active');
      }
    });
  });

  // $('body').scrollspy({
  //   target: '#task',
  //   offset: 40
  // });

  //**================= Smooth nav on scroll or click =====================**//
  $('#to-task').click(function () {
    let target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top + 40)
      }, 1000, 'easeInOutExpo');
      return false;
    }
  });

  sowitheg();
})

$(window).scroll(function () {
  resizepage();
  editOrUp()
})

function editOrUp() {
  let item = Math.round($(document).scrollTop() + $('footer').innerHeight()) + 100;
  let target = Math.round(Math.round($('footer').offset().top - $('footer').innerHeight()));

  if (item > target) {
    $('.edit').fadeOut();
    $('.up').fadeIn();
  }else{
    $('.up').fadeOut();
    $('.edit').fadeIn();
  }
}

function resizepage() {
  if ($(this).innerWidth() < 767.98) {
    $('.sidebar').addClass('minimize');
  }
}

function sowitheg() {
  console.log('Lebar ' + $(this).innerWidth());
  console.log('Tinggi ' + $(this).innerHeight());
}