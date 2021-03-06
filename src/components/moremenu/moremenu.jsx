import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 100;

const styles = () => ({
    button: {
        marginTop: '11px',
    },
});

class MoreMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    openMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    }

    closeMenu = (event, option) => {
        this.setState({ anchorEl: null });
        this.props.handleItemClick(option);
    }

    render() {
        const { classes } = this.props;
        const open = Boolean(this.state.anchorEl);

        const menu = open
            ? (<Menu
                id = "long-menu"
                anchorEl = {this.state.anchorEl}
                open = {open}
                onClose = {this.closeMenu}
                PaperProps = {{
                    style: {
                        maxHeight: ITEM_HEIGHT * this.props.options.length,
                        width: 200,
                    },
                }}>
                {this.props.options.map(option => (
                    <MenuItem key = {option} onClick = {event => this.closeMenu(event, option)} >
                        {option}
                    </MenuItem>
                ))}
            </Menu>)
            : null;

        return (
            <div className={classes.button}>
                <IconButton size="small" onClick = {this.openMenu}>
                    <MoreVertIcon />
                </IconButton>
                {menu}
            </div>
        );
    }
}

export default withStyles(styles)(MoreMenu);
