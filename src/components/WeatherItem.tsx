import { Box, Typography } from "@mui/material";

interface Props {
  IconComponent: any;
  value: number;
  text: string;
  humidity: boolean;
}

export default function WeatherItem({
  IconComponent,
  value,
  text,
  humidity,
}: Props) {
  return (
    <Box>
      <IconComponent color="primary" sx={{ fontSize: "2rem" }} />
      <Box display="inline-block" ml={1}>
        {humidity ? (
          <Typography color="text.secondary">{value}%</Typography>
        ) : (
          <Typography color="text.secondary">
            {(value * 3.6).toFixed(2)}Km/h
          </Typography>
        )}
        <Typography color="text.secondary">{text}</Typography>
      </Box>
    </Box>
  );
}
