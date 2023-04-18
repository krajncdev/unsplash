interface DividerProps {
  size: number;
  axis: string;
}

const Divider = (props: DividerProps) => {
  return <div className={`${props.size}`}></div>;
};

export default Divider;
