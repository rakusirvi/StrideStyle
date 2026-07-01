import React from "react";

interface BlurCircleType {
  size?: number;
}

const BlurCircle = ({ size = 100 }: BlurCircleType) => {
  return (
    <div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle, #072d44 0%, #072d44 40%, transparent 100%)",
        filter: "blur(80px)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default BlurCircle;
