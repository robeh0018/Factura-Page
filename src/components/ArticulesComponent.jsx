import { ArticulesTableComponent } from "./ArticulesTableComponent";
import {Grid, Typography} from "@mui/material";

const articules = [
    {
        name: 'Cemento',
        price: 40,
    },
    {
        name: 'Bloques',
        price: 10,
    },
];

export const ArticulesComponent = () => {

    const createFullArticules = ( cantidad = 1 ) => {

        let response = [];

        articules.map( articule => {

            response.push({
               name: articule.name,
               amount: cantidad,
               price: articule.price,
               totalCost: articule.price * cantidad,
           })

        });

        return response;
    };


    const calculateTotalCostForAllArticules = ( articules = [] ) => {

        let totalCost = 0;

        articules.map( articule => {
            totalCost += articule.totalCost;
        });

        return totalCost;
    };

    return (
        <>
            <ArticulesTableComponent articules={ createFullArticules(4) }/>

            <Grid container
                  justifyContent='end'
                  direction='row'
                  padding={3}
            >

                <Grid item>
                    <Grid container
                        spacing={3}
                    >
                        <Grid item>
                            <Typography><strong>Total: </strong></Typography>
                        </Grid>

                        <Grid item>
                            <Typography>{ calculateTotalCostForAllArticules( createFullArticules(4) ) } USD</Typography>
                        </Grid>

                    </Grid>


                </Grid>

            </Grid>
        </>
    )
}