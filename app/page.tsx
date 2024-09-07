import Calculator from '@/components/home/Calculator';
import Entrance from '@/components/layout/Entrance';
import MenuLink from '@/components/layout/MenuLink';
import { MenuTitle } from '@/utils/MenuConfig';

export default function Home() {
  return (
    <Entrance custom="my-10 lg:my-20">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold my-4">Oppppps...Hey!</h1>
            <h4 className="text-3xl font-bold my-4">You found us!</h4>
            <p className="my-8 font-semibold">Welcome to your secret base and have fun!</p>
            <div className="my-12">
              <Calculator title="How Much You Slacked" />
            </div>
            <div className="flex flex-col space-y-12">
              <MenuLink menuName={MenuTitle.LUNCH_GUESS}>
                <button className="btn btn-primary" type="button">Not Sure What&apos;s for Lunch?</button>
              </MenuLink>
              <MenuLink menuName={MenuTitle.CHAT_ROOM}>
                <button className="btn btn-primary" type="button">Meet Other Slackers!</button>
              </MenuLink>
            </div>
          </div>
        </div>
      </div>
    </Entrance>
  );
}
