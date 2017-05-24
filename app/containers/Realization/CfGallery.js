import React from 'react';
import Gallery from '../../components/Gallery/index';

const S3_BASE_PATH = 'https://s3.eu-central-1.amazonaws.com/vivaifrappi/servizi/realizzazione/cf/';
const S3_TMB_PATH = 'tmb/';
const S3_TMP_POSTFIX = '-300x200-no-upscale';
const S3_FILE_EXT = '.JPG';

const IMAGES = [
  'cf_01',
  'cf_02',
  'cf_03',
  'cf_04',
  'cf_05',
  'cf_06',
  'cf_07',
  'cf_08',
];

const PHOTO_SET = IMAGES.map((imageName) => {
  return {
    src: `${S3_BASE_PATH}${imageName}${S3_FILE_EXT}`,
    thumbnail: `${S3_BASE_PATH}${S3_TMB_PATH}${imageName}${S3_TMP_POSTFIX}${S3_FILE_EXT}`,
  };
});

function CfGallery() {
  return (
    <Gallery images={PHOTO_SET}/>
  );
}

export default CfGallery;
