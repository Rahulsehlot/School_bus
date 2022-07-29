import React from "react";
import { SceneContext } from "../contexts/SceneContext";

export default function Router({ children, sceneId }) {
  const { SceneId, setHideAllButtons } = React.useContext(SceneContext);
  return SceneId === sceneId ? <div className="fadeup">{children}</div> : null;
}
