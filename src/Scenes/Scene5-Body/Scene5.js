import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Game1.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene5AssetMapScreen1 from "../Traces/Scene5Trace1";

export default function Scene5({ scenename }) {
  const Next = useLoadAsset(Scene5AssetMapScreen1);

  // const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, Assets, setAssets, isLoading } = useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);
  const [playing, setplaying] = useState(false);
  const [autoPLayState, setautoPLayState] = useState(false);
  const [playBtnHide, SetplayBtnHide] = useState(0);
  // const [isLoading, setisLoading] = useState(true);

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.scene5?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setBg(Assets?.scene5?.Bg);
  }, []);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Scene5_1");
  };

  const transRef = useRef(null);

  // useEffect(() => {
  //   if (Assets && transRef.current) {
  //     lottie.loadAnimation({
  //       name: "boy",
  //       container: transRef.current,
  //       renderer: "svg",
  //       autoplay: true,
  //       loop: true,
  //       animationData: Assets?.scene5?.lottie[1],
  //       speed: 1,
  //     });
  //   }
  //   setTimeout(() => {
  //     setisLoading(false);
  //   }, 500);
  // }, [isLoading]);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          {/* <div
            className="transition_bg"
            style={{ display: isLoading ? "block" : "none" }}
          >
            <div
              className="transition"
              style={{ display: isLoading ? "block" : "none" }}
              ref={transRef}
            ></div>
          </div> */}

          <Image
            src={Assets?.scene5?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="scene5Txt"
          />
          <Image
            src={Assets?.scene5?.sprites[8]}
            alt="txt"
            id="fadeup"
            className="bus_fg"
          />

          <Image
            src={Assets?.scene5?.sprites[9]}
            alt="txt"
            id="fadeup"
            className="school"
          />

          <Image
            src={Assets?.scene5?.sprites[10]}
            alt="txt"
            id="fadeup"
            className="school_bus"
          />

          <Image
            src={Assets?.scene5?.sprites[11]}
            alt="txt"
            id="fadeup"
            className="char1"
          />

          <Image
            src={Assets?.scene5?.sprites[12]}
            alt="txt"
            id="fadeup"
            className="char2"
          />

          <Image
            src={Assets?.scene5?.sprites[13]}
            alt="txt"
            id="fadeup"
            className="char3"
          />

          <Image
            src={Assets?.scene5?.sprites[14]}
            alt="txt"
            id="fadeup"
            className="char4"
          />

          <Image
            className="play_btn"
            src={Assets?.scene5?.sprites[1]}
            alt="txt"
            id="fadeup"
            onClick={() => {
              SetplayBtnHide(1);
              lottie.play("placeholder");
              if (playing === false) {
                setautoPLayState(true);
                setplaying(true);

                if (Assets?.scene5) {
                  Assets?.scene5?.sounds[0]?.play();
                  Assets?.scene5?.sounds[0]?.on("end", () => {
                    setplaying(false);
                    setSceneId("/Scene5_1");
                  });
                }
              }
            }}
            style={{
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              cursor: playing === false ? "pointer" : "",
              display: playBtnHide === 0 ? "block" : "none",
            }}
          />

          <Image
            src={Assets?.scene5?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="skip"
            onClick={() => {
              Assets?.scene5?.sounds[0]?.stop();
              setSceneId("/Scene5_1");
            }}
            style={{
              display: playBtnHide === 1 ? "block" : "none",
            }}
          />
        </>
      }
    />
  );
}
