import Avatar from '@mui/material/Avatar'

function BaseAvatar(props) {
  const getInitials = (name) =>
    `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`

  return (
    <Avatar
      alt={props.name}
      src={props.imgUrl}
      sx={{
        height: '91px',
        width: '91px',
        fontWeight: 'fontWeightMedium',
        backgroundColor: 'secondary.light',
        color: 'common.white',
      }}
      {...props}
    >
      {!props.imgUrl ? getInitials(props.name) : null}
    </Avatar>
  )
}

BaseAvatar.defaultProps = {
  name: 'John Doe',
  imgUrl: 'https://mui.com/static/images/avatar/1.jpg',
}

export default BaseAvatar
