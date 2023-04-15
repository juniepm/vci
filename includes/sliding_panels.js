/*  JavaScript Document                      */
/*  Written by Junnie Mondonedo  */
$(function(){
	var maxHeight = 0;
	var contentHeight = 0;
	var windowSize = $('.sp').width();
		
	//moving the tab element
	var myslideTab = $('.sp');
	$('.sp').remove();
	$(myslideTab).insertAfter('.fpo_text:eq(1)')

	//inline the img
	$('.panel').each(function(index){
			
		//console.log($('.panel_content').eq(index).height(), maxHeight);
		$(this).css({'left':(windowSize*index)+'px', width: windowSize+'px'});
		$('.panels').css('width',windowSize*(index+1)+'px');
		$('.panel_container').css('width',windowSize+'px');
		
	});
		
	$('.tabs li').each(function(e){
		$(this).click(function(){
			if (!($(this).hasClass('selected'))){
				$('.tabs li').removeClass('selected');
				$(this).addClass('selected');
				animatePanel($(this).index(), windowSize);
			}
			
		})
	});
	// initialize display second tab
	$('.tabs li:nth-child(2)').trigger('click');
});

function animatePanel(newIndex, newWidth){
	contentHeight = $('.panel:nth-child('+(newIndex+1)+')').find('.panel_content').height();//$('.panel_content').eq(newIndex).height();
	$('.panel').animate({'height': 15+contentHeight+'px'}, 1000);
	$('.panels').animate({'left':(newWidth*newIndex)*(-1)+'px'}, 1000);
	$('.panel_container').animate({'height': 15+contentHeight+'px'}, 1000);
}

