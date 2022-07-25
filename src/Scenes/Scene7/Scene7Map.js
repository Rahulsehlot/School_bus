const imgUrl = "ee03_ow_tnb_pl2/images/";
const soundUrl = "ee03_ow_tnb_pl2/sounds/";
const lottieUrl = "ee03_ow_tnb_pl2/lottie/";

const Scene7Map = {
  id: "scene7",

  Bg: `${imgUrl}sb_19_school_bus_bg_02.svg`,

  sprites: [
    `${imgUrl}sb_19_school_bus_bg_01_bus_set_with_charactors.svg`,
    `${imgUrl}school_bus_fg.svg`,
  ],

  sounds: [`${soundUrl}ep_19_audio_35.mp3`],

  lottie: [
    `${lottieUrl}character_2.json`,
    `${lottieUrl}character_with_lip_sync.json`,
  ],
};

export default Scene7Map;
