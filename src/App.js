import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Headers from './shared/Headers';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'Roboto'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Headers />
    </ThemeProvider>
  );
};

export default App;
