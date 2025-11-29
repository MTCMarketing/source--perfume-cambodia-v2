import React from "react";
import "./collision.css";

interface Props {
  label: string;
}

const CollisionButton: React.FC<Props> = ({ label }) => {
  return (
    <button className="collision-btn">
      <span>{label}</span>
    </button>
  );
};

export default CollisionButton;