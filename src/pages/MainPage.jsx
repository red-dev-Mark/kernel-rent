import Button from '../components/Button';
import { COLORS } from '../constants/style';
import { BUTTON_TEXTS } from '../constants/text';
import popularData from '../mock/popular-car.json';

const MainPage = () => {
  return (
    <Button
      buttonText={BUTTON_TEXTS.DESCRIPTION}
      bgColor={COLORS.SECONDARY}
      onClick={() => console.log('hi')}
    />
  );
};

export default MainPage;
