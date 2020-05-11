
function loadGraph() {
const margin = 60;
const width = 400 - 2 * margin;
const height = 400 - 2 * margin;
const sample = [
    {
        time: 10,
        usage: 4368
    },       
    {
        time: 15, 
        usage: 6552
    },
    {
        time: 20,
        usage: 8736 
    }
];

const svg = d3.select('svg');

const chart = svg.append('g')
                 .attr('transform', `translate(${margin}, ${margin})`);

const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 10000]);
chart.append('g')
    .call(d3.axisLeft(yScale));

const xScale = d3.scaleBand()
    .range([0, width])
    .domain([10, 15, 20])
    .padding(0.5)

chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

chart.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft()
        .scale(yScale)
        .tickSize(-width, 0, 0)
        .tickFormat(''))

const barGroups = chart.selectAll()
    .data(sample)
    .enter()
    .append('g')
    
barGroups  
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.time))
    .attr('y', (g) => yScale(g.usage))
    .attr('height', (g) => height - yScale(g.usage))
    .attr('width', (g) => xScale.bandwidth())
    .attr('x', (actual, index, array) =>
        xScale(actual.time))

svg.append('text') 
    .attr('x', (-height / 2) - margin)
    .attr('y', margin / 4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Yearly Water Usage (gallons)')

svg.append('text')
    .attr('x', 200)
    .attr('y', 380)
    .attr('text-anchor', 'middle')
    .text('Shower Time (minutes)')
}