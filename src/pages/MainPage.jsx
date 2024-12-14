import Button from '../components/Button';
import RentalCarCard from '../components/RentalCarCard';
import { COLORS } from '../constants/style';
import { BUTTON_TEXTS } from '../constants/text';
import popularData from '../mock/popular-car.json';

const MainPage = () => {
  return (
    // <Button
    //   buttonText={BUTTON_TEXTS.DESCRIPTION}
    //   bgColor={COLORS.SECONDARY}
    //   onClick={() => console.log('hi')}
    // />
    popularData.map((carInfo) => (
      <RentalCarCard
        cardInfo={carInfo}
        onClick={() => console.log('Rent Now')}
      />
    ))
  );
};

export default MainPage;
