import { Router } from 'express';
import { getLocations } from '../db';

export const locationApi = Router();

locationApi.get('/', async (req, res) => {
  const locations = await getLocations();
  res.send(locations);
});
