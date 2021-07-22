import React from "react";
import { Typography } from "@material-ui/core";
import { SkillsInterface } from "./types";

export const SkillsDescription: React.FC<SkillsInterface> = ({
  title,
  description,
}) => {
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        color="textPrimary"
        component="p"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
      >
        {description}
      </Typography>
    </>
  );
};

SkillsDescription.displayName = "SkillsDescription";
