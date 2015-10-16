(function ($) {
				
	$.fn.mcpicker = function(options) {

		var el = this;//To avoid scope issues
		options = options ? options : {};//Options
		
		//Colors
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
		
		var colors = [
			{ name:"lightsalmon", code:"#FFA07A"},
			{ name:"salmon	", code:"#FA8072"},
			{ name:"darksalmon	", code:"#E9967A"},
			{ name:"lightcoral	", code:"#F08080"},
			{ name:"indianred	", code:"#CD5C5C"},
			{ name:"crimson	", code:"#DC143C"},
			{ name:"firebrick	", code:"#B22222"},
			{ name:"red	", code:"#FF0000"},
			{ name:"darkred	", code:"#8B0000"},
			{ name:"coral	", code:"#FF7F50"},
			{ name:"tomato	", code:"#FF6347"},
			{ name:"orangered	", code:"#FF4500"},
			{ name:"gold	", code:"#FFD700"},
			{ name:"orange	", code:"#FFA500"},
			{ name:"darkorange	", code:"#FF8C00"},
			{ name:"lightyellow	", code:"#FFFFE0"},
			{ name:"lemonchiffon	", code:"#FFFACD"},
			{ name:"lightgoldenrodyellow	", code:"#FAFAD2"},
			{ name:"papayawhip	", code:"#FFEFD5"},
			{ name:"moccasin	", code:"#FFE4B5"},
			{ name:"peachpuff	", code:"#FFDAB9"},
			{ name:"palegoldenrod	", code:"#EEE8AA"},
			{ name:"khaki	", code:"#F0E68C"},
			{ name:"darkkhaki	", code:"#BDB76B"},
			{ name:"yellow	", code:"#FFFF00"},
			{ name:"lawngreen	", code:"#7CFC00"},
			{ name:"chartreuse	", code:"#7FFF00"},
			{ name:"limegreen	", code:"#32CD32"},
			{ name:"lime	", code:"#00FF00"},
			{ name:"forestgreen	", code:"#228B22"},
			{ name:"green	", code:"#008000"},
			{ name:"darkgreen	", code:"#006400"},
			{ name:"greenyellow	", code:"#ADFF2F"},
			{ name:"yellowgreen	", code:"#9ACD32"},
			{ name:"springgreen	", code:"#00FF7F"},
			{ name:"mediumspringgreen	", code:"#00FA9A"},
			{ name:"lightgreen	", code:"#90EE90"},
			{ name:"palegreen	", code:"#98FB98"},
			{ name:"darkseagreen	", code:"#8FBC8F"},
			{ name:"mediumseagreen	", code:"#3CB371"},
			{ name:"seagreen	", code:"#2E8B57"},
			{ name:"olive	", code:"#808000"},
			{ name:"darkolivegreen	", code:"#556B2F"},
			{ name:"olivedrab	", code:"#6B8E23"},
			{ name:"lightcyan	", code:"#E0FFFF"},
			{ name:"cyan	", code:"#00FFFF"},
			{ name:"aqua	", code:"#00FFFF"},
			{ name:"aquamarine	", code:"#7FFFD4"},
			{ name:"mediumaquamarine	", code:"#66CDAA"},
			{ name:"paleturquoise	", code:"#AFEEEE"},
			{ name:"turquoise	", code:"#40E0D0"},
			{ name:"mediumturquoise	", code:"#48D1CC"},
			{ name:"darkturquoise	", code:"#00CED1"},
			{ name:"lightseagreen	", code:"#20B2AA"},
			{ name:"cadetblue	", code:"#5F9EA0"},
			{ name:"darkcyan	", code:"#008B8B"},
			{ name:"teal	", code:"#008080"},
			{ name:"powderblue	", code:"#B0E0E6"},
			{ name:"lightblue	", code:"#ADD8E6"},
			{ name:"lightskyblue	", code:"#87CEFA"},
			{ name:"skyblue	", code:"#87CEEB"},
			{ name:"deepskyblue	", code:"#00BFFF"},
			{ name:"lightsteelblue	", code:"#B0C4DE"},
			{ name:"dodgerblue	", code:"#1E90FF"},
			{ name:"cornflowerblue	", code:"#6495ED"},
			{ name:"steelblue	", code:"#4682B4"},
			{ name:"royalblue	", code:"#4169E1"},
			{ name:"blue	", code:"#0000FF"},
			{ name:"mediumblue	", code:"#0000CD"},
			{ name:"darkblue	", code:"#00008B"},
			{ name:"navy	", code:"#000080"},
			{ name:"midnightblue	", code:"#191970"},
			{ name:"mediumslateblue	", code:"#7B68EE"},
			{ name:"slateblue	", code:"#6A5ACD"},
			{ name:"darkslateblue	", code:"#483D8B"},
			{ name:"lavender	", code:"#E6E6FA"},
			{ name:"thistle	", code:"#D8BFD8"},
			{ name:"plum	", code:"#DDA0DD"},
			{ name:"violet	", code:"#EE82EE"},
			{ name:"orchid	", code:"#DA70D6"},
			{ name:"fuchsia	", code:"#FF00FF"},
			{ name:"magenta	", code:"#FF00FF"},
			{ name:"mediumorchid	", code:"#BA55D3"},
			{ name:"mediumpurple	", code:"#9370DB"},
			{ name:"blueviolet	", code:"#8A2BE2"},
			{ name:"darkviolet	", code:"#9400D3"},
			{ name:"darkorchid	", code:"#9932CC"},
			{ name:"darkmagenta	", code:"#8B008B"},
			{ name:"purple	", code:"#800080"},
			{ name:"indigo	", code:"#4B0082"},
			{ name:"pink	", code:"#FFC0CB"},
			{ name:"lightpink	", code:"#FFB6C1"},
			{ name:"hotpink	", code:"#FF69B4"},
			{ name:"deeppink	", code:"#FF1493"},
			{ name:"palevioletred	", code:"#DB7093"},
			{ name:"mediumvioletred	", code:"#C71585"},
			{ name:"white	", code:"#FFFFFF"},
			{ name:"snow	", code:"#FFFAFA"},
			{ name:"honeydew	", code:"#F0FFF0"},
			{ name:"mintcream	", code:"#F5FFFA"},
			{ name:"azure	", code:"#F0FFFF"},
			{ name:"aliceblue	", code:"#F0F8FF"},
			{ name:"ghostwhite	", code:"#F8F8FF"},
			{ name:"whitesmoke	", code:"#F5F5F5"},
			{ name:"seashell	", code:"#FFF5EE"},
			{ name:"beige	", code:"#F5F5DC"},
			{ name:"oldlace	", code:"#FDF5E6"},
			{ name:"floralwhite	", code:"#FFFAF0"},
			{ name:"ivory	", code:"#FFFFF0"},
			{ name:"antiquewhite	", code:"#FAEBD7"},
			{ name:"linen	", code:"#FAF0E6"},
			{ name:"lavenderblush	", code:"#FFF0F5"},
			{ name:"mistyrose	", code:"#FFE4E1"},
			{ name:"gainsboro	", code:"#DCDCDC"},
			{ name:"lightgray	", code:"#D3D3D3"},
			{ name:"silver	", code:"#C0C0C0"},
			{ name:"darkgray	", code:"#A9A9A9"},
			{ name:"gray	", code:"#808080"},
			{ name:"dimgray	", code:"#696969"},
			{ name:"lightslategray	", code:"#778899"},
			{ name:"slategray	", code:"#708090"},
			{ name:"darkslategray	", code:"#2F4F4F"},
			{ name:"black	", code:"#000000"},
			{ name:"cornsilk	", code:"#FFF8DC"},
			{ name:"blanchedalmond	", code:"#FFEBCD"},
			{ name:"bisque	", code:"#FFE4C4"},
			{ name:"navajowhite	", code:"#FFDEAD"},
			{ name:"wheat	", code:"#F5DEB3"},
			{ name:"burlywood	", code:"#DEB887"},
			{ name:"tan	", code:"#D2B48C"},
			{ name:"rosybrown	", code:"#BC8F8F"},
			{ name:"sandybrown	", code:"#F4A460"},
			{ name:"goldenrod	", code:"#DAA520"},
			{ name:"peru	", code:"#CD853F"},
			{ name:"chocolate	", code:"#D2691E"},
			{ name:"saddlebrown	", code:"#8B4513"},
			{ name:"sienna	", code:"#A0522D"},
			{ name:"brown	", code:"#A52A2A"},
			{ name:"maroon	", code:"#800000"},
		];

		//Picker elements
		var mcp_container = 'pcp_mobile_color_picker_container_' + $(el).prop('id');
		var mcp_cell = 'pcp_mobile_color_picker_cell_' + $(el).prop('id');

		//Create the color picker
		$(el).after("<div id=\""+mcp_container+"\"></div>");
		$.each(colors, function(key, value){
			$('#'+mcp_container).append("<div data-color=\""+value.code+"\" class='"+mcp_cell+"' style='background-color:"+value.code+"'></div>");
		});
		$("#"+mcp_container).hide();

		//Show the picker on fucus
		$(el).focus(function(){
			$(el).blur();//Unfocus the element 
			$("#"+mcp_container).show("slow");
		});
		
		//Set the selected color
		$("."+mcp_cell).click(function(){
			$("#"+mcp_container).hide("slow");
			var selected_color = $(this).data("color");
			$(el).val(selected_color);
			$(el).css('background-color', selected_color);
			
			if (options.callback) {//Run the call back function 
				options.callback();
			}
		});

		//Styles
		var position = $(el).position();
		
		if (options.fullscreen) {
			$("#"+mcp_container).css({
				"position" : "absolute",
				"top" : "0",
				"left" : "0",
				"width" : "100%",
				"height" : "100%",
				"margin" : "auto",
				"background" : "black",
				"z-index" : "2147483647"
			});
			$("."+mcp_cell).css({
				"width" : "25%",
				"height" : "25%",
				"float" : "left"
			});
		} else {
			$("#"+mcp_container).css({
				"position" : "absolute",
				"top" : position.top + $(el).height() + 10,
				"left" : position.left,
				"width" : "200px",
				"height" : "200px",
				"margin" : "auto",
				"background" : "black",
				"padding" : "5px",
				"z-index" : "2147483647"
			});
			$("."+mcp_cell).css({
				"width" : "50px",
				"height" : "50px",
				"float" : "left"
			});
		}
	};

}( jQuery ));