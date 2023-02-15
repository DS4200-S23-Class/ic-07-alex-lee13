/*
D3 Class Demo 2 
Prof. Mosca 
Modified: 02/15/2023
*/

// Declare constants

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const data = [55000, 48000, 27000, 66000, 90000];


const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME = d3.select("#frame_div")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// Now, let's define our scaling function

// find max X
const MAX_Y = d3.max(data, (d) => { return d; }); 
console.log("Max y: " + MAX_Y);  

// Now, define scale functions that maps our data values 
// (domain) to pixel values (range)
const Y_SCALE = d3.scaleLinear() // linear scale because we have 
                              // linear data 
                  .domain([0, (MAX_Y + 10000)]) // add some padding  
                  .range([0, VIS_WIDTH]); 

console.log("Input: 90000, Y_SCALE output: " + Y_SCALE(90000));

// Now, we can use X_SCALE to plot our points
FRAME.selectAll("points")  
    .data(data)  
    .enter()       
    .append("circle")  
      .attr("cx", MARGINS.left) 
      .attr("cy", (d) => { return (Y_SCALE(d) + MARGINS.top)}) 
      .attr("r", 20)
      .attr("class", "point");

