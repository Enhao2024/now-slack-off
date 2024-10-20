import DashBoard from '@/components/home/DashBoard';
import Entrance from '@/components/layout/Entrance';

export default function Home() {
  return (
    <Entrance custom="my-10 lg:my-20">
      <DashBoard />
    </Entrance>
  );
}
