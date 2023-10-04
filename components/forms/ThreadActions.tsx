"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { fetchLikeByUser, likeThread } from "@/lib/actions/user.actions";
import { usePathname } from "next/navigation";

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

  const handleLike = async () => {
    isLiked = await likeThread(currentUserId, threadId, pathname);
  };

  return (
    <div className="flex gap-3.5">
      <Button onClick={handleLike} className="p-0 h-min bg-transparent">
        <Image
          src={isLiked ? "/assets/fill_heart.svg" : "/assets/heart.svg"}
          width={30}
          height={30}
          alt="heart"
        />
      </Button>
      <Link href={`/thread/${threadId}`} className="cursor-pointer">
        <Image src="/assets/comment.svg" width={30} height={30} alt="comment" />
      </Link>
    </div>
  );
};

export default ThreadsActions;
