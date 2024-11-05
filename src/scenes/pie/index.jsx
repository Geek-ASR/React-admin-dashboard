import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Charts" />
      <Box display="flex" justifyContent="space-between" height="75vh">
        {/* First Pie Chart for Instructors and Students */}
        <Box width="45%">
          <Header title="Instructor vs Students" subtitle="Distribution of Instructors and Students" />
          <PieChart type="instructors" />
        </Box>

        {/* Second Pie Chart for Course Enrollments */}
        <Box width="45%">
          <Header title="Course Enrollment Distribution" subtitle="Distribution of Students Across Courses" />
          <PieChart type="courses" />
        </Box>
      </Box>
    </Box>
  );
};

export default Pie;