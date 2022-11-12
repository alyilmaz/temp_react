// material-ui
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

import SampleService from 'services/sample/SampleService';
import ServiceCaller from 'services/ServiceCaller';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [data, setData] = useState([]);
    const [isSuccess, setSuccess] = useState(false);
    const getData = () => {
        let serviceCaller = new ServiceCaller();
        SampleService.getProducts(serviceCaller, '', (res) => {
            setSuccess(true);
            setData(res.products);
        }, (err) => {
            setSuccess(false);
            console.log(err);
        })
      }
    
      useEffect(() => {
        getData()
      }, []);    

    return(
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                {data?.map((product) => (
                         <Typography variant="body2">
                            {product.title}
                        </Typography>
                    )
                )}:(
                    <Typography variant="body2">
                        No Product Data
                    </Typography>
                )
                
            
            </Grid>
        </Grid>
    )
};

export default SamplePage;
