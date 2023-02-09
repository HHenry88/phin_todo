import { TableContainer, Table } from "@mui/material";
import { useState } from "react";
import { TodoTableBody } from "./Body";
import { TodoTableHeader } from "./Header";

export const TodoTableContainer = () => {
  const [isAscending, setIsAscending] = useState<boolean>(true);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
        <TodoTableHeader
          onToggle={() => setIsAscending(!isAscending)}
          isAscending={isAscending}
        />
        <TodoTableBody isAscending={isAscending} />
      </Table>
    </TableContainer>
  );
};
