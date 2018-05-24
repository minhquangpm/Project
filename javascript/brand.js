$(function() {
	AOS.init();
	$('.top-menu').click(function(){
		$('.expand-menu').toggle();
	});

    $('.ml-all').click(function(){
        $('.brand-product').children().show();
    });

    var menu_do_the_magic = function() {
        var class_ml_toggle = $(this).attr('class');
        if ($(this).siblings('.ml-hide').is(':hidden')) {
            $('.' + class_ml_toggle).siblings('.ml-hide').show();
            $('.expand-menu').show();
        } else {    
            $('.' + class_ml_toggle).siblings('.ml-hide').hide();
        }
        
    }

    $('.ml-toggle1').click(menu_do_the_magic);
    $('.ml-toggle2').click(menu_do_the_magic);
    $('.ml-toggle3').click(menu_do_the_magic);

    /* process show/hide in brand page */
    var brand_do_the_magic = function(){
        var pro_row = $(this).attr('class').split('-')[1].split(' ')[0];
        if($('.brand-product').children(':hidden').length === 0) {
            $('.show-' + pro_row).addClass('choosen-menu');
            $('.' + pro_row).siblings().hide();
            $('.' + pro_row).show();
        }else if ($('.' + pro_row).is(':hidden')) {
            $('.show-' + pro_row).addClass('choosen-menu');
            $('.' + pro_row).show();
        } else {
            $('.show-' + pro_row).removeClass('choosen-menu');
            $('.' + pro_row).hide();
        }
        if ($('.brand-product').children(':visible').length === 0) {
            $('.brand-product').children().show();
        }
    };

    $('.show-mersofa').click(brand_do_the_magic);
    $('.show-merbed').click(brand_do_the_magic);
    $('.show-mertable').click(brand_do_the_magic);
    $('.show-merchair').click(brand_do_the_magic);
    $('.show-jusofa').click(brand_do_the_magic);
    $('.show-jubed').click(brand_do_the_magic);
    $('.show-jutable').click(brand_do_the_magic);
    $('.show-juchair').click(brand_do_the_magic);
    $('.show-masofa').click(brand_do_the_magic);
    $('.show-mabed').click(brand_do_the_magic);
    $('.show-matable').click(brand_do_the_magic);
    $('.show-machair').click(brand_do_the_magic);
});



/* function to be executed when product is selected for comparison*/
/// <reference path="jquery-1.12.3.js" />

(function ($) {
	
    var list = [];

    /* function to be executed when product is selected for comparision*/

    $(document).on('click', '.addToCompare', function () {
        $(".comparePanle").show();
        var productID = $(this).parents('.pro-item').attr('data-id');

        var inArray = $.inArray(productID, list);
        if (inArray < 0) {
            if (list.length > 2) {
                // $("#WarningModal").show();
                // $("#warningModalClose").click(function () {
                //     $("#WarningModal").hide();
                // });
                return;
            }

            if (list.length < 3) {
                list.push(productID);
                var displayTitle = $(this).parents('.pro-item').attr('data-title');
                var image = $(this).parents('.pro-item').find('.pro-img-frame').attr('src');
                $(".comparePan").append('<div id="' + productID + '" class="position-relative pro-compare w3-margin-bottom   w3-col l3 m4 s4"><div class="w3-white pro-compare"><a class="selectedItemCloseBtn "></a><img src="' + image + '" alt="image" style="height:100px;"/><p id="' + productID + '" class="pro-compare1">' + displayTitle + '</p></div></div>');
                
            }
        } else {
            list.splice($.inArray(productID, list), 1);
            var prod = productID.replace(" ", "");
            $('#' + prod).remove();
            hideComparePanel();	
        }

        /* fix this to work with storage */
        if (list.length > 1) {
            $(".cmprBtn").addClass("active");
            $(".cmprBtn").removeAttr('disabled');
        } else {
            $(".cmprBtn").removeClass("active");
            $(".cmprBtn").attr('disabled', '');
        }

    });
    /*function to be executed when compare button is clicked*/
    $(document).on('click', '.cmprBtn', function () {
        if ($(".cmprBtn").hasClass("active")) {
            /* this is to print the  features list statically*/
            $(".contentPop").append('<div class="w3-col s3 m3 l3 compareItemParent position-relative">' + '<ul class="product">' + '<li class=" position-relative compHeader"><p class="w3-display-middle">Features</p></li>' + '<li>Title</li>' + '<li>Size</li>' + '<li>Cover</li>' + '<li>Color</li>' + '<li>Price</li></ul>' + '</div>');

            for (var i = 0; i < list.length; i++) {
                /* this is to add the items to popup which are selected for comparision */
                product = $('.pro-item[data-id="' + list[i] + '"]');
                var image = $('[data-id=' + list[i] + ']').find(".pro-img-frame").attr('src');
                var title = $('[data-id=' + list[i] + ']').attr('data-title');
                /*appending to div*/
                $(".contentPop").append('<div class="w3-col s3 m3 l3 compareItemParent position-relative">' + '<ul class="product">' + '<li class="compHeader"><img src="' + image + '" class="compareThumb"></li>' + '<li>' + title + '</li>' + '<li>' + $(product).data('size') + '</li>' + '<li>' + $(product).data('cover') + '<li>' + $(product).data('color') + '</li>' + '<li>' + $(product).data('price') + '</li>' + '</ul>' + '</div>');
            }
        }
        $(".modPos").show();
        $('.comparePan').hide();
    });

    /* function to close the comparision popup */
    $(document).on('click', '.closeBtn', function () {
        $(".contentPop").empty();
        $(".comparePan").empty();
        $(".comparePanle").hide();
        $(".modPos").hide();
        $(".cmprBtn").attr('disabled', '');
        list.length = 0;
        $(".rotateBtn").toggleClass("rotateBtn");
        $('.comparePan').show();
    });

    /*function to remove item from preview panel*/
    $(document).on('click', '.selectedItemCloseBtn', function () {

        var test = $(this).siblings("p").attr('id');
        $('[data-id=' + test + ']').find(".addToCompare").click();
        hideComparePanel();
    });

    function hideComparePanel() {
        if (!list.length) {
            $(".comparePan").empty();
            $(".comparePanle").hide();
        }
    }
})(jQuery);