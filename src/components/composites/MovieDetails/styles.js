import {
  Stack,
  CardMedia,
  Box,
  List,
  IconButton,
  Skeleton,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const DetailsWrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,

  [theme.breakpoints.down('md')]: {
    padding: '24px 24px 0',
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    display: 'block',
    overflowY: 'scroll',
    zIndex: theme.zIndex.appBar + 1,
  },

  [theme.breakpoints.up('md')]: {
    borderRadius: 11,
    overflow: 'hidden',
  },
}))

const MoviePoster = styled(CardMedia)(({ theme }) => ({
  width: '240px',
  height: '320px',

  [theme.breakpoints.down('md')]: {
    borderRadius: '11px',
  },

  [theme.breakpoints.up('md')]: {
    width: '30%',
    height: 'auto',
    minHeight: '390px',
  },
}))

const FallbackImage = styled(Skeleton)(({ theme }) => ({
  width: '240px',
  height: '320px',
  //backgroundColor: theme.palette.secondary.medium,

  [theme.breakpoints.down('md')]: {
    borderRadius: '11px',
  },

  [theme.breakpoints.up('md')]: {
    width: '30%',
    height: 'auto',
    minHeight: '390px',
  },
}))

const CastList = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontWeight: theme.typography.fontWeightMedium,
  padding: '12px 0 20px',

  '& .MuiListItem-root': {
    padding: 0,
    span: {
      minWidth: '150px',
    },
  },
}))

const CardFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '12px',

  [theme.breakpoints.up('md')]: {
    gap: '16px',

    '& .MuiButtonBase-root': {
      minWidth: '154px',
    },
  },
}))

const XsCloseIcon = styled(IconButton)(() => ({
  position: 'absolute',
  top: '8px',
  right: '8px',
  color: 'inherit',
  zIndex: 2,
}))

export {
  DetailsWrapper,
  MoviePoster,
  FallbackImage,
  CastList,
  CardFooter,
  XsCloseIcon,
}
