$(document)
		.ready(
				function() {

					load_json_data('judet');

					function load_json_data(id, parent_id) {
						var html_code = '';
						$.get('js-css-custom_files/judet_localitate.json', function(data) {

							html_code += '<option value="">Selectati ' + id
									+ '</option>';
							$.each(data, function(key, value) {
								if (id == 'judet') {
									if (value.parent_id == '0') {
										html_code += '<option value="'
												+ value.id + '">' + value.name
												+ '</option>';
									}
								} else {
									if (value.parent_id == parent_id) {
										html_code += '<option value="'
												+ value.id + '">' + value.name
												+ '</option>';
									}
								}
							});
							$('#' + id).html(html_code);
						});

					}

					$(document)
							.on(
									'change',
									'#judet',
									function() {
										var judet_id = $(this).val();
										if (judet_id != '') {
											load_json_data('uat', judet_id);
										} else {
											$('#uat')
													.html(
															'<option value="">Selectati uat</option>');
											$('#localitate')
													.html(
															'<option value="">Selectati localitate</option>');
										}
									});
					$(document)
							.on(
									'change',
									'#uat',
									function() {
										var uat_id = $(this).val();
										if (uat_id != '') {
											load_json_data('localitate', uat_id);
										} else {
											$('#localitate')
													.html(
															'<option value="">Selectati localitate</option>');
										}
									});
				});