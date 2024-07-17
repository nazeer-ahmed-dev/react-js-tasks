import { Avatar, Box, Card, CardContent, Grid, IconButton, Link, Typography } from "@mui/material";
import PropTypes from 'prop-types';

import Icon from "@mdi/react";
import {
    lime,
    green,
  } from "@mui/material/colors";
  import {

    mdiDotsHorizontal,
  
  } from "@mdi/js";

export default function UserCard({item}){
    return(
        // <Grid item xs={12} sm={6} md={6} lg={4} xl={3} mb={3} sx={{ width: "100%" }}>
        <Card sx={{ borderRadius: 4, p: 3 }}>
          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Avatar
                sx={{ bgcolor: lime[600], width: 60, height: 60, mr: 2 }}
                src={item?.avatar_url}
              >
               {item?.name?.[0] || "N"}
              </Avatar>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start"
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: 500 }}
                >
                  {item?.name}
                </Link>
                <Link
                  href={`https://github.com/${item?.login}`}
                  underline="always"
                  variant="body1"
                  color={green[500]}
                  sx={{ fontWeight: 500 }}
                >
                  {item?.login}
                </Link>
              </Box>
            </Box>
            <IconButton aria-label="settings">
              <Icon path={mdiDotsHorizontal} size={1.3} color="#222" />
            </IconButton>
          </Box>
          <CardContent sx={{ p: 0, mb: 0 }}>
            {/* <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Importance
            </Typography> */}
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
             {item?.created_at}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
             {item?.bio}
            </Typography>
            {/* <Link
              href="#"
              underline="always"
              variant="body1"
              color="text.primary"
              sx={{ fontWeight: "bold" }}
            >
              Read more
            </Link> */}
          </CardContent>
        </Card>
    //   </Grid>
    )
}

UserCard.defaultProps = {
    item:{}
  };
  
  UserCard.propTypes = {
    item: PropTypes.object.isRequired,
   
  };