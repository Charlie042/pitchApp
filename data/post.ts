import { formatDate } from "@/lib/utils";
import { StartUpCardProps } from "@/types/otherTypes";

export const post:StartUpCardProps[] =[{
  createdAt: formatDate(new Date()),
  views: 100,
  author: {_id:1, name: "Ginger"},
  _id: 1,
  title: "The Future of AI",
  description: "Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions",
  image: "https://placehold.co/48x48",
  category: "Technology",
},
{
  createdAt: formatDate(new Date()),
  views: 100,
  author: {_id:2 , name: "Emeka"},
  _id: 2,
  title: "Ginger AI",
  description: "Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions",
  image: "https://placehold.co/48x48",
  category: "Technology",
}
]