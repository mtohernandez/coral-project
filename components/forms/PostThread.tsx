"use client";

import { useState } from "react";
import UploadThread from "./UploadThread";
import Image from "next/image";

function PostThread({
  userId,
  currentUserImg,
  hasImage,
  children,
}: {
  userId: string;
  currentUserImg: string;
  hasImage: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="flex items-center gap-3 w-full py-7">
      {
        hasImage && (
          <Image
            src={currentUserImg}
            alt="Profile image"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        )
      }
      <button
        onClick={openModal}
        className="text-light-4 outline-none bg-transparent border-none cursor-pointer"
      >
        {children}
      </button>
      <UploadThread
        userId={userId}
        currentUserImg={currentUserImg}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default PostThread;
