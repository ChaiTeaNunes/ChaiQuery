# ThaiQuery
Quick JQuery access in your JavaScript by using _(ElementId).function
It avoids using '$' because it may conflict with JQuery itself or other libraries.

## Usage
Let's say we have a div with an id of `id` and we want to change the size to 100px by 100px.
```JavaScript

_(id).sizepx(100, 100);
// We specify px because the user may want %

```
And maybe change the text color to red.
```JavaScript

_(id).txtcolor('red');
// We specify txt becauuse the user may want background

```
Can we toggle the visibility? Yeah!
```JavaScript

_(id).toggle();
// It can tell if the object is visible or not, and does the opposite

```
Alright. It's pretty simple. Can it do every CSS ability?
No. ThaiQuery is still under heavy development.

## Abilities
* Hide: `_(id).hide();`
* Show: `_(id).show();`
* Background Color: `_(id).bgcolor(color);`
* Text Color: `_(id).txtcolor(color);`
* Toggle Visibility: `_(id).toggle();`
* Size by Pixels: `_(id).sizepx(width, height);`
* Size by Percent: `_(id).sizepc(width, height);`
* Border Styling: `_(id).border(width, style, color);`
* Border Radius: `_(id).borderRadius(radpx);`
* Margin by Pixels: `_(id).marginpx(top, right, bottom, left);`
* Margin by Percent: `_(id).marginpc(top, right, bottom, left);`
* Padding by Pixels: `_(id).paddingpx(top, right, bottom, left);`
* Padding by Percent: `_(id).paddingpc(top, right, bottom, left);`
* Toggle Resizablility by User: `_(id)toggleResize(value);`

For protoyping purposes:
* Default `_(id).default(args);`

## Syntax
All of my prototypes are written in this skeleton:
```JavaScript
default: function(args) {
//this.obj.style.[css] = args;
return this;
}
```
The object contructor:
```Javascript
function _(id) {
	var about = {
		Version: 0.1,
		Author: "Chaiyawat Nunes",
		Created: "Spring 2015",
		Updated: "Spring 2015"
	};

	if(id) {
		if(window === this) {
			return new _(id);
		}
		this.obj = document.getElementById(id);
		return this;
	} else {
		return about;
	}
};
