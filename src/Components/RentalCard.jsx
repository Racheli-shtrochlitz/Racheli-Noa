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
import { Link as RouterLink } from 'react-router-dom';
type RentalCardProps = {
  index: number; // מזהה המתכון
  category: React.ReactNode; // קטגוריית המתכון
  image: string; // תמונת המתכון (תמונה כ-Base64 או נתיב מקומי)
  liked?: boolean; // האם המתכון אהוב (אופציונלי)
  title: React.ReactNode; // שם המתכון
  time: string; // זמן הכנה
  products: string[]; // רכיבים
  instructions: string; // הוראות הכנה
};
export default function RentalCard(props: RentalCardProps) {
  const {
    index,
    category,
    title,
    liked = false,
    image,
    time,
    products,
    instructions
  } = props;

  const [isLiked, setIsLiked] = React.useState(liked);
  // פונקציה לשינוי מצב הלייק
  const dispatch = useDispatch();
  const arrObj = useSelector((x) => x.RecipeListSlice);


  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        // bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
        position: 'relative', 
      }}
    >
      <RouterLink to={`/RecipeDetails/${index}`} sx={{ display: 'block' }}>
        <CardOverflow sx={{ mb: 2 }}>
          <AspectRatio ratio="5/6" flex sx={{ minWidth: '100%', position: 'relative' }}>
            <img
              alt=""
              src={image ? image : ''}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AspectRatio>
        </CardOverflow>
      </RouterLink>


      {/* תוכן הכרטיס */}
      <CardContent>
        <Stack spacing={1} direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <Typography
              level="h6" 
              fontWeight="bold"
              sx={{ fontSize: '1.2rem' }}
            >
              {title}
            </Typography>
            <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
              {category}
            </Typography>
          </div>
        </Stack>

        <Stack direction="row" sx={{ mt: 'auto' }}></Stack>
      </CardContent>

      {/* הלב */}
      <IconButton
        variant="plain"
        size="lg"
        color={isLiked ? 'danger' : 'neutral'}
        onClick={(e) => {
          e.stopPropagation(); // מונע מהלחיצה על הלב להפעיל את הלינק
          setIsLiked((prev) => !prev); // משנה את מצב הלייק
          dispatch(ChangeLike({ isLiked, index })); // שולח פעולה
        }}
        sx={{
          position: 'absolute',
          bottom: 16,  
          left: 16,    
          zIndex: 10,
          borderRadius: '50%',
          padding: 1,
          '& svg': {
            fontSize: '2.5rem',  
          },
        }}
      >
        <FavoriteRoundedIcon />
      </IconButton>
    </Card>
  );
}
