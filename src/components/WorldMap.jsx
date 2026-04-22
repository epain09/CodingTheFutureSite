import * as d3 from 'd3';
import {useEffect, useRef, useState} from 'react';
import { TypeAnimation } from 'react-type-animation';
import CountUp from './ui/CountUp'
export default function WorldMap() {
    const mapref = useRef();
    const pointref = useRef();
    const gref = useRef();
    const [pos, setPos] = useState("");
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

    let sm = 0;
    Object.keys(data).forEach(function(key, index) {
        sm += data[key];
    })
    console.log(sm);

    // let tp = [];
    // for (let i=1; i<=sm; i++) {
    //     tp.push(`Number of tutees: ${i}`);
    //     tp.push(50);
    // }

    useEffect(() => {
        const width = 960;
        const height = 600;

        var svg = d3
            .select(mapref.current)
            .attr("width", width)
            .attr("height", height);

        var tooltip = d3.select(pointref.current);
        
        const path = d3.geoPath(d3.geoMercator());

        const colorScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([0, d3.max(Object.values(data))]);
        
        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(world => {
            d3.select(gref.current)
                .selectAll("path")
                .data(world.features)
                .enter().append("path")
                .attr("d", path)
                .attr('fill', d => {
                    let value = data[d.id] || 0;
                    value = value + Math.log(value + 1) * 10;
                    return colorScale(value);
                })
                .attr("stroke","black")
                .on("mouseover", function (event, d) {
                    const countryName = d.properties.name;
                    console.log(d.id)
                    const value = data[d.id] || 0;
                    tooltip.style("opacity", .9);
                    const lbltext = `${countryName}: ${value} ` + (value==1 ? `person` : `people`);
                    value == 1 ?
                        tooltip.html(`${countryName}: ${value} person`)
                            .style("left", (event.pageX + 5) + "px")
                            .style("top", (event.pageY - 18) + "px")
                        : tooltip.html(`${countryName}: ${value} people`)
                            .style("left", (event.pageX + 5) + "px")
                            .style("top", (event.pageY - 18) + "px");
                    console.log(`${countryName} : ${value}`);
                })
                .on("mouseout", function () {
                    tooltip.style("opacity", 0);
                });
        });
    }
    )
    return (
        <div className = "w-full flex flex-col justify-center items-center">
            {/* <TypeAnimation
                sequence = {tp}
                wrapper="span"
                speed={10}
                style={{ fontSize: '2em', display: 'inline-block', 'color': 'black' }}
                repeat={Infinity}
                omitDeletionAnimation={true}
            /> */}
            <div className = "text-black text-xl w-full flex justify-center items-center">
                <p className = "mr-2">Number of tutees around the world:</p>
                <CountUp
                from={1}
                to={sm}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
                />
            </div>
            <svg className = "h-auto" id = "map" ref={mapref}>
                <g ref = {gref}></g>
            </svg>
            <div className = {"tooltip absolute bg-white text-black p-2 rounded-xl " + pos} ref = {pointref}></div>
        </div>
        
    )
}