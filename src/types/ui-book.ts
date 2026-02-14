export interface UiBook {
  id: number;
  title: string;
  description: string;
  year: number;
  fileUrl: string;

  author: string;
  tags: string[];
  cover: string;
  rating: number;
}
