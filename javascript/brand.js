$(function() {
	AOS.init();
	$('.top-menu').click(function(){
		$('.expand-menu').toggle();
	});

    $('.ml-all').click(function(){
        $('.row').children().css('display', 'block');
    });
    /* work around menu sort items in brand page*/
    var menu_do_the_magic = function() {
        var class_ml_toggle = $(this).attr('class');
        if ($(this).siblings('.ml-hide').is(':hidden')) {
            $('.' + class_ml_toggle).siblings('.ml-hide').show();
            $('.expand-menu').show();
        } else {    
            $('.' + class_ml_toggle).siblings('.ml-hide').hide();
        }
        
    };

    var brand_do_the_magic = function(event) {
        var this_class = $(this).attr('class').split(' ')[0];
        // console.log(this_class);
        var product = event.data.product;
        var brand = event.data.brand;
        if($('.row').children(':hidden').length === 0) {
            $('.' + this_class).addClass('choosen-menu');
            $('[data-product][data-brand]').parent('.col-12').css('display', 'none');
            $('[data-product=' + product + '][data-brand=' + brand + ']').parent('.col-12').css('display', 'block');
        } else if ($('[data-product=' + product + '][data-brand=' + brand + ']').parent('.col-12').is(':hidden')) {
            $('.' + this_class).addClass('choosen-menu');
            $('[data-product=' + product + '][data-brand=' + brand + ']').parent('.col-12').css('display', 'block');
        } else {
            $('.' + this_class).removeClass('choosen-menu');
            $('[data-product=' + product + '][data-brand=' + brand + ']').parent('.col-12').css('display', 'none');
        }
        if ($('.row').children(':hidden').length === 97) {
            $('.row').children().css('display', 'block');
        }
    }

    $('.ml-toggle1').click(menu_do_the_magic);
    $('.ml-toggle2').click(menu_do_the_magic);
    $('.ml-toggle3').click(menu_do_the_magic);

    $('.show-mersofa').click({product: 'sofa', brand: 'mercury'}, brand_do_the_magic);
    $('.show-merbed').click({product: 'bed', brand: 'mercury'}, brand_do_the_magic);
    $('.show-mertable').click({product: 'table', brand: 'mercury'}, brand_do_the_magic);
    $('.show-merchair').click({product: 'chair', brand: 'mercury'}, brand_do_the_magic);
    $('.show-jusofa').click({product: 'sofa', brand: 'jupiter'}, brand_do_the_magic);
    $('.show-jubed').click({product: 'bed', brand: 'jupiter'}, brand_do_the_magic);
    $('.show-jutable').click({product: 'table', brand: 'jupiter'}, brand_do_the_magic);
    $('.show-juchair').click({product: 'chair', brand: 'jupiter'}, brand_do_the_magic);
    $('.show-masofa').click({product: 'sofa', brand: 'mars'}, brand_do_the_magic);
    $('.show-mabed').click({product: 'bed', brand: 'mars'}, brand_do_the_magic);
    $('.show-matable').click({product: 'table', brand: 'mars'}, brand_do_the_magic);
    $('.show-machair').click({product: 'chair', brand: 'mars'}, brand_do_the_magic);
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
            $(".contentPop").append('<div class="position-relative t-row pc-header"><div class="t-cell compHeader">Features</div></div>' 
                + '<div class="t-row pc-title"><div class="t-cell">Title</div></div>' 
                + '<div class="t-row pc-size"><div class="t-cell">Size</div></div>' 
                + '<div class="t-row pc-cover"><div class="t-cell">Cover</div></div>' 
                + '<div class="t-row pc-color"><div class="t-cell">Color</div></div>' 
                + '<div class="t-row pc-price"><div class="t-cell">Price</div></div>');

            for (var i = 0; i < list.length; i++) {
                /* this is to add the items to popup which are selected for comparision */
                product = $('.pro-item[data-id="' + list[i] + '"]');
                var image = $('[data-id=' + list[i] + ']').find(".pro-img-frame").attr('src');
                var title = $('[data-id=' + list[i] + ']').attr('data-title');
                /*appending to div*/
                $('.pc-header').append('<div class="compHeader t-cell"><img src="' + image + '" class="compareThumb"></div>');
                $('.pc-title').append('<div class="t-cell">' + title + '</div>');
                $('.pc-size').append('<div class="t-cell">' + $(product).data('size') + '</div>');
                $('.pc-cover').append('<div class="t-cell">' + $(product).data('cover') + '</div>');
                $('.pc-color').append('<div class="t-cell">' + $(product).data('color') + '</div>');
                $('.pc-price').append('<div class="t-cell">' + $(product).data('price') + '</div>');
            }
        }
        $(".modPos").show();
        $('.comparePan').hide();
        $('.nav-bar').hide();
        $('.banner').hide();
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
        $('.nav-bar').show();
        $('.banner').show();
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