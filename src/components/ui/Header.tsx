"use client";

import { useState } from "react";
import Modal from "./Modal";
import BrandLogo from "./BrandLogo";
import { IconPlus } from "@tabler/icons-react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <BrandLogo />
          </div>

          {/* Add Dream Button */}
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium flex flex-wrap items-center gap-x-1">
              <IconPlus className="w-6 h-6" />
              Add SBWL
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
          {/* <AddDreamForm onClose={() => setIsModalOpen(false)} /> */}
          <h1>Modal from header!</h1>
        </Modal>
      )}
    </header>
  );
}
