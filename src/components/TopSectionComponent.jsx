import { Grid, Typography } from "@mui/material";

export const TopSectionComponent = ({ id }) => {
    return (
        <>
            <Grid container
                  spacing={2}
                  direction='row'
                  padding={1}
            >

                <Grid item>
                    <Typography
                        variant='h2'
                    >
                        <strong>Factura</strong>
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography
                        variant='h4'
                        marginTop={2.8}
                    >
                        # { id }
                    </Typography>
                </Grid>

            </Grid>
        </>
    )
}