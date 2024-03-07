import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
  return (
    <div id="kitchen">
      <Oven />
      <Sink />
      <span>Kitchen</span>
    </div>
  );
}
