import {
  Box,
  Container,
  Flex,
  Heading,
  ScaleFade,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import ChangeLocationButton from './ChangeLocationButton';
import CurrentWeatherCard from './CurrentWeatherCard';
import FutureWeatherCard from './FutureWeatherCard';

function WeatherDisplay({ weatherData, setWeather }) {
  let iconCode = weatherData.list[0].weather[0].icon;

  return (
    <VStack maxW={'100%'}>
      <ScaleFade initialScale={0.09} in={true}>
        <Heading mb={10}>{weatherData.city.name}</Heading>
      </ScaleFade>
      <Container centerContent>
        <ScaleFade delay={0.25} initialScale={0.09} in={true}>
          <CurrentWeatherCard
            iconCode={iconCode}
            currentData={weatherData.list[0]}
          />
          {console.log(weatherData)}
        </ScaleFade>
      </Container>
      <Container centerContent>
        <Flex
          border={'1px'}
          borderRadius={'xl'}
          borderColor="InactiveBorder"
          boxShadow={'2xl'}
        >
          <ScaleFade delay={0.4} initialScale={0.08} in={true}>
            <Box
              borderRight={'2px'}
              borderRadius={5}
              borderColor={'whiteAlpha.300'}
              zIndex={1000}
            >
              <FutureWeatherCard
                iconCode={iconCode}
                currentData={weatherData.list[8]}
                titleText={'Tomorrow'}
                borderLeftRadius={2}
              />
            </Box>
          </ScaleFade>
          <ScaleFade delay={0.45} initialScale={0.08} in={true}>
            <Box
              borderRight={'2px'}
              borderRadius={5}
              borderColor={'whiteAlpha.300'}
              zIndex={900}
            >
              <FutureWeatherCard
                iconCode={iconCode}
                currentData={weatherData.list[16]}
                titleText={'2-Day'}
              />
            </Box>
          </ScaleFade>
          <ScaleFade delay={0.5} initialScale={0.08} in={true}>
            <FutureWeatherCard
              iconCode={iconCode}
              currentData={weatherData.list[24]}
              titleText={'3-Day'}
            />
          </ScaleFade>
        </Flex>
      </Container>

      <Spacer />
      <ChangeLocationButton setWeather={setWeather} />
    </VStack>
  );
}

export default WeatherDisplay;
