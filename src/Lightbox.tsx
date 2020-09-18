import React from "react"
import styled from "styled-components"

interface Props {
  url: string
  onBackdropClick: (arg0: string) => any;
}

export default class LightBox extends React.Component<Props> {
  render() {
    const {
      url,
      onBackdropClick
    } = this.props

    return (
    <DivContainer>
      <div className="Lightbox--backdrop" onClick={()=>{ onBackdropClick('') }}>
      </div>
      <div
        className="Lightbox--container">
        <div
        className="Lightbox--image" >
        <img src={url} alt={url}/>
        </div>
        </div>
      </DivContainer>
    )
  }
}

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display:block;
  position:absolute;
  z-index:1;

  .Lightbox--backdrop {
    background: gray;
    width: 100%;
    height: 100%;
    opacity:0.6;
    display:block;
    position:absolute;
  }

  .Lightbox--container {
    display:flex;
    width:100%;
    height:100%;
    justify-items:center;
    justify-content:center;
    align-items:center;
  }
  .Lightbox--image {
    width:fit-content;
    background-repeat:no-repeat;
    background-position: center;
    background-size: contain;
    background-color: white;
    z-index:2;
  }
  .Lightbox--image img{
    opacity:1 !important;
  }
`
