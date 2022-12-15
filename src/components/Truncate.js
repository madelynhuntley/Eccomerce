export default function Truncate(props) {
  const truncated = props.children.slice(0, 33) + `...`;

  return truncated;
}
