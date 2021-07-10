import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { Theme } from "@material-ui/core";
import { Link } from "@material-ui/core";

const useStyles = makeStyles<Theme, Props>((theme) => ({
  icons: {
    margin: theme.spacing(1, 0.5),
    color: ({ color }) => color,
  },
}));

interface Props {
  color: any;
}
export const SocialHandles: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <Link href="https://www.facebook.com/pokharelsrj/" target="_blank">
        <FacebookIcon className={classes.icons} />
      </Link>
      <Link href="https://www.instagram.com/srijan_pokharel/" target="_blank">
        <InstagramIcon className={classes.icons} />
      </Link>

      <Link href="https://twitter.com/pokharelsrj" target="_blank">
        <TwitterIcon className={classes.icons} />
      </Link>

      <Link href="https://www.linkedin.com/in/pokharelsrj/" target="_blank">
        <LinkedInIcon className={classes.icons} />
      </Link>

      <Link href="https://www.facebook.com/pokharelsrj/" target="_blank">
        <EmailIcon className={classes.icons} />
      </Link>
    </React.Fragment>
  );
};

SocialHandles.displayName = "SocialHandles";
