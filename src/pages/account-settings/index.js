// ** React Imports
import { useState} from 'react'

// ** MUI Imports

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import Popup from 'src/layouts/components/Popup'


// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabTenderConfig from 'src/views/account-settings/TabTenderConfig'
import TabTenderDates from 'src/views/account-settings/TabTenderDates'
import TabTerms from 'src/views/account-settings/TabTerms'
import TabSAPdata from 'src/views/account-settings/TabSAPdata'
import TabScheduleAtoF from 'src/views/account-settings/TabScheduleAtoF'
import TabMilestone from 'src/views/account-settings/TabMilestone'
import TabSAPConfig from 'src/views/account-settings/TabSAPconfig'
import TabInfo from 'src/views/account-settings/TabInfo'
import TabProject from 'src/views/account-settings/TabProject'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles ImportsTabAccount.js
import 'react-datepicker/dist/react-datepicker.css'


const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))



const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('tenderconfig')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  // useEffect(() => {
  //   console.log('mount it!');
  // }, []);

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >

          <Tab
          value='tenderconfig'
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccountOutline />
              <TabName>Tender config</TabName>
            </Box>
          }
        />
          <Tab
            value='tenderdates'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Tender Dates</TabName>
              </Box>
            }
          />
          <Tab
            value='terms'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Terms</TabName>
              </Box>
            }
          />
          <Tab
            value='SAP data'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>SAP data</TabName>
              </Box>
            }
          />
          <Tab
            value='Schedule A to F'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Schedule A to F</TabName>
              </Box>
            }
          />
          <Tab
            value='Milestone'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Milestone</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='tenderconfig'>
          <TabTenderConfig />
        </TabPanel>

        <TabPanel sx={{ p: 0 }} value='tenderdates'>
          <TabTenderDates/>
        </TabPanel>

        <TabPanel sx={{ p: 0 }} value='terms'>
          <TabTerms/>
        </TabPanel>

        <TabPanel sx={{ p: 0 }} value='SAP data'>
          <TabSAPdata/>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='Schedule A to F'>
          <TabScheduleAtoF />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='Milestone'>
          <TabMilestone />
        </TabPanel>
      </TabContext>
      <Popup/>
    </Card>
  )
}

export default AccountSettings
