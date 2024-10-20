import Entrance from '@/components/layout/Entrance';
import MenuLink from '@/components/layout/MenuLink';
import VerticalFeatureRow from '@/components/layout/VerticalFeatureRow';
import { MenuTitle } from '@/utils/MenuConfig';
import React from 'react';

const page = () => (
  <Entrance custom="pt-40 my-10 lg:my-20 px-32">
    <div className="flex flex-col justify-between items-center">
      <div className="flex flex-col justify-between items-center space-y-16">
        <h1 className="text-3xl font-bold">What Is This</h1>
        <p className="font-semibold leading-relaxed text-center max-w-md">
          A garage project aiming to help &nbsp;
          <del>slacking off</del>
          &nbsp; and entertaining your smoko time, we are not encourging slack-off seriously but wish you may chill out here
        </p>
        <MenuLink menuName={MenuTitle.CONTACT}>
          <button type="button" className="btn btn-primary w-64">Contact Us</button>
        </MenuLink>

      </div>
      <div className="divider m-16" />
      <h1 className="text-3xl font-bold">Who Are We</h1>
      <VerticalFeatureRow
        title="MrPilot: Full Stack Developer"
        description={`Code is Art. Never confined to any boundaries, 
                    always pursuing fancy thoughts. 
                    Enjoying weekends with coffee, 
                    coding, and occasionally a fishing trip.`}
        image="me.jpg"
        imageAlt="First feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Ooooouch: UI/UX Designer"
        description={`Cuteness is the ultimate productivity booster. 
                    Obsessed with all things fluffy and four-legged, 
                    and believes nothing beats a session of Genshin Impact after a day of creative brainstorming.`}
        image="ouch.jpeg"
        imageAlt="First feature alt text"
      />
    </div>
  </Entrance>
);

export default page;
