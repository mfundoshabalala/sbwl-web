"use client";

import { IconX } from "@tabler/icons-react";

interface ModalType {
  children: React.ReactNode
  onClose: () => void
  open: boolean
}

export default function Modal({ children, onClose, open }: ModalType) {
  return (
    <dialog open={open} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
          <IconX />
        </button>
        {children}
      </div>
    </dialog>
  );
}
