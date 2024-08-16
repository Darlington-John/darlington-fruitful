import { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Remove the token from cookies
  nookies.destroy({ res }, 'token', {
    path: '/',
  });

  // Redirect the user to the login page
  res.writeHead(302, { Location: '/login' });
  res.end();
}
