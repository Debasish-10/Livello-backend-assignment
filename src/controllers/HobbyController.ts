import { Request, Response } from 'express';
import Hobby from '../models/Hobby';

export const createHobby = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { passionLevel, name, year } = req.body;
    const hobby = new Hobby({ passionLevel, name, year });
    await hobby.save();
    res.status(201).json(hobby);
  } catch (error) {
    console.error('Failed to create hobby:', error);
    res.status(500).json({ error: 'Failed to create hobby' });
  }
};

export const getHobbies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const hobbies = await Hobby.find();
    res.status(200).json(hobbies);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getHobby = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const hobby = await Hobby.findById(id);
    if (hobby) {
      res.status(200).json(hobby);
    } else {
      res.status(404).json({ error: 'Hobby not found' });
    }
  } catch (error) {
    console.error('Failed to get hobby:', error);
    res.status(500).json({ error: 'Failed to get hobby' });
  }
};

export const updateHobby = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { passionLevel, name, year } = req.body;
    const hobby = await Hobby.findByIdAndUpdate(
      id,
      { passionLevel, name, year },
      { new: true }
    );
    if (hobby) {
      res.status(200).json({ message: 'Hobby updated successfully', hobby });
    } else {
      res.status(404).json({ error: 'Hobby not found' });
    }
  } catch (error) {
    console.error('Failed to update hobby:', error);
    res.status(500).json({ error: 'Failed to update hobby' });
  }
};

export const deleteHobby = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const hobby = await Hobby.findByIdAndDelete(id);
    if (hobby) {
      res.status(200).json({ message: 'Deleted successfully' });
    } else {
      res.status(404).json({ error: 'Hobby not found' });
    }
  } catch (error) {
    console.error('Failed to delete hobby:', error);
    res.status(500).json({ error: 'Failed to delete hobby' });
  }
};
