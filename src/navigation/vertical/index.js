// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// MUI Imports

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const navigation = () => {
  return [
    {
      title: 'My NIT',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Pending NIT',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Section Layout',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Reports',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Settings',
      icon: AlertCircleOutline,
      path: '/',
      openInNewTab: true
    },
    {
      sectionTitle: 'Logout'
    },
    {
      title: 'Logout',
      icon: Login,
      path: '/pages/login'
    },

    // {
    // title: 'Icons',
    // path: '/icons',
    // icon: GoogleCirclesExtended
    // },
    // {
    // title: 'Cards',
    // icon: CreditCardOutline,
    // path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}


export default navigation
