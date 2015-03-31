// Most ideas from: Michael Jasper (http://www.mikedoesweb.com/2012/creating-your-own-javascript-library/)
function @(id) {
	var about = {
		Version: 0.1,
		Author: "Chaiyawat Nunes",
		Created: "Spring 2015",
		Updated: "Spring 2015"
	};

	if(id) {
		if(window === this) {
			return new @(id);
		}
		this.obj = document.getElementById(id);
		return this;
	} else {
		return about;
	}
};

@.prototype = {
	// Hide the element
	hide: function() {
		this.obj.style.display = 'none';
		return this;
	},
	// Show the element
	show: function() {
		this.obj.style.display = 'inherit';
		return this;
	},
	// Change the element's background color
	bgcolor: function(color) {
		this.obj.style.background = color;
		return this;
	},
	// Change the element's text color
	txtcolor: function(color) {
		this.obj.style.color = color;
		return this;
	},
	// Toggle visibility the element
	toggle: function(){
		if(this.obj.style.display !== 'none') {
			this.obj.style.display = 'none';
		} else {
			this.obj.style.display = '';
		}
		return this;
	},
	// Resize the element (px)
	sizepx: function(widthpx, heightpx) {
		this.obj.style.width = width + 'px';
		this.obj.style.height = height + 'px';
		return this;
	},
	// Resize the element (%)
	sizepc: function(widthpc, heightpc) {
		this.obj.style.width = width + '%';
		this.obj.style.height = hieght + '%';
		return this;
	},
	// Border color
	border: function(width, style, color) {
		this.obj.style.border = width +' ' + style + ' ' + color;
		return this;
	},
	// Border radius
	borderRadius: function(radpx) {
		this.obj.style.borderRadius = radpx + 'px';
		return this;
	},
	// Margin (px)
	marginpx: function(top, right, bottom, left) {
		this.obj.style.margin = top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px';
		return this; 
	},
	// Margin (%)
	marginpc: function(top, right, bottom, left) {
		this.obj.style.margin = top + '% ' + right + '% ' + bottom + '% ' + left + '%';
		return this; 
	},
	// Padding (px)
	paddingpx: function(top, right, bottom, left) {
		this.obj.style.padding = top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px';
		return this; 
	},
	// Padding (%)
	paddingpc: function(top, right, bottom, left) {
		this.obj.style.padding = top + '% ' + right + '% ' + bottom + '% ' + left + '%';
		return this; 
	},
	// Default
	default: function() {
		// this.obj.style.[css] = args;
		return this;
	}

};