import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import UpdateIcon from '@mui/icons-material/Update'
import ListIcon from '@mui/icons-material/List'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'

const Menus = [
  {
    id: 'menu-group-1',
    category: 'Main Routes',
    items: [
      {
        id: 1,
        text: 'Disover',
        icon: <SearchOutlinedIcon />,
        slug: '/',
        active: true,
      },
      {
        id: 2,
        text: 'Playlist',
        icon: <PlaylistPlayIcon />,
        slug: '/',
      },
      {
        id: 3,
        text: 'Movie',
        icon: <LiveTvIcon />,
        slug: '/',
      },
      {
        id: 4,
        text: 'TV Shows',
        icon: <DesktopWindowsOutlinedIcon />,
        slug: '/',
      },
      {
        id: 5,
        text: 'My List',
        icon: <ListIcon />,
        slug: '/',
      },
    ],
  },
  {
    id: 'menu-group-2',
    category: 'Secondary Routes',
    items: [
      {
        id: 6,
        text: 'Watch Later',
        icon: <UpdateIcon />,
        slug: '/',
      },
      {
        id: 7,
        text: 'Recomended',
        icon: <FavoriteBorderIcon />,
        slug: '/',
      },
    ],
  },
]

export default Menus
