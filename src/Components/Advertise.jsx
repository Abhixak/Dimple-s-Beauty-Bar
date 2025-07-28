import React from 'react'
// import AdVideo1 from "../assets/AdVideo1.mp4"
import AdPicture1 from "../assets/Adv1.png"

const Advertise = () => {
  return (
    <div>
      {/* <video
        src={AdVideo1}
        autoPlay
        loop
        muted
        playsInline
        alt="Ad Video"
        className="w-full !px-6 h-auto"
      /> */}
        <img src={AdPicture1} alt="Advertisement Picture" />
    </div>
  )
}

export default Advertise
