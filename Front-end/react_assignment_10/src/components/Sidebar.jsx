import React from 'react'
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@mui/material"
import {Home, Article, Group, Storefront,Person,Settings, AccountBox} from '@mui/icons-material'


function Sidebar() {
  return (
    <Box sx={{ display:{ xs:'none', md:'flex'}, justifyContent:'flex-end'}}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <Home/>
                </ListItemIcon>
                <ListItemText>
                    Homepage
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Article/>
                </ListItemIcon>
                <ListItemText>
                    Pages
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Group/>
                </ListItemIcon>
                <ListItemText>
                    Groups
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Storefront/>
                </ListItemIcon>
                <ListItemText>
                    Margetplace
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Person/>
                </ListItemIcon>
                <ListItemText>
                    Friends
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Settings/>
                </ListItemIcon>
                <ListItemText>
                    Settings
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AccountBox/>
                </ListItemIcon>
                <ListItemText>
                    Profile
                </ListItemText>
            </ListItem>

        </List>
    </Box>
  )
}

export default Sidebar