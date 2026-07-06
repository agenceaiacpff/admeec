import type { ReactNode } from "react";

export function SectionTitle({ title, text, action }: { title: string; text?: string; action?: ReactNode }) {
  return (
    <div className="section-head">
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action}
    </div>
  );
}
