
/*
	send form on the server
*/

$('form button').click(function(e) {
	e.preventDefault();
	
	const $inputs = $(this).closest('form').find('input');
	const $modal = $('#modal-send-form .modal-body tbody');

	$modal.html('');

	$modal.append(`<tr><td>Action: </td><td>${ $(this).closest('form').attr('action') }</td></tr>`);

	for (var i = 0; i < $inputs.length; i++) {
		$modal.append(`<tr>
										<td>${ $inputs.eq(i).attr('name') }</td>
										<td class="col-md-6">${ $inputs.eq(i).val() }</td>
									</tr>`);
	}
});