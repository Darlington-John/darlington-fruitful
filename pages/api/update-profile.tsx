import { getXataClient } from '../../utils/xata';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, surname } = req.body;

    try {
      const xata = getXataClient();
      const user = await xata.db.users.filter({ email }).getFirst();

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      await xata.db.users.update(user.id, { name, surname });

      return res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error('Error updating profile:', error);
      return res.status(500).json({ error: 'Failed to update profile' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
