import React, { useContext } from "react";
import { useActor } from "@xstate/react";
import { IslandTravel } from "features/game/expansion/components/IslandTravel";
import { Context } from "features/game/GameProvider";

export const IslandTravelWrapper = () => {
  const { gameService } = useContext(Context);
  const [gameState] = useActor(gameService);
  const { state } = gameState.context;
  const { bumpkin } = state;

  return <IslandTravel bumpkin={bumpkin} x={-2} y={-7} />;
};
