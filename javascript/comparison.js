/* function to be executed when product is selected for comparison*/
/// <reference path="jquery-1.12.3.js" />

$(document).ready(function(){
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
});