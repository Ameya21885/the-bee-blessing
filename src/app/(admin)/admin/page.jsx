"use client";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import moment from "moment";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdPercent } from "react-icons/md";

// JSON data for the cards
const cardData = [
  {
    title: "Total Revenue",
    revenueAmount: 120,
    currencySymbol: "₹",
    chartData: {
      series: [{ name: "Data Series", data: [20, 30, 35, 40, 50, 60, 70] }],
      chartOptions: {
        chart: { type: "line", height: 150, toolbar: { show: false } },
        dataLabels: { enabled: false },
        colors: ["#FF1654"],
        stroke: { width: 3 },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          labels: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          title: { text: "" },
        },
        legend: { show: false },
      },
    },
    growthMetrics: {
      addIcon: { type: "IoMdAdd", color: "green" },
      percentage: 15,
      comparisonText: "VS previous 28 days",
    },
  },
  {
    title: "New Orders",
    revenueAmount: 50,
    currencySymbol: "₹",
    chartData: {
      series: [{ name: "Data Series", data: [50, 45, 40, 35, 30, 25, 20] }],
      chartOptions: {
        chart: { type: "line", height: 150, toolbar: { show: false } },
        dataLabels: { enabled: false },
        colors: ["#FF1654"],
        stroke: { width: 3 },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          labels: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          title: { text: "" },
        },
        legend: { show: false },
      },
    },
    growthMetrics: {
      minusIcon: { type: "FaMinus", color: "red" },
      percentage: -10,
      comparisonText: "VS previous 28 days",
    },
  },
  {
    title: "Customer Satisfaction",
    revenueAmount: 80,
    currencySymbol: "₹",
    chartData: {
      series: [{ name: "Data Series", data: [60, 65, 68, 70, 72, 74, 75] }],
      chartOptions: {
        chart: { type: "line", height: 150, toolbar: { show: false } },
        dataLabels: { enabled: false },
        colors: ["#FF1654"],
        stroke: { width: 3 },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          labels: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          title: { text: "" },
        },
        legend: { show: false },
      },
    },
    growthMetrics: {
      percentage: 0,
      comparisonText: "VS previous 28 days",
    },
  },
];
const barChartData = {
  chartType: "bar",
  title: "Distributed Sales Data",
  categories: ["Product A", "Product B", "Product C", "Product D", "Product E"],
  data: [44, 55, 41, 67, 22],
  options: {
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: [
      "#FF4560",
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#775DD0",
      "#FF66C3",
      "#3C4CCF",
      "#FFA800",
      "#3C3F44",
      "#B4B4B4",
    ],
    dataLabels: {
      enabled: true,
      formatter: (val) => val,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: [
        "Product A",
        "Product B",
        "Product C",
        "Product D",
        "Product E",
      ],
      labels: {
        style: {
          colors: ["#304758"],
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#304758"],
          fontSize: "12px",
        },
      },
    },
    title: {
      text: "Distributed Sales Data",
      align: "center",
      style: {
        fontSize: "20px",
        color: "#304758",
      },
    },
  },
};

const donutChartData = {
  chartType: "donut",
  title: "Sales Distribution",
  labels: ["Product A", "Product B", "Product C", "Product D"],
  data: [44, 55, 13, 33],
  options: {
    colors: ["#FF4560", "#008FFB", "#00E396", "#FEB019"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

// Chart component
const SingleLineChart = ({ chartOptions, series }) => (
  <ApexCharts options={chartOptions} series={series} type="line" height={150} />
);

// Card component
const MainCard = ({ data }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card sx={{ minWidth: 275, p: 2, m: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          justifyContent="space-between"
          alignItems={isSmallScreen ? "flex-start" : "center"}
        >
          {/* Title and Revenue */}
          <Box mb={isSmallScreen ? 2 : 0}>
            <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
              {data.title}
            </Typography>
            <Typography variant="h5" component="div">
              <Box display="flex" alignItems="center">
                <FaRupeeSign style={{ marginRight: "4px" }} />
                {data.revenueAmount}
              </Box>
            </Typography>
          </Box>
          {/* Chart */}
          <Box width={isSmallScreen ? "100%" : "60%"}>
            <SingleLineChart
              chartOptions={data.chartData.chartOptions}
              series={data.chartData.series}
            />
          </Box>
        </Box>
        {/* Growth Metrics */}
        <Box
          mt={2}
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          alignItems={isSmallScreen ? "flex-start" : "center"}
        >
          <Typography
            sx={{
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              fontSize: isSmallScreen ? "0.875rem" : "1rem",
              mr: isSmallScreen ? 0 : 2,
            }}
          >
            {data.growthMetrics.addIcon && (
              <IoMdAdd
                style={{
                  marginRight: 4,
                  color: data.growthMetrics.addIcon.color,
                }}
              />
            )}
            {data.growthMetrics.minusIcon && (
              <FaMinus
                style={{
                  marginRight: 4,
                  color: data.growthMetrics.minusIcon.color,
                }}
              />
            )}
            <span style={{ marginRight: 4 }}>
              {data.growthMetrics.percentage}
            </span>
            <MdPercent style={{ marginLeft: 4 }} />
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.875rem",
              mt: isSmallScreen ? 1 : 0,
              ml: isSmallScreen ? 0 : 1,
            }}
          >
            {data.growthMetrics.comparisonText}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

// Grid component to render the cards
const MainCardGrid = () => (
  <Grid container spacing={3}>
    {cardData.map((data, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <MainCard data={data} />
      </Grid>
    ))}
  </Grid>
);

// Distributed Bar Chart Component
const DistributedBarChart = ({ data }) => {
  const [chartOptions] = useState({
    chart: { type: data.chartType, height: 350, toolbar: { show: false } },
    plotOptions: data.options.plotOptions,
    colors: data.options.colors,
    dataLabels: data.options.dataLabels,
    xaxis: {
      categories: data.categories,
      labels: data.options.xaxis.labels,
    },
    yaxis: { labels: data.options.yaxis.labels },
    title: data.options.title,
  });

  const [chartSeries] = useState([{ name: "Sales", data: data.data }]);

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          {/* <Typography variant="h6" align="center" gutterBottom>
            {data.title}
          </Typography> */}
          <ApexCharts
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

// Donut Chart Component
const DonutChartCard = ({ data }) => {
  const [chartOptions] = useState({
    chart: { type: data.chartType },
    labels: data.labels,
    colors: data.options.colors,
    responsive: data.options.responsive,
  });

  const [chartSeries] = useState(data.data);

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            {data.title}
          </Typography>
          <ApexCharts
            options={chartOptions}
            series={chartSeries}
            type="donut"
            height={300}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

const IrregularTimeseriesAreaChart = () => {
  const dataSet = [
    [
      { x: "2014-01-01", y: 1200000 },
      { x: "2014-01-04", y: 1000000 },
      { x: "2014-01-05", y: 1300000 },
      { x: "2014-01-07", y: 1500000 },
      { x: "2014-01-09", y: 1100000 },
      { x: "2014-01-12", y: 1700000 },
      { x: "2014-01-15", y: 1400000 },
    ],
    [
      { x: "2014-01-01", y: 1000000 },
      { x: "2014-01-04", y: 1200000 },
      { x: "2014-01-06", y: 1100000 },
      { x: "2014-01-08", y: 1400000 },
      { x: "2014-01-10", y: 1300000 },
      { x: "2014-01-13", y: 1600000 },
      { x: "2014-01-17", y: 1500000 },
    ],
    [
      { x: "2014-01-02", y: 1300000 },
      { x: "2014-01-03", y: 1400000 },
      { x: "2014-01-05", y: 1100000 },
      { x: "2014-01-07", y: 1200000 },
      { x: "2014-01-11", y: 1350000 },
      { x: "2014-01-14", y: 1250000 },
      { x: "2014-01-18", y: 1500000 },
    ],
  ];

  const [chartOptions] = useState({
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    markers: { size: 0 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    yaxis: {
      labels: {
        style: { colors: "#8e8da4" },
        offsetX: 0,
        formatter: function(val) {
          return (val / 1000000).toFixed(2) + "M";
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    xaxis: {
      type: "datetime",
      tickAmount: 8,
      min: new Date("01/01/2014").getTime(),
      max: new Date("01/20/2014").getTime(),
      labels: {
        rotate: -15,
        rotateAlways: true,
        formatter: function(val, timestamp) {
          return moment(new Date(timestamp)).format("DD MMM YYYY");
        },
      },
    },
    title: {
      text: "Irregular Data in Time Series",
      align: "left",
      offsetX: 14,
    },
    tooltip: { shared: true },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetX: -10,
    },
  });

  const [chartSeries] = useState([
    { name: "PRODUCT A", data: dataSet[0] },
    { name: "PRODUCT B", data: dataSet[1] },
    { name: "PRODUCT C", data: dataSet[2] },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Irregular Timeseries Area Chart
          </Typography>
          <ApexCharts
            options={chartOptions}
            series={chartSeries}
            type="area"
            height={350}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

const data = [
  {
    id: "0001",
    name: "John Doe",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    address: "261 Erdman Ford",
    date: "04/09/2019",
    city: "East Daphne",
    state: "Kentucky",
    type: "Electric",
    status: "Complete",
    amount: 600,
  },
  {
    id: "0002",
    name: "Jane Smith",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    address: "123 Main St",
    date: "12/12/2018",
    city: "Columbus",
    state: "Ohio",
    type: "Gas",
    status: "Pending",
    amount: 450,
  },
  {
    id: "0003",
    name: "Joe Davis",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    address: "456 Oak Dr",
    date: "07/20/2021",
    city: "South Linda",
    state: "West Virginia",
    type: "Water",
    status: "In Progress",
    amount: 300,
  },
  {
    id: "0004",
    name: "Emily Clark",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    address: "789 Pine Ln",
    date: "03/15/2020",
    city: "Lincoln",
    state: "Nebraska",
    type: "Electric",
    status: "Complete",
    amount: 750,
  },
  {
    id: "0005",
    name: "Michael Brown",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    address: "321 Maple St",
    date: "09/22/2019",
    city: "Omaha",
    state: "Nebraska",
    type: "Gas",
    status: "Pending",
    amount: 500,
  },
  {
    id: "0006",
    name: "Michael Brown",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    address: "321 Maple St",
    date: "09/22/2019",
    city: "Omaha",
    state: "Nebraska",
    type: "Gas",
    status: "Rejected",
    amount: 500,
  },
];
// user-details
const UserDetailsTable = () => {

  const getStatusStyles = (status) => {
    switch (status) {
      case "Complete":
        return { backgroundColor: "#DFF2BF", border: "1px solid #4CAF50" };
      case "Pending":
        return { backgroundColor: "#FFECB3", border: "1px solid #FFC107" };
      case "In Progress":
        return { backgroundColor: "#BBDEFB", border: "1px solid #2196F3" };
      case "Rejected":
        return { backgroundColor: "#FFCDD2", border: "1px solid #F44336" };
      default:
        return { backgroundColor: "#E0E0E0", border: "1px solid #757575" };
    }
  };

  const columns = useMemo (
    () => [
      {
        accessorKey: "profileImage",
        header: "Profile",
        size: 50,
        Cell: ({ cell }) => (
          <Avatar src={cell.getValue()} alt="Profile" sx={{ width: 40, height: 40 }} />
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 100,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 100,
      },
      {
        accessorKey: "type",
        header: "Type",
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 100,
        Cell: ({ cell }) => {
          const status = cell.getValue();
          return (
            <Box
              sx={{
                p: 1,
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "bold",
                color: "#333",
                ...getStatusStyles(status),
              }}
            >
              {status}
            </Box>
          );
        },
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 100,
        Cell: ({ cell }) => `₹${cell.getValue()}`,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    renderTopToolbarCustomActions: ({ table }) => (
      <Box>
        <Typography variant="h5" component="div">
          Customer Orders
        </Typography>
        <Typography variant="body2" color="textSecondary">
          View details of recent orders from customers.
        </Typography>
      </Box>
    ),
  });

  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default function Dashboard() {
  return (
    <>
      <Box>
        <MainCardGrid />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          height: "400px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <DistributedBarChart data={barChartData} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <DonutChartCard data={donutChartData} />
        </Box>
      </Box>
      <Box>
        <IrregularTimeseriesAreaChart />
      </Box>
      <Box>
        <UserDetailsTable />
      </Box>
    </>
  );
}
