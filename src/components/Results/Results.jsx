import * as React from 'react';

import ImageGallery from 'react-image-gallery';
import BodyPart from '../BodyPart/BodyPart';

const Results = ({data}) => {
  return (
    <BodyPart header="Результаты опроса">
      <h3 style={{textAlign: "center"}}>1 августа - 1 сентября 2020 года</h3>

      <ImageGallery items={data}
        lazyLoad={true}
        showThumbnails={false}
        showIndex={true}
        showPlayButton={false}
      />
    </BodyPart>
  );
};

export default Results;
