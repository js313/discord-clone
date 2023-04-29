import { Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import { connect } from "react-redux";
import { getActions } from "../app/actions/friendsActions";
import { getActions as getGroupActions } from "../app/actions/groupActions";

const CreateGroupDialog = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateGroup = () => {
    props.closeDialog();
    props.createNewGroup({ name, description });
    setName("");
    setDescription("");
  };
  const handleCloseDialog = () => {
    props.closeDialog();
    setName("");
    setDescription("");
  };

  return (
    <div>
      <Dialog
        open={props.isDialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{ style: { backgroundColor: "#36393F" } }}
      >
        <DialogTitle sx={{ color: "whitesmoke" }}>New Group</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "whitesmoke" }}>
            Add group details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="Group Name"
            type="name"
            fullWidth
            variant="standard"
            inputProps={{
              style: { color: "white" },
            }}
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Group Description"
            type="text"
            fullWidth
            variant="standard"
            inputProps={{
              style: { color: "white" },
            }}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: "whitesmoke" }}>
            Cancel
          </Button>
          <Button onClick={handleCreateGroup} sx={{ color: "whitesmoke" }}>
            Create Group
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(null, (dispatch) => {
  return { ...getActions(dispatch), ...getGroupActions(dispatch) };
})(CreateGroupDialog);
