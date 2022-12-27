import React from "react";

import layeringImage1 from "../../assets/images/layeringImage/Asset1.png";
import layeringImage2 from "../../assets/images/layeringImage/Asset2.png";
import layeringImage3 from "../../assets/images/layeringImage/Asset3.png";
import layeringImage4 from "../../assets/images/layeringImage/Asset4.png";
import layeringImage5 from "../../assets/images/layeringImage/Asset5.png";
import layeringImage6 from "../../assets/images/layeringImage/Asset6.png";
import layeringImage7 from "../../assets/images/layeringImage/Asset7.png";
import layeringImage8 from "../../assets/images/layeringImage/Asset8.png";
import layeringImage9 from "../../assets/images/layeringImage/Asset9.png";
import layeringImage10 from "../../assets/images/layeringImage/Asset10.png";
import layeringImage11 from "../../assets/images/layeringImage/Asset11.png";
import SettingImageWithAbsoultValue from "../../components/SettingImageWithAbsoultValue";

const LayeringImages = () => {
  return (
    <>
      <SettingImageWithAbsoultValue imgUrl={layeringImage1} top={0} left={0} />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage2}
        top={-14}
        right={0}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage3}
        top={325}
        left={-29}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage4}
        top={645}
        right={0}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage5}
        top={1468}
        left={-52}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage6}
        top={2000}
        right={0}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage7}
        top={2147}
        left={-52}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage8}
        top={3101}
        right={0}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage9}
        top={3624}
        left={0}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage10}
        top={4047}
        right={0}
      />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage11}
        top={5176}
        left={-26}
      />
    </>
  );
};

export default LayeringImages;
