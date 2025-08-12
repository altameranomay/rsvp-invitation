import React from "react";

export default function ZoomName() {
  return (
    <div
      className="relative "
      style={{
        backgroundImage: "url('https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-006.JPG')",
        backgroundAttachment: "fixed",
        height:"100vh",
        width: "100%",
        backgroundSize: "100% auto",
        backgroundRepeat:"no-repeat" // keeps background static
      }}
    >
      {/* Floating div */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-floating bg-white/80 p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold">Floating Box</h1>
        <p>This div moves gently on a static background.</p>
      </div> */}

      {/* Custom animation styles */}
      {/* <style>
        {`
          @keyframes floating {
            0%   { transform: translate(-50%, -50%) translateY(0px); }
            50%  { transform: translate(-50%, -50%) translateY(-15px); }
            100% { transform: translate(-50%, -50%) translateY(0px); }
          }

          .animate-floating {
            animation: floating 3s ease-in-out infinite;
          }
        `}
      </style> */}
    </div>
  );
}
