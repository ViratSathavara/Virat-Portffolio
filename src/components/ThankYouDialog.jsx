import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ThankYouDialog = ({ open, onClose }) => {
  const handleGoHome = () => {
    onClose();
    window.location.href = "/";
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="thank-you-dialog"
    >
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        🎉 Thank You!
      </DialogTitle>

      <DialogContent>
        <p style={{ textAlign: "center" }}>
          Your message has been sent successfully. We’ll get back to you soon!
        </p>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleGoHome}
        >
          Go to Home
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ThankYouDialog;
