import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

type ProductCardProps = {
  title: string;
  price: string;
  image: string;
};

const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="text.secondary">{price}</Typography>
      </CardContent>
      <Button variant="contained" sx={{ m: 1 }}>
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
