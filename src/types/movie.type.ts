import { Genre } from './genre.type.js';
import { Actor } from './actor.type.js';

export type Movie = {
  title: string;
  description: string;
  postDate: Date;
  genre: Genre;
  issueYear: number;
  rating: number;
  videoPreview: string;
  video: string;
  actors: Actor[];
  director: string;
  duration: number;
  commentsCount: number;
  user: string;
  poster: string;
  backgroundImage: string;
  backgroundColor: string;
};
