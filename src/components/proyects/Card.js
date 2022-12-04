import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import './Proyects.css';

export default function MediaCard(params) {

  return (
    <Card className="Card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img
          component="img"
          height="180px"
          width="300px"
          src={params.imageUrl}
          alt={params.imageAlt}
        />
        <CardContent>
          <Typography
            className="CardTitle"
            gutterBottom
            variant="h1"
            component="div"
          >
            {params.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="CardButton" size="small">
          <a href={params.viewUrl} target="_blank" rel="noreferrer">
            Visitar
          </a>
        </Button>
        <Button className="CardButton" size="small">
          <a href={params.codeUrl} target="_blank" rel="noreferrer">
            Código
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
