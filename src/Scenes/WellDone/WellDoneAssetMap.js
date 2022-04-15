const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const WellDoneMap = {
  id: "Welldone",

  Bg: `${imgUrl}Thank_You_BG.svg`,

  sprites: [`${imgUrl}Skip_Btn.svg`, `${imgUrl}replay_btn.svg`],

  sounds: [`${soundUrl}wellDone.mp3`, `${soundUrl}Replay_sound.mp3`],

  lottie: [
    `${lottieUrl}Boy_Lottie.json`,
    `${lottieUrl}SB_19_Scene_53_particles.json`,
    `${lottieUrl}SB_19_Scene_53_text.json`,
  ],
};

export default WellDoneMap;
