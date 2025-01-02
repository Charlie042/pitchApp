import React from "react";
import { StartUpCardProps } from "../types/otherTypes";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/utils";

const StartUpCard = ({ post }: { post: StartUpCardProps }) => {
  const {
    _id,
    _createdAt,
    views,
    author: { _id: authorId, name: authorName },
    title,
    description,
    image,
    category,
  } = post;
  return (
    <li className="startup-card group" key={_id}>
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(new Date(_createdAt))}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="text-primary size-6 hover:text-white" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-3">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-6-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src={image}
            alt={title}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup_card_desc">{description}</p>
        <Image
          src={image}
          alt={title}
          width={500}
          height={200}
          className="startup-card_img rounded-lg"
        />
      </Link>
      <div className="flex-between mt-3 gap-3">
        <Link href={`/?query=${category}`} className="">
          {category}
        </Link>
        <Button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartUpCard;
