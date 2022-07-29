import { useState, useEffect, useContext } from "react";
import GameContainer from "./utils/GameContainer";
import Router from "./utils/Router";
import "./styles/app.css";
import Game2 from "./Scenes/Game2Screen/Game2";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";
import useLoadAsset from "./utils/useLoadAsset";
import WellDoneMap from "./Scenes/WellDone/WellDoneAssetMap";
import Scene5Map from "./Scenes/Scene5-Body/Scene5AssetMap";
import Scene5 from "./Scenes/Scene5-Body/Scene5";
import Scene6 from "./Scenes/Scene6/Scene6";
import Scene5AssetMapScreen3 from "./Scenes/Traces/Scene5Trace3";
import Scene5AssetMapScreen2 from "./Scenes/Traces/Scene5Trace2";
import Scene5AssetMapScreen4 from "./Scenes/Traces/Scene5Trace4";
import Scene5AssetMapScreen5 from "./Scenes/Traces/Scene5Trace5";
import Scene5AssetMapScreen6 from "./Scenes/Traces/Scene5Trace6";
import Scene7Map from "./Scenes/Scene7/Scene7Map";
import Scene7 from "./Scenes/Scene7/Scene7";
import Game2Trace2Map from "./Scenes/Traces/Game2Trace2";
import Game2Trace3Map from "./Scenes/Traces/Game2Trace3";
import Game2Trace4Map from "./Scenes/Traces/Game2Trace4";
import { SceneContext } from "./contexts/SceneContext";
import WellDone from "./Scenes/WellDone/WellDone1";
import { LoadJson } from "./utils/loadJson";
import Star from "./Scenes/progress_bar/progress_bar";
import Image from "./utils/elements/Image";
import { SceneMap } from "./Scenes/SceneMap";

function App() {
  if (document.getElementById('progressBarID')) {
    document.getElementById('progressBarID').style.display = "none"
  }
  const Asset = useLoadAsset(Scene5Map);

  const { SceneId, setHideAllButtons, setheight, Ipad, setIpad, LandScape, setLandScape, transition,
    setTransition, isLoading, Assets, setSceneId, hidePlayButton, setHidePlayButton, hideAllButtons } =
    useContext(SceneContext);
  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [playing, setplaying] = useState(false);
  const [hidePrevButton, setHidePrevButton] = useState(true)
  const [hideNextButton, setNextPrevButton] = useState(true)
  const [count, setCount] = useState(0);
  const resizer = () => {
    if (window.innerWidth <= 1264) {
      setheight("87%");
    } else {
      setheight("73%");
    }
    setLandScape(window.innerWidth / window.innerHeight < 1.0);
    setIpad(
      window.innerWidth / window.innerHeight >= 1.3 &&
      window.innerWidth / window.innerHeight <= 1.44
    );
  };
  const loadLottie = async () => {
    // const data = await LoadJson(`ee02_nt_1to10_srn/lottie/transition_01.json`);
    const data = await LoadJson(`ee03_ow_tnb_pl2/lottie/1transition.json`);
    setTransition(data);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    loadLottie()
    loadAudio();

    window.addEventListener("resize", resizer);
    setIpad(
      window.innerWidth / window.innerHeight >= 1.3 &&
      window.innerWidth / window.innerHeight <= 1.44
    );

    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, []);

  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("ee03_ow_tnb_pl2/sounds/bg_sound.mp3"));
    seticon1(await LoadImage("ee03_ow_tnb_pl2/images/sound.svg"));
    seticon2(await LoadImage("ee03_ow_tnb_pl2/images/nosound.svg"));
  };
  useEffect(() => {
    setHidePrevButton(currentItem?.hidePrev)
    setNextPrevButton(currentItem?.hideNext)
  }, [SceneId])
  useEffect(() => {
    if (BG_sound !== null && SceneId !== "/" && playing === false) {
      setplaying(true);
      BG_sound?.play();
    }
  }, [BG_sound, SceneId]);

  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true);
      } else {
        BG_sound?.mute(false);
      }
    }
  }, [mute]);

  const toggleMute = () => {
    setmute(!mute);
  };

  // if (Load) return <div className="intro_Loading_screen">Loading....</div>;

  if (Load && !Asset.Loading)
    return (
      <div className="loadingIndicator">
        <div className="vendorWrapper"></div>
        <div className="playerPreloader">
          <div className="playerPreloadCircle"></div>
        </div>
      </div>
    );
  const currentItem = SceneMap.find((item) => {
    return (item.currentSceneName === SceneId)
  })
  const stop_all_sounds = () => {
    Assets?.[currentItem.assetID]?.sounds?.map((v) => v?.stop());
  };

  const handleForward = () => {
    stop_all_sounds()
    setSceneId(currentItem.nextSceneName)
  }
  const handleBackward = () => {
    stop_all_sounds()
    setSceneId(currentItem.prevSceneName)
  }
  return (
    <>
      <h1 style={{ display: LandScape ? "" : "none" }} id="landscapeMode">
        Rotate your device
      </h1>
      {!mute && SceneId !== "/" && !isLoading && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
          style={{ visibility: hideAllButtons || LandScape ? 'hidden' : 'visible' }}
        />
      )}
      {mute && !isLoading && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
          style={{ visibility: hideAllButtons || LandScape ? 'hidden' : 'visible' }}
        />
      )}{" "}
      <Image
        src={Assets?.scene5?.sprites[2]}
        alt="txt"
        id="fadeup"
        className="backwardButton"
        onClick={handleBackward}
        style={{ display: hidePrevButton ? "none" : "block", visibility: hideAllButtons || LandScape ? 'hidden' : 'visible' }}
      />
      <Image
        src={Assets?.scene5?.sprites[3]}
        alt="txt"
        id="fadeup"
        className="forwardButton"
        onClick={handleForward}
        style={{ display: hideNextButton ? "none" : "block", visibility: hideAllButtons || LandScape ? 'hidden' : 'visible' }}
      />
      <Star num={count} />
      <Image
        src={Assets?.scene5?.sprites[4]}
        alt="txt"
        id="fadeup"
        className="forwardButton"
        onClick={() => {
          Assets?.scene5?.sounds[0]?.stop();
          setHidePlayButton(false)
          setSceneId("/Scene5_1");
        }}
        style={{
          display: hidePlayButton ? "block" : "none",
          visibility: hideAllButtons ? 'hidden' : 'visible'
        }}
      />
      <div style={{ opacity: LandScape ? 0 : 1 }}>
        <GameContainer>
          <div className="imgTest"></div>
          <div className="imgTest1"></div>

          <Router sceneId="/">
            <Scene5 soundID={10} />
          </Router>
          <Router sceneId="/Scene5_1">
            <Scene6
              scenename={"Scene5_2"}
              prevScene={"Scene5_1"}
              assetID={"Scene5screen1"}
              picture_Id={5}
              preLoad={Scene5AssetMapScreen2}
              hide={1}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene5_2">
            <Scene6
              scenename={"Scene5_3"}
              prevScene={"Scene5_1"}
              assetID={"Scene5screen2"}
              picture_Id={5}
              preLoad={Scene5AssetMapScreen3}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene5_3">
            <Scene6
              scenename={"Scene5_4"}
              prevScene={"Scene5_2"}
              assetID={"Scene5screen3"}
              picture_Id={5}
              preLoad={Scene5AssetMapScreen4}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene5_4">
            <Scene6
              scenename={"Scene5_5"}
              prevScene={"Scene5_3"}
              assetID={"Scene5screen4"}
              picture_Id={5}
              preLoad={Scene5AssetMapScreen5}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene5_5">
            <Scene6
              scenename={"Scene5_6"}
              prevScene={"Scene5_4"}
              assetID={"Scene5screen5"}
              picture_Id={5}
              preLoad={Scene5AssetMapScreen6}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene5_6">
            <Scene6
              scenename={"Scene7"}
              prevScene={"Scene5_5"}
              assetID={"Scene5screen6"}
              picture_Id={5}
              preLoad={Scene7Map}
              hide={0}
              hideNxt={1}
            />
          </Router>
          <Router sceneId="/Scene7">
            <Scene7 assetID={"scene7"} />
          </Router>
          <Router sceneId="/Game2Screen1">
            <Game2
              scenename={"Game2Screen2"}
              preLoad={Game2Trace2Map}
              assetID={"Game2Trace1"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game2Screen2">
            <Game2
              preLoad={Game2Trace3Map}
              scenename={"Game2Screen3"}
              assetID={"Game2Trace2"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game2Screen3">
            <Game2
              assetID={"Game2Trace3"}
              preLoad={Game2Trace4Map}
              scenename={"Game2Screen4"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game2Screen4">
            <Game2
              assetID={"Game2Trace4"}
              preLoad={WellDoneMap}
              scenename={"WellDone"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/WellDone">
            <WellDone assetID={"WellDone"} soundID={10} setCount={setCount} />
          </Router>
        </GameContainer>
      </div>
    </>
  );
}

export default App;
