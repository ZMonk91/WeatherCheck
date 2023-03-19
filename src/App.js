import {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Spacer,
} from '@chakra-ui/react';
import  {ColorModeSwitcher} from './components/ColorModeSwitcher';
import Searchbar from './components/Searchbar';
import WeatherDisplay from './components/WeatherDisplay'

function App() {

  const [weather, setWeather] = useState('')

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={30}>
          <ColorModeSwitcher justifySelf="flex-end"/>
          {!weather ? <Searchbar setWeather={setWeather}/> : <WeatherDisplay setWeather={setWeather} weatherData={weather} />}
          <Spacer/>
          <Spacer/>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
