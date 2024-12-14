import Button from '../components/Button';
import CarCard from '../components/CarCard';
import { COLORS } from '../constants/style';
import { BUTTON_TEXTS } from '../constants/text';

const data = {
  name: 'Nissan GT-R',
  type: 'Sport',
  image:
    'https://cars.usnews.com/static/images/Auto/izmo/i4762/2015_nissan_gt_r_sideview.jpg',
  fuelCapacity: 80,
  gearType: 'Manual',
  seats: 2,
  isLiked: false,
  originalPrice: 100.0,
  salePrice: 80.0,
};

const MainPage = () => {
  return (
    <Button
      buttonText={BUTTON_TEXTS.DESCRIPTION}
      a
      bgColor={COLORS.SECONDARY}
      onClick={() => console.log('hi')}
    />
  );
};

export default MainPage;
