import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Dialog } from "@mui/material";
import ReactPlayer from "react-player";

const YouTubeDialog = (props, ref) => {
  const [state, _setState] = useState({ open: false });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };
  useImperativeHandle(ref, () => ({
    show: (url) => {
      setState({ open: true, url });
    },
  }));

  const handleClose = () => {
    setState({ open: false });
  };

  return (
    <Dialog
      open={state.open}
      onClose={handleClose}
      //   fullWidth
      //   maxWidth="sx"
      PaperProps={{
        className: "jss11",
      }}
    >
      <ReactPlayer
        url={state.url}
        // width="100%"
        config={{
          attributes: {
            className: "jss13",
          },
          style: { overflow: "hidden" },
        }}
      />
    </Dialog>
  );
};

export default forwardRef(YouTubeDialog);
