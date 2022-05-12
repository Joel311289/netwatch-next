import { IoMdAdd } from 'react-icons/io';
import { ElementHTML, ElementSkeleton, MediaData } from '@/types';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Card, Carousel } from '@/components/display';
import { MediaCondensed } from '@/containers/MediaCondensed';
import { classes, getBreakpointConfig } from '@/utils/helpers';
import styles from '@/containers/MediaCarousel/MediaCarousel.module.scss';

export type MediaCarouselProps = typeof defaultProps &
  ElementHTML &
  ElementSkeleton & {
    items?: Array<MediaData>;
    slides?: number;
    backdrop?: boolean;
    pagination?: boolean;
    condensed?: boolean;
    autoplay?: boolean;
    loop?: boolean;
  };

const defaultProps = {};

const imageSizes: {
  [key: string]: {
    imageKey: 'image' | 'backdrop';
    configKey: 'items' | 'backdrops';
    ratio: number;
  };
} = {
  poster: {
    imageKey: 'image',
    configKey: 'items',
    ratio: 1.5
  },
  backdrop: {
    imageKey: 'backdrop',
    configKey: 'backdrops',
    ratio: 0.56
  }
};

const MediaCarousel = ({
  items,
  slides,
  backdrop,
  pagination,
  condensed,
  autoplay,
  loop
}: MediaCarouselProps) => {
  const { key } = useBreakpoint();
  const { imageKey, configKey, ratio } = imageSizes[backdrop ? 'backdrop' : 'poster'];
  const { [configKey]: slidesPerView, spacing, offset = 0 } = getBreakpointConfig(key) || {};

  return (
    <div className={classes(styles.wrapper, styles[key])}>
      <Carousel
        slidesPerView={slides || slidesPerView}
        spacing={spacing * 4}
        offset={offset + 1}
        navigation={!condensed}
        pagination={pagination}
        autoplay={autoplay}
        loop={loop}
        className={classes(styles.carousel)}>
        {(items || []).map((props, index) => {
          const { [imageKey]: image, type, name } = props;

          return (
            <Carousel.Item key={index}>
              {condensed ? (
                <MediaCondensed {...props} />
              ) : (
                <Card href="/home" className={styles.card} skeleton={!type}>
                  <Card.Image src={image} width="100%" ratio={ratio} lazy>
                    <Card.Actions>
                      <Card.Actions.Item icon={IoMdAdd} />
                    </Card.Actions>
                  </Card.Image>
                  <Card.Body title={name} />
                </Card>
              )}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

MediaCarousel.defaultProps = defaultProps;

export default MediaCarousel;
