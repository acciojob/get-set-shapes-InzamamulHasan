//complete this code
class Rectangle {
	constructor(width,height){
		this.width=eaval(width);
		this.height=eval(height);
	}
	getArea(){
		return this.width*this.height;
	}
}

class Square extends Rectangle {
	constructor(width,height){
		super(width,height);
	}
	getPerimeter(){
		return 2*(this.width+this.height);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
