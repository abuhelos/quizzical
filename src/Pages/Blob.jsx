import React from "react"
import styled, { css, keyframes } from "styled-components"

//Image Imports
import blueBlob from "../Images/blobs (1).png"
import yellowBlob from "../Images/blobs.png"

const BlueBlob = styled.div`
background-image: url(${blueBlob});
width: 297px;
height: 235px;
background-repeat: no-repeat;
z-index: -1;

position: absolute;
left: 0px;
bottom: -120px;
`
const YellowBlob = styled.div`
background-image: url(${yellowBlob});
width: 297px;
height: 235px;
background-repeat: no-repeat;
z-index: -1;

position: absolute;
right: -110px;
top: 0px;    
`
export default function Blob() {
    return(
        <div>
            <BlueBlob/>
            <YellowBlob/>
        </div>
    )
}