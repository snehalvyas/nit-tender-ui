// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import FormControl from '@mui/material/FormControl'

import InputLabel from '@mui/material/InputLabel'
import FormControlLabel from '@mui/material/FormControlLabel'

import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'

const Popup = () => {
  // States
  const [open, setOpen] = useState(true)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Project</DialogTitle>
        <DialogContent>
          <DialogContentText className='mb-3' sx={{marginBottom:5}}>
           Please Choose Project and Package for NIT Tender
          </DialogContentText>
          <Grid container spacing={7}>
            <Grid item lg={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Project</InputLabel>
                <Select
                  label='Project ID'
                  defaultValue=''
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
            <Grid item lg={6}>

              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Package</InputLabel>
                <Select
                  label='Project ID'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Basic'>Basic</MenuItem>
                  <MenuItem value='Standard'>Standard</MenuItem>
                  <MenuItem value='Premium'>Premium</MenuItem>
                </Select>
              </FormControl>

            </Grid>
          </Grid>


        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          {/*<Button onClick={handleClose}>Disagree</Button>*/}
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Popup
