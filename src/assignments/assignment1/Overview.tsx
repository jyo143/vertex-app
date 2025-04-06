import { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import {
  visitorData,
  totalsData,
  insightsData,
  demographicData,
  demographicsPercentages,
  worldMapUrl,
  InsightsSet,
  DemographicInfo,
} from "../../utils/assignmet-1data";
import { Link } from "react-router-dom";

const arrowSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E\")";

// --- Helper to format numbers (e.g., 7400 -> 7.4K) ---
const formatK = (num: number): string => {
  if (!num && num !== 0) return "0";
  if (num >= 1000) {
    return (
      (num / 1000).toFixed(num % 1000 === 0 ? 0 : num % 100 === 0 ? 1 : 2) + "K"
    );
  }
  return num.toString();
};

const Overview = () => {
  const [timeRange, setTimeRange] = useState("Last 30 Days");
  const [dataType, setDataType] = useState("Connections");
  const [insightsFilter, setInsightsFilter] = useState("Visitors");
  const [demographicsFilter, setDemographicsFilter] = useState("Visitors");
  const [selectedFilter, setSelectedFilter] = useState("Visitors");

  const chartData = useMemo(() => {
    const visitors = visitorData[timeRange]?.["Visitors"] || [];
    const selectedData = visitorData[timeRange]?.[dataType] || [];

    // Combine data points based on time labels
    const timePoints = new Set([
      ...visitors.map((p) => p.time),
      ...selectedData.map((p) => p.time),
    ]);

    return Array.from(timePoints).map((time) => {
      const visitorPoint = visitors.find((p) => p.time === time);
      const selectedPoint = selectedData.find((p) => p.time === time);
      return {
        time: time,
        visitors: visitorPoint ? visitorPoint.count : 0,
        selected: selectedPoint ? selectedPoint.count : 0,
      };
    });
  }, [timeRange, dataType]);

  const visitorTotal = totalsData[timeRange]?.Visitors;
  const selectedTotal = totalsData[timeRange]?.[dataType];

  const currentInsights: InsightsSet | undefined = insightsData[insightsFilter];

  const xAxisTicks = useMemo(() => {
    if (timeRange === "Last 30 Days") {
      return [
        "Mar 1",
        "Mar 5",
        "Mar 10",
        "Mar 15",
        "Mar 20",
        "Mar 25",
        "Mar 30",
      ];
    }
    if (timeRange === "Last 7 Days") {
      return ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
    }
    if (timeRange === "This Week" || timeRange === "Last Week") {
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    }
    if (timeRange === "Today" || timeRange === "Yesterday") {
      return ["10 AM", "12 PM", "2 PM", "4 PM", "6 PM"];
    }
    return undefined;
  }, [timeRange]);

  const yAxisTicks = [200, 400, 800, 1200, 1600, 2000];

  return (
    <div className="px-6 py-4 md:px-8 text-white w-full">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 border border-[#333333] p-4 rounded-lg bg-[#111111]">
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="relative">
              <select
                className="appearance-none text-white p-2 pl-3 pr-8 rounded-md w-auto bg-[#1D1D1D] border border-[#333333] outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer text-sm"
                style={{
                  backgroundImage: arrowSvg,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  backgroundSize: "1.1em 1.1em",
                }}
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {["Visitors", "Connections", "Interactions", "Impressions"].map(
                  (type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="relative">
              <select
                className="appearance-none text-white p-2 pl-3 pr-8 rounded-md w-auto bg-[#1D1D1D] border border-[#333333] outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer text-sm"
                style={{
                  backgroundImage: arrowSvg,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  backgroundSize: "1.1em 1.1em",
                }}
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                {[
                  "Last 30 Days",
                  "Last 7 Days",
                  "This Week",
                  "Last Week",
                  "Today",
                  "Yesterday",
                ].map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <select
                className="appearance-none text-white p-2 pl-3 pr-8 rounded-md w-auto bg-[#1D1D1D] border border-[#333333] outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer text-sm"
                style={{
                  backgroundImage: arrowSvg,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  backgroundSize: "1.1em 1.1em",
                }}
                value={dataType}
                onChange={(e) => setDataType(e.target.value)}
              >
                {["Connections", "Interactions", "Impressions"].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-end gap-x-6 gap-y-2 flex-wrap mb-4">
            <div className="flex items-center gap-2">
              <div>
                <div className="flex flex-row gap-2">
                  <span className="text-3xl font-bold mt-2">
                    {formatK(visitorTotal?.total || 0)}
                  </span>
                  {visitorTotal && (
                    <div className="flex flex-col gap-2">
                      <span
                        className={`text-sm ${
                          visitorTotal.change >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {visitorTotal.change >= 0 ? "+" : ""}
                        {visitorTotal.change.toFixed(
                          visitorTotal.change % 1 === 0 ? 0 : 2
                        )}
                        %
                      </span>
                      <span className="text-[#555555]">
                        ({visitorTotal.prevCount})
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Selected Data Type Total */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A020F0] inline-block"></span>
              <div>
                <div className="flex flex-row gap-2">
                  <span className="text-3xl font-bold mt-2">
                    {formatK(selectedTotal?.total || 0)}
                  </span>
                  {selectedTotal && (
                    <div className="flex flex-col gap-2">
                      <span
                        className={`text-sm ${
                          selectedTotal.change >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {selectedTotal.change >= 0 ? "+" : ""}
                        {selectedTotal.change.toFixed(
                          selectedTotal.change % 1 === 0 ? 0 : 2
                        )}
                        %
                      </span>
                      <span className="text-[#555555]">
                        ({selectedTotal.prevCount})
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="mt-4 h-[250px] rounded-md relative overflow-visible">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
              >
                <XAxis
                  dataKey="time"
                  stroke="#888"
                  tick={{ fill: "#888", fontSize: 12 }}
                  ticks={xAxisTicks}
                  axisLine={false}
                  tickLine={false}
                  interval="preserveStartEnd"
                />
                <YAxis
                  stroke="#888"
                  tick={{ fill: "#888", fontSize: 12 }}
                  tickFormatter={(value) =>
                    value >= 1000 ? `${value / 1000}K` : `${value}`
                  }
                  ticks={yAxisTicks}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, "dataMax + 200"]}
                />
                {/* <Tooltip
                  cursor={{
                    stroke: "#555",
                    strokeWidth: 1,
                    strokeDasharray: "3 3",
                  }}
                    content={<CustomTooltip dataType={dataType} />}
                /> */}
                <Line
                  type="linear"
                  dataKey="visitors"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0, fill: "#FFFFFF" }}
                  name="Visitors"
                />
                <Line
                  type="linear"
                  dataKey="selected"
                  stroke="#A020F0"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0, fill: "#A020F0" }}
                  name={dataType}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#111111] border border-[#333333] p-6 rounded-lg flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[20px] font-semibold">Insights</h2>
            <div className="relative">
              <select
                className="appearance-none text-white p-1 pl-2 pr-6 rounded-md w-auto bg-[#1D1D1D] border border-[#333333] outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer text-xs"
                style={{
                  backgroundImage: arrowSvg,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.3rem center",
                  backgroundSize: "0.9em 0.9em",
                }}
                value={insightsFilter}
                onChange={(e) => setInsightsFilter(e.target.value)}
              >
                {Object.keys(insightsData).map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-4 flex-grow">
            {currentInsights ? (
              <>
                <div>
                  <p className="text-white text-[16px]">Founders</p>
                  <div className="flex flex-row gap-4">
                    <p className="text-white text-3xl font-bold mt-1">
                      {formatK(currentInsights.Founders.value)}
                    </p>
                    <div className="flex flex-col">
                      <p
                        className={`text-sm ${
                          currentInsights.Founders.change >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {currentInsights.Founders.change >= 0 ? "+" : ""}
                        {currentInsights.Founders.change.toFixed(2)}%
                      </p>
                      <p className="text-[#555555]">
                        ({currentInsights.Founders.prevCount})
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-[16px]">Investors</p>
                  <div className="flex flex-row gap-4">
                    <p className="text-white text-3xl font-bold mt-1">
                      {formatK(currentInsights.Investors.value)}
                    </p>
                    <div className="flex flex-col">
                      <p
                        className={`text-sm ${
                          currentInsights.Investors.change >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {currentInsights.Investors.change >= 0 ? "+" : ""}
                        {currentInsights.Investors.change.toFixed(2)}%
                      </p>
                      <p className="text-[#555555]">
                        ({currentInsights.Investors.prevCount})
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-sm">
                No insights data for {insightsFilter}.
              </p>
            )}
          </div>

          <Link
            to={""}
            className="text-sm text-white hover:text-white mt-4 text-right flex items-center group justify-end"
          >
            View detailed insights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />{" "}
            </svg>
          </Link>
        </div>
      </div>

      <div className="mt-6 bg-[#111111] border border-[#333333] p-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-grow md:w-2/3">
            <div className="flex flex-wrap justify-between  flex-col   gap-y-2 mb-4">
              <h2 className="text-lg font-semibold">Demographics</h2>
              <div className="relative">
                <select
                  className="appearance-none text-white p-1 pl-2 pr-6 rounded-md w-auto bg-[#1D1D1D] border border-[#333333] outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer text-xs"
                  style={{
                    backgroundImage: arrowSvg,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.3rem center",
                    backgroundSize: "0.9em 0.9em",
                  }}
                  value={demographicsFilter}
                  onChange={(e) => setDemographicsFilter(e.target.value)}
                >
                  {Object.keys(demographicsPercentages).map((filter) => (
                    <option key={filter} value={filter}>
                      {filter}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* World Map */}
            <div className="mt-4 h-[200px] md:h-[250px] bg-[#1a1a1a] rounded-md overflow-hidden">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 90, center: [0, 20] }}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography={worldMapUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#333"
                        stroke="#555"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                {demographicData.map(
                  ({ name, coordinates, color }: DemographicInfo) => (
                    <Marker key={name} coordinates={coordinates}>
                      <circle
                        r={5}
                        fill={color}
                        stroke="#FFF"
                        strokeWidth={1}
                      />
                    </Marker>
                  )
                )}
              </ComposableMap>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm rounded-md border-solid border-[#333333] border-1">
              {demographicData.map((item: DemographicInfo) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-4 invisible hidden md:block">
              {" "}
            </h2>
            <div className="space-y-3 mt-2">
              {demographicData.map((item: DemographicInfo) => {
                const currentPercent =
                  demographicsPercentages[demographicsFilter]?.[item.name] ?? 0;

                return (
                  <div key={item.name}>
                    <div className="flex justify-between items-center text-white text-sm py-1">
                      <img
                        src={item.flag}
                        alt={`${item.name} flag`}
                        className="w-8 h-8 "
                      />

                      <span className="flex-grow text-left px-2 mb-2 text-[16px]">
                        {item.name}
                      </span>

                      <span className="text-right mb-2 text-[#FFFFFF] font-semibold">
                        {currentPercent}%
                      </span>
                    </div>

                    <div className="w-[90%] bg-gray-700 rounded-full h-1.5 ml-10 mb-4 -mt-2">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${currentPercent}%`,
                          backgroundColor: item.color,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link
              className="text-sm text-white hover:text-white mt-16 text-right flex items-center group justify-end"
              to={""}
            >
              View all countries
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
