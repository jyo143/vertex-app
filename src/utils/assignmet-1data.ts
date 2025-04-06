interface VisitorDataEntry {
  time: string;
  count: number;
}

interface VisitorData {
  [timeRange: string]: {
    [dataType: string]: VisitorDataEntry[];
  };
}

export const visitorData: VisitorData = {
  Today: {
    Visitors: [
      { time: "10 AM", count: 230 },
      { time: "12 PM", count: 353 },
      { time: "2 PM", count: 503 },
      { time: "4 PM", count: 430 },
      { time: "6 PM", count: 630 },
    ],
    Connections: [
      { time: "10 AM", count: 1000 },
      { time: "12 PM", count: 1854 },
      { time: "2 PM", count: 1345 },
      { time: "4 PM", count: 340 },
      { time: "6 PM", count: 440 },
    ],
    Interactions: [
      { time: "10 AM", count: 1240 },
      { time: "12 PM", count: 1210 },
      { time: "2 PM", count: 1284 },
      { time: "4 PM", count: 1353 },
      { time: "6 PM", count: 1453 },
    ],
    Impressions: [
      { time: "10 AM", count: 1500 },
      { time: "12 PM", count: 1380 },
      { time: "2 PM", count: 1000 },
      { time: "4 PM", count: 1200 },
      { time: "6 PM", count: 1500 },
    ],
  },
  Yesterday: {
    Visitors: [
      { time: "10 AM", count: 350 },
      { time: "12 PM", count: 423 },
      { time: "2 PM", count: 530 },
      { time: "4 PM", count: 402 },
      { time: "6 PM", count: 602 },
    ],
    Connections: [
      { time: "10 AM", count: 103 },
      { time: "12 PM", count: 138 },
      { time: "2 PM", count: 253 },
      { time: "4 PM", count: 303 },
      { time: "6 PM", count: 403 },
    ],
    Interactions: [
      { time: "10 AM", count: 122 },
      { time: "12 PM", count: 202 },
      { time: "2 PM", count: 282 },
      { time: "4 PM", count: 353 },
      { time: "6 PM", count: 453 },
    ],
    Impressions: [
      { time: "10 AM", count: 500 },
      { time: "12 PM", count: 800 },
      { time: "2 PM", count: 1000 },
      { time: "4 PM", count: 1200 },
      { time: "6 PM", count: 1500 },
    ],
  },
  "This Week": {
    Visitors: [
      { time: "Mon", count: 430 },
      { time: "Tue", count: 700 },
      { time: "Wed", count: 500 },
      { time: "Thu", count: 430 },
      { time: "Fri", count: 630 },
      { time: "Sat", count: 300 },
      { time: "Sun", count: 800 },
    ],
    Connections: [
      { time: "Mon", count: 1103 },
      { time: "Tue", count: 1138 },
      { time: "Wed", count: 225 },
      { time: "Thu", count: 320 },
      { time: "Fri", count: 400 },
      { time: "Sat", count: 500 },
      { time: "Sun", count: 200 },
    ],
    Interactions: [
      { time: "Mon", count: 122 },
      { time: "Tue", count: 290 },
      { time: "Wed", count: 886 },
      { time: "Thu", count: 905 },
      { time: "Fri", count: 785 },
      { time: "Sat", count: 600 },
      { time: "Sun", count: 800 },
    ],
    Impressions: [
      { time: "Mon", count: 500 },
      { time: "Tue", count: 800 },
      { time: "Wed", count: 1000 },
      { time: "Thu", count: 1200 },
      { time: "Fri", count: 1500 },
      { time: "Sat", count: 500 },
      { time: "Sun", count: 800 },
    ],
  },
  "Last Week": {
    Visitors: [
      { time: "Mon", count: 202 },
      { time: "Tue", count: 335 },
      { time: "Wed", count: 503 },
      { time: "Thu", count: 430 },
      { time: "Fri", count: 630 },
      { time: "Sat", count: 300 },
      { time: "Sun", count: 800 },
    ],
    Connections: [
      { time: "Mon", count: 103 },
      { time: "Tue", count: 138 },
      { time: "Wed", count: 253 },
      { time: "Thu", count: 303 },
      { time: "Fri", count: 403 },
      { time: "Sat", count: 500 },
      { time: "Sun", count: 200 },
    ],
    Interactions: [
      { time: "Mon", count: 122 },
      { time: "Tue", count: 202 },
      { time: "Wed", count: 282 },
      { time: "Thu", count: 353 },
      { time: "Fri", count: 453 },
      { time: "Sat", count: 600 },
      { time: "Sun", count: 800 },
    ],
    Impressions: [
      { time: "Mon", count: 500 },
      { time: "Tue", count: 800 },
      { time: "Wed", count: 1000 },
      { time: "Thu", count: 1200 },
      { time: "Fri", count: 1500 },
      { time: "Sat", count: 500 },
      { time: "Sun", count: 800 },
    ],
  },
  "Last 7 Days": {
    Visitors: [
      { time: "Day 1", count: 200 },
      { time: "Day 2", count: 350 },
      { time: "Day 3", count: 508 },
      { time: "Day 4", count: 407 },
      { time: "Day 5", count: 607 },
      { time: "Day 6", count: 700 },
      { time: "Day 7", count: 500 },
    ],
    Connections: [
      { time: "Day 1", count: 1106 },
      { time: "Day 2", count: 1186 },
      { time: "Day 3", count: 1256 },
      { time: "Day 4", count: 1306 },
      { time: "Day 5", count: 1406 },
      { time: "Day 6", count: 1500 },
      { time: "Day 7", count: 1000 },
    ],
    Interactions: [
      { time: "Day 1", count: 1200 },
      { time: "Day 2", count: 2000 },
      { time: "Day 3", count: 2800 },
      { time: "Day 4", count: 3500 },
      { time: "Day 5", count: 4500 },
      { time: "Day 6", count: 5000 },
      { time: "Day 7", count: 1000 },
    ],
    Impressions: [
      { time: "Day 1", count: 1022 },
      { time: "Day 2", count: 810 },
      { time: "Day 3", count: 300 },
      { time: "Day 4", count: 420 },
      { time: "Day 5", count: 1510 },
      { time: "Day 6", count: 500 },
      { time: "Day 7", count: 800 },
    ],
  },
  "Last 30 Days": {
    Visitors: [
      { time: "Mar 1", count: 800 },
      { time: "Mar 5", count: 400 },
      { time: "Mar 10", count: 233 },
      { time: "Mar 15", count: 203 },
      { time: "Mar 20", count: 203 },
      { time: "Mar 25", count: 203 },
      { time: "Mar 30", count: 203 },
    ],
    Connections: [
      { time: "Mar 1", count: 1030 },
      { time: "Mar 5", count: 1038 },
      { time: "Mar 10", count: 1530 },
      { time: "Mar 15", count: 1030 },
      { time: "Mar 20", count: 1030 },
      { time: "Mar 25", count: 1030 },
      { time: "Mar 30", count: 1030 },
    ],
    Interactions: [
      { time: "Mar 1", count: 1000 },
      { time: "Mar 5", count: 1800 },
      { time: "Mar 10", count: 1000 },
      { time: "Mar 15", count: 1200 },
      { time: "Mar 20", count: 1200 },
      { time: "Mar 25", count: 1200 },
      { time: "Mar 30", count: 1200 },
    ],
    Impressions: [
      { time: "Mar 1", count: 1000 },
      { time: "Mar 5", count: 1800 },
      { time: "Mar 10", count: 1000 },
      { time: "Mar 15", count: 1500 },
      { time: "Mar 20", count: 1500 },
      { time: "Mar 25", count: 1500 },
      { time: "Mar 30", count: 1500 },
    ],
  },
};

interface TotalsDataEntry {
  total: number;
  change: number;
  prevCount: number;
}

interface TotalsData {
  [timeRange: string]: {
    [dataType: string]: TotalsDataEntry;
  };
}

export const totalsData: TotalsData = {
  "Last 30 Days": {
    Visitors: { total: 13490, change: 469, prevCount: 897 },
    Connections: { total: 3490, change: 180, prevCount: 497 },
    Interactions: { total: 10000, change: 200, prevCount: 1000 },
    Impressions: { total: 10000, change: 200, prevCount: 1000 },
  },
  "Last Week": {
    Visitors: { total: 13490, change: 469, prevCount: 897 },
    Connections: { total: 3490, change: 180, prevCount: 497 },
    Interactions: { total: 10000, change: 200, prevCount: 1000 },
    Impressions: { total: 10000, change: 200, prevCount: 1000 },
  },
  "This Week": {
    Visitors: { total: 13490, change: 469, prevCount: 897 },
    Connections: { total: 3490, change: 180, prevCount: 497 },
    Interactions: { total: 10000, change: 200, prevCount: 1000 },
    Impressions: { total: 10000, change: 200, prevCount: 1000 },
  },
  Yesterday: {
    Visitors: { total: 13490, change: 469, prevCount: 897 },
    Connections: { total: 3490, change: 180, prevCount: 497 },
    Interactions: { total: 10000, change: 200, prevCount: 1000 },
    Impressions: { total: 10000, change: 200, prevCount: 1000 },
  },
  Today: {
    Visitors: { total: 13490, change: 469, prevCount: 897 },
    Connections: { total: 3490, change: 180, prevCount: 497 },
    Interactions: { total: 10000, change: 200, prevCount: 1000 },
    Impressions: { total: 10000, change: 200, prevCount: 1000 },
  },
  "Last 7 Days": {
    Visitors: { total: 13490, change: 469, prevCount: 897 },
    Connections: { total: 3490, change: 180, prevCount: 497 },
    Interactions: { total: 10000, change: 200, prevCount: 1000 },
    Impressions: { total: 10000, change: 200, prevCount: 1000 },
  },
};

export interface InsightDetail {
  value: number;
  change: number;
  prevCount: number;
}

export interface InsightsSet {
  Founders: InsightDetail;
  Investors: InsightDetail;
}

export const insightsData: Record<string, InsightsSet> = {
  Visitors: {
    Founders: { value: 7400, change: 0.0, prevCount: 0 },
    Investors: { value: 6090, change: 0.0, prevCount: 0 },
  },
  Connections: {
    Founders: { value: 5200, change: 15.5, prevCount: 4500 },
    Investors: { value: 4100, change: -5.2, prevCount: 4325 },
  },
  Interactions: {
    Founders: { value: 12000, change: 25.0, prevCount: 9600 },
    Investors: { value: 9500, change: 18.8, prevCount: 8000 },
  },
  Impressions: {
    Founders: { value: 55000, change: 8.0, prevCount: 50925 },
    Investors: { value: 48000, change: 12.0, prevCount: 42857 },
  },
};

export interface DemographicInfo {
  name: string;
  flag: string;
  percent: number;
  color: string;
  coordinates: [number, number];
}

export const demographicData: DemographicInfo[] = [
  {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
    percent: 40,
    color: "#4834D4",
    coordinates: [78.9629, 20.5937],
  },
  {
    name: "USA",
    flag: "https://flagcdn.com/w320/us.png",
    percent: 25,
    color: "#F97316",
    coordinates: [-95.7129, 37.0902],
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
    percent: 10,
    color: "#FACC15",
    coordinates: [-106.3468, 56.1304],
  },
  {
    name: "UAE",
    flag: "https://flagcdn.com/w320/ae.png",
    percent: 7,
    color: "#10B981",
    coordinates: [53.8478, 23.4241],
  },
];

export const worldMapUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const demographicsPercentages: Record<string, Record<string, number>> = {
  Visitors: {
    India: 40,
    USA: 25,
    Canada: 10,
    UAE: 7,
  },
  Connections: {
    India: 30,
    USA: 35,
    Canada: 15,
    UAE: 5,
  },
  Interactions: {
    India: 20,
    USA: 20,
    Canada: 30,
    UAE: 10,
  },
  Impressions: {
    India: 50,
    USA: 15,
    Canada: 5,
    UAE: 12,
  },
};
