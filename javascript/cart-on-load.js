$(function() {
	var row = $('.append-cart');
	var pCart = localStorage.getItem('cart');
	pCart = JSON.parse(pCart);
	$.each(pCart, function (key, data) {
		var title = pCart[key].title;
		var price = parseInt(pCart[key].price.split('vnd')[0]);
		var image = pCart[key].image;
		var count = pCart[key].count;
	    row.append('<tr>'
	    	+ '<td><img class="resize-img" src="../image' + image + '"></td>'
	    	+ '<td>' + key + '</td>'
	    	+ '<td>' + title + '</td>'
	    	+ '<td>' + price + 'vnd</td>'
	    	+ '<td>' + count + '</td>'
	    	+ '<td>' + price * count + 'vnd</td>'
	    	// + '<td><button class="btn">Pay</button></td>'
	    	+ '<td><button id="' + key + '" class="btn red-bg removeCartItem">Remove</button></td>'
	    	+ '</tr>')
	});

	$('.removeCartItem').click(function() {
		var id = $(this).attr('id');
		var pCart = localStorage.getItem('cart');
		pCart = JSON.parse(pCart);
		delete pCart[id];
		console.log(pCart);
		if (jQuery.isEmptyObject(pCart)) {
			localStorage.clear();
		} else {
			pCart = JSON.stringify(pCart);
			localStorage.setItem('cart', pCart);
		};
		$(this).parents('tr').remove();
	});

	$('.back-shop').click(function() {
		window.history.back();
	})
})