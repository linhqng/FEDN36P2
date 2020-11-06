import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import ShowtimeToolbar from './components/ShowtimeToolbar/ShowtimeToolbar';
import styles from "./styles";

ShowtimeList.propTypes = {
    
};

function ShowtimeList(props) {
    return (
        <div>
            <ShowtimeToolbar>
                
            </ShowtimeToolbar>
        </div>
    );
}


export default withStyles(styles)(ShowtimeList);