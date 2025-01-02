export type StartUpCardProps = {
  _id:number;
  _createdAt: string;
  views: number;
  author: {_id:number, name: string};
  title: string;
  description: string;
  image: string;
  category: string;
}