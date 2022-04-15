const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Scene5Map = {
  id: "scene5",

  Bg: `${imgUrl}SB_19_School_Bus_Intro_Bg.svg`,

  sprites: [
    `${imgUrl}SB_19_School_Bus_Intro_BG_Text.svg`,
    `${imgUrl}Buttons-play.svg`,
    `${imgUrl}backward.svg`,
    `${imgUrl}forward.svg`,
    `${imgUrl}Skip_Btn.svg`,
    `${imgUrl}progress_bar/progress_bar.svg`,
    `${imgUrl}progress_bar/progress_bar_off.svg`,
    `${imgUrl}progress_bar/progress_bar_on.svg`,
    `${imgUrl}SB_19_School_Bus_Bg_01_Girl_Charactor_2.svg`,
  ],

  sounds: [`${soundUrl}scene5_Audio.mp3`],

  lottie: [`${lottieUrl}Boy_Lottie.json`, `${lottieUrl}1transition.json`],
};

export default Scene5Map;
