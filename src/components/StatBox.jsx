import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          {icon && (
            <Box mr="20px">
              {icon}
            </Box>
          )}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Typography
          variant="h3"
          sx={{ color: colors.greenAccent[500] }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;