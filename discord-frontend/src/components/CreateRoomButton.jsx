import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { createNewRoom } from "../socket/roomHandler";

const CreateRoomButton = () => {
  const createNewRoomHandler = () => {
    createNewRoom();
  };
  return (
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
      onClick={createNewRoomHandler}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;
