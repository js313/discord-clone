import { Button } from "@mui/material";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import React from "react";
import AddFriendDialog from "./AddFriendDialog";

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const openDialogHandler = () => {
    setIsDialogOpen(true);
  };

  const closeDialogHandler = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          marginTop: "10px",
          marginLeft: "10px",
          width: "80%",
          height: "30px",
          // background: "#3BA55D",
        }}
        startIcon={<PersonAddRoundedIcon />}
        onClick={openDialogHandler}
      >
        Add Friend
      </Button>
      <AddFriendDialog
        closeDialogHandler={closeDialogHandler}
        isDialogOpen={isDialogOpen}
      />
    </>
  );
};

export default AddFriendButton;
