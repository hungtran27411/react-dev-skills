export default function Bedroom(props) {
  return (
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      Bedroom {props.bedNum}
    </div>
  );
}
