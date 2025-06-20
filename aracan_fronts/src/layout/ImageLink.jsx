import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ImageLink({ src }) {
  const navigate = useNavigate();

  return (
    <img 
      className="w-full cursor-pointer" 
      src={src} 
      alt="Go to Cart" 
      onClick={() => navigate('/cart')} 
    />
  );
}

ImageLink.propTypes = {
    src: PropTypes.string.isRequired,
};

export default ImageLink;