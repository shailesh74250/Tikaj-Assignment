import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';


//  import service 
import NotificationService from '../../service/NotificationService';
const notificationService = new NotificationService()
const drawerWidth = 350;


const styles = theme => ({
    root: {
        display: 'flex',
    },
    footer: {
        top: 'auto',
        bottom: 0,
        right:0,
        height: '50px',
        width: '350px',
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
});


class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            open:false,
            direction:'ltr',
            data:[],
        }
    }
    componentDidMount(){
        var self = this;
        notificationService.getNotifications()
        .then(function(result) {
            console.log(result);
            self.setState({data: result})
        });
    }
    handleDrawerOpen = () => {
        this.setState({
            open:true
        })
    }
    handleDrawerClose = () => {
        this.setState({
            open:false
        })
    }
    
    render(){
        const classes = this.props.classes
        //const theme = useTheme();
        return(
            <div className={classes.root}>
                <IconButton
                    style={{ marginLeft: "auto", marginRight:'20px' }}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    edge="end"
                    className={clsx(classes.menuButton, this.state.open && classes.hide)}
                >
                    <MenuIcon/> 
                </IconButton>  
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={this.state.open}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose} >
                            {this.state.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                        <Typography variant="h6">Notifications</Typography>
                    </div>
                    <Divider />
                        {this.state.data.map((item, index) => (
                            <ExpansionPanel key={item.id}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>{item.title}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        {item.description}<br/>{item.time_stamp}<br/>Created by: {item.author}
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                        <AppBar position="fixed" className={classes.footer}>
                            <Toolbar>
                                <a href="#" style={{padding:'10px', color:'white'}}>Link1</a>
                                <a href="#" style={{padding:'10px', color:'white'}}>Link2</a>
                                <a href="#" style={{padding:'10px', color:'white'}}>Link3</a>
                                <a href="#" style={{padding:'10px', color:'white'}}>Link4</a>
                                <a href="#" style={{padding:'10px', color:'white'}}>Link5</a>
                            </Toolbar>
                        </AppBar>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Test)