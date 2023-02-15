

const frame_height = 90000;
const margins = {left: 50, right: 50, top: 50, bottom: 50};
const DATA = [55000, 48000, 27000, 66000, 90000]


// add frame
const FRAME = 
d3.select ("line_frame")
	.append("svg")
		.attr("height", frame_height)
		.attr("class", "frame");


//add points based on data
FRAME.selectAll("points")
	.data(DATA)
	.entrer()
	.append("circle")
		.attr("cx", (d) => {return d;})
		.attr("cy", 0)
		.attr("r", 20)
		.attr("class", "point");