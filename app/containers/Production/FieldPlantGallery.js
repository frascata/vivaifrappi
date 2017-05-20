import React from 'react';
import Gallery from '../../components/Gallery/index';

const S3_BASE_PATH = 'https://s3.eu-central-1.amazonaws.com/vivaifrappi/servizi/produzione/';
const S3_TMB_PATH = 'tmb/';
const S3_TMP_POSTFIX = '-300x200-no-upscale';
const S3_FILE_EXT = '.JPG';


const IMAGES = [
  'allevamento_in_terra_01',
  'allevamento_in_terra_02',
  'allevamento_in_terra_03',
  'allevamento_in_terra_04',
  'allevamento_in_terra_05',
  'allevamento_in_terra_06',
  'allevamento_in_terra_07',
  'allevamento_in_terra_08',
  'allevamento_in_terra_09',
  'allevamento_in_terra_10',
  'allevamento_in_terra_11',
  'allevamento_in_terra_12',
];

const PHOTO_SET = IMAGES.map((imageName) => {
  return {
    src: `${S3_BASE_PATH}${imageName}${S3_FILE_EXT}`,
    thumbnail: `${S3_BASE_PATH}${S3_TMB_PATH}${imageName}${S3_TMP_POSTFIX}${S3_FILE_EXT}`,
  };
});

function FieldPlantGallery() {
  return (
    <Gallery images={PHOTO_SET}/>
  );
}

export default FieldPlantGallery;
