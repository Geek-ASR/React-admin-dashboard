import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

// Mock data for instructors and students
const mockInstructorData = [
  { id: "Instructors", label: "Instructors", value: 10 },
  { id: "Students", label: "Students", value: 90 },
];

// Mock data for course enrollment
const mockCourseData = [
  { id: "DSA", label: "CS101", value: 40 },
  { id: "Blockchain", label: "CS102", value: 30 },
  { id: "AI-ML", label: "CS103", value: 20 },
  { id: "Cloud Computing", label: "CS104", value: 10 },
];

const PieChart = ({ type }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Determine which data to use based on the type prop
  const data = type === "instructors" ? mockInstructorData : mockCourseData;
  

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;



// import { useEffect, useState } from "react";

// ...

// const PieChart = ({ type }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Replace 'API_ENDPOINT' with your actual MongoDB API endpoint
//       const response = await fetch("API_ENDPOINT");
//       const result = await response.json();
//       setData(result); // Update state with fetched data
//     };

//     fetchData();
//   }, [type]); // Fetch new data when type changes

//   // Use data directly from state
//   return (
//     <ResponsivePie
//       data={data}
//       // ... rest of your chart code
//     />
//   );
// };