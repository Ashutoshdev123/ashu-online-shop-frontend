import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#131921",
        color: "#fff",
        mt: 5,
        pt: 5,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid size ={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Get to Know Us
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              About Us
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Careers
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Press Releases
            </Link>
          </Grid>

          {/* Column 2 */}
          <Grid size ={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Connect with Us
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Twitter
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Instagram
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid size ={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Make Money with Us
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Sell on Our Platform
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Advertise
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Affiliate Program
            </Link>
          </Grid>

          {/* Column 4 */}
          <Grid size ={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Help
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Payments
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Shipping
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Returns
            </Link>
          </Grid>
        </Grid>

        {/* Bottom section */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
