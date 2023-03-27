import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box sx={{ display:{ xs:"none",md:"flex"}, flexDirection: "column" }}>
      <Typography sx={{ mb: 2 }}>Latest Photos</Typography>
      <ImageList sx={{ width: 250 }} cols={2}>
        <ImageListItem>
          <img src="https://picsum.photos/250" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://picsum.photos/250" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://picsum.photos/250" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://picsum.photos/250" />
        </ImageListItem>
      </ImageList>

      {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </Box>
  );
}

export default Rightbar;
