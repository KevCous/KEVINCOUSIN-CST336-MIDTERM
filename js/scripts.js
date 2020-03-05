$('form').submit(function() {
	$.ajax({
		url: 'https://openlibrary.org/api/books',
		dataType: 'json',
		data: {
			bibkeys: 'ISBN:' + $('input').val(),
			format: 'json',
			jscmd: 'data'
		},
		success: function(result, state) {
			result = result['ISBN:' + $('input').val()];
			$('#Result').html(
				'<div class="row">' +
					'<img class="col-sm-3" src="' +
					result.cover.large +
					'" id="cover" alt="cover">' +
					'<div class="col-sm-4"id="info">' +
					'Title: ' +
					result.title +
					'<br>' +
					'Author: ' +
					result.authors[0].name +
					'<br>' +
					'Publish: ' +
					result.publish_date +
					'<br>' +
					'Publisher: ' +
					result.publishers[0].name +
					'<br>' +
					'ISBN: ' +
					$('input').val() +
					'<br>' +
					'Pages: ' +
					result.number_of_pages
			);
		},
		error: function(error) {
			alert(error);
		}
	});
	return true;
});
