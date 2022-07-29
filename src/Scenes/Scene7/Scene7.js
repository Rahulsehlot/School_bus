import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/Scene3.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene7Map from "./Scene7Map";
import Game2Trace1Map from "../Traces/Game2Trace1";

export default function Scene7({
  scenename,
  assetID,
  preLoad,
  prevScene,
  hideNxt,
  hide,
}) {
  const { Loading } = useLoadAsset(Game2Trace1Map);
  const { SceneId, setHideAllButtons, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);
  const [isLoading, setisLoading] = useState(true);

  const Ref = useRef(null);
  const Ref_1 = useRef(null);

  const stop_all_sounds = () => {
    Assets?.scene7?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setBg(Assets?.scene7?.Bg);
    // if (isLoading === false) {
    setTimeout(() => {
      lottie.play("placeholder");
      if (Assets?.scene7) {
        Assets?.scene7?.sounds[0]?.play();
        Assets?.scene7?.sounds[0]?.on("end", () => {
          setSceneId("/Game2Screen1");
        });
      }
    }, 500);
    // }
  }, []);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData: Assets?.scene7?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref_1.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref_1.current,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData: Assets?.scene7?.lottie[1],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Game2Screen1");
  };

  const transRef = useRef(null);

  useEffect(() => {
    setHideAllButtons(isLoading)
    if (Assets && transRef.current) {
      lottie.loadAnimation({
        name: "boy",
        container: transRef.current,
        renderer: "svg",
        autoplay: true,
        loop: true,
        animationData: Assets?.scene5?.lottie[1],
        speed: 1,
      });
    }
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, [isLoading]);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <div ref={Ref} className="Scene7_lottie_container_1"></div>
          <div ref={Ref_1} className="Scene7_lottie_container_2"></div>

          {/* Title */}

          <Image
            src={Assets?.[assetID]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Scene7Chairs"
          />
          <Image
            src={Assets?.[assetID]?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="bus_fg_s7"
          />

          {/* <Image
            src={Assets?.scene5?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="forward"
            onClick={forward}
            style={{ cursor: "pointer" }}
          /> */}
        </>
      }
    />
  );
}
