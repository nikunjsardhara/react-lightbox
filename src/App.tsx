import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ImagePreview from "./ImagePreview";
import Lightbox from "./Lightbox";

const IMAGE_URLS: Array<string> = [
  "https://lh3.googleusercontent.com/YEcRcfKUaq3mA3vHN_VcE2G4TN8ZzvyTJnjfOXgVHjfCO3u2zKjJmK6xTdEUm6q5F8OTTcTB7EoiZ4ePpknxq8Jz",
  "https://lh3.googleusercontent.com/0jGB0WpcTOTGUAjSkLZFjV2lox-9rZ1WhduWJYdXlThaaowvZVm7RfvB0F7S6SkaRZTA1L3-O8Ik5x47d4bt8riR",
  "https://lh3.googleusercontent.com/BTmQVc1Rmcee-9JxVcqSeklCQyZbEStqdO43NSnfY-FzhARq66bqJl2LRsvRydmyLGFwn9kxnhCpTmsf5kiUZ5xR=s300",
  "https://lh3.googleusercontent.com/wWyUN_8wHRMxhanvt9jm0ZYFfv72jLArs3AgJVBmSRODdaZ8I9vr9CRxtB9LNWV5uYfw5Yxaqktc7tgDm_sp6V7aNA=s700",
  "https://lh3.googleusercontent.com/yeqH5r517R1hEsotL3Yfk00ntwFdxmFf5s6gU9fui9d1BSnJVojsWkWbOqRN2JlaCt3oRKcbEMfaHKwJATRgHIEy",
]

function App() {
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
  document.onkeydown = function checkKey(e) {
      e = e || window.event;
      
      if(e.key === 'ArrowLeft'){
        let prevImage = IMAGE_URLS.indexOf(previewImage) - 1;
        if(prevImage === -1){
          prevImage = IMAGE_URLS.length - 1 ;
        }
        setPreviewImage(IMAGE_URLS[prevImage]);
      }else if(e.key === 'ArrowRight'){
        let nextImage = IMAGE_URLS.indexOf(previewImage) + 1;
        if(nextImage === IMAGE_URLS.length){
          nextImage = 0 ;
        }
        setPreviewImage(IMAGE_URLS[nextImage]);
      }
  };
  }, [previewImage]);

  return (
    <React.Fragment>
      {
        previewImage !== '' &&
        (
          <Lightbox
            onBackdropClick={setPreviewImage}
            url={previewImage} />
        )
      }
      
    <DivContainer>
      <div className="App--instructions">
        This is a LightBox like component built with React. We can use it in projects to preview images.<br/>
        Click an image below and use arrow keys to navigate.
      </div>
      <div className="App--items-container">
        {IMAGE_URLS.map(imageUrl =>
          <ImagePreview
            onImageClick={setPreviewImage}
            url={imageUrl}
            className="App--item"
            key={imageUrl} />
        )}
      </div>
    </DivContainer>
    </React.Fragment>
  );
}

const DivContainer = styled.div`
  width: 100%;
  
  .App--instructions {
    margin-bottom: 20px;
  }
  
  .App--items-container {
    display: flex;
    flex-wrap: wrap;
    
    .App--item {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`

export default App;
