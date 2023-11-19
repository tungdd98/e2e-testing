import { LoginScreen } from '@e2e-testing/features';
import { theme } from '@e2e-testing/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LoginScreen />
    </ThemeProvider>
  );
};

export default App;
