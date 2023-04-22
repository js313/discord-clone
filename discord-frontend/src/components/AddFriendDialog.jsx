import { Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import { connect } from "react-redux";
import { getActions } from "../app/actions/friendsAction";

const AddFriendDialog = (props) => {
  const [email, setEmail] = useState("");

  const handleSendInvitation = () => {
    props.sendFriendRequest({ email });
    props.closeDialogHandler();
    setEmail("");
  };
  const handleCloseDialog = () => {
    props.closeDialogHandler();
    setEmail("");
  };

  return (
    <div>
      <Dialog
        open={props.isDialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{ style: { backgroundColor: "#36393F" } }}
      >
        <DialogTitle sx={{ color: "whitesmoke" }}>Add Friend</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "whitesmoke" }}>
            Enter the email address of the person you want to add as a friend.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            inputProps={{
              style: { color: "white" },
            }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: "whitesmoke" }}>
            Cancel
          </Button>
          <Button onClick={handleSendInvitation} sx={{ color: "whitesmoke" }}>
            Add Friend
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(null, (dispatch) => {
  return { ...getActions(dispatch) };
})(AddFriendDialog);
