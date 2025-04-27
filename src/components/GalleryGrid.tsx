import { Gallery, Item } from "react-photoswipe-gallery";
import styles from '@/styles/GalleryGrid.module.css';

export interface GridItem {
  alt: string;
  caption?: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
}

interface GalleryGridProps {
  items: GridItem[];
}

const GalleryGrid = ({ items }: GalleryGridProps) => {
  return (
    <div className={styles.gallery}>
      <Gallery withCaption>
      {items.map((item, index) => (
        <Item
          cropped
          caption={item.caption}
          original={item.src}
          thumbnail={item.thumb}
          width={item.width}
          height={item.height}
          key={`gallery-item-${index}`}
        >
          {({ ref, open }) => (
            <picture ref={ref} className={styles['gallery__item']}>
              <img
                alt={item.alt}
                onClick={open}
                src={item.thumb}
                className={styles['gallery__source']}
              />
            </picture>
          )}
        </Item>
      ))}
    </Gallery>
    </div>
    
  );
};

export default GalleryGrid;
