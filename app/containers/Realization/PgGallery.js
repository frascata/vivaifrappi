import React from 'react';
import Gallery from '../../components/Gallery/index';

const S3_BASE_PATH = 'https://s3.eu-central-1.amazonaws.com/vivaifrappi/servizi/realizzazione/pg/';
const S3_TMB_PATH = 'tmb/';
const S3_TMP_POSTFIX = '-300x200-no-upscale';
const S3_FILE_EXT = '.JPG';

const IMAGES = [
  'pg_01',
  'pg_02',
  'pg_03',
  'pg_04',
  'pg_05',
  'pg_06',
  'pg_07',
  'pg_08',
];

const PHOTO_SET = IMAGES.map((imageName) => {
  return {
    src: `${S3_BASE_PATH}${imageName}${S3_FILE_EXT}`,
    thumbnail: `${S3_BASE_PATH}${S3_TMB_PATH}${imageName}${S3_TMP_POSTFIX}${S3_FILE_EXT}`,
  };
});

function PgGallery() {
  return (
    <Gallery images={PHOTO_SET}/>
  );
}

export default PgGallery;
