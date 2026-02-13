import { Box, Container, Grid, Typography, Link } from "@mui/material";

const FOOTER_LINKS = [
  {
    title: "Get to Know Us",
    links: ["About Us", "Careers", "Press Releases"],
  },
  {
    title: "Connect with Us",
    links: ["Facebook", "Twitter", "Instagram"],
  },
  {
    title: "Make Money with Us",
    links: ["Sell on Our Platform", "Advertise", "Affiliate Program"],
  },
  {
    title: "Help",
    links: ["Payments", "Shipping", "Returns"],
  },
];

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
          {FOOTER_LINKS.map(({ title, links }) => (
            <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              {links.map((link) => (
                <Box key={link} sx={{ mb: 0.5 }}>
                  <Link href="#" color="inherit" underline="hover">
                    {link}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>

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
