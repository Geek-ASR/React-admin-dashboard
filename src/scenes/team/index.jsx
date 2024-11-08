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
  const colors = tokens(theme.palette.mode);

  const handleOpen = (instructor) => {
    setSelectedInstructor(instructor);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedInstructor(null);
  };

  // Mock data for instructors with paths to PDF resume and certificate
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
      experience: "5 years",
      resume: "/Aditya Rekhe_Resume.pdf", // Updated path
      certificate: "https://example.com/sample_certificate.pdf", // Sample PDF URL for certificate
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
      expertise: "Artificial Intelligence",
      teachexp: "3 years",
      linkedin: "https://linkedin.com/in/janesmith",
      portfolio: "https://janesmithportfolio.com",
      experience: "3 years",
      resume: "/Aditya Rekhe_Resume.pdf", 
      certificate: "https://example.com/sample_certificate.pdf",
    },
    {
      id: 3,
      name: "Michael Johnson",
      gender: "Male",
      dob: "1985-05-20",
      phone: "555-123-4567",
      email: "michaelj@example.com",
      tenthpc: 89,
      twelfthpc: 87,
      diplomapc: null,
      gdegree: "B.A. in History",
      ginstitute: "State University",
      gyear: 2006,
      gpc: 8.0,
      pdegree: "M.A. in History",
      pinstitute: "State University",
      pyear: 2008,
      ppc: 8.2,
      expertise: "Education",
      teachexp: "10 years",
      linkedin: "https://linkedin.com/in/michaeljohnson",
      portfolio: "https://michaeljohnson.com",
      experience: "10 years",
      resume: "/Aditya Rekhe_Resume.pdf", 
      certificate: "https://example.com/sample_certificate.pdf",
    },
    {
      id: 4,
      name: "Emily White",
      gender: "Female",
      dob: "1987-08-25",
      phone: "555-555-5555",
      email: "emilyw@example.com",
      tenthpc: 92,
      twelfthpc: 89,
      diplomapc: null,
      gdegree: "B.Sc. in Physics",
      ginstitute: "DEF College",
      gyear: 2008,
      gpc: 8.8,
      pdegree: "Ph.D. in Physics",
      pinstitute: "XYZ Institute",
      pyear: 2014,
      ppc: 9.0,
      expertise: "Physics",
      teachexp: "6 years",
      linkedin: "https://linkedin.com/in/emilywhite",
      portfolio: "https://emilywhiteportfolio.com",
      experience: "6 years",
      resume: "/Aditya Rekhe_Resume.pdf", 
      certificate: "https://example.com/sample_certificate.pdf",
    },
    {
      id: 5,
      name: "Robert Brown",
      gender: "Male",
      dob: "1991-11-01",
      phone: "444-333-2222",
      email: "robertb@example.com",
      tenthpc: 80,
      twelfthpc: 85,
      diplomapc: 87,
      gdegree: "B.Com",
      ginstitute: "Commerce University",
      gyear: 2011,
      gpc: 7.9,
      pdegree: "MBA",
      pinstitute: "Business School",
      pyear: 2014,
      ppc: 8.1,
      expertise: "Finance",
      teachexp: "4 years",
      linkedin: "https://linkedin.com/in/robertbrown",
      portfolio: "https://robertbrown.com",
      experience: "4 years",
      resume: "/Aditya Rekhe_Resume.pdf",
      certificate: "https://example.com/sample_certificate.pdf",
    },
  ];

  const columns = [
    { field: "name", headerName: "Name", width: 180, cellClassName: "name-column--cell" },
    { field: "phone", headerName: "Phone No.", width: 180 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "expertise", headerName: "Expertise", width: 180 },
    { field: "experience", headerName: "Experience", width: 180 },
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
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
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
            border: `2px solid ${colors.blueAccent[500]}`,
            boxShadow: `0px 4px 20px rgba(0, 0, 0, 0.2)`,
            backdropFilter: "blur(10px)",
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
              <Typography><strong>Resume:</strong> <a href="/Aditya Rekhe_Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a></Typography>
              <Typography><strong>Certificate:</strong> <a href={selectedInstructor.certificate} target="_blank" rel="noopener noreferrer">View Certificate</a></Typography>
              
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