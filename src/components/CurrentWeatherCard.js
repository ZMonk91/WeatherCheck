import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Collapse,
  VStack,
} from '@chakra-ui/react';
import { fetchIcon } from './fetchIcon';

function CurrentWeatherCard({ currentData, iconCode }) {
  return (
    <Card boxShadow={'2xl'} border={'1px'} borderColor={'ActiveBorder'}>
      <Collapse animateOpacity in={true}>
        <CardHeader py={4}>
          <Heading size={'md'}>Current</Heading>
        </CardHeader>
        <CardBody py={2}>
          <VStack spacing={'-10'}>
            <Box fontSize={'4rem'}> {fetchIcon(iconCode)} </Box>
            <Box fontSize={'4rem'}>{currentData.main.temp.toFixed(0)}°F</Box>
            <Box pt={'10'} textTransform={'capitalize'}>
              {currentData.weather[0].description}
            </Box>
          </VStack>
        </CardBody>
      </Collapse>
    </Card>
  );
}

export default CurrentWeatherCard;
