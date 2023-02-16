/*
D3 Class Demo 2 
Prof. Mosca 
Modified: 02/15/2023
*/


// Declare constants

const margin = { top: 20, right: 30, bottom: 50, left: 50 };
const frame_width = 500 - margin.left - margin.right;
const frame_height = 500 - margin.top - margin.bottom;

// Append the svg object to the body of the page
const frame = d3.select("#frame_div")
              .append("svg")
              .attr("width", frame_width + margin.left + margin.right)
              .attr("height", frame_height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const data = [55000, 48000, 27000, 66000, 90000];



var x_scale = d3.scaleBand()
                  .range([0, frame_width])
                  .padding(0.1)
                  .domain(data.map(function(d, i) { return i; }));

var y_scale = d3.scaleLinear()
                  .domain([0, 100000])
                  .range([frame_height, 0]);
                  
// Add dots
frame.selectAll("points")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d, i) { return x_scale(i); })
    .attr("cy", function(d) { return y_scale(d); })
    .attr("r", 5)
    .style("fill", 'blue');
