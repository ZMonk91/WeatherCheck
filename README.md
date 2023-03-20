
## WeatherCheck

Direct Link: [https://zmonk91.github.io/WeatherCheck/](https://zmonk91.github.io/WeatherCheck/)

### Description
This is a Single Page App created in React that uses multiple API calls to collect the requested city's location and then displays the weather.

### Features
- User can search for a city
- Searchbar displays an autocomplete of available locations
- App displays current weather information and future (next three days)
- User can toggle between Dark and Light mode

### APIs Used
- OpenWeatherMap API: Used to retrieve the weather information for a given location
- Mapbox API: Used to retrieve the latitude and longitude coordinates for a given location

### Getting Started
You can view this app [here](https://zmonk91.github.io/WeatherCheck/)

#### Alternatively
- Clone this repository to your local machine
- Navigate to the root directory of the project in your terminal
- Run npm install to install the project dependencies
- Create a .env file in the root directory of the project and add your API keys in the following format:
```
	makefile
     Copy code
    REACT_APP_WEATHER_API_KEY=<your  OpenWeatherMap  API  key>

    
    REACT_APP_MAP_API_KEY=<your  Mapbox  API  key>
```

Run npm start to start the app in development mode

Open http://localhost:3000 to view the app in the browser

### Deployment
To deploy the app, you can use the following steps:

- Create a production build of the app by running npm run build
- Copy the contents of the build folder to your web server

### Contributing
If you find any issues or have any suggestions for improvement, please feel free to submit an issue or pull request
  

### License
This project is licensed under the MIT License - see the LICENSE file for details.
