"use strict";

function createGrid(size) {
  /*
    Function that appends size**2 divs with Class "cell" to the
    container element and modifies its style properties
  */
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.innerHTML = ''
  cell.classList.add('cell')
  for (let i = 0; i < size ** 2; i++) {
    container.append(cell.cloneNode(true))
  }
  cells = document.querySelectorAll('.cell')
  activatePaint()
}
function clearGrid() {
  /*
    Function that turns all the grid "cells" to white
  */
  cells.forEach(element => {
    element.style.backgroundColor = '#FFFFFF'
  })
}

function activatePaint() {
  /*
   Function that activates the painting event each time the
   grid is updated
  */
  cells.forEach(element => {
    element.addEventListener('mouseover', function () {
      colorMode.checked ?
        element.style.backgroundColor = color :
        randomMode.checked ?
          element.style.backgroundColor = randomColor() :
          element.style.backgroundColor = grayscalePaint(element.style.backgroundColor);
    })
  })
}

function randomColor() {
  let red = Math.floor(Math.random() * 256).toString(16)
  let green = Math.floor(Math.random() * 256).toString(16)
  let blue = Math.floor(Math.random() * 256).toString(16)

  return '#' + red + green + blue;

}

function grayscalePaint(entryColor) {
  let colors = entryColor.split(',')
  let red = colors[0].substring(4)
  let green = colors[1]
  let blue = colors[2].replace(')', '')
  red = Math.round(+red - 25.5)
  green = Math.round(+green - 25.5)
  blue = Math.round(+blue - 25.5)
  if (red < 0) {
    red = 0
  }
  if (green < 0) {
    green = 0
  }
  if (blue < 0) {
    blue = 0
  }
  return `rgb(${red},${green},${blue})`
}

//declaring DOM Elements
const container = document.querySelector('#container')
const clearButton = document.querySelector('#clear-button')
const sizeRange = document.querySelector('#size-range')
const gridSize = document.querySelector('#grid-size')
const borderCheckbox = document.querySelector('#border-checkbox')
const colorSelector = document.querySelector('#color-selector')
const colorMode = document.querySelector('#color-mode')
const randomMode = document.querySelector('#random-mode')
const grayscaleMode = document.querySelector('#grayscale-mode')

const cell = document.createElement('div')
cell.style.backgroundColor = '#ffffff'
let cells
let color = '#000000'

createGrid(16);
//Adding Event listeners

clearButton.addEventListener('click', clearGrid)

sizeRange.addEventListener('change', function (e) {
  createGrid(e.target.value)
})

sizeRange.addEventListener('input', function (e) {
  gridSize.textContent = e.target.value
})

borderCheckbox.addEventListener('click', function () {
  borderCheckbox.checked ?
    cells.forEach(element => {
      element.style.border = '1px solid black';
    }) :
    cells.forEach(element => {
      element.style.border = '0';
    })
})

colorSelector.addEventListener('input', function (e) {
  color = e.target.value
})
