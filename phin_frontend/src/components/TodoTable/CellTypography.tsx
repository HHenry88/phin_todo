import { TableCell, Typography } from "@mui/material";

export const CellTypography = (props: { children: string | number }) => {
  return (
    <TableCell>
      <Typography variant="h6" sx={{ color: "white" }}>
        {props.children}
      </Typography>
    </TableCell>
  );
};
