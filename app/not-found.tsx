import { redirect } from 'next/navigation';

// simply redirect to home page
const NotFoundPage = () => {
  redirect('/');
};

export default NotFoundPage;
