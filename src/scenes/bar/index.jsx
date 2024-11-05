import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Student Distribution" subtitle="Distribution of Students Across CS Courses" />
      
      <Box height="75vh">
        {/* Render the BarChart component */}
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
