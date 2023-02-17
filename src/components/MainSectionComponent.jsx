import { Grid, Typography } from '@mui/material';


const service = {
    name: 'Casas',
    email: 'dcanellesgomez@gmail.com',
    phoneNumber: '+5355188776',
};

const recipient = {
    name: 'Alberto Torres Reyes',
    email: 'albertocorreooficial@gmail.com',
    phoneNumber: '+5354648644',
    address: 'Calle 50 d',
    city: 'Artemisa',
};

export const MainSectionComponent = () => {

    const serviceValuesArray = Object.values( service );
    const recipientValuesArray = Object.values( recipient );

    return (
        <>
            <Grid container
                  padding={2}
                  justifyContent='space-between'
            >

                <Grid item>
                    <Grid container
                          spacing={1}
                          direction='row'
                    >
                        <Grid item
                        >
                                <img
                                    className='image-profile'
                                    src='/src/img/sa-48.jpg.crdownload'
                                    alt='imagenPortada'
                                />
                        </Grid>

                        <Grid item
                            margin={2}
                        >
                            <Typography>Del Servicio: </Typography>
                            {
                                serviceValuesArray.map( serviceValue => (
                                     (serviceValue !== service.name)
                                         ? <Typography key={ serviceValue }>{ serviceValue }</Typography>
                                         :  <Typography key={ serviceValue }><strong>{ serviceValue }</strong> </Typography>
                                ))
                            }

                        </Grid>

                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container>

                        <Grid item
                              margin={2}
                        >
                            <Typography>Cobrar A: </Typography>
                            {
                                recipientValuesArray.map( recipientValue => (
                                    (recipientValue !== recipient.name)
                                        ? <Typography key={ recipientValue }>{ recipientValue }</Typography>
                                        : <Typography key={ recipientValue }><strong>{ recipientValue }</strong> </Typography>
                                ))
                            }
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}