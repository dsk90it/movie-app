import {
  Stack,
  CardMedia,
  Box,
  Typography,
  List,
  ListItem,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import BaseRating from '../base/BaseRating'
import BaseButton from '../base/BaseButton'

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

function MovieDetails() {
  return (
    <DetailsWrapper direction="row">
      <CardMedia
        sx={{
          width: { xs: 240, md: '30%' },
          height: { xs: 320, md: 'auto' },
          minHeight: { md: 390 },
        }}
        image="https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg"
      />

      <Box sx={{ width: { xs: '100%', md: '70%' }, py: 3, px: { md: 4 } }}>
        <Typography sx={{ fontSize: '30px', fontWeight: 'fontWeightMedium' }}>
          Free Guy
        </Typography>

        <Box sx={{ maxWidth: 160 }}>
          <BaseRating value={8.3} />
        </Box>

        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontWeight: 'fontWeightMedium',
            padding: '12px 0 20px',
          }}
        >
          <ListItem disablePadding>
            <Box component={'span'} sx={{ minWidth: 150 }}>
              Year:
            </Box>{' '}
            2021
          </ListItem>
          <ListItem disablePadding>
            <Box component={'span'} sx={{ minWidth: 150 }}>
              Running Time:
            </Box>{' '}
            115 Min
          </ListItem>
          <ListItem disablePadding>
            <Box component={'span'} sx={{ minWidth: 150 }}>
              Directed by:
            </Box>{' '}
            Shawn Levy
          </ListItem>
          <ListItem disablePadding>
            <Box component={'span'} sx={{ minWidth: 150 }}>
              language:
            </Box>{' '}
            English
          </ListItem>
        </List>

        <Typography sx={{ fontSize: '14px', mb: 3 }}>
          Guy is a non-player character (NPC) in Free City, a massively
          multiplayer online role-playing video game (MMORPG) developed by
          Soonami Studio.
        </Typography>

        <Stack direction="row" spacing={2}>
          <BaseButton variant="contained">Play Movie</BaseButton>
          <BaseButton variant="outlined">Watch Trailer</BaseButton>
        </Stack>
      </Box>
    </DetailsWrapper>
  )
}

export default MovieDetails
