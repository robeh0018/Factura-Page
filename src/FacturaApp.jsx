import { TopSectionComponent } from './components/TopSectionComponent';
import { MainSectionComponent } from './components/MainSectionComponent.jsx';
import { ArticulesTableComponent } from './components/ArticulesTableComponent.jsx';
import { Grid } from "@mui/material";
import { ArticulesComponent } from "./components/ArticulesComponent.jsx";

const factura = {
    id: '0000',
};


export const FacturaApp = () => {

    return (
        <>
            <TopSectionComponent id={ factura.id }/>

            <MainSectionComponent />

            <Grid container
                padding={2}
            >
                <ArticulesComponent/>
            </Grid>

        </>
    )
}