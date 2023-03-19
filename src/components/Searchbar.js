import { useState } from 'react';
import {
  Button,
  Container,
  Fade,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { fetchCity } from './fetchCity';
import { fetchWeather } from './fetchWeather';

const Searchbar = props => {
  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState('');
  const [coords, setCoords] = useState([]);

  let handleCityChange = async e => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchCity(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map(place => place.place_name));
    setCoords(res.features[0].geometry.coordinates);
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr('');
  };

  let emptySearch = city === '';

  let handleCitySubmit = async f => {
    const res = await fetchWeather(coords[0], coords[1]);
    return res.error ? <box>Error</box> : props.setWeather(res);
  };

  return (
    <Container>
      <Fade in={true}>
        <VStack spacing={8}>
          <FormControl>
            <FormLabel>
              <Heading as={'h2'} size="2xl">
                Enter a city
              </Heading>
            </FormLabel>
            <Input
              placeholder="Hollister, CA"
              list="cities"
              type="text"
              required
              onChange={handleCityChange}
              pattern={autocompleteCities.join('|')}
              autoComplete="off"
            ></Input>
            <datalist id="cities">
              {autocompleteCities.map((city, i) => (
                <option key={i}>{city}</option>
              ))}
            </datalist>
            <FormHelperText>
              {emptySearch && 'Start typing a location'}
            </FormHelperText>
            <FormHelperText>{autocompleteErr}</FormHelperText>
          </FormControl>
          <Button
            display={emptySearch ? 'none' : 'inherit'}
            type="submit"
            onClick={handleCitySubmit}
          >
            Check Weather
          </Button>
        </VStack>
      </Fade>
    </Container>
  );
};
export default Searchbar;
