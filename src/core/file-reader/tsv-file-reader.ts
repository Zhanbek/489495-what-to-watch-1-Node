import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Movie } from '../../types/movie.type.js';
import { User } from '../../types/user.type.js';
import { Genre } from '../../types/genre.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public fileName: string) {}

  public read(): void {
    this.rawData = readFileSync(this.fileName, { encoding: 'utf-8' });
  }

  public toArray(): Movie[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(
        ([
          title,
          description,
          createDate,
          genreValue,
          issueYear,
          rating,
          videoPreview,
          video,
          actors,
          director,
          duration,
          commentsCount,
          user,
          poster,
          backgroundImage,
          backgroundColor,
        ]) => ({
          title,
          description,
          postDate: new Date(createDate),
          genre:
            Genre[
              genreValue as
                | 'Comedy'
                | 'Crime'
                | 'Documentary'
                | 'Drama'
                | 'Horror'
                | 'Family'
                | 'Romance'
                | 'Scifi'
                | 'Thriller'
            ],
          issueYear,
          rating,
          videoPreview,
          video,
          actors: actors.split(';').map((name) => ({ name })),
          director,
          duration,
          commentsCount: Number.parseInt(commentsCount, 10),
          user: { email, firstName, lastName, avaraPath },
          poster,
          backgroundImage,
          backgroundColor,
        })
      );
  }
}
