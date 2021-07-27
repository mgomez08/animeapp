import React from "react";
import { makeStyles, Chip, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  gender: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
export const AnimeGenders = ({ included }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="subtitle1" color="textSecondary">
        Genders:
      </Typography>
      <div className="genders">
        {included.map((include, i) => {
          if (include.type === "categories") {
            return (
              <Chip
                key={i}
                label={include.attributes.title}
                className={classes.gender}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};
