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
    element.style.backgroundColor = 'white'
  })
}

function activatePaint() {
  /*
   Function that activates the painting event each time the
   grid is updated
  */
  cells.forEach(element => {
    element.addEventListener('mouseover', function () {
      element.style.backgroundColor = 'black'
    })
  })
}

//declaring DOM Elements
const container = document.querySelector('#container')
const clearButton = document.querySelector('#clear-button')
const sizeRange = document.querySelector('#size-range')
const borderCheckbox = document.querySelector('#border-checkbox')

const cell = document.createElement('div')
let cells

createGrid(16);
//Adding Event listeners

clearButton.addEventListener('click', clearGrid)

sizeRange.addEventListener('change', function (e) {
  createGrid(e.target.value)
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



