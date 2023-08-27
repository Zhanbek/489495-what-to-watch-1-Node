import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Movie } from '../../types/movie.type.js';
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
          postDateStr,
          genreValue,
          issueYearStr,
          ratingStr,
          videoPreview,
          video,
          actorsStr,
          director,
          durationStr,
          commentsCount,
          user,
          poster,
          backgroundImage,
          backgroundColor,
        ]) => ({
          title,
          description,
          postDate: new Date(postDateStr),
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
          issueYear: Number.parseInt(issueYearStr, 10),
          rating: Number.parseFloat(ratingStr),
          videoPreview,
          video,
          actors: actorsStr.split(';').map((name) => ({ name })),
          director,
          duration: Number.parseInt(durationStr, 10),
          commentsCount: Number.parseInt(commentsCount, 10),
          user,
          poster,
          backgroundImage,
          backgroundColor,
        })
      );
  }
}
