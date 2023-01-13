import './gallery.css';
import {
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  winwinImg,
} from '../../utils/icons';
import { BoxText } from '../../utils/components';

const Gallery = () => {
  return (
    <div className="gallery-container container">
      <BoxText>Achat et enlèvement des marchandises dans la semaine</BoxText>
      <div className="flexy">
        <img src={galleryImg1} alt="" style={{ width: '300px' }} />
      </div>

      <div className="flexy">
        <img src={galleryImg2} alt="" style={{ width: '300px' }} />
      </div>

      <div className="flexy">
        <img src={galleryImg3} alt="" style={{ width: '300px' }} />
      </div>

      <div className="flexy">
        <img src={galleryImg4} alt="" style={{ width: '300px' }} />
      </div>
      <BoxText>
        On vous répond en moins de <span> 48h </span>
      </BoxText>

      <BoxText>Rachat de la totalité des stocks</BoxText>
      <img src={winwinImg} alt="" />
      <div className="flexy">
        <img src={galleryImg5} alt="" style={{ width: '300px' }} />
      </div>
    </div>
  );
};

export default Gallery;
