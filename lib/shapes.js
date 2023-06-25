// shape constructor class with color selector
class Shape{
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}

// render functions for each shape
class Circle extends Shape{
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`
    }
};

class Square extends Shape{
    render() {
        return `<rect x="150" y="150" fill="${this.color}" />`
    }
};

class Triangle extends Shape{
    render() {
        return `<polygon points="150,0 0,150 300,150" fill="${this.color}" />`
    }
};

// exports shapes to be called upon
module.exports = {Circle, Square, Triangle};