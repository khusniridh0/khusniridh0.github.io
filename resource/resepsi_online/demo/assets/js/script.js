(function($) {
  "use strict";

  $('.delete_file').hide();
  $(document).ready(function () {
    $('input').val('');
    $('.form-area').val('')
  })

  $('.liks').click(function () {
    $(this).toggleClass('active');
  })

  $('.lanjut').click(function () {
    $(this).parent().parent().parent().fadeOut();
  })

  $('.form-control').keyup(function () {
    if ($(this).val().length > 0) {
      $(this.labels).addClass('active');
    } else {
      $(this.labels).removeClass('active');
    }
  })
  $('.form-area').keyup(function () {
    if ($(this).val().length > 0) {
      $(this).next().addClass('active');
    } else {
      $(this).next().removeClass('active');
    }
  })

  $('.upload_hide').change(function(event) {
    let fileTmp = URL.createObjectURL(event.target.files[0])

    let elntarget = $('div[id='+$(this).data('id')+']');

    elntarget.children('label').children('div').children('img').attr('src', fileTmp)
    elntarget.children('button').show()

    elntarget.children('button').click(function() {
      elntarget.children('label').children('div').children('img').attr('src','')
      elntarget.children('button').hide();
    })
  })

  $('#tanyacerita').change(function () {
    if ($('#tanyacerita:checked').val() != undefined) {
      $('.canva').fadeOut(500)
      $('.canva').next().fadeOut(500)
    }else{
      $('.canva').fadeIn(500)
      $('.canva').next().fadeIn(500)
    }
  })

  $('#tanyagaleri').change(function () {
    if ($('#tanyagaleri:checked').val() != undefined) {
      $('.forms-image').fadeOut(500)
      $('.forms-image').next().fadeOut(500)
    }else{
      $('.forms-image').fadeIn(500)
      $('.forms-image').next().fadeIn(500)
    }
  })

  $('.costom-hide').change(function(event) {
    let fileTmp = URL.createObjectURL(event.target.files[0])
    let img = `<div class="media">
    <img src="` + fileTmp + `" class="mr-3">
    <div class="media-body">
    <h6 class="pt-2">Media heading</h6>
    <button type="button" class="btn btn-custom delete_piture"> Hapus File</button>
    </div>
    </div>`;
    $('.canva').prepend(img);

    $('.delete_piture').click(function () {
      $(this).parent().parent().remove();
    })
  })

  $('#tambah-cerita').click(function () {
    const elmn = `<div class="forms">
    <input type="text" class="form-control" id="tanggal2">
    <label for="tanggal2">Tanggal</label>
    </div>
    <div class="forms">
    <input type="text" class="form-control" id="judul">
    <label for="judul">Judul</label>
    </div>
    <div class="form-textarea">
    <textarea class="form-area" id="cerita"></textarea>
    <label for="cerita">Ceritakan sesuatu . . .</label>
    </div>`

    $('.canva').append(elmn);

    $('.form-control').keyup(function () {
      if ($(this).val().length > 0) {
        $(this).next().addClass('active');
      } else {
        $(this).next().removeClass('active');
      }
    })

    $('.form-area').keyup(function () {
      if ($(this).val().length > 0) {
        $(this).next().addClass('active');
      } else {
        $(this).next().removeClass('active');
      }
    })
  })


})(jQuery);