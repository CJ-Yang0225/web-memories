export type Post = {
  _id: string;
  creator: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  isFavorite: boolean;
  likes: number;
  createdAt: string;
};

export type FormData = {
  creator: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  isFavorite: boolean;
};
