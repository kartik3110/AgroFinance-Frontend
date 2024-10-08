// this is not being used for now
import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

export default function Modal() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const closeModal = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          You need to complete KYC first!
        </Box>
      </Popper>
    </div>
  );
}
