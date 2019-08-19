import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

const Main = props => {
  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="Name" />

          <ListItemText>
            <PeopleOutlineIcon />
          </ListItemText>
          <ListItemText>
            <FormatListNumberedIcon />
          </ListItemText>
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <ListItemText primary="1" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          <ListItemText primary="5" />
          <ListItemText primary="10" />
        </ListItem>
      </List>
    </div>
  );
};

Main.propTypes = {

};

export default Main;