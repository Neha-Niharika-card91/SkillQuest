import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="w-30">
      <div className="h-3 w-full bg-gray-200 rounded-full shadow-lg overflow-hidden">
        <div
          className="h-full bg-blue-700 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
