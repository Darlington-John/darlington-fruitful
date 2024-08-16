import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getXataClient } from '../../utils/xata';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {
        email, financialAdvice, futurePlan, goalProgress, moneyHabits,
        getOrganized, reason, goal, saveMore, investSmarter, dealDebt,
        guide, name, surname, password
      } = req.body;

      const xata = getXataClient();
      const existingUser = await xata.db.users.filter({ email }).getFirst();

      if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      await xata.db.users.create({
        email, 'financial-advice': financialAdvice, 'future-plan': futurePlan,
        'goal-progress': goalProgress, 'money-habits': moneyHabits,
        'get-organized': getOrganized, reason, goal, name, surname,
        password: hashedPassword, 'save-more': saveMore, 'invest-smarter': investSmarter,
        'deal-debt': dealDebt, guide
      });

      // Generate a JWT token for the new user
      const token = jwt.sign(
        { email },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' } // Token expiration time
      );

      // Respond with a success message and the token
      return res.status(201).json({ message: 'User data saved successfully', token });
    } catch (error) {
      console.error('Error saving user data:', error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
