import React from 'react';
import Gallery from '../../components/Gallery/index';

const S3_BASE_PATH = 'https://s3.eu-central-1.amazonaws.com/vivaifrappi/vivaio/';
const S3_TMB_PATH = 'tmb/';
const S3_TMP_POSTFIX = '-300x200';
const S3_FILE_EXT = '.JPG';

const IMAGES = [
  'Allevamento_in_pieno_campo_01',
  'Allevamento_in_pieno_campo_02',
  'Allevamento_in_pieno_campo_03',
  'Allevamento_in_pieno_campo_04',
  'Allevamento_in_pieno_campo_05',
  'Allevamento_in_pieno_campo_06',
  'Allevamento_in_pieno_campo_07',
  'Buxus_sempervirens',
  'Cupressus_sempervirens',
  'Liquidambar_styraciflua',
  'Nandina_domestica',
  'Olea_europea',
  'Pero',
  'Punica_granatum',
  'Una_ciliegia_tira_l\'altra',
];

const PHOTO_SET = IMAGES.map((imageName) => {
  return {
    src: `${S3_BASE_PATH}${imageName}${S3_FILE_EXT}`,
    thumbnail: `${S3_BASE_PATH}${S3_TMB_PATH}${imageName}${S3_TMP_POSTFIX}${S3_FILE_EXT}`,
  };
});

function NurseryGallery() {



  return (
    <Gallery images={PHOTO_SET}/>
  );
}

export default NurseryGallery;
