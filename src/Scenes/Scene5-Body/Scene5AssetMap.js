const imgUrl = "ee03_ow_tnb_pl2/images/";
const soundUrl = "ee03_ow_tnb_pl2/sounds/";
const lottieUrl = "ee03_ow_tnb_pl2/lottie/";

const Scene5Map = {
  id: "scene5",

  Bg: `${imgUrl}sb_19_school_bus_intro_bg.svg`,

  sprites: [
    `${imgUrl}sb_19_school_bus_intro_bg_text.svg`,
    `${imgUrl}buttons_play.svg`,
    `${imgUrl}backward.svg`,
    `${imgUrl}forward.svg`,
    `${imgUrl}skip_btn.svg`,
    `${imgUrl}progress_bar/progress_bar.svg`,
    `${imgUrl}progress_bar/progress_bar_off.svg`,
    `${imgUrl}progress_bar/progress_bar_on.svg`,
    `${imgUrl}sb_19_school_bus_bg_01_girl_charactor_2.svg`,
  ],

  sounds: [`${soundUrl}scene5_audio.mp3`],

  lottie: [`${lottieUrl}boy_lottie.json`, `${lottieUrl}1transition.json`],
};

export default Scene5Map;
