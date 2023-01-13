import './gallery.css';
import {
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg5,
  winwinImg,
} from '../../utils/icons';
import { BoxText } from '../../utils/components';

const Gallery = () => {
  return (
    <div className="gallery-container container">
      <BoxText>Excellente Assurance-crédit</BoxText>
      <img src={galleryImg1} alt="" />
      <img src={galleryImg2} alt="" />
      <img src={galleryImg3} alt="" className="grid-2" />
      <BoxText>Frais de port à notre charge</BoxText>
      <BoxText>Rachat de la totalité des stocks</BoxText>
      <img src={winwinImg} alt="" />
      <img src={galleryImg5} alt="" />
    </div>
  );
};

export default Gallery;
