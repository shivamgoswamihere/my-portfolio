import React,{ useEffect, useState } from "react";

export default function WelcomeModal({ onSaveName }) {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSaveName(name.trim());
      setShowModal(false);
    }
  };

  const handleClose = () => {
    onSaveName(""); // fallback to "World"
    setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#0F0F0F] relative p-6 rounded-2xl w-[90%] max-w-md text-white shadow-2xl border border-white/10 transition-all duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <span className="w-5 h-5 text-xl cursor-pointer">✖</span>
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Welcome!</h2>
        <p className="mb-4 text-sm text-gray-400 text-center">
          Before we start, what's your name?
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 transition-all rounded-lg py-2 font-medium"
          >
            Let's Go!
          </button>
        </form>
      </div>
    </div>
  );
}
