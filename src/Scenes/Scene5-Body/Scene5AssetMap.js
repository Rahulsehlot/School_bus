const imgUrl = "ee03_ow_tnb_pl2/images/";
const soundUrl = "ee03_ow_tnb_pl2/sounds/";
const lottieUrl = "ee03_ow_tnb_pl2/lottie/";

const Scene5Map = {
  id: "scene5",

  Bg: `${imgUrl}school_bus_bg/sb_19_school_bus_bg_01_sky.svg`,

  sprites: [
    `${imgUrl}sb_19_school_bus_intro_bg_text.svg`,
    `${imgUrl}buttons_play.svg`,
    `${imgUrl}backward.svg`,
    `${imgUrl}forward.svg`,
    `${imgUrl}skip_btn.svg`,
    `${imgUrl}progress_bar/progress_bar.svg`,
    `${imgUrl}progress_bar/progress_bar_off.svg`,
    `${imgUrl}progress_bar/progress_bar_on.svg`,
    `${imgUrl}school_bus_bg/bus_bg.svg`,
    `${imgUrl}school_bus_bg/school.svg`,
    `${imgUrl}school_bus_bg/school_bus.svg`,
    `${imgUrl}school_bus_bg/char1.svg`,
    `${imgUrl}school_bus_bg/char2.svg`,
    `${imgUrl}school_bus_bg/char3.svg`,
    `${imgUrl}school_bus_bg/char4.svg`,
  ],

  sounds: [`${soundUrl}scene5_audio.mp3`],

  lottie: [`${lottieUrl}boy_lottie.json`, `${lottieUrl}1transition.json`],
};

export default Scene5Map;
