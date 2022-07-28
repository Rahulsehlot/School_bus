import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import "../../styles/Game1.css";
import lottie from "lottie-web";

import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Game2Trace1Map from "../Traces/Game2Trace1";
import Game2Trace4Map from "../Traces/Game2Trace4";
import Game2Trace3Map from "../Traces/Game2Trace3";
import Game2Trace2Map from "../Traces/Game2Trace2";
import Star from "../progress_bar/progress_bar";
import { counter } from "../progress_bar/progress_bar_map";

const get_ani_map = (val) => {
  switch (val) {
    case "Game1Trace1Map":
      return Game2Trace1Map;
      break;
    case "Game1Trace2Map":
      return Game2Trace2Map;
      break;
    case "Game1Trace3Map":
      return Game2Trace3Map;
      break;
    case "Game1Trace4Map":
      return Game2Trace4Map;
      break;
  }
};

export default function Game2({
  preLoad,
  scenename,
  assetID,
  soundID,
  setCount,
  count,
}) {
  const { Bg, setBg } = useContext(BGContext);
  const Next = useLoadAsset(preLoad);

  const stop_all_sounds = () => {
    Assets?.Game2Trace1?.sounds?.map((v) => v?.stop());
  };

  const { SceneId, setSceneId, Assets, setAssets, LandScape } = useContext(SceneContext);
  const { intro } = Assets;
  if (document.getElementById('progressBar')) {
    document.getElementById('progressBar').style.display = "flex"
  }

  const [fadeR, setFadeR] = useState(0);
  const [fadeW, setFadeW] = useState(0);
  const [playing, setplaying] = useState(false);
  const [number, setNumber] = useState(null);
  const [clicked, setClicked] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const element = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setNumber(element);
  }, []);

  useEffect(() => {
    setBg(Assets?.Scene5screen1?.Bg);

    if (isLoading === false) {
      if (Assets?.Game2Trace1) {
        Assets?.[assetID]?.sounds[0]?.play();
        Assets?.[assetID]?.sounds[0]?.on("end", () => { });
      }
    }
  }, [isLoading]);

  const playCorrectSound = () => {
    counter(count, setCount);
    if (Assets?.Game2Trace1) {
      setplaying(true);
      Assets?.[assetID]?.sounds[0]?.stop();
      Assets?.Game2Trace1?.sounds[1]?.play();
      Assets?.Game2Trace1?.sounds[1]?.on("end", () => {
        // setSceneId("/Game1_Helper");
        setplaying(false);
      });
    }
  };

  const playWrongSound = () => {
    if (Assets?.Game2Trace1) {
      setplaying(true);
      Assets?.Game2Trace1?.sounds[2]?.play();
      Assets?.Game2Trace1?.sounds[2]?.on("end", () => {
        setplaying(false);
      });
    }
  };

  const option1 = () => {
    if (playing === false) {
      stop_all_sounds();
      playCorrectSound();
      setFadeR(1);
      setClicked(1);

      const timeout = setTimeout(() => {
        setSceneId("/" + scenename);
      }, 1500);
    }
  };

  const option2 = () => {
    if (playing === false) {
      Assets?.[assetID]?.sounds[0]?.stop();
      setFadeW(1);
      playWrongSound();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeW(0);
    }, 1500);
  }, [fadeW]);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (clicked === 1) {
      Assets?.[assetID]?.sounds[0]?.stop();
    }

    if (seconds > 15) {
      setSeconds(0);
      Assets?.[assetID]?.sounds[0]?.play();
    }
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  const transRef = useRef(null);

  useEffect(() => {
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
  if (document.getElementById('progressBarID') && !isLoading && !LandScape) {
    document.getElementById('progressBarID').style.display = "flex"
  }
  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          <div
            className="transition_bg"
            style={{ display: isLoading ? "block" : "none" }}
          >
            <div
              className="transition"
              style={{ display: isLoading ? "block" : "none" }}
              ref={transRef}
            ></div>
          </div>

          {/* <div className="mouse-move" onMouseMove={handleMouseMove}></div> */}
          <Image
            src={Assets?.Game2Trace1?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="ClassroomText"
          />

          <div
            className="option1_div"
            onClick={option1}
            style={{
              left: number === 1 ? "26.5%" : "52.5%",
              cursor: playing === false ? "pointer" : "",
            }}
          ></div>

          <Image
            src={Assets?.[assetID]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Option1"
            // onClick={option1}
            style={{
              left: number === 1 ? "25.6%" : "51.5%",
            }}
          />

          <div
            className="option2_div"
            onClick={option2}
            style={{
              left: number === 1 ? "52.5%" : "26.5%",
              cursor: playing === false ? "pointer" : "",
            }}
          ></div>
          <Image
            src={Assets?.[assetID]?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Option2"
            // onClick={option2}
            style={{
              left: number === 1 ? "51.5%" : "25.6%",
            }}
          />

          <Image
            src={Assets?.Game2Trace1?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="RightHighlight"
            style={{
              display: fadeR === 1 ? "block" : "none",
              left: number === 1 ? "25.8%" : "51.7%",
            }}
          />
          <Image
            src={Assets?.Game2Trace1?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="WrongHighlight"
            style={{
              display: fadeW === 1 ? "block" : "none",
              left: number === 1 ? "51.7%" : "25.8%",
            }}
          />

        </>
      }
    />
  );
}
