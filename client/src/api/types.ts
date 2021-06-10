export type Post = {
  _id: string;
  creator: string;
  title: string;
  message?: string;
  selectedFile?: string;
  isFavorite: boolean;
  likes?: string[];
  tags?: string[];
  createdAt: string;
};

export type Posts = Post[];
