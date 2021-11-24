import { NextApiRequest, NextApiResponse } from 'next';
import { initialUsers } from 'src/types/User';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(initialUsers);
}
