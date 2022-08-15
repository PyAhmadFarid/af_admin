import Admin from "@/Layouts/Admin";
import { ResponsiveLine } from "@nivo/line";
import "./Dashboard.css";
import ArrowButton from "@/Components/ArrowButton";
import { useState } from "react";

const data = [
    {
        id: "japan",
        color: "hsl(75, 70%, 50%)",
        data: [
            {
                x: "plane",
                y: 285,
            },
            {
                x: "helicopter",
                y: 240,
            },
            {
                x: "boat",
                y: 242,
            },
            {
                x: "train",
                y: 15,
            },
            {
                x: "subway",
                y: 277,
            },
            {
                x: "bus",
                y: 197,
            },
            {
                x: "car",
                y: 105,
            },
            {
                x: "moto",
                y: 55,
            },
            {
                x: "bicycle",
                y: 185,
            },
            {
                x: "horse",
                y: 76,
            },
            {
                x: "skateboard",
                y: 33,
            },
            {
                x: "others",
                y: 163,
            },
        ],
    },
    {
        id: "france",
        color: "hsl(227, 70%, 50%)",
        data: [
            {
                x: "plane",
                y: 91,
            },
            {
                x: "helicopter",
                y: 111,
            },
            {
                x: "boat",
                y: 204,
            },
            {
                x: "train",
                y: 9,
            },
            {
                x: "subway",
                y: 233,
            },
            {
                x: "bus",
                y: 248,
            },
            {
                x: "car",
                y: 194,
            },
            {
                x: "moto",
                y: 260,
            },
            {
                x: "bicycle",
                y: 112,
            },
            {
                x: "horse",
                y: 104,
            },
            {
                x: "skateboard",
                y: 249,
            },
            {
                x: "others",
                y: 36,
            },
        ],
    },
    {
        id: "us",
        color: "hsl(252, 70%, 50%)",
        data: [
            {
                x: "plane",
                y: 273,
            },
            {
                x: "helicopter",
                y: 16,
            },
            {
                x: "boat",
                y: 159,
            },
            {
                x: "train",
                y: 54,
            },
            {
                x: "subway",
                y: 159,
            },
            {
                x: "bus",
                y: 81,
            },
            {
                x: "car",
                y: 59,
            },
            {
                x: "moto",
                y: 127,
            },
            {
                x: "bicycle",
                y: 230,
            },
            {
                x: "horse",
                y: 129,
            },
            {
                x: "skateboard",
                y: 232,
            },
            {
                x: "others",
                y: 51,
            },
        ],
    },
    {
        id: "germany",
        color: "hsl(182, 70%, 50%)",
        data: [
            {
                x: "plane",
                y: 87,
            },
            {
                x: "helicopter",
                y: 22,
            },
            {
                x: "boat",
                y: 35,
            },
            {
                x: "train",
                y: 121,
            },
            {
                x: "subway",
                y: 205,
            },
            {
                x: "bus",
                y: 13,
            },
            {
                x: "car",
                y: 136,
            },
            {
                x: "moto",
                y: 29,
            },
            {
                x: "bicycle",
                y: 64,
            },
            {
                x: "horse",
                y: 69,
            },
            {
                x: "skateboard",
                y: 281,
            },
            {
                x: "others",
                y: 99,
            },
        ],
    },
    {
        id: "norway",
        color: "hsl(203, 70%, 50%)",
        data: [
            {
                x: "plane",
                y: 88,
            },
            {
                x: "helicopter",
                y: 133,
            },
            {
                x: "boat",
                y: 133,
            },
            {
                x: "train",
                y: 172,
            },
            {
                x: "subway",
                y: 191,
            },
            {
                x: "bus",
                y: 241,
            },
            {
                x: "car",
                y: 270,
            },
            {
                x: "moto",
                y: 40,
            },
            {
                x: "bicycle",
                y: 238,
            },
            {
                x: "horse",
                y: 221,
            },
            {
                x: "skateboard",
                y: 217,
            },
            {
                x: "others",
                y: 165,
            },
        ],
    },
];

const CardWindow = ({ title, children }) => {
    const [open,setOpen] = useState(true);
    return (
        <div className="cardwindow">
            <div className="cardwindownav">
                <div className="cardwindowtitle">{title}</div>
                <div className="cardwindowtool">
                    <button onClick={()=>{setOpen(!open)}}>
                        <ArrowButton open={open}/>
                    </button>
                </div>
            </div>

            <div className={"cardwindowbody "+(open?"":"close")}>{children}</div>
        </div>
    );
};

const Dashboard = (props) => {
    return (
        <div className="row">
            <div style={{ flex: 2 }}>
                <CardWindow title="Visitor Graph">
                    <div className="h-80">
                        <ResponsiveLine
                            data={data}
                            margin={{
                                top: 50,
                                right: 110,
                                bottom: 50,
                                left: 60,
                            }}
                            xScale={{ type: "point" }}
                            yScale={{
                                type: "linear",
                                min: "auto",
                                max: "auto",
                                stacked: true,
                                reverse: false,
                            }}
                            yFormat=" >-.2f"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                orient: "bottom",
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "transportation",
                                legendOffset: 36,
                                legendPosition: "middle",
                            }}
                            axisLeft={{
                                orient: "left",
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "count",
                                legendOffset: -40,
                                legendPosition: "middle",
                            }}
                            pointSize={10}
                            pointColor={{ theme: "background" }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: "serieColor" }}
                            pointLabelYOffset={-12}
                            useMesh={true}
                            legends={[
                                {
                                    anchor: "bottom-right",
                                    direction: "column",
                                    justify: false,
                                    translateX: 100,
                                    translateY: 0,
                                    itemsSpacing: 0,
                                    itemDirection: "left-to-right",
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemOpacity: 0.75,
                                    symbolSize: 12,
                                    symbolShape: "circle",
                                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                                    effects: [
                                        {
                                            on: "hover",
                                            style: {
                                                itemBackground:
                                                    "rgba(0, 0, 0, .03)",
                                                itemOpacity: 1,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                </CardWindow>
            </div>
            <div style={{ flex: 1 }}>
                <CardWindow title="Popular Post">sas</CardWindow>
            </div>
        </div>
    );
};

Dashboard.layout = (page) => <Admin>{page}</Admin>;

export default Dashboard;
