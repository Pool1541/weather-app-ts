import Box from "@mui/material/Box";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";
import WeatherItem from "./WeatherItem";

interface Props {
  humidity: number;
  wind: number;
}

export default function WeatherData({ humidity, wind }: Props) {
  return (
    <Box
      width="100%"
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <WeatherItem
        IconComponent={WaterIcon}
        value={humidity}
        text={"Humidity"}
        humidity
      />
      <WeatherItem
        IconComponent={AirIcon}
        value={wind}
        text={"Wind Speed"}
        humidity={false}
      />
    </Box>
  );
}
