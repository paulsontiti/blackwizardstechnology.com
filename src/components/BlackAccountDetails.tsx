import { Grid, Typography, Card, CardContent, CardHeader } from "@mui/material";

export default function BlackAccountDetails() {
  return (
    <Card sx={{ mb: 5 }}>
      <CardContent>
        <CardHeader subheader="Black Wizards Technology Bank Details" />
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="body2">Account Name: </Typography>
          </Grid>
          <Grid item xs={6} sx={{ marginBottom: 3 }}>
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              Nwoha Paulson Ogadinma
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Account Number: </Typography>
          </Grid>
          <Grid item xs={6} sx={{ marginBottom: 3 }}>
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              0055193267
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Bank Name: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              Unity Bank
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
