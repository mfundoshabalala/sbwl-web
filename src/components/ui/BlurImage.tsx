"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dream } from "@/interfaces";
import { cn } from "@/lib/utils";
import Modal from "./Modal";

export default function BlurImage({ dream }: { dream: Dream }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <a href="#" onClick={() => setIsModalOpen(true)} className="group border rounded-lg shadow hover:motion-preset-seesaw motion-duration-1000 hover:delay-500">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            alt={dream.title}
            src={ dream.media_url ?? "https://bit.ly/placeholder-img"}
            layout="fill"
            objectFit="cover"
            className={cn(
              "group-hover:opacity-75 duration-700 ease-in-out",
              isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100"
            )}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
        <div className="p-1">
          <h3 className="px-1 mt-4 text-lg font-medium text-gray-900">{dream.title}</h3>
          <p className="px-1 mt-1 text-sm text-gray-900">{dream.description}</p>
        </div>
      </a>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
          {/* <AddDreamForm onClose={() => setIsModalOpen(false)} /> */}
          <h1>Modal from card!</h1>
        </Modal>
      )}
    </>
  );
}