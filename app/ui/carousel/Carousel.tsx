"use client";

import Image from "next/image";

import wallpaper1 from "@/assets/blue-sky-with-cloud-closeup.jpg";
import wallpaper2 from "@/assets/breathtaking-shot-aoraki-mount-cook-sunset-canterbury-new-zealand.jpg";
import wallpaper3 from "@/assets/misty-julian-alps-peak-round-badge.jpg";
import wallpaper4 from "@/assets/pexels-mia-stein-3894157.jpg";
import phone1 from "@/public/Phone1.png";

import "./style.css";

export default function Carousel() {
  return (
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <Image src={wallpaper1} width={250} height={500} alt="wallpaper" className='rounded-[2rem] rounded-br-[5rem] rounded-bl-[5rem] p-2'/>
          </div>

          <div className="slide">
            <Image src={wallpaper2} width={250} height={500} alt="wallpaper" className='rounded-[2rem] rounded-br-[5rem] rounded-bl-[5rem] p-2'/>
          </div>

          <div className="slide">
            <Image src={wallpaper3} width={250} height={500} alt="wallpaper" className='rounded-[2rem] rounded-br-[5rem] rounded-bl-[5rem] p-2'/>
          </div>

          <div className="slide">
            <Image src={wallpaper4} width={250} height={450} alt="wallpaper" className='rounded-[2rem] rounded-br-[5rem] rounded-bl-[5rem] p-2'/>
          </div>

          {/* <div className="navigation-auto">
            <div className="btn-1"></div>
            <div className="btn-2"></div>
            <div className="btn-3"></div>
            <div className="btn-4"></div>
          </div> */}
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
  );
}
