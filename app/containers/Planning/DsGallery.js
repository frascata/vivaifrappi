import React from 'react';
import Gallery from '../../components/Gallery/index';

const S3_BASE_PATH = 'https://s3.eu-central-1.amazonaws.com/vivaifrappi/servizi/progettazione/ds/';
const S3_TMB_PATH = 'tmb/';
const S3_TMP_POSTFIX = '-300x200-no-upscale';
const S3_FILE_EXT = '.jpg';

const IMAGES = [
  'ds_01_progetto',
  'ds_02_dettaglio',
  'ds_03_dettaglio',
  'ds_04_tavola',
];

const PHOTO_SET = IMAGES.map((imageName) => {
  return {
    src: `${S3_BASE_PATH}${imageName}${S3_FILE_EXT}`,
    thumbnail: `${S3_BASE_PATH}${S3_TMB_PATH}${imageName}${S3_TMP_POSTFIX}${S3_FILE_EXT}`,
  };
});

function DsGallery() {
  return (
    <Gallery images={PHOTO_SET}/>
  );
}

export default DsGallery;
