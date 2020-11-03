import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import MovieToolbar from "./components/MovieToolbar/MovieToolbar";
import { useSelector, useDispatch } from "react-redux";
import ResponsiveDialog from "../../../components/ReponsiveDialog/ReponsiveDialog";
import { onSelectMovie } from "../../../redux/actions/movies";
import styles from './style'
import AddMovie from "./components/AddMovie/AddMovie";
MovieList.propTypes = {};

function MovieList(props) {
  const [search, SetSearch] = useState("");
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movieState.selectedMovie);
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MovieToolbar
        search={search}
        // onChangeSearch={(e) => setState({ search: e.target.value })}
      />
      {/* <div className={classes.content}>{renderMovies()}</div> */}
      <ResponsiveDialog
        id="Edit-movie"
        open={Boolean(selectedMovie)}
        handleClose={() => dispatch(onSelectMovie(null))}
      >
        <AddMovie edit={selectedMovie} />
      </ResponsiveDialog>
    </div>
  );
}

export default withStyles(styles)(MovieList);
