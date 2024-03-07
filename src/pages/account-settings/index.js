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
import Popup from '../../layouts/components/Popup'


// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import TabProject from "../../views/account-settings/TabProject";

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
  const [value, setValue] = useState('project')

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
            value='project'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Project</TabName>
              </Box>
            }
          />
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Basic Nit</TabName>
              </Box>
            }
          />
          <Tab
            value='single stage'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Single Stage</TabName>
              </Box>
            }
          />
          <Tab
            value='2 or 3 bid stage'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>2 or 3 Bid Stage</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='project'>
          <TabProject/>
        </TabPanel>

        <TabPanel sx={{ p: 0 }} value='account'>
          <TabAccount />
        </TabPanel>

        <TabPanel sx={{ p: 0 }} value='single stage'>
          <TabSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='2 or 3 bid stage'>
          <TabInfo />
        </TabPanel>
      </TabContext>
      <Popup/>
    </Card>
  )
}

export default AccountSettings
