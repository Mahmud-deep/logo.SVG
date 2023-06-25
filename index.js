// file requirements
const fs = require('fs');
const inquirer = require('inquirer');
// destructured shape elements
const { Circle, Square, Triangle } = require('./lib/shapes');

// inquirer prompts
const promptUser = [
  {
    type: 'input',
    name: 'text',
    message: 'What 3 letter text would you like displayed on your logo?',
  },
  {
    type: 'input',
    name: 'text-color',
    message: 'What color would you like the text to be?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Which shape would you like for your logo?',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    name: 'shape-color',
    message: 'What color would you like the shape to be?',
  },
];

// write SVG function
const writeSVG = (file, data) => {
  fs.writeFile(file, data, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("logo.svg created! Check your sidebar!");
  })
}

// object text/shape elements
class renderSVG {
  constructor() {
    this.userText = ''
    this.userShape = ''
  };
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.userShape}  ${this.userText}</svg>`
  };
  newText(text, color) {
    this.userText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"> ${text}</text>`
  };
  newShape(shape) {
    this.userShape = shape.render();
  };

};

async function init() {
  let svgRender = "";
  let svgFile = "logo.svg";

  const answers = await inquirer.prompt(promptUser);

  // parameters for user answers

  //shape
  shape = answers.shape;

  let shapeChoice;

  if (shape === "circle" || shape === "Circle") {
    shapeChoice = new Circle();
    console.log("Shape: Circle");
  }
  else if (shape === "square" || shape === "Square") {
    shapeChoice = new Square();
    console.log("Shape: Square");
  }
  else if (shape === "triangle" || shape === "Triangle") {
    shapeChoice = new Triangle();
    console.log("Shape: Triangle");
  }
  else {
    return null;
  };

  //shape color
  shapeColor = answers["shape-color"];
  console.log(`Shape color: ${shapeColor}`);
  shapeChoice.setColor(shapeColor);
  //text
  let textChoice = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    textChoice = answers.text;
    console.log(`Text content: ${textChoice}`);
  } else {
    console.log("[1-3 characters only]");
    return;
  }

  //text color
  textColorChoice = answers["text-color"];
  console.log(`Text color: ${textColorChoice}`);
  
  //svg render
  const newSvg = new renderSVG();
  newSvg.newText(textChoice, textColorChoice);
  newSvg.newShape(shapeChoice, shapeColor)

  svgRender = newSvg.render();

  writeSVG(svgFile, svgRender);
}

init();