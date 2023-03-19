import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayFog,
  WiDayRain,
  WiDayShowers,
  WiDaySnow,
  WiDaySunny,
  WiDayThunderstorm,
  WiNightClear,
  WiNightCloudy,
  WiNightCloudyHigh,
  WiNightFog,
  WiNightPartlyCloudy,
  WiNightRain,
  WiNightShowers,
  WiNightSnow,
  WiNightThunderstorm,
} from 'react-icons/wi';

import { Icon } from '@chakra-ui/react';

const ICONS_MAP = {
  '01d': WiDaySunny,
  '02d': WiDayCloudy,
  '03d': WiCloud,
  '04d': WiCloudy,
  '09d': WiDayShowers,
  '10d': WiDayRain,
  '11d': WiDayThunderstorm,
  '13d': WiDaySnow,
  '50d': WiDayFog,
  '01n': WiNightClear,
  '02n': WiNightPartlyCloudy,
  '03n': WiNightCloudyHigh,
  '04n': WiNightCloudy,
  '09n': WiNightShowers,
  '10n': WiNightRain,
  '11n': WiNightThunderstorm,
  '13n': WiNightSnow,
  '50n': WiNightFog,
};

export const fetchIcon = iconCode => {
  const iconValue = ICONS_MAP[iconCode];

  return <Icon as={iconValue} color={'Highlight'} />;
};
