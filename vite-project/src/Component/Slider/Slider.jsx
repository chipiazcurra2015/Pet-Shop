import React from 'react';
import './slider.css'
function Slider() {
  return (
    <div className="slider">
      <ul>
        <li key="1">
          <img src="https://puppis.vteximg.com.br/arquivos/ids/196528/Alimento_PyG_RoyalCanin%20web.png?v=638518046967770000" alt="Slider 1" />
        </li>
        <li key="2">
          <img src="https://mendoza.pluspet.com.ar/cdn/shop/files/BANNER_WEB_1A_copia_5.jpg?v=1707170109&width=1400" alt="Slider 2" />
        </li>
        <li key="3">
          <img src="https://mendoza.pluspet.com.ar/cdn/shop/files/WEB_BANNER_3.jpg?v=1656335513&width=1400" alt="Slider 3" />
        </li>
        <li key="4">
          <img src="https://crazypet.es/modules/ps_imageslider/images/d227479605182f36e12505fd37f297ee59d21de6_Slider%20Web-4.png" alt="Slider 4" />
        </li>
      </ul>
    </div>
  );
}

export default Slider;
