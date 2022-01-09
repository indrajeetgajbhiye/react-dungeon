import './Card.scss';
/**
 * @param {any} props
 * @return {JSX.Element}
 */
export default function Card(props: any) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}
