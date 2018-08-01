import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography, Divider, Button } from '@material-ui/core';
import StaffList from './StaffList';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
    shift: {
        padding: theme.spacing.unit * 3,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            minWidth: 300,
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 540,
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: 900,
        },
    },
    file: {
        borderRadius: 4,
        border: '1px solid #c494de',
        padding: '6px 4px 7px 6px ',
        width: 'calc(100% - 24px)',
        height: '1.95em',
        fontFamily: [
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(',')
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

let id = 0;
function createData(names, email, phone) {
    id += 1;
    return { id, names, email, phone };
}

class StaffListUpload extends Component {

    state = {
        data: [],
    }

    handleCSVSubmit = (e) => {
        const csvDirectory = document.querySelector('#list-upload');
        e.preventDefault();
        if (csvDirectory.files.length > 0) {
            const file = csvDirectory.files[0];
            if (file.type === 'application/vnd.ms-excel') {
                const reader = new FileReader();
                reader.onload = () => {
                    const resultArr = [];
                    reader.result.split('\r\n').forEach((row) => { //Splits it to single rows
                        if (row) {
                            const rowArr = [];
                            row.split(',').forEach((n) => { //splits it to individual cells
                                rowArr.push(n);
                            })
                            resultArr.push(rowArr);
                        }
                    });

                    const data = resultArr.map((m) => {
                        return createData(...m);
                    })

                    this.setState({
                        data,
                    })

                }
                reader.readAsText(file);
            }
        }


    }

    render() {
        const { classes } = this.props;
        const { data } = this.state;

        return (

            <Grid
                container
                spacing={16}
                alignItems='center'
                direction='column'
                justify='center'
                className={classes.shift}
            >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="title" component="h2" align="left">
                            Upload List
                        </Typography>
                        <Divider />
                        <form noValidate autoComplete="off" onSubmit={this.handleCSVSubmit}>
                            <TextField
                                id="list-upload"
                                type="file"
                                margin="normal"
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: classes.file,
                                    },
                                }}
                            />
                            <Button variant="contained" color="default" className={classes.button} type="submit" id="submitCSV">
                                Upload
                        <CloudUploadIcon className={classes.rightIcon} />
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <StaffList data={data} />
                    </Paper>
                </Grid>
            </Grid>
        );

    }
}

StaffListUpload.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaffListUpload);