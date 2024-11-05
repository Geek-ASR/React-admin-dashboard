// CourseDetails.js
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom"; // To receive course data

const CourseDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const { course } = location.state; // Course data passed from CoursesPage

  return (
    <Box m="20px">
      <Header title="Course Details" subtitle={course.title} />
      <Box mt="20px">
        <Typography variant="h6" color={colors.greenAccent[400]}>
          Instructor: {course.instructor}
        </Typography>
        <Typography mt="10px" color={colors.grey[200]}>
          Duration: {course.details?.duration || "N/A"}
        </Typography>
        <Typography mt="10px" color={colors.grey[200]}>
          Prerequisites: {course.details?.prerequisites || "N/A"}
        </Typography>
        <Typography mt="20px" color={colors.grey[100]}>
          Overview:
        </Typography>
        <Typography color={colors.grey[300]} mt="5px">
          {course.details?.overview || "Course overview not available."}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseDetails;