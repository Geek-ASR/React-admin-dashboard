import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Typography,
  Modal,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header"; // Assuming you have a Header component
import { tokens } from "../../theme"; // Importing tokens

const InstructorRequested = () => {
  const [open, setOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  // Getting the theme object first
  const theme = useTheme();
  // Getting the colors based on the current theme mode
  const colors = tokens(theme.palette.mode);

  const handleOpen = (instructor) => {
    setSelectedInstructor(instructor);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedInstructor(null);
  };

  // Mock data for instructors
  const mockDataInstructorRequested = [
    {
      id: 1,
      name: "John Doe",
      gender: "Male",
      dob: "1990-01-01",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      tenthpc: 90,
      twelfthpc: 88,
      diplomapc: 92,
      gdegree: "B.Tech",
      ginstitute: "XYZ University",
      gyear: 2012,
      gpc: 8.5,
      pdegree: "M.Tech",
      pinstitute: "ABC Institute",
      pyear: 2014,
      ppc: 8.7,
      expertise: "Blockchain",
      teachexp: "5 years",
      linkedin: "linkedin.com/in/johndoe",
      portfolio: "johndoeportfolio.com",
      experience: "5 years", // Adding the experience here
    },
    {
      id: 2,
      name: "Jane Smith",
      gender: "Female",
      dob: "1992-03-15",
      phone: "987-654-3210",
      email: "janesmith@example.com",
      tenthpc: 85,
      twelfthpc: 90,
      diplomapc: 88,
      gdegree: "B.Sc. in Computer Science",
      ginstitute: "ABC College",
      gyear: 2014,
      gpc: 9.0,
      pdegree: "M.Sc. in AI",
      pinstitute: "DEF University",
      pyear: 2016,
      ppc: 9.2,
      expertise: "AI",
      teachexp: "3 years",
      linkedin: "linkedin.com/in/janesmith",
      portfolio: "janesmithportfolio.com",
      experience: "3 years", // Adding the experience here
    },
    // Add more mock data as needed
  ];

  const columns = [
    { field: "name", headerName: "Name", width: 180, cellClassName: "name-column--cell" },
    { field: "phone", headerName: "Phone No.", width: 180 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "expertise", headerName: "Expertise", width: 180 },
    { field: "experience", headerName: "Experience", width: 180 }, // Adding Experience to the table
    {
      field: "details",
      headerName: "Details",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen(params.row)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="INSTRUCTOR REQUESTED" subtitle="Manage Instructor Requests" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          // Use the colors object from the tokens function
          "& .name-column--cell": { color: colors.greenAccent[300] }, // Color from tokens
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700], // Background color from tokens
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] }, // Virtual scroller background color from tokens
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700], // Footer background color from tokens
          },
          "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` }, // Checkbox color from tokens
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInstructorRequested} columns={columns} />
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            opacity: 0.9,
            border: `2px solid ${colors.blueAccent[500]}`, // Adding a border
            boxShadow: `0px 4px 20px rgba(0, 0, 0, 0.2)`, // Adding a soft shadow for depth
            backdropFilter: "blur(10px)", // Optional, adds a blur effect to the background
          }}
        >
          {selectedInstructor && (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedInstructor.name}'s Details
              </Typography>
              <Typography><strong>ID:</strong> {selectedInstructor.id}</Typography>
              <Typography><strong>Name:</strong> {selectedInstructor.name}</Typography>
              <Typography><strong>Gender:</strong> {selectedInstructor.gender}</Typography>
              <Typography><strong>DOB:</strong> {selectedInstructor.dob}</Typography>
              <Typography><strong>Phone:</strong> {selectedInstructor.phone}</Typography>
              <Typography><strong>Email:</strong> {selectedInstructor.email}</Typography>
              <Typography><strong>10th %:</strong> {selectedInstructor.tenthpc}</Typography>
              <Typography><strong>12th %:</strong> {selectedInstructor.twelfthpc}</Typography>
              <Typography><strong>Diploma %:</strong> {selectedInstructor.diplomapc}</Typography>
              <Typography><strong>Grad Degree:</strong> {selectedInstructor.gdegree}</Typography>
              <Typography><strong>Grad Institute:</strong> {selectedInstructor.ginstitute}</Typography>
              <Typography><strong>Grad Year:</strong> {selectedInstructor.gyear}</Typography>
              <Typography><strong>Grad %:</strong> {selectedInstructor.gpc}</Typography>
              <Typography><strong>Postgrad Degree:</strong> {selectedInstructor.pdegree}</Typography>
              <Typography><strong>Postgrad Institute:</strong> {selectedInstructor.pinstitute}</Typography>
              <Typography><strong>Postgrad Year:</strong> {selectedInstructor.pyear}</Typography>
              <Typography><strong>Postgrad %:</strong> {selectedInstructor.ppc}</Typography>
              <Typography><strong>Expertise:</strong> {selectedInstructor.expertise}</Typography>
              <Typography><strong>Teaching Experience:</strong> {selectedInstructor.teachexp}</Typography>
              <Typography><strong>LinkedIn:</strong> <a href={selectedInstructor.linkedin} target="_blank" rel="noopener noreferrer">{selectedInstructor.linkedin}</a></Typography>
              <Typography><strong>Portfolio:</strong> <a href={selectedInstructor.portfolio} target="_blank" rel="noopener noreferrer">{selectedInstructor.portfolio}</a></Typography>
              
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mr: 2 }}
                  onClick={handleClose}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClose}
                >
                  Reject
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default InstructorRequested;