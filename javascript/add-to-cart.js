$(function() {
	showCartIfExists();
	$('.addToCart').click(function() {
		updateCart();
		var pCount = 1;
		var pID = $(this).parents('.pro-item').attr('data-id');
		var pTitle = $(this).parents('.pro-item').attr('data-title');
		var pPrice = $(this).parents('.pro-item').attr('data-price');
		var pImage = $(this).parents('.pro-item').find('img').attr('src').split('image')[1];
		// console.log(pImage);
		if (localStorage.getItem('cart')) {
			var pCart = JSON.parse(localStorage.getItem('cart'));
			if (pCart && pCart[pID]) {
				pCount = pCart[pID].count + 1;
				// console.log(pID);
				var pData = {[pID]: {"title": pTitle, "price": pPrice, "image": pImage, "count": pCount}};
				// extend pData to pCart
				$.extend(pCart, pData);
				var pCart = JSON.stringify(pCart);
				// console.log(pCart);
			} else {
				var pData = {[pID]: {"title": pTitle, "price": pPrice, "image": pImage, "count": pCount}};
				$.extend(pCart, pData);
				var pCart = JSON.stringify(pCart);
				// console.log(pCart);
			}
		} else {
			var pCart = '{"' + pID + '" : {"title":"' + pTitle + '", "price":"' + pPrice + '", "image":"' + pImage + '", "count":' + pCount + '}}';
		}
		localStorage.setItem('cart', pCart);
	});

	function showCartIfExists() {
		//show counter if this is the first item added to the cart
		var cart = $('.bag-item');
		// ( !cart.hasClass('items-added') ) && cart.addClass('items-added'); 
		var cartItems = cart.find('span');
		// check localStorage for total items added
		if (!cart.hasClass('items-added')) {
			var pCart = localStorage.getItem('cart');
			if (pCart) {
				pCart = JSON.parse(pCart);
				var countList = [],
					sum = 0;
				$.each(pCart, function (key, data) {
				    var count = pCart[key].count;
				    countList.push(count);
				});
				for (var i = 0; i < countList.length; i++) {
		    		sum += countList[i] << 0;
				}
				cartItems.text(sum);
				cart.addClass('items-added');
			}
		}
	};

	function updateCart() {
		var cart = $('.bag-item');
		var cartItems = cart.find('span');
		var pCart = localStorage.getItem('cart');
		if (pCart) {
			pCart = JSON.parse(pCart);
			var countList = [],
				sum = 1;
			$.each(pCart, function (key, data) {
			    var count = pCart[key].count;
			    countList.push(count);
			});
			for (var i = 0; i < countList.length; i++) {
	    		sum += countList[i];
			}
			cartItems.text(sum);
			cart.addClass('items-added');
		} else {
			var text = parseInt(cartItems.text()) + 1;
			cartItems.text(text);
			cart.addClass('items-added');
		}
	}
});