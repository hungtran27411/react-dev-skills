export default function Bath(props) {
  return (
    <div className="bath" id={`bath-${props.size}`}>
      {props.size} Bath
    </div>
  );
}
