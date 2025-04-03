import React, {  useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
// import { ReactComponent as LeftArrow}  from "../../../assets/LeftArrow.svg";
import LeftArrow from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  // useEffect(() => {
  //   // swiper.on("slideChange", function () {
  //   //   setIsBeginning(swiper.isBeginning);
  //   // });
  // }, []);

  swiper.on("slideChange", function () {
    setIsBeginning(swiper.isBeginning);
  });

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <img src={LeftArrow} alt="Left Arrow" onClick={() => swiper.slidePrev()} />}
    </div>
  );
}