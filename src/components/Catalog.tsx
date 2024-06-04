import React from 'react';
import { 
    Box,
    Card, 
    CardContent,
    Grid,
} from '@mui/material';
  

interface CatalogProps {
    products: {name:string}[],
    searchFor: string
}

const Catalog: React.FC<CatalogProps> = ({products, searchFor}) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 3}}>
                {products
                    .filter((p) => {
                        return p.name.toLowerCase().includes(searchFor.toLowerCase())
                    })
                    .map((p, i) => {
                        return (
                            <Grid item xs={4} key={i}>
                                <Card variant='outlined'>
                                    <CardContent>
                                        {p.name}
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default Catalog;