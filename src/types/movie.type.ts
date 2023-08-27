import { User } from './user.type.js';
import { Genre } from './genre.type.js';

export type Movie = {
  title: string;
  description: string;
  postDate: Date;
  genre: Genre;
  issueYear: number;
  rating: number;
  videoPreview: string;
  video: string;
  actors: string;
  director: string;
  duration: number;
  commentsCount: number;
  user: User;
  poster: string;
  backgroundImage: string;
  backgroundColor: string;
};
