import { useState } from "react";
import styled from "@mui/styled-engine-sc";
import { Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import fetchWeatherData from "./weather";
import Weather from "./components/Weather";
import WeatherData from "./components/WeatherData";
import { Root } from "./interfaces/openWeatherInterface";

const StyledBox = styled(Box)`
  height: ${({ show }: any) => (show ? "520px" : "100px")};
  display: flex;
  gap: 30px;
  border-radius: 10px;
  padding: 20px;
  outline: 2px solid #00000042;
  flex: 1 1 auto;
  transition: all 0.5s ease;
  overflow: hidden;
`;

const StyledForm = styled("form")`
  display: flex;
  align-items: center;
`;

const StyledInput = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: #414141;
  font-size: 1.8rem;
`;

export default function Card() {
  const [weatherResults, setWeatherResults] = useState<Root>();

  interface FormDataObject {
    [k: string]: FormDataEntryValue;
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    const form: FormData = new FormData(e.target);
    const data: FormDataObject = Object.fromEntries(form);
    if (!data.ciudad) {
      setWeatherResults(undefined);
      return;
    }
    const response = await fetchWeatherData(data.ciudad as string);
    setWeatherResults(response as Root);
  }

  console.log(weatherResults);

  return (
    <StyledBox
      show={weatherResults}
      sx={{
        maxWidth: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        gap="15px"
        height="60px"
        width="100%"
        alignItems="center"
      >
        <LocationOnIcon fontSize="large" color="primary" />
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput name="ciudad" />
          <IconButton size="large" type="submit">
            <SearchIcon fontSize="large" color="primary" />
          </IconButton>
        </StyledForm>
      </Box>
      {weatherResults ? (
        <>
          <Weather deg={weatherResults.main.temp} />
          <WeatherData
            humidity={weatherResults.main.humidity}
            wind={weatherResults.wind.speed}
          />
        </>
      ) : null}
    </StyledBox>
  );
}
