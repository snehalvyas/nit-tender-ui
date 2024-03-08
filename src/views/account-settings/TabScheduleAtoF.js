// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TabSAPConfig from "./TabSAPconfig";



const TabScheduleAtoF = () => {
  // ** States
  const [values, setValues] = useState({
  })

  return (
      <CardContent>
        <Grid container spacing={7}>
          <TabSAPConfig/>
        </Grid>
      </CardContent>
  )
}

export default TabScheduleAtoF
