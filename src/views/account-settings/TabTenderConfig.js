// React Imports
import { useState } from 'react'

// ** MUI Imports

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import FormControl from '@mui/material/FormControl'
import Chip from '@mui/material/Chip'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import TabSAPConfig from "./TabSAPconfig";



// Styled component for Accordion component

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  bosxhadow: 'none !important',
  border: `1px solid ${theme.palette.divider} !important`,
  overflow: 'hidden',
  '&:not(:last-of-type)': {
    borderBottom: '0 !important'
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: '0'
  },
  '&:first-of-type': {
    borderTopLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderTopRightRadius: 'var(--mui-shape-borderRadius) !important'
  },
  '&:last-of-type': {
    borderBottomLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderBottomRightRadius: 'var(--mui-shape-borderRadius) !important'
  }
}))

// Styled component for AccordionSummary component
const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  marginBottom: -1,
  transition: 'none',
  backgroundColor: 'var(--mui-palette-customColors-greyLightBg)',
  borderBottom: `1px solid ${theme.palette.divider} !important`
}))

// Styled component for AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `${theme.spacing(4)} !important`
}))



const TabTenderConfig = () => {
  // States
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const expandIcon = value => <i className={expanded === value ? 'ri-subtract-line' : 'ri-add-line'} />

  return (

    <Grid container spacing={7}>

     <TabSAPConfig/>

      <Grid item lg={12} sx={{ marginTop: 4.8, marginLeft:4.8, marginRight:4.8, marginBottom:1}}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
          <AccordionSummary
            id='customized-panel-header-1'
            expandIcon={expandIcon('panel1')}
            aria-controls='customized-panel-content-1'
          >
            <Typography>PWD Road Project</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={7}>
              <Grid item sx={12} lg={6} style={{marginTop: 4.8}}>
                <Grid container style={{marginBottom: 5}}>
                  <Grid item lg={6}>
                    <Typography variant='h6' sx={{marginTop: 2}}>
                      Project ID:*
                    </Typography>
                  </Grid>
                  <Grid item lg={6}>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>Project ID</InputLabel>
                      <Select
                        label='Project ID'
                        defaultValue='PRJ2022-001'
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                      >
                        <MenuItem value='PRJ2022-001'>PRJ2022-001</MenuItem>
                        <MenuItem value='PRJ2022-002'>PRJ2022-002</MenuItem>
                        <MenuItem value='PRJ2022-003'>PRJ2022-003</MenuItem>
                        <MenuItem value='PRJ2022-004'>PRJ2022-004</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container style={{marginBottom: 5}}>
                  <Grid item lg={6}>
                    <Typography variant='h6' sx={{marginTop: 2}}>
                      A/A & E/S :
                    </Typography>
                  </Grid>
                  <Grid item lg={6}  sx={{marginTop: 2}}>
                    <Chip label='0HDD2024/56/ABCR/2024' color='primary' variant='outlined' />
                  </Grid>
                </Grid>
                <Grid container spacing={7} style={{marginBottom: 5, marginTop: 5}}>
                  <Grid item lg={4}>
                    <TextField
                      fullWidth
                      type='text'
                      label='Ref No*'
                      placeholder='0HDD2024/56/ABCR/2024'
                    />
                  </Grid>
                  <Grid item lg={4}>
                    <TextField
                      fullWidth
                      type='date'
                      label='Date*'
                      placeholder='Name of Tender/Work*'
                      defaultValue='Name of Tender/Work*'
                    />
                  </Grid>
                  <Grid item lg={4}>
                    <TextField
                      fullWidth
                      type='number'
                      label='Amount'
                      placeholder='10000'
                    />
                  </Grid>
                </Grid>
                <Grid container  style={{marginBottom: 5, marginTop: 5}}>
                  <Grid item lg={1}>
                    <Typography variant='h6' sx={{ marginTop: 5 }}>
                      <AlertCircleOutline />
                    </Typography>
                  </Grid>
                  <Grid item lg={11}>
                    <Typography variant='subtitle1' sx={{ marginTop: 5 }}>
                      Jaipur Development Authority (JDA) Road Development Project
                    </Typography>
                  </Grid>
                  <Grid item lg={1}>
                    <Typography variant='h6' sx={{ marginTop: 5 }}>
                      <HomeOutline />
                    </Typography>
                  </Grid>
                  <Grid item lg={11}>
                    <Typography variant='subtitle1' sx={{ marginTop: 5 }}>
                      101, Amrapali Marg, D - Block, Vaishali Nagar, Jaipur, Rajasthan 302021
                    </Typography>
                  </Grid>
                </Grid>

              </Grid>
              <Grid item sx={12} lg={6} style={{marginTop: 4.8, marginBottom: 3}}>
                <Grid container sx={{marginBottom: 5}}>
                  <Grid item lg={6}>
                    <Typography variant='h6' sx={{marginTop: 2}}>
                      Package And Description
                    </Typography>
                  </Grid>
                  <Grid item lg={6}>
                    <Typography variant='subtitle1' sx={{marginTop: 2}}>
                      Basic Package
                    </Typography>
                  </Grid>
                  <Grid item lg={12} sx={{marginBottom:'50'}}>
                    <Typography sx={{marginTop:5}}>
                      The Road Development Project aims to enhance transportation infrastructure by implementing comprehensive improvements to the existing road network. The project encompasses various activities focused on constructing, upgrading, and maintaining roadways to ensure safe and efficient transportation.
                    </Typography>
                  </Grid>

                </Grid>

              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

      </Grid>

    </Grid>

  )
}


export default TabTenderConfig

