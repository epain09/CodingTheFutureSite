import * as d3 from 'd3';
import {useEffect, useRef} from 'react';
export default function WorldMap() {
    const mapref = useRef();
    const pointref = useRef();
    const data = {
                "USA": 48,
                "IND": 13,
                "ITA": 1,
                "EGY": 7,
                "PAK": 2,
                "BRA": 1,
                "COL": 2,
                "DEU": 1,
                "ARE": 1,
                "LTU": 1,
            };

    useEffect(() => {
        const width = 960;
        const height = 600;

        var svg = d3
            .select(mapref.current)
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        var tooltip = d3.select(pointref.current);
        
        const path = d3.geoPath(d3.geoMercator());

        const colorScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([0, d3.max(Object.values(data))]);
        
        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(world => {
            svg.append("g")
                .selectAll("path")
                .data(world.features)
                .enter().append("path")
                .attr("d", path)
                .attr('fill', d => {
                    let value = data[d.id] || 0;
                    value = value + Math.log(value + 1) * 10;
                    return colorScale(value);
                })
                .attr("stroke","white")
                .on("mouseover", function (event, d) {
                    const countryName = d.properties.name;
                    console.log(d.id)
                    const value = data[d.id] || 0;
                    tooltip.style("opacity", .9);
                    const lbltext = `${countryName}: ${value} ` + (value==1 ? `person` : `people`);
                    value == 1 ?
                        tooltip.html(`${countryName}: ${value} person`)
                            .style("left", (event.pageX + 5) + "px")
                            .style("top", (event.pageY - 28) + "px")
                        : tooltip.html(`${countryName}: ${value} people`)
                            .style("left", (event.pageX + 5) + "px")
                            .style("top", (event.pageY - 28) + "px");
                })
                .on("mouseout", function () {
                    tooltip.style("opacity", 0);
                });
        });
    }
    )
    return (
        <div className = "relative">
            <svg className = "w-[1000px] h-[600px]" id = "map" ref={mapref}>
            </svg>
            <div className = "tooltip absolute bg-white text-black" ref = {pointref}></div>
        </div>
        
    )
}