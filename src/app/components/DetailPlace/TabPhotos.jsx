import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { getImageUrls } from '../../helpers/places';

export default function TabPhotos({ photos }) {
  const [index, setIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const currentImage = photos[index];

  const handleClick = (index) => {
    setIndex(index);
    setOpen(true);
  };

  return (
    <div>
      <Gallery
        images={getImageUrls(photos, 250, 170)}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={getImageUrls(photos, 890, 600)}
        />
      )}
    </div>
  );
}
