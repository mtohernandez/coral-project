import { formatDateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { fetchLikeByUser, likeThread } from "@/lib/actions/user.actions";
import ThreadsActions from "../forms/ThreadActions";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    username: string;
    id: string;
  };
  community: {
    name: string;
    image: string;
    id: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  likes?: number;
  isComment?: boolean;
}

const ThreadCard = async ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  likes,
  comments,
  isComment,
}: Props) => {
  const isLiked = await fetchLikeByUser(currentUserId, id);

  return (
    <article
      className={`flex w-full flex-col border-t border-t-dark-2 py-7 ${
        isComment && "px-0 xs:px-7"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="Profile image"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>
            <div className="thread-card_bar" />
          </div>
          <div className="flex w-full flex-col">
            <h4 className="text-base-semibold text-light-1">{author.name}</h4>
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-medium text-gray-1">
                @{author.username}
              </h4>
            </Link>
            <p className="mt-2 text-small-regular text-light-2">{content}</p>
            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <ThreadsActions
                currentUserId={currentUserId}
                threadId={id}
                isLiked={isLiked}
              />
              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {comments.length} replies
                  </p>
                </Link>
              )}
              {likes && (
                <div className="py-2">
                  <p className="text-gray-1">{likes} likes</p>
                </div>
              )}
            </div>
          </div>
          <Button className="text-light-1 bg-transparent h-min">...</Button>
        </div>
      </div>

      {!isComment && community && (
        <Link
          href={`/communities/${community.id}`}
          className="mt-5 flex items-center"
        >
          <p className="text-subtle-medium text-gray-1">
            {formatDateString(createdAt)} - {community.name} Community
          </p>

          <Image
            src={community.image}
            alt="Community Name"
            width={14}
            height={14}
            className="ml-1 rounded-full object-cover"
          />
        </Link>
      )}
    </article>
  );
};

export default ThreadCard;
