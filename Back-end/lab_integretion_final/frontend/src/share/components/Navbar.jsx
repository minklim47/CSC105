import React, { useState, useEffect, useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import Axios from '../AxiosInstance';
import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import GlobalContext from '../context/GlobalContext';

const Navbar = ({ handleOpen = () => {} }) => {
  const { user, setUser } = useContext(GlobalContext);
  const [startFetch, setStartFetch] = useState(false);

  useEffect(() => {
    
    const userToken = Cookies.get('UserToken');
    setStartFetch(!(userToken == null || userToken == 'undefined'));
  }, []);

  const fetchUser = async () => {
    const userToken = Cookies.get('UserToken');
    return await Axios.get('/me', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  };

  const logout = () => {
    setUser();
    Cookies.remove('UserToken');
  };

  const { data } = useQuery('user', fetchUser, {
    onSuccess: (data) => {
      setUser({
        username: data.data.data.username,
        email: data.data.data.email,
      });
    },
    enabled: startFetch,
  });

  useEffect(() => {
    if (data) {
      setUser({
        username: data.data.username,
        email: data.data.email,
      });
    }
  }, [data, setUser]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
      sx={{
        position: 'sticky',
        zIndex: 10,
        marginBottom: '8px',
        padding: '16px',
      }}
    >
      {user ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Typography>{user.username}</Typography>
          <CustomButton text="Log out" handle={logout} />
        </Box>
      ) : (
        <CustomButton text="Log in" handle={handleOpen} />
      )}
    </Stack>
  );
};

export default Navbar;
