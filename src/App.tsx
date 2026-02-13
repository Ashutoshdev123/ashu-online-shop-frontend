import ResponsiveAppBar from "./components/header";
import SwiperComponent from "./components/swiper";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { Grid } from "@mui/material";
import { products } from "./data";

function App() {
  return (
    <div>
      <ResponsiveAppBar />

      <Grid container spacing={0}>
        <Grid size={12}>
          <SwiperComponent />
        </Grid>

        <Grid size={1} />
        {products.map((product) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            key={product.id}
            marginTop={2}
          >
            <ProductCard
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
        <Grid size={1} />
      </Grid>

      <Footer />
    </div>
  );
}

export default App;
