import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import downloadFile from '../helpers/downloadFile';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function CustomAppBar(props) {
    const classes = useStyles();

    const handleDownload = (type) => {
        if (type === 'md')
            downloadFile(props.data.markdown, 'input.md', 'text/plain');
        else if (type === 'html')
            downloadFile(props.data.html.__html, 'output.html', 'text/html');
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={() => handleDownload('md')} edge="start" className={classes.menuButton} color="inherit" aria-label="save-md">
                        <SaveAltIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Markdown Previewer
          </Typography>
                    <IconButton onClick={() => handleDownload('html')} edge="start" className={classes.menuButton} color="inherit" aria-label="save-html">
                        <SaveAltIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}