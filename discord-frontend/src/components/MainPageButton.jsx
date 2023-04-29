import React, { useState } from "react";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import CreateGroupDialog from "./CreateGroupDialog";

const MainPageButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <Button
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          margin: 0,
          padding: 0,
          minWidth: 0,
          marginTop: "10px",
          color: "white",
        }}
        variant="contained"
        onClick={() => setIsDialogOpen(true)}
      >
        <GroupsIcon />
      </Button>
      <CreateGroupDialog
        closeDialog={() => setIsDialogOpen(false)}
        isDialogOpen={isDialogOpen}
      />
    </>
  );
};

export default MainPageButton;
