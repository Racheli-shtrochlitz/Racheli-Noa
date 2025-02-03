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
  const [isFilled, setIsFilled] = React.useState(false);

  return (
    <Card
      variant="soft"
      orientation="horizontal"
      sx={{
        padding: 2, marginBottom: 2,
        bgcolor: 'background.body',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
        position: 'relative',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <RouterLink to={`/RecipeDetails/${index}`} sx={{ display: 'block' }}>
        <CardOverflow sx={{ mb: 2 }}>
          <AspectRatio ratio="1" flex sx={{ minWidth: '100%', position: 'relative' }}>
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
        color={arrObj.arr[index].like ? 'danger' : 'neutral'}
        onClick={(e) => {
          e.stopPropagation(); // מונע מהלחיצה על הלב להפעיל את הלינק
          const newLikedStatus = !isLiked; // מחשבים את מצב הלייק החדש
          setIsLiked(newLikedStatus); // משנה את מצב הלייק
          dispatch(ChangeLike({ isLiked: newLikedStatus, index }));
          // שולח פעולה
        }}
        sx={{
          fontSize: 40, // גודל הלב
          // color: !isFilled ? 'primary.main' : 'white', // צבע המילוי בעת לחיצה (לבן כשלא מלא)
          WebkitTextStroke: '2px black', // מסגרת תמידית שחורה
          cursor: 'pointer', // מצביע עכבר
          transition: 'color 0.3s ease, transform 0.2s ease', // מעבר חלק ואנימציה
          transform: isFilled ? 'scale(1.1)' : 'scale(1)', // אפקט קליק
          '&:hover': {
            boxShadow: 'none', // הסרת הצל ב-hover
            backgroundColor: 'transparent', // הסרת רקע ב-hover
          },
          '&:focus': {
            outline: 'none', // הסרת ריבוע focus
          },
          position: 'relative', //  
          marginRight: '-17vw', //
        }}
      >
        <FavoriteRoundedIcon />
      </IconButton>
    </Card>
  );
}
