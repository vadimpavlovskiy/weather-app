# Basic Overview

Using the Weather REST API from [Tomorrow.io](https://www.tomorrow.io/weather-api/) and [OpenWeather Geocoding API](https://openweathermap.org/api/geocoding-api), I created a basic weather forecast frontend app for my GitHub.

## Table of Contents

- [App Gif Overview](#app-gif-overview)
- [Features](#💻-features)
- [Used libraries/API](#🛠-used-librariesapi)
- [Difficulties encountered](#difficulties-encountered)
- [Rest API Limitations](#rest-api-limitations)
- [License](#license)

## App Gif Overview

![Alt Text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnd0cGs4OTRsdGpyOGFidjQ2YnByY2Q4aTc0cWVocTg4ZGNobzcyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ha2ONI64qt72TSWQHF/giphy.gif)

## 💻 Features

- Switch between light and dark mode
- Responsive design
- Hourly/5-day weather forecast

## 🛠 Used libraries/API

- Next.js
- React
- Tailwind
- [Next-themes](https://github.com/pacocoursey/next-themes)
- [React-switch](https://github.com/markusenglund/react-switch)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Classnames](https://github.com/JedWatson/classnames)

## Difficulties encountered

- Rest API limitations. The Tommorow.io API only allows 25 API calls per hour, so for the test I created a mock data in the /data folder.
- Tailwind is not very convenient for working with scalable and large components. I will use [styled-components](https://styled-components.com/) instead of Tailwind in my future projects.
- Next-themes didn't work perfectly from scratch, so I used [some fix from Youtube](https://www.youtube.com/watch?v=optD7ns4ISQ).

## Rest API Limitations

- Limitations of [Tomorrow.io Weather API](https://support.tomorrow.io/hc/en-us/articles/20273728362644-Free-API-Plan-Rate-Limits#:~:text=Under%20this%20plan%2C%20users%20are,25%20requests%20per%20hour). The free Tomorrow.io Weather API only allows 25 API calls per hour and 500 requests per day, so I created some simulated data to use in dev mode. Also available [basic functions and data only](https://docs.tomorrow.io/reference/data-layers-core).
- [OpenWeather Geocoding API](https://openweathermap.org/api/one-call-3). 2000 API requests per day.

## License

[MIT](https://choosealicense.com/licenses/mit/)
