import type { NextApiRequest, NextApiResponse } from 'next';
import { getXataClient } from '../../utils/xata';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      try {
        const { email } = req.body;
        const xata = getXataClient();
  
        // Check if the email already exists in the users table
        const existingUser = await xata.db.users.filter({ email }).getFirst();
  
        if (existingUser) {
          // If the email already exists, return an error response
          return res.status(400).json({ error: 'Email already exists' });
        }
  
        // If the email does not exist, create a new user
        const newUser = await xata.db.users.create({ email });
  
        return res.status(201).json({ message: 'Email saved successfully', user: newUser });
      } catch (error) {
        console.error('Error saving email:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  }
