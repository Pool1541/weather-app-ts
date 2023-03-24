import { ErrorResponse, Root } from "./interfaces/openWeatherInterface";

export default function fetchWeatherData(city: string) {
  const API_KEY: string = "ad6267a6f3693603a0556b7e5e623b9d";
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const response: Promise<Root | ErrorResponse> = fetch(URL).then((res) => {
    if (res.status !== 200) return undefined;
    return res.json();
  });

  return response;
}
