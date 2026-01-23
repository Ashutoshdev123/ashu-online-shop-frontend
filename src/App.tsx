import ResponsiveAppBar from "./components/header";
import SwiperComponent from "./components/swiper";
import { Grid } from "@mui/material";
import ProductCard from "./components/ProductCard";
import { products } from "./data";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid container spacing={0}>
        <Grid size={12}>
          <SwiperComponent />
        </Grid>
          {/* product Crad  start  here */}
  
        <Grid size={1}></Grid>

          {products.map((product) => (           
          <Grid  size ={{ xs: 12, sm: 6, md: 3 }} key={product.id} marginTop={2} >
            <ProductCard
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
        <Grid size={1}></Grid>
           {/* product Crad  end  here */}
      </Grid>
      <Footer />
    </div>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

//export default App
