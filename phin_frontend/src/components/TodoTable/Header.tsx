import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { CellTypography } from "./CellTypography";

export const TodoTableHeader = ({
  onToggle,
  isAscending,
}: {
  onToggle: () => void;
  isAscending: boolean;
}) => {
  return (
    <TableHead>
      <TableRow>
        <CellTypography>Title</CellTypography>
        <CellTypography>Description</CellTypography>
        <TableCell>
          <TableSortLabel
            sx={{
              color: "white",
              "&.Mui-active .MuiTableSortLabel-icon": {
                color: "white",
                opacity: 1,
              },
            }}
            active={true}
            direction={isAscending ? "asc" : "desc"}
            onClick={onToggle}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
              Created
            </Typography>
          </TableSortLabel>
        </TableCell>
        <CellTypography>Completed</CellTypography>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};
