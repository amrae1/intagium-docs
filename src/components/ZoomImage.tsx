import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type Props = {
  src: string;
  alt?: string;
};

export default function ZoomImage({ src, alt }: Props) {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <Zoom>
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: '100%', borderRadius: '8px', cursor: 'zoom-in' }}
        />
      </Zoom>
    </div>
  );
}
