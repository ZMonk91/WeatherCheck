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

function CurrentWeatherCard({ currentData, iconCode, titleText }) {
  return (
    <Card width={'10rem'} borderRadius={5} boxShadow={'xs'} zIndex={-100}>
      <Collapse animateOpacity in={true}>
        <CardHeader pt={3} pb={0}>
          <Heading fontSize={'0.8rem'} size={'0.1rem'}>
            {titleText}
          </Heading>
        </CardHeader>
        <CardBody py={0}>
          <VStack spacing={'-5'}>
            <Box fontSize={'3rem'}>
              {' '}
              {fetchIcon(currentData.weather[0].icon)}{' '}
            </Box>
            <Box fontSize={'1.5rem'}>{currentData.main.temp.toFixed(0)}°F</Box>
            <Box
              pt={'4'}
              fontSize={'0.8rem'}
              textTransform={'capitalize'}
              pb={3}
            >
              {currentData.weather[0].description}
            </Box>
          </VStack>
        </CardBody>
      </Collapse>
    </Card>
  );
}

export default CurrentWeatherCard;
