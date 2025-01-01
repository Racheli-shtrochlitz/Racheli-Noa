import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Star from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLike } from '../Store/RecipeListSlice';

type RentalCardProps = {
  index: number;
  category: React.ReactNode;
  image: string;
  liked?: boolean;
  star: number;
  title: React.ReactNode;
};

export default function RentalCard(props: RentalCardProps) {
  const { index, category, title, liked = false, image, star } = props;
  const [isLiked, setIsLiked] = React.useState(liked);

  // פונקציה לשינוי מצב הלייק
  const dispatch = useDispatch();
  const arrObj = useSelector((x) => x.RecipeListSlice);

  const Liked = (e: React.MouseEvent) => {
    e.stopPropagation(); // מונע מהלייק להפעיל את הלינק
    setIsLiked((prev) => !prev);
    dispatch(ChangeLike({ isLiked, index }));
  };

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
        position: 'relative',
      }}
    >
      {/* לינק שמקיף את התמונה בלבד */}
      <Link href="#interactive-card" sx={{ display: 'block' }}>
        <CardOverflow sx={{ mb: 2 }}>
          <AspectRatio
            ratio="2/3"
            flex
            sx={{
              minWidth: '100%',
              position: 'relative',
            }}
          >
            <img alt="" src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AspectRatio>
        </CardOverflow>
      </Link>

      {/* תוכן הכרטיס */}
      <CardContent>
        <Stack spacing={1} direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
          <Typography level="body-sm" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              {category}
            </Typography>
          <Typography
              level="h6"
              fontWeight="bold"
              sx={{
                fontSize: '1.2rem',
                textAlign: 'center', // למרכז את הכותרת
              }}
            >
              {title}
            </Typography>
           
          </div>
        </Stack>

        <Stack direction="row" sx={{ mt: 'auto' }}>
          {/* כוכבים על פי התכונה star */}
          <Typography
            level="title-sm"
            startDecorator={
              <>
                {[...Array(star)].map((_, i) => (
                  <Star key={i} sx={{ color: 'warning.400' }} />
                ))}
                {[...Array(5 - star)].map((_, i) => (
                  <Star key={i + star} sx={{ color: 'warning.200' }} />
                ))}
              </>
            }
          >
            {star}.0
          </Typography>

          {/* <Typography level="body-sm" sx={{ textAlign: 'left' }}>
            <strong>{arrObj.arr[index].time}</strong>
          </Typography> */}
        </Stack>
      </CardContent>

      {/* הלב בתחתית השמאלית */}
      <IconButton
        variant="plain"
        size="sm"
        color={isLiked ? 'danger' : 'neutral'}
        onClick={Liked}
        sx={{
          position: 'absolute',
          bottom: 8,
          left: 8,
          zIndex: 10,
          borderRadius: '50%',
        }}
      >
        <FavoriteRoundedIcon />
      </IconButton>
    </Card>
  );
}
