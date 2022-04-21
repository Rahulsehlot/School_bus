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

function App() {
  const { Bg, Loading } = useLoadAsset(Scene5Map);

  const { SceneId } = useContext(SceneContext);

  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [playing, setplaying] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    loadAudio();
  }, []);

  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("ee03_ow_tnb_pl3/sounds/bg_sound.mp3"));
    seticon1(await LoadImage("ee03_ow_tnb_pl3/images/sound.svg"));
    seticon2(await LoadImage("ee03_ow_tnb_pl3/images/nosound.svg"));
  };

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

  if (Load) return <div className="intro_Loading_screen">Loading....</div>;

  return (
    <GameContainer>
      <div className="imgTest"></div>
      <div className="imgTest1"></div>
      {!mute && SceneId !== "/" && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
        />
      )}
      {mute && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
        />
      )}{" "}
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
  );
}

export default App;
