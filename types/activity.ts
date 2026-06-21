type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Activity = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  tags: string[];
  publishDate: string;
  href: string;
};
