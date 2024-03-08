// ** React Imports
import { useState } from 'react'

// ** MUI Imports
// ** MUI Imports


import Grid from '@mui/material/Grid'



import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'

import Typography from '@mui/material/Typography'


import FormControl from '@mui/material/FormControl'
import Chip from '@mui/material/Chip'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'




const TabSAPConfig = () => {
  // ** States
  const [values, setValues] = useState({
  })

  return (
    <Grid container spacing={7} style={{marginTop:25, marginLeft:18}}>


        <Grid item lg={1} >
          <Typography variant='h6'>
            NIT No :
          </Typography>
        </Grid>
        <Grid item lg={2} >
          <Chip label='0HDD2024/56/ABCR/2024' color='primary' variant='outlined'/>
        </Grid>


        <Grid item lg={1.1}>
          <Typography variant='h6'>
            Work Name
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography variant='subtitle1' >
            Road line No 5678AFGD
          </Typography>
        </Grid>
<Grid item lg={1}>
    <Typography variant='h6'>
  Status
  </Typography>
</Grid>
<Grid item lg={3}>
  <Chip label='Closed' color='error' style={{marginRight:10}} />
  <Chip label='InProgress' color='success' />
</Grid>
    </Grid>

  )
}

export default TabSAPConfig
