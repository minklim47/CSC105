import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";

function Content() {
  return (
    <Grid
      container>
      <Grid item>
        <Box>
          <Typography variant="h4" >Welcome to My Website</Typography>
          <Typography variant="body1" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            labore saepe nihil ipsam provident, soluta maxime voluptatibus
            delectus ipsa nobis quidem, numquam aliquam esse. Exercitationem
            magnam veniam ipsa unde reprehenderit? lore
          </Typography>
          
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            labore saepe nihil ipsam provident, soluta maxime voluptatibus
            delectus ipsa nobis quidem, numquam aliquam esse. Exercitationem
            magnam veniam ipsa unde reprehenderit? lore
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <Grid container
            direction="row"
            alignItems="center"
            spacing={2}>
          <Grid item xs={6}>
            <Card>
            <img src="https://picsum.photos/140" width="100%" height="140" object-fit="cover"/>
              <Typography variant="h5">Card Title</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolorum consequuntur ex delectus ratione officia
                veniam esse dicta placeat eos facilis eveniet incidunt corrupti
                ipsa iure dolores, reiciendis et! Amet.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <img src="https://picsum.photos/140" width="100%" height="140" object-fit="cover"/>
              <Typography variant="h5">Card Title</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolorum consequuntur ex delectus ratione officia
                veniam esse dicta placeat eos facilis eveniet incidunt corrupti
                ipsa iure dolores, reiciendis et! Amet.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
            <img src="https://picsum.photos/140" width="100%" height="140" object-fit="cover"/>
              <Typography variant="h5">Card Title</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolorum consequuntur ex delectus ratione officia
                veniam esse dicta placeat eos facilis eveniet incidunt corrupti
                ipsa iure dolores, reiciendis et! Amet.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Content;
