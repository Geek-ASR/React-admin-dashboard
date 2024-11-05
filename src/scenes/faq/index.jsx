// CoursesPage.js
import { Box, Grid, Card, CardContent, CardActions, Button, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

// Sample data with nine courses and mock detailed data for the first course
const courses = [
  { 
    id: 1,
    title: "Introduction to React", 
    instructor: "John Doe", 
    description: "Learn the basics of React and build dynamic web applications.",
    details: {
      duration: "4 weeks",
      prerequisites: "Basic JavaScript knowledge",
      overview: "This course covers React fundamentals including JSX, components, state, and props."
    }
  },
  { id: 2, title: "Advanced JavaScript", instructor: "Jane Smith", description: "Explore advanced JavaScript concepts and techniques." },
  { id: 3, title: "Data Structures and Algorithms", instructor: "Alice Johnson", description: "Understand essential data structures and algorithms for programming." },
  { id: 4, title: "Web Development Bootcamp", instructor: "Mike Brown", description: "Master HTML, CSS, and JavaScript to build web applications." },
  { id: 5, title: "Python for Data Science", instructor: "Sarah Davis", description: "Use Python for data analysis and visualization." },
  { id: 6, title: "Machine Learning Fundamentals", instructor: "Chris Green", description: "Discover machine learning basics and algorithms." },
  { id: 7, title: "Cloud Computing Basics", instructor: "Emma White", description: "Introduction to cloud services and deployment models." },
  { id: 8, title: "Database Design", instructor: "Robert Black", description: "Learn about relational and NoSQL databases for efficient data storage." },
  { id: 9, title: "Mobile App Development", instructor: "Sophia King", description: "Build mobile apps with Flutter and React Native." },
];

const CoursesPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  // Function to handle View Details button
  const viewCourseDetails = (course) => {
    // Route to the CourseDetails page with course ID (For now, just console log)
    console.log("View details for course:", course.id);

    // This would be the link to navigate with course ID
    // navigate(`/courses/${course.id}`, { state: { course } });
  };

  return (
    <Box m="20px">
      <Header title="Published Courses" subtitle="List of all available courses" />

      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card
              sx={{
                backgroundColor: colors.primary[700],
                color: colors.grey[100],
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color={colors.greenAccent[400]}>
                  {course.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color={colors.grey[300]}>
                  Instructor: {course.instructor}
                </Typography>
                <Typography variant="body2">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  variant="outlined" 
                  color="secondary" 
                  onClick={() => viewCourseDetails(course)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesPage;