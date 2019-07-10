hexo.extend.filter.register('before_post_render', function(data) {
	// do not render the content wraped in <hide> </hide>
	var reHideText = /(\<hide\>[\S\s]*?\<\/hide\>)/g
    data.content = data.content.replace(reHideText, function (match, to_hide) {
		if (to_hide.length > 10) {
			return "<p>(Hidden Content)</p>"
		} else {
			return ""
		}
    });

    return data;
});