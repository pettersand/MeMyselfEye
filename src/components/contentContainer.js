import { useAppState } from "../App";

const { state } = useAppState();

if (state.activeInfo === "project" && state.detailLevel === "minimal") {
  return <ProjectMinimal />;
} else if (state.activeInfo === "project" && state.detailLevel === "detailed") {
  return <ProjectDetailed />;
}

function ContentContainer() {
  const { state } = useAppState();
}
