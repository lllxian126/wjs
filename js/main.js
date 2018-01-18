
$(function(){
	function resize(){
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth < 768;
		$('#main_ad > .carousel-inner > .item').each(function(i, item) {
			var $item = $(item);
			var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
			$item.css('backgroundImage', 'url(' + imgSrc + ')');
			if(isSmallScreen)
				$item.html('<img src="' + imgSrc + '" alt="" />');
			else
				$item.html('');
		});

		var $ulContainer = $('.nav-tabs');
	  var width = 30; 
	  $ulContainer.children().each(function(index, element) {
	    width += element.clientWidth;
	  });
	  if (width > $(window).width()) {
	    $ulContainer
	      .css('width', width)
	      .parent().css('overflow-x', 'scroll');
	  }
	}
	$(window).on('resize', resize).trigger('resize');
	
	$('[data-toggle="tooltip"]').tooltip();

	var $newsTitle = $('.news-title');
	$('#news .nav-pills a').on('click', function(){
		var $this = $(this);
		$newsTitle.html($this.data("title"));
	});


	// 获取元素，注册手指滑动时间
	var $carousels = $('.carousel');
  var startX, endX;
  var offset = 50;
  // 注册滑动事件
  $carousels.on('touchstart', function(e) {
    // 手指触摸开始时记录一下手指所在的坐标X
    startX = e.originalEvent.touches[0].clientX;
  });
  $carousels.on('touchmove', function(e) {
    // 变量重复赋值
    endX = e.originalEvent.touches[0].clientX;
  });
	$carousels.on('touchend', function(e) {
    var distance = Math.abs(endX - startX);
    if(distance > offset)
    	$(this).carousel(endX > startX ? 'prev' : 'next');
  });
});