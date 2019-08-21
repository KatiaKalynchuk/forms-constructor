import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { ActionButton } from './Buttons';
import { CREATE } from '../constants/router';

const Main = ({ toCreate }) => {

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

      <ActionButton onClick={toCreate} />
    </div>
  );
};

Main.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  toCreate: id => dispatch(push(CREATE))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);