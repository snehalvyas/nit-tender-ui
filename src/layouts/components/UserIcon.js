const UserIcon = props => {
  // ** Props
  const { icon, iconProps } = props
  const IconTag = icon
  let styles

  /* styles = {
      color: 'red',
      fontSize: '2rem'
    } */
  // @ts-ignoreUserIcon.js
  return <IconTag {...iconProps} style={{ ...styles }} />
}

export default UserIcon
