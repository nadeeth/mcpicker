(function ($) {
				
	$.fn.mcpicker = function(options) {

		var el = this;//To avoid scope issues
		options = options ? options : {};
		
		var colors = [
			"#FFFFFF",//White	
			"#C0C0C0",//Silver
			"#808080",//Gray
			"#000000",//Black
			"#FF0000",//Red
			"#800000",//Maroon
			"#FFFF00",//Yellow
			"#808000",//Olive
			"#00FF00",//Lime
			"#008000",//Green
			"#00FFFF",//Aqua
			"#008080",//Teal
			"#0000FF",//Blue
			"#000080",//Navy
			"#FF00FF",//Fuchsia
			"#800080"//Purple
		];

		var mcp_container = 'pcp_mobile_color_picker_container';
		var mcp_cell = 'pcp_mobile_color_picker_cell';

		$(el).after("<div id=\""+mcp_container+"\"></div>");

		$.each(colors, function(key, value){
			$('#'+mcp_container).append("<div class='"+mcp_cell+"' style='background-color:"+value+"'></div>");
		});
		$("#"+mcp_container).hide();

		$(el).focus(function(){
			$("#"+mcp_container).show("slow");
		});
		$("."+mcp_cell).click(function(){
			$("#"+mcp_container).hide("slow");
			$(el).val($(this).css('background-color'));
			$(el).css('background-color',$(this).css('background-color'));
		});

		//Styles
		$("#"+mcp_container).css({
			"position" : "absolute",
			"top" : "0",
			"left" : "0",
			"width" : "98%",
			"height" : "98%",
			"background" : "black",
			"padding" : "5px"
		});
		$("."+mcp_cell).css({
			"width" : "25%",//50px;
			"height" : "50px",
			"float" : "left",
		});
	};

}( jQuery ));