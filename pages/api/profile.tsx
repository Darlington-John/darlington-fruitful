// pages/api/profile.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt, {JwtPayload} from 'jsonwebtoken';
import { getXataClient } from '../../utils/xata';
interface DecodedToken extends JwtPayload {
  email: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    // Extract email from decoded payload
    const { email } = decoded;


    const xata = getXataClient();
    const user = await xata.db.users.filter({ email }).getFirst();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send back the user data
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
