import { MenuTitle } from '@/utils/MenuConfig';
import TextReveal from '../ui/text-reveal';

import MenuCard from './MenuCard';

function DashBoard() {
  const welcomeText = `Take A Rest, Make A Boost.
  Chill Out Or Recharge After Lunch!`;

  const cardBackground = '#d4d4d8';

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center flex flex-col lg:flex-row ">
        <div className="z-10 flex items-center justify-center">
          <TextReveal text={welcomeText} />
        </div>
        <div className="flex w-full flex-row gap-8 lg:pr-10">
          <div className="flex w-full flex-col gap-4">
            <MenuCard name="Lunch Guess" backgroundColor={cardBackground} toPage={MenuTitle.LUNCH_GUESS} />
            <MenuCard name="Bring Your Lunch" backgroundColor={cardBackground} toPage={MenuTitle.LUNCH_RECIPE} />
            <MenuCard name="Chat Room" backgroundColor={cardBackground} toPage={MenuTitle.CHAT_ROOM} />
            <MenuCard name="After Work Plan" backgroundColor={cardBackground} toPage={MenuTitle.AFTER_WORK_PLAN} />
          </div>
          <div className="flex w-full flex-col gap-4">
            <MenuCard name="Afternoon Todo" backgroundColor={cardBackground} toPage={MenuTitle.AFTERNOON_PLAN} />
            <MenuCard name="Recharge" backgroundColor={cardBackground} toPage={MenuTitle.LEARNING} />
            <MenuCard name="Next Week Todo" backgroundColor={cardBackground} toPage={MenuTitle.NEXT_WEEK_PLAN} />
            <MenuCard name="Weekend Plan" backgroundColor={cardBackground} toPage={MenuTitle.WEEKEND_PLAN} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashBoard;