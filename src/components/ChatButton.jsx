import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Icon */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-yellow-600 hover:bg-yellow-500 text-white p-4 rounded-full shadow-lg z-50 transition"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-xl shadow-xl z-50 border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-yellow-600 text-white px-4 py-2">
            <h3 className="text-lg font-semibold">Chat Support</h3>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <p className="text-sm text-gray-600">
              👋 Welcome! Send us a message.
            </p>
          </div>

          {/* Input */}
          <div className="flex items-center p-3 border-t bg-white">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-3 py-2 text-sm outline-none"
            />
            <button className="ml-2 bg-yellow-600 text-white px-4 py-2 rounded-full">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;
