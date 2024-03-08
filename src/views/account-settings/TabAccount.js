// ** React Imports
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
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports

import Close from 'mdi-material-ui/Close'
import Divider from '@mui/material/Divider'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} lg={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Grid container style={{marginBottom: 5}}>
                 <Grid item lg={6}>
                   <Typography variant='h6' sx={{ marginTop: 2 }}>
                     Project ID:*
                   </Typography>
                 </Grid>
                 <Grid item lg={4} >
                   <FormControl fullWidth>
                     <InputLabel id='form-layouts-separator-select-label'>Project ID</InputLabel>
                     <Select
                       label='Project ID'
                       defaultValue=''
                       id='form-layouts-separator-select'
                       labelId='form-layouts-separator-select-label'
                     >
                       <MenuItem value='UK'>562356</MenuItem>
                       <MenuItem value='USA'>USA</MenuItem>
                       <MenuItem value='Australia'>Australia</MenuItem>
                       <MenuItem value='Germany'>Germany</MenuItem>
                     </Select>
                   </FormControl>
                 </Grid>
            </Grid>

            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6'  sx={{ marginTop: 2 }}>
                  A/A & E/S Date:
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                  01-04-2024
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6' sx={{ marginTop: 2 }}>
                  A/A & E/S Ref Number:
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                  100000025
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6' sx={{ marginTop: 2 }}>
                  A/A & E/S Amount:
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                  ₹ 10,000
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6' sx={{ marginTop: 2 }}>
                  Requisition Number:
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                  100000026
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6' sx={{ marginTop: 2 }}>
                  Package:*
                </Typography>
              </Grid>
              <Grid item lg={4} >
                <FormControl fullWidth>
                  <InputLabel id='form-layouts-separator-select-label'>Project ID</InputLabel>
                  <Select
                    label='Project ID'
                    defaultValue=''
                    id='form-layouts-separator-select'
                    labelId='form-layouts-separator-select-label'
                  >
                    <MenuItem value='UK'>562356</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='Australia'>Australia</MenuItem>
                    <MenuItem value='Germany'>Germany</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6' sx={{ marginTop: 2 }}>
                  Location of work:
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                 Jodhpur
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6' sx={{ marginTop: 2 }}>
                  Name of the work:
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                  Construction at OSIA,
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6' sx={{ marginTop: 2 }}>
                  NIT Approving Authority:
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                  Mr. ABC
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{marginBottom: 5}}>
              <Grid item lg={6}>
                <Typography variant='h6' sx={{ marginTop: 2 }}>
                  BID Value:
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                  ₹ 1,00,000
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item lg={12}>
          <Divider sx={{ marginTop: 6.5, marginBottom: 6.75, marginRight:0, marginLeft: 7 }} />
            </Grid>
          </Grid>

          <Grid container spacing={6}>
            <Grid item xs={12} sm={7}>
              <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
                <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
                  Section : 1
                </Typography>
                <Typography variant='body2'>
                  The Basic NIT Tender Information for Section 1
                </Typography>
              </CardContent>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <label>
              NIT/RFP No.*
            </label>
            <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
              0HDD2024/56/ABCR/2024
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='text'
              label='Name of Tender/Work*'
              placeholder='Name of Tender/Work*'
              defaultValue='Name of Tender/Work*'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Sub Work/Packages*' placeholder='Sub Work/Packages*' defaultValue='Sub Work/Packages*' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Tender Type</InputLabel>
              <Select label='Tender Type' defaultValue='Open'>
                <MenuItem value='Open'>Open</MenuItem>
                <MenuItem value='Limited'>Limited</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Competitive Bidding Type</InputLabel>
              <Select label='Competitive Bidding Type' defaultValue='NCB'>
                <MenuItem value='NCB'>NCB</MenuItem>
                <MenuItem value='ICB'>ICB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Category of Tender*</InputLabel>
              <Select label='Category of Tender*' defaultValue='Category of Tender*'>
                <MenuItem value='Category of Tender*'>Category of Tender*</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Procurement Type*</InputLabel>
              <Select label='Procurement Type*' defaultValue='Procurement Type'>
                <MenuItem value='Procurement Type'>Procurement Type</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Bid Type*</InputLabel>
              <Select label='Bid Type*' defaultValue='Bid Type'>
                <MenuItem value='Bid Type'>Bid Type*</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Bid Type*</InputLabel>
              <Select label='Type of Work*' defaultValue='Type of Work'>
                <MenuItem value='Type of Work'>Type of Work</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{marginTop: 15}}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
