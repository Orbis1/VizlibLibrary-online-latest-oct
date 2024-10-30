define([],function(){
	return {
		vizlibError: true,
		initialProperties: {},
		definition: {},
		snapshot: {
			canTakeSnapshot: false
		},
		paint: function ( $element, layout ) {
			$element.css('overflow-y','scroll');
			$element.css('overflow-x','hidden');
			$element.html('<!DOCTYPE HTML><html><head><title>Error!<\/title><style type=\"text\/css\">.vzb_message_vzb{background-size:40px 40px;background-image:linear-gradient(135deg, rgba(255, 255, 255, .05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .05) 50%, rgba(255, 255, 255, .05) 75%, transparent 75%, transparent);box-shadow:inset 0 -1px 0 rgba(255,255,255,.4);border:1px solid;width:99%;height:100%;color:#fff;padding:5px;display:table;animation:animate-bg 3s linear infinite;font-family:\'Helvetica\' !important}.vzb_error_vzb{height:100%;position:relative;overflow:scroll;background-color:#3C43B7;border-color:#3C43B7}.vzb_message_vzb .vzb_title_vzb{text-align:center;padding-bottom:0.2em}.vzb_title_vzb_title{font-size:22px;font-weight:bold}.vzb_title_vzb_subtitle{font-size:18px}.vzb_message_vzb h3{margin:0 0 5px 0}.vzb_message_vzb p{margin:0}@keyframes animate-bg{from{background-position:0 0}to{background-position:-80px 0}}.vzb_btn_vzb{-webkit-border-radius:8;-moz-border-radius:8;border-radius:1px;font-family:Arial;color:#fff;font-size:14;background:#df3e8c;padding:10px 20px 10px 20px;text-decoration:none}.vzb_btn_vzb:hover{background:rgba(223, 62, 140, 0.71);text-decoration:none}.vzb_content_vzb{display:table-cell;width:50%;font-size:14px;vertical-align:middle}.vzb_content-wrapper_vzb{margin:0 auto;table-layout:fixed;max-width:400px;text-align:center}.vzb_footer_vzb{margin-top:2em;text-align:left;font-size:10px;margin-bottom:0.5em}.vzb_upgradenow_vzb{margin-top:0.5em;text-align:center}.vzb_ico_vzb{text-align:center;margin-top:2em;margin-bottom:2em}<\/style><\/head><body><div class=\"vzb_error_vzb vzb_message_vzb\" title=\'Oops! Something went wrong!\'><div class=\'vzb_content_vzb\'><div class=\'vzb_content-wrapper_vzb\'><div class=\'vzb_title_vzb\'><p class=\'vzb_title_vzb_title\'>Oops!<\/p><p class=\'vzb_title_vzb_subtitle\' align=\'center\'>Something went wrong :(<\/p><\/div><div class=\'vzb_ico_vzb\' > <img style=\'width:30%;\' src=\'\/extensions\/VizlibMekkoChart\/resources\/vizlibgerror.png\'><\/div><div style=\'text-align:left\'><div style=\'padding-left:15px\'><h2>Check whether...<\/h2><ul style=\'padding-left:15px\'><li> You\'re connected to the Internet.<\/li><li> A firewall is blocking Vizlib\'s server requests.<\/li><li> Javascript is disabled in the browser settings.<\/li><li> Try to clear browser cookies and refresh the browser<\/li><\/ul><\/div><div class=\'vzb_footer_vzb\'> <i><span >Contact <a style=\'color:#fff\' href=\'mailto:support@vizlib.com\'>support@vizlib.com<\/a> for further assistance<\/span><\/i><\/div><\/div><\/div><\/div><\/div><\/body><\/html>');
		}
	}
})