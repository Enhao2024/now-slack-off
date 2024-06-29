'use client'
import { redirect } from 'next/navigation';

// simply redirect to home page
const ErrorPage = () => {
  redirect('/');
}

export default ErrorPage;