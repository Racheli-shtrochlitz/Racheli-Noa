// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Chip from '@mui/joy/Chip';
// import IconButton from '@mui/joy/IconButton';
// import Link from '@mui/joy/Link';
// import Stack from '@mui/joy/Stack';
// import Typography from '@mui/joy/Typography';
// import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
// import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
// import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
// import KingBedRoundedIcon from '@mui/icons-material/KingBedRounded';
// import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
// import Star from '@mui/icons-material/Star';
// import { useDispatch, useSelector } from 'react-redux';
// import { ChangeLike } from '../Store/RecipeListSlice';
// type RentalCardProps = {
//   index: number,
//   category: React.ReactNode;
//   image: string;
//   liked?: boolean;
//   rareFind?: boolean;
//   title: React.ReactNode;
// };

// export default function RentalCard(props: RentalCardProps) {
//   const { star, index, category, title, rareFind = false, liked = false, image } = props;
//   const [isLiked, setIsLiked] = React.useState(liked);
//   //////////////
//   const dispatch = useDispatch()
//   const arrObj = useSelector(x => x.RecipeListSlice)
//   const Liked = () => {
//     const newIsLiked = !isLiked; // Calculate new state
//     setIsLiked(newIsLiked);
//     dispatch(ChangeLike({ isLiked: newIsLiked, index })); // Use updated state
//   };

//   return (
//     <Card
//       variant="outlined"
//       orientation="horizontal"
//       sx={{
//         bgcolor: 'neutral.softBg',
//         display: 'flex',
//         flexDirection: { xs: 'column', sm: 'row' },
//         '&:hover': {
//           boxShadow: 'lg',
//           borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
//         },
//       }}
//     >
//       <CardOverflow
//         sx={{
//           mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
//           mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
//           '--AspectRatio-radius': {
//             xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
//             sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
//           },
//         }}
//       >
//         <AspectRatio
//           ratio="1"
//           flex
//           sx={{
//             minWidth: { sm: 120, md: 160 },
//             '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
//           }}
//         >
//           <img alt="" src={image} />
//           <Stack
//             direction="row"
//             sx={{
//               alignItems: 'center',
//               position: 'absolute',
//               top: 0,
//               width: '100%',
//               p: 1,
//             }}
//           >
//             {/* {rareFind && (
//               <Chip
//                 variant="soft"
//                 color="success"
//                 startDecorator={<WorkspacePremiumRoundedIcon />}
//                 size="md"
//               >
//                 Rare find
//               </Chip>
//             )} */}
//             <IconButton
//               variant="plain"
//               size="sm"
//               color={isLiked ? 'danger' : 'neutral'}
//               onClick={Liked}
//               sx={{
//                 display: { xs: 'flex', sm: 'none' },
//                 ml: 'auto',
//                 borderRadius: '50%',
//                 zIndex: '20',
//               }}
//             >
//               <FavoriteRoundedIcon />
//             </IconButton>
//           </Stack>
//         </AspectRatio>
//       </CardOverflow>
//       <CardContent>
//         <Stack
//           spacing={1}
//           direction="row"
//           sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}
//         >
//           <div>
//             <Typography level="body-sm">{category}</Typography>
//             <Typography level="title-md">
//               <Link
//                 overlay
//                 underline="none"
//                 href="#interactive-card"
//                 sx={{ color: 'text.primary' }}
//               >
//                 {title}
//               </Link>
//             </Typography>
//           </div>
//           <IconButton
//             variant="plain"
//             size="sm"
//             color={isLiked ? 'danger' : 'neutral'}
//             onClick={Liked}
//             sx={{ display: { xs: 'none', sm: 'flex' }, borderRadius: '50%' }}
//           >
//             <FavoriteRoundedIcon />
//           </IconButton>
//         </Stack>
//         <Stack
//           spacing="0.25rem 1rem"
//           direction="row"
//           useFlexGap
//           sx={{ flexWrap: 'wrap', my: 0.25 }}
//         >
//           {/* <Typography level="body-xs" startDecorator={<FmdGoodRoundedIcon />}>
//             "זמן הכנה: "{arrObj.arr[index].time}
//           </Typography>
//           <Typography level="body-xs" startDecorator={<KingBedRoundedIcon />}>
//             1 bed
//           </Typography>
//           <Typography level="body-xs" startDecorator={<WifiRoundedIcon />}>
//             Wi-Fi
//           </Typography> */}
//         </Stack>
//         <Stack direction="row" sx={{ mt: 'auto' }}>
//           <Typography
//             level="title-sm"
//             startDecorator={
//               <React.Fragment>
//                 <Star sx={{ color: 'warning.400' }} />
//                 <Star sx={{ color: 'warning.400' }} />
//                 <Star sx={{ color: 'warning.400' }} />
//                 <Star sx={{ color: 'warning.400' }} />
//                 <Star sx={{ color: 'warning.200' }} />
//               </React.Fragment>
//             }
//             sx={{ display: 'flex', gap: 1 }}
//           >
//             4.0
//           </Typography>
//           <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: 'right' }}>
//             <strong>{arrObj.arr[index].time}</strong>
//           </Typography>
//         </Stack>
//       </CardContent>
//     </Card>

//   );
// }

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Star from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLike } from '../Store/RecipeListSlice';

export default function RentalCard(props) {
  const { index, category, title, rareFind = false, liked = false, image } = props;
  const [isLiked, setIsLiked] = React.useState(liked);
  const dispatch = useDispatch();
  const arrObj = useSelector((state) => state.RecipeListSlice);

  const handleLikeToggle = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    dispatch(ChangeLike({ isLiked: newIsLiked, index }));
  };

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >
        <AspectRatio ratio="1" flex sx={{ minWidth: { sm: 120, md: 160 } }}>
          <img alt="" src={image} />
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              width: '100%',
              p: 1,
            }}
          >
            {rareFind && (
              <Chip
                variant="soft"
                color="success"
                startDecorator={<WorkspacePremiumRoundedIcon />}
                size="md"
              >
                Rare find
              </Chip>
            )}
            <IconButton
              variant="plain"
              size="sm"
              color={isLiked ? 'danger' : 'neutral'}
              onClick={handleLikeToggle}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                ml: 'auto',
                borderRadius: '50%',
                zIndex: 20,
              }}
            >
              <FavoriteRoundedIcon />
            </IconButton>
          </Stack>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack spacing={1} direction="row" sx={{ justifyContent: 'space-between' }}>
          <div>
            <Typography level="body-sm">{category}</Typography>
            <Typography level="title-md">
              <Link overlay underline="none" href="#interactive-card" sx={{ color: 'text.primary' }}>
                {title}
              </Link>
            </Typography>
          </div>
        </Stack>
        <Stack direction="row" sx={{ mt: 'auto' }}>
          <Typography
            level="title-sm"
            startDecorator={<Star sx={{ color: 'warning.400' }} />}
            sx={{ display: 'flex', gap: 1 }}
          >
            4.0
          </Typography>
          <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: 'right' }}>
            <strong>{arrObj.arr[index]?.time || 'N/A'}</strong>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
