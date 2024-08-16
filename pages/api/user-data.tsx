import { NextApiRequest, NextApiResponse } from 'next';
import { getXataClient } from '../../utils/xata';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Get the JWT token from the authorization header
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Verify the JWT token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { email } = decoded as { email: string };

      // Get the user data from Xata
      const xata = getXataClient();
      const user = await xata.db.users.filter({ email }).getFirst();

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Send back the user data
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Only allow GET requests
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
