import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function PokemonCard(props) {
  const typeHandler = () => {
    if (props.types[1]) {
      return props.types[0].type.name + " | " + props.types[1].type.name;
    }
    return props.types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
