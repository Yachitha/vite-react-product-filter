interface CountButtopnProps {
  count: number;
  onClick: () => void;
}

export default function CountButton({ count, onClick }: CountButtopnProps) {
  return <button onClick={() => onClick()}>Clicked {count} times</button>;
}
