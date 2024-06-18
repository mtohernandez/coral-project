"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { likeThread } from "@/lib/actions/user.actions";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ThreadsActions = ({
  currentUserId,
  threadId,
  isLiked
}: {
  currentUserId: string;
  threadId: string;
  isLiked: boolean;
}) => {
  const pathname = usePathname();
  const [liked, setLiked] = useState(isLiked);

  const parsedThreadId = JSON.parse(threadId);

  const handleLike = async () => {
    setLiked(!isLiked);
    try {
      await likeThread(currentUserId, parsedThreadId, pathname);
    } catch (error) {
      setLiked(isLiked);
    }
  };

  return (
    <div className="flex gap-3.5">
      <Button onClick={handleLike} className="p-0 h-min bg-transparent">
        <Image
          src={liked ? "/assets/fill_heart.svg" : "/assets/heart.svg"}
          width={30}
          height={30}
          alt="heart"
        />
      </Button>
      <Link href={`/thread/${parsedThreadId}`} className="cursor-pointer">
        <Image src="/assets/comment.svg" width={30} height={30} alt="comment" />
      </Link>
    </div>
  );
};

export default ThreadsActions;
