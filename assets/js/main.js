// 섹션별 페이지 스크롤
var $html = $('html');
var $paginationDot = $('.pagination__dot')
var page = 1;
var lastPage = $('section').length;
$html.animate({srollTop:0}, 10);

$(window).on('wheel mousewheel DOMMouseScroll', function(e){
    if ( $html.is(":animated") ) return;
    if ( e.originalEvent.deltaY > 0 ) {
        if ( page == lastPage ) return;
        page++;
    } else if ( e.originalEvent.deltaY < 0 ){
        if ( page == 1 ) return;
        page--;
    }

    $paginationDot.removeClass('active')
    $paginationDot.eq(page - 1).addClass('active')

    var posTop = ( page - 1 ) * $(window).height();
    $html.animate({scrollTop : posTop}) ;
})

// portfolio 영역
var swiper = new Swiper(".portfolio__swiper", {
    spaceBetween: 80,
    slidesPerView: 'auto',
});




