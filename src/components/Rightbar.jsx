import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Thomas Charles"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Scott Frank"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Alice MacKenzie"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Monica John" src="" />
          <Avatar
            alt="Habibullah Muntaqa"
            src="https://mui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Josh Malgwi"
            src="https://mui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdeLndgGFhjphhYe8KU4dS5bPiR2yCdZ0lodDBhLAjm69GU5n-wd4fSi1JiyJhyQmGuv8&usqp=CAU"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsckNzSTjc7f0_h8NoDjMjBWEsnw8ZW5HErGvJWqKLTWwMPe3T1iAaFLgM0z2SQGvZiE&usqp=CAU"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Al-Amin Muhammad" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gym this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Al-Amin Muhammad
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Josh Malgwi" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="DevFest?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Habib, Nina
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Habibullah Muntaqa
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
