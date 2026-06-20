import React from 'react';
import { Cpu } from 'lucide-react';

export const WorkstationLoader: React.FC = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center text-center py-24 bg-[#111827]/20 rounded-3xl border border-[#374151] max-w-2xl mx-auto animate-pulse"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="relative mb-4 flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border border-dashed border-[#374151] animate-spin [animation-duration:8s]" />
        <Cpu className="h-12 w-12 text-[#9CA3AF] stroke-[1.5] opacity-40 animate-pulse" />
      </div>
      
      {/* Header Text Skeleton */}
      <div className="h-5 w-48 bg-[#374151]/60 rounded-md mb-3 tracking-wider uppercase" />
      
      {/* Paragraph Text Skeletons */}
      <div className="space-y-2 flex flex-col items-center w-full max-w-xs">
        <div className="h-3 w-full bg-[#374151]/40 rounded" />
        <div className="h-3 w-5/6 bg-[#374151]/40 rounded" />
      </div>
      

      <div className="mt-8 h-9 w-44 rounded-full bg-[#111827] border border-[#374151]/60" />
    </div>
  );
};

export default WorkstationLoader;