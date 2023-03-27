import {Box ,ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box
        sx={{display:"flex", flexDirection:"column"}}>
        <Typography>
            Latest Photos
        </Typography>
        <ImageList sx={{width: 250}}>
            <ImageListItem>
                <img src="https://picsum.photos/250"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://picsum.photos/250"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://picsum.photos/250"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://picsum.photos/250"/>
            </ImageListItem>
        </ImageList>
    </Box>
  )
}

export default Rightbar