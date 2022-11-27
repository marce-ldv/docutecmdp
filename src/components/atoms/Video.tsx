import type { FC } from 'react';

export interface VideoProps {
  src: string
}

export const Video: FC<VideoProps> = ({ src }) => {
  return (
    <video className="h-auto w-full max-w-full" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
