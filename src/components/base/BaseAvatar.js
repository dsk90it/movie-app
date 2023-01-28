import Avatar from '@mui/material/Avatar'

function BaseAvatar(props) {
  const getInitials = (name) =>
    `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`

  return (
    <Avatar
      alt={props.name}
      src={props.imgurl}
      sx={{
        height: '91px',
        width: '91px',
        fontWeight: 'fontWeightMedium',
        backgroundColor: 'secondary.light',
        color: 'common.white',
      }}
      {...props}
    >
      {getInitials(props.name)}
    </Avatar>
  )
}

BaseAvatar.defaultProps = {
  name: 'John Doe',
  imgurl: 'https://mui.com/static/images/avatar/1.jpg',
}

export default BaseAvatar
