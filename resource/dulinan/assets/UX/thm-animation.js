/*
  Author       : Khusni Ridho
*/

(function($) {
  "use strict";

  let brWidth = $(window).innerWidth()
  function generalFunc() {
    $('.slider').css('height', $('.top-product-avatar .img-fluid').innerHeight())
  }

  $(window).ready(function () {
    $('.loading').addClass('hide')
    setInterval(() => {
      $('.loading').css('display', 'none')
    }, 1000)
    generalFunc()
  })
  let sliderWidth = 4
  let sliderGap = 20
  let widthItems = $('.card-slider').innerWidth()+sliderGap
  let containerSliderWidth = $('.items-slider').length > 0 ? $('.items-slider')[0].offsetWidth : 0

  if (brWidth < 767.98) {
    sliderWidth = 2
    $('.top-product-avatar').each(function (i, e) {
      $(e).append($('.top-product-avatar-action')[i])
    })
  }

  $(window).resize(function () {
    generalFunc()
    sliderWidth = 4
    sliderGap = 20
    widthItems = $('.card-slider').innerWidth()+sliderGap
    containerSliderWidth = $('.items-slider')[0].offsetWidth
  })
  let position = 0
  let i = 0
  
  $('.top-product-items').click(function () {
    let target = $(this).data('terget')
    $('.top-product-items').removeClass('active')
    $(this).addClass('active')
    avatarSliders(target)
    i = $('.thumnail-top-product .top-product-items.active').index()
  })

  setInterval(()=>{
    let target = $($('.top-product-items')[i++])
    $('.top-product-items').removeClass('active')
    target.addClass('active')
    target = target.data('terget')
    avatarSliders(target)
    if ($('.top-product-items').length <= i) {
      i = 0
    }
  }, 5000)

  function avatarSliders(elements) {
    let target = elements
    $('.top-product-avatar').removeClass(['next', 'prev', 'active'])
    $(target).prev().addClass('prev')
    if ($(target).prev().length == 0) {
      $($('.top-product-avatar')[$('.top-product-avatar').length-1]).addClass('prev')
    }
    $(target).next().addClass('next')
    if ($(target).next().length == 0) {
      $($('.top-product-avatar')[0]).addClass('next')
    }
    $(target).addClass('active')
  }
  
  $('.arrow-slider button').click(function(){
    let elements = this
    let tmpPost = position
    if ($(this).index() == 0) {
      $('.items-slider').each(function(){
        if ((position -= widthItems) >= 0) {
          this.scrollLeft = position
        }else{
          position = tmpPost
        }
      })
    }
    if ($(this).index() == 1) {
      $('.items-slider').each(function(){
        if ((position += widthItems) < containerSliderWidth) {
          this.scrollLeft = position
        }else{
          position = tmpPost
        }
      })
    }
  })

  setInterval(()=>{
    $('.items-slider').each(function(){
      if ((position += widthItems) < containerSliderWidth) {
        this.scrollLeft = position
      }else{
        position = 0
        this.scrollLeft = position
      }
    })
  }, 8000)

  $('.read-all').click(function () {
    let readMore = $(this).find('span')
    let readContent = $('.content-wrapping')
    if (readContent.hasClass('show')) {
      readContent.removeClass('show')
      readMore.html('Lihat Selengkapnya')
    }else{
      readContent.addClass('show')
      readMore.html('Lihat Lebih Sedikit')
    }
  })

})(jQuery);