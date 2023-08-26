import { User } from "./user.type";
import { Genre } from './genre.type';

export type Movie = {
  title: string;
  description: string;
  publishDate: Date;
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
}
