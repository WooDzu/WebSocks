function uiParseLinks(links) {
	var a = $('<a>', {href: links.url}).html(links.name).appendTo('#nav');
	$('<li>').append(a).appendTo('#nav');
	$('#nav li:nth-child(2)').addClass('active');
}