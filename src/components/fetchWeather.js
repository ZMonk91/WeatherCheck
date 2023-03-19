export const fetchWeather = async (lat,lon) => {

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lon.toFixed(2)}&lon=${lat.toFixed(2)}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    } catch (err) {
      return { error: "Unable to retrieve weather" };
    }
  };