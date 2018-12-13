import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';
import { TextField, Dialog, FormGroup, DialogActions, DialogContent, DialogTitle, MenuItem, FormControlLabel,InputAdornment,
     IconButton } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const formStyles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
});


const departments = [
    {
        value: 'software',
        label: 'Software App. & Database Mangt.',
    },
    {
        value: 'research',
        label: 'Research & Special Projects',
    },
    {
        value: 'networking',
        label: 'Networking & Communication',
    },
    {
        value: 'hardware',
        label: 'Hardware & Infrastructure',
    },
];

class AddNewUser extends Component {
    state = {
        admin: false,
        department: 'software',
        showPassword: false,
        password: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes, openDialog, handleClose } = this.props;
        return (
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
                <DialogContent>
                    <form className={classes.container} autoComplete>
                        <TextField
                            id="first-name-input"
                            label="First Name"
                            className={classes.textField}
                            type="text"
                            name="first-name"
                            autoComplete="given-name"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="last-name-input"
                            label="Last Name"
                            className={classes.textField}
                            type="text"
                            name="last-name"
                            autoComplete="family-name"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="phone-number-input"
                            label="Phone Number"
                            className={classes.textField}
                            type="tel"
                            name="last-name"
                            autoComplete="family-name"
                            margin="normal"
                            variant='outlined'
                        />
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.Admin}
                                        onChange={this.handleChange('admin')}
                                        value="Admin"
                                    />
                                }
                                label="Admin"
                            />
                        </FormGroup>
                        <TextField
                            id="phone-number-input"
                            label="Phone Number"
                            className={classes.textField}
                            type="tel"
                            name="last-name"
                            autoComplete="family-name"
                            margin="normal"
                            variant='outlined'
                        />
                        <TextField
                            id=""
                            select
                            label="Select"
                            className={classes.textField}
                            value={this.state.department}
                            onChange={this.handleChange('department')}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select your Department"
                            margin="normal"
                            variant="outlined"
                        >
                            {departments.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-adornment-password"
                            className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
            </Button>
                </DialogActions>
            </Dialog>

        );
    }
}


export default withStyles(formStyles)(AddNewUser);
