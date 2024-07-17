import { useState } from 'react';
import './ImageSlider.css';
import { SLIDER_IMAGES } from '../../rawData/sliderImages';
const ImageSlider = () => {
    const [imgIdx, setImgIdx] = useState(0);
    const prevImg = ()=>{
        if(imgIdx==0){
            setImgIdx(SLIDER_IMAGES.length - 1);
        }else{
            setImgIdx(imgIdx-1);
        }
    }
    const nextImg = ()=>{
        if(imgIdx==SLIDER_IMAGES.length-1){
            setImgIdx(0);
        }else{
            setImgIdx(imgIdx+1);
        }
    }

    return (
        <div className="image-slider">
            <img className='slider-img' src={SLIDER_IMAGES[imgIdx].src} alt={SLIDER_IMAGES[imgIdx].alt} />
            <span className='imageChangeBtn' onClick={prevImg}>{`<`}</span>
            <span className='imageChangeBtn' onClick={nextImg}>{`>`}</span>
        </div>
    );
}

export default ImageSlider;
