# mcPicker
A simple color picker for mobiles and small screens.

## Installation

Clone this [repository](https://github.com/nadeeth/mcpicker.git) or download the [latest build](https://github.com/nadeeth/mcpicker/archive/master.zip).

Include jQuery library and google maps API places library:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
```

Include mcpicker.js *after* the jQuery library:

```html
<script src="/path/to/mcpicker.js"></script>
```

## Usage

```javascript
$(function() {
    $("#mcp").mcpicker(); // 'mcp' is the id of the field to be used with color picker. 
});
```

## Options

### callback

    callback : function

A callback function to be called after a color is selected.

Ex: 
```javascript
$("#mcp").mcpicker({
	callback: function() {
		console.log('call back executed');
	}
});
```

### fullscreen

    fullscreen: false

If set to true, picker will be displayed in full screen.


## Demo

[http://nadeeth.github.io/mcpicker](http://nadeeth.github.io/mcpicker/)

## Issues & Suggestions

Please track issues, bugs, and feature requests in this tracker.

[https://github.com/nadeeth/mcpicker/issues](https://github.com/nadeeth/mcpicker/issues)
