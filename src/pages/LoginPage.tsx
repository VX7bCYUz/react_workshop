import React from 'react';
import { Card, Typography, Box, TextField, Button } from '@mui/material';
import classes from './LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    navigate('/courses');
  };

  return (
    <div className={classes['login-page']}>
      <Card variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h4" component="h1">
          Вход
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 600 }}>
          <TextField
            label="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Пароль"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            sx={{ mt: 1, display: 'block', ml: 'auto' }}
            variant="outlined"
          >
            Подтвердить
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default LoginPage;
