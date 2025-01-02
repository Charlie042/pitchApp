// import { formatDate } from "@/lib/utils";
// import { StartUpCardProps } from "@/types/otherTypes";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export const post = await client.fetch(STARTUP_QUERY)

// export const post:StartUpCardProps[] =[{
//   createdAt: formatDate(new Date()),
//   views: 100,
//   author: {_id:1, name: "Ginger"},
//   _id: 1,
//   title: "The Future of AI",
//   description: "Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions",
//   image: "https://placehold.co/48x48",
//   category: "Education",
// },
// {
//   createdAt: formatDate(new Date()),
//   views: 100,
//   author: {_id:2 , name: "Emeka"},
//   _id: 2,
//   title: "Ginger AI",
//   description: "Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions",
//   image: "https://placehold.co/48x48",
//   category: "Technology",
// }
// ]