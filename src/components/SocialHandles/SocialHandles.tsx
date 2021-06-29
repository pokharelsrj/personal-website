import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  icons: {
    margin: theme.spacing(1, 0.5),
  },
}));

export const SocialHandles: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <FacebookIcon className={classes.icons} />
      <InstagramIcon className={classes.icons} />
      <TwitterIcon className={classes.icons} />
      <LinkedInIcon className={classes.icons} />
      <EmailIcon className={classes.icons} />
    </React.Fragment>
  );
};

SocialHandles.displayName = "SocialHandles";
