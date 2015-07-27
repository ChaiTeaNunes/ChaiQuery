// Most ideas from: Michael Jasper (http://www.mikedoesweb.com/2012/creating-your-own-javascript-library/)
/*
The MIT License (MIT)

Copyright (c) 2015 Chaiyawat Nunes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/* OBJECT CONSTRUCTOR */
function CQ(id) {
	var about = {
		Version: 0.1,
		Author: "Chaiyawat Nunes",
		Created: "Spring 2015",
		Updated: "Spring 2015"
	};

	if(id) {
		if(window === this) {
			return new CQ(id);
		}
		this.obj = document.getElementById(id);
		return this;
	} else {
		return about;
	}
};

/* PROTOTYPE FUNCTIONS */
CQ.prototype = {
	// Hide the Element
	hide: function() {
		this.obj.style.display = 'none';
		return this;
	},

	// Show the Element
	show: function() {
		this.obj.style.display = 'inherit';
		return this;
	},

	// Change the Element's Background Color
	bgcolor: function(color) {
		this.obj.style.background = color;
		return this;
	},

	// Change the Element's Text Color
	txtcolor: function(color) {
		this.obj.style.color = color;
		return this;
	},

	// Toggle Visibility of the Element
	toggle: function(){
		if(this.obj.style.display !== 'none') {
			this.obj.style.display = 'none';
		} else {
			this.obj.style.display = '';
		}
		return this;
	},

	// Resize the Element (px)
	sizepx: function(widthpx, heightpx) {
		this.obj.style.width = width + 'px';
		this.obj.style.height = height + 'px';
		return this;
	},

	// Resize the Element (%)
	sizepc: function(widthpc, heightpc) {
		this.obj.style.width = width + '%';
		this.obj.style.height = hieght + '%';
		return this;
	},

	// Border Style
	border: function(width, style, color) {
		this.obj.style.border = width +' ' + style + ' ' + color;
		return this;
	},

	// Border Radius
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

	//Toggle Resize
	toggleResize: function(value) {
		this.obj.style.resize = value;
		return this;
	},

	// Cursor Type
	cursor: function(value) {
		this.obj.style.cursor = value;
		return this;
	},

	// Aligning text
	txtAlign: function(align) {
		this.obj.style.textAlign(align);
		return this;
	},

	// Range of the Size for the Element (px)
	sizerangepx: function(minWidth, minHeight, maxWidth, maxHeight) {
		this.obj.style.minWidth = minWdith + 'px';
		this.obj.style.minHeight = minHeight + 'px';
		this.obj.style.maxWidth = maxWidth + 'px';
		this.obj.style.maxHeight = maxHeight + 'px';
		return this;
	},

	// Range of the Size for the Element (%)
	sizerangepc: function(minWidth, minHeight, maxWidth, maxHeight) {
		this.obj.style.minWidth = minWdith + '%';
		this.obj.style.minHeight = minHeight + '%';
		this.obj.style.maxWidth = maxWidth + '%';
		this.obj.style.maxHeight = maxHeight + '%';
		return this;
	},

	// Change Image Src
	imgchange: function(srcImg) {
		this.obj.style.src = srcImg;
		return this;
	},

	// Change Text Case
	textCase: function(case) {
		this.obj.style.textTransform = case;
		return this;
	},

	// Default
	default: function(args) {
		// this.obj.style.[css] = args;
		return this;
	}

};
