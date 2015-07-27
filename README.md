# ChaiQuery
Quick JQuery access in your JavaScript by using CQ(ElementId).function
It avoids using '$' because it may conflict with JQuery itself or other libraries.
Completely for fun!

## Usage
Let's say we have a div with an id of `id` and we want to change the size to 100px by 100px.
```JavaScript

CQ(id).sizepx(100, 100);
// We specify px because the user may want %

```
And maybe change the text color to red.
```JavaScript

CQ(id).txtcolor('red');
// We specify txt becauuse the user may want background

```
Can we toggle the visibility? Yeah!
```JavaScript

CQ(id).toggle();
// It can tell if the object is visible or not, and does the opposite

```
Alright. It's pretty simple. Can it do every CSS ability?
No. ThaiQuery is still under heavy development.

## Abilities
* Hide: `CQ(id).hide();`
* Show: `CQ(id).show();`
* Background Color: `CQ(id).bgcolor(color);`
* Text Color: `CQ(id).txtcolor(color);`
* Toggle Visibility: `CQ(id).toggle();`
* Size by Pixels: `CQ(id).sizepx(width, height);`
* Size by Percent: `CQ(id).sizepc(width, height);`
* Border Styling: `CQ(id).border(width, style, color);`
* Border Radius: `CQ(id).borderRadius(radpx);`
* Margin by Pixels: `CQ(id).marginpx(top, right, bottom, left);`
* Margin by Percent: `CQ(id).marginpc(top, right, bottom, left);`
* Padding by Pixels: `CQ(id).paddingpx(top, right, bottom, left);`
* Padding by Percent: `CQ(id).paddingpc(top, right, bottom, left);`
* Toggle User Resize: `CQ(id)toggleResize(value);`

For prototyping purposes:
* Default `CQ(id).default(args);`

## Syntax
All of my prototypes are written in this skeleton:
```JavaScript
default: function(args) {
//this.obj.style.[css] = args;
return this;
}
```
The object constructor:
```Javascript
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
