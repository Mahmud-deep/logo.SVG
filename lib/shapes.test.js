// imported shapes
const {Circle, Square, Triangle} = require("./shapes")

// shape tests
describe('Circle', () => {
    test('Success!', () => {
        const newShape = new Circle();
        let color =('red')
        newShape.setColor(color);
        expect(newShape.render).toEqual(`<circle cx="150" cy="100" r="100" fill="${color}" />`);
    });
});

describe('Triangle', () => {
    test('Success!', () => {
        const newShape = new Triangle();
        let color =('green')
        newShape.setColor(color);
        expect(newShape.render).toEqual(`<polygon points="150,0 0,150 300,150" fill="${color}" />`);
    });
});

describe('Square', () => {
    test('Success!', () => {
        const newShape = new Square();
        let color =('blue')
        newShape.setColor(color);
        expect(newShape.render).toEqual(`<rect x="150" y="150" fill="${color}" />`);
    });
});