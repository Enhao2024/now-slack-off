'use client';

import Entrance from '@/components/layout/Entrance';
import MenuLink from '@/components/layout/MenuLink';
import { MenuTitle } from '@/utils/MenuConfig';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Page() {
  const AsyncResult = () => {
    const searchParams = useSearchParams();
    const result = searchParams.get('result');
    return `$ ${result}`;
  };
  return (
    <Entrance>
      <div className="flex flex-col space-y-16 items-center">
        <div className="font-bold text-2xl">
          Congratulate your BOSS! You have mooched
          <span className="text-blue-400">
            <Suspense fallback={<div>Loading...</div>}>
              <AsyncResult />
            </Suspense>
          </span>
          {' '}
          NZD!
        </div>
        <MenuLink menuName={MenuTitle.LUNCH_GUESS}>
          <button className="btn btn-primary" type="button">Reward Yourself!</button>
        </MenuLink>
        <MenuLink menuName={MenuTitle.CALCULATOR}>
          <button className="btn btn-primary" type="button">Recalculate</button>
        </MenuLink>
      </div>
    </Entrance>
  );
}

export default Page;
