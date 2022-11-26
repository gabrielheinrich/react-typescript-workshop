export interface LikeCounterProps {
  count: number;
  setCount: (newValue: number) => void;
}

export const LikeCounter = ({ count, setCount }: LikeCounterProps) => {
  return <button onClick={() => setCount(count + 1)}>&#128079; {count}</button>;
};
