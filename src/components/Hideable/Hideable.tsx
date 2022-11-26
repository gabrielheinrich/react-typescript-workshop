import { ReactNode, useState } from "react";

export interface HideableProps {
  hideInitially?: boolean;
  children: ReactNode;
}
export const Hideable = ({ hideInitially, children }: HideableProps) => {
  const [hidden, setHidden] = useState(hideInitially ?? false);

  return (
    <>
      {!hidden && <div className="fade-in">{children}</div>}
      <button onClick={() => setHidden(!hidden)}>{hidden ? "+" : "-"}</button>
    </>
  );
};
