import { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Image from "../../utils/elements/Image";
import useLoadAsset from "../../utils/useLoadAsset";

export default function Star({ num }) {
  const [isLoading, setisLoading] = useState(true);
  const { Assets } = useContext(SceneContext);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <Image
        src={Assets?.scene5?.sprites[5]}
        alt="txt"
        className="progress_bar"
      />

      <div className="wrap_1" style={{ position: "fixed", right: "0%" }}>
        <Image
          src={
            num >= 1 ? Assets?.scene5?.sprites[7] : Assets?.scene5?.sprites[6]
          }
          alt="txt"
          id="stars"
          className={num === 1 ? "star" : ""}
        />
        <Image
          src={
            num >= 2 ? Assets?.scene5?.sprites[7] : Assets?.scene5?.sprites[6]
          }
          alt="txt"
          id="stars"
          className={num === 2 ? "star" : ""}
        />
        <Image
          src={
            num >= 3 ? Assets?.scene5?.sprites[7] : Assets?.scene5?.sprites[6]
          }
          alt="txt"
          id="stars"
          className={num === 3 ? "star" : ""}
        />
        <Image
          src={
            num >= 4 ? Assets?.scene5?.sprites[7] : Assets?.scene5?.sprites[6]
          }
          alt="txt"
          id="stars"
          className={num === 4 ? "star" : ""}
        />
      </div>
    </>
  );
}
