import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

// Mock data for Instructor Details based on signup form
const mockDataInstructors = [
  {
    id: 1,
    name: "Dr. John Doe",
    gender: "Male",
    dob: "1980-05-20",
    phone: "(555)123-4567",
    email: "johndoe@gmail.com",
    tenthpc: 85,
    twelfthpc: 90,
    diplomapc: 88,
    gdegree: "B.Tech",
    ginstitute: "ABC University",
    gyear: 2002,
    gpc: 80,
    pdegree: "M.Tech",
    pinstitute: "XYZ University",
    pyear: 2005,
    ppc: 85,
    expertise: "Computer Science",
    teachexp: "10 years",
    linkedin: "linkedin.com/in/johndoe",
    portfolio: "johndoe.com",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    gender: "Female",
    dob: "1985-03-15",
    phone: "(555)234-5678",
    email: "janesmith@gmail.com",
    tenthpc: 90,
    twelfthpc: 92,
    diplomapc: 89,
    gdegree: "B.Sc.",
    ginstitute: "XYZ University",
    gyear: 2007,
    gpc: 82,
    pdegree: "Ph.D.",
    pinstitute: "LMN University",
    pyear: 2012,
    ppc: 88,
    expertise: "Mathematics",
    teachexp: "8 years",
    linkedin: "linkedin.com/in/janesmith",
    portfolio: "janesmith.com",
  },
  {
    id: 3,
    name: "Mr. Alex Johnson",
    gender: "Male",
    dob: "1990-11-10",
    phone: "(555)345-6789",
    email: "alexjohnson@gmail.com",
    tenthpc: 88,
    twelfthpc: 87,
    diplomapc: 91,
    gdegree: "B.Com.",
    ginstitute: "PQR University",
    gyear: 2011,
    gpc: 79,
    pdegree: "MBA",
    pinstitute: "STU University",
    pyear: 2013,
    ppc: 83,
    expertise: "Business Administration",
    teachexp: "5 years",
    linkedin: "linkedin.com/in/alexjohnson",
    portfolio: "alexjohnson.com",
  },
  {
    id: 4,
    name: "Dr. Emily White",
    gender: "Female",
    dob: "1979-07-25",
    phone: "(555)456-7890",
    email: "emilywhite@gmail.com",
    tenthpc: 85,
    twelfthpc: 93,
    diplomapc: 90,
    gdegree: "B.Sc. in Biology",
    ginstitute: "GHI University",
    gyear: 2000,
    gpc: 91,
    pdegree: "Ph.D. in Microbiology",
    pinstitute: "JKL University",
    pyear: 2006,
    ppc: 90,
    expertise: "Biology",
    teachexp: "12 years",
    linkedin: "linkedin.com/in/emilywhite",
    portfolio: "emilywhite.com",
  },
  {
    id: 5,
    name: "Mr. Robert Brown",
    gender: "Male",
    dob: "1992-02-18",
    phone: "(555)567-8901",
    email: "robertbrown@gmail.com",
    tenthpc: 80,
    twelfthpc: 85,
    diplomapc: 87,
    gdegree: "B.Sc. in Physics",
    ginstitute: "MNO University",
    gyear: 2014,
    gpc: 76,
    pdegree: "M.Sc. in Physics",
    pinstitute: "PQR University",
    pyear: 2016,
    ppc: 82,
    expertise: "Physics",
    teachexp: "4 years",
    linkedin: "linkedin.com/in/robertbrown",
    portfolio: "robertbrown.com",
  },
  {
    id: 6,
    name: "Dr. Sarah Wilson",
    gender: "Female",
    dob: "1988-09-30",
    phone: "(555)678-9012",
    email: "sarahwilson@gmail.com",
    tenthpc: 95,
    twelfthpc: 94,
    diplomapc: 89,
    gdegree: "B.A. in English",
    ginstitute: "DEF University",
    gyear: 2010,
    gpc: 87,
    pdegree: "M.A. in Literature",
    pinstitute: "XYZ University",
    pyear: 2012,
    ppc: 91,
    expertise: "English Literature",
    teachexp: "6 years",
    linkedin: "linkedin.com/in/sarahwilson",
    portfolio: "sarahwilson.com",
  },
  {
    id: 7,
    name: "Mr. Michael Green",
    gender: "Male",
    dob: "1982-12-05",
    phone: "(555)789-0123",
    email: "michaelgreen@gmail.com",
    tenthpc: 89,
    twelfthpc: 88,
    diplomapc: 86,
    gdegree: "B.E. in Civil Engineering",
    ginstitute: "UVW University",
    gyear: 2003,
    gpc: 80,
    pdegree: "M.Tech in Structural Engineering",
    pinstitute: "RST University",
    pyear: 2008,
    ppc: 84,
    expertise: "Civil Engineering",
    teachexp: "9 years",
    linkedin: "linkedin.com/in/michaelgreen",
    portfolio: "michaelgreen.com",
  },
  {
    id: 8,
    name: "Dr. Lisa Taylor",
    gender: "Female",
    dob: "1975-08-14",
    phone: "(555)890-1234",
    email: "lisataylor@gmail.com",
    tenthpc: 91,
    twelfthpc: 95,
    diplomapc: 88,
    gdegree: "B.Sc. in Chemistry",
    ginstitute: "QRS University",
    gyear: 1997,
    gpc: 85,
    pdegree: "Ph.D. in Organic Chemistry",
    pinstitute: "ABC University",
    pyear: 2003,
    ppc: 90,
    expertise: "Chemistry",
    teachexp: "15 years",
    linkedin: "linkedin.com/in/lisataylor",
    portfolio: "lisataylor.com",
  },
  
];

// Columns configuration based on Instructor signup form fields
const columns = [
  { field: "id", headerName: "ID", minWidth: 60 },
  { field: "name", headerName: "Name", minWidth: 150 },
  { field: "gender", headerName: "Gender", minWidth: 100 },
  { field: "dob", headerName: "DOB", minWidth: 120 },
  { field: "phone", headerName: "Phone No.", minWidth: 150 },
  { field: "email", headerName: "Email", minWidth: 200 },
  { field: "tenthpc", headerName: "10th %", minWidth: 90 },
  { field: "twelfthpc", headerName: "12th %", minWidth: 90 },
  { field: "diplomapc", headerName: "Diploma %", minWidth: 90 },
  { field: "gdegree", headerName: "Grad Degree", minWidth: 130 },
  { field: "ginstitute", headerName: "Grad Institute", minWidth: 180 },
  { field: "gyear", headerName: "Grad Year", minWidth: 100 },
  { field: "gpc", headerName: "Grad %", minWidth: 90 },
  { field: "pdegree", headerName: "Postgrad Degree", minWidth: 150 },
  { field: "pinstitute", headerName: "Postgrad Institute", minWidth: 180 },
  { field: "pyear", headerName: "Postgrad Year", minWidth: 100 },
  { field: "ppc", headerName: "Postgrad %", minWidth: 90 },
  { field: "expertise", headerName: "Expertise", minWidth: 180 },
  { field: "teachexp", headerName: "Teaching Exp.", minWidth: 130 },
  { field: "linkedin", headerName: "LinkedIn", minWidth: 200 },
  { field: "portfolio", headerName: "Portfolio", minWidth: 200 },
];

const InstructorDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="INSTRUCTOR DETAILS" subtitle="Detailed Information on Instructors" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        width="auto" // Make the container auto-width
        sx={{
          overflowX: "auto", // Enables horizontal scrolling if content overflows
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            whiteSpace: "nowrap", // Prevents cell content from wrapping
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInstructors}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          autoHeight // Adjusts the height of the grid to fit the rows
          disableColumnMenu // Optional: Hides column menu for a cleaner look
        />
      </Box>
    </Box>
  );
};

export default InstructorDetails;