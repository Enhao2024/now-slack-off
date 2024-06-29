import Entrance from '@/components/layout/Entrance'
import MenuLink from '@/components/layout/MenuLink'
import { VerticalFeatureRow } from '@/components/layout/VerticalFeatureRow'
import { MenuTitle } from '@/utils/MenuConfig'
import React from 'react'

const page = () => {
  return (
    <Entrance custom='my-10 lg:my-20'>
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col justify-between items-center space-y-16">
          <h1 className="text-3xl font-bold">Just! For! Fun!</h1>
          <p className="font-semibold leading-relaxed text-center max-w-md">A garage project aiming to help <del>slacking off</del> and entertaining your smoko time, we are not encourging slack-off seriously but wish you may chill out here <strong>Especially After A Shitty Day</strong></p>
          <MenuLink menuName={MenuTitle.CONTACT}>
            <button className="btn btn-primary w-64">Contact Us</button>
          </MenuLink>

        </div>
        <div className="divider m-16"></div>
        <h1 className="text-3xl font-bold">Contributors</h1>
        <VerticalFeatureRow
          title="MrPilot: Full Stack Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="me.jpg"
          imageAlt="First feature alt text"
          reverse
        />
        <VerticalFeatureRow
          title="Ooooouch: UI/UX Designer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="ouch.jpeg"
          imageAlt="First feature alt text"
        />
      </div>
    </Entrance>
  )
}

export default page