import Link from "next/link";

export function Card({ title, text, href, meta, button = "Ouvrir", tags = [] }: { title: string; text?: string | null; href?: string; meta?: string | null; button?: string; tags?: string[] }) {
  const body = (
    <article className="card">
      {meta && <div className="meta">{meta}</div>}
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      {tags.length > 0 && <div className="pill-row" style={{ marginBottom: 16 }}>{tags.map((tag) => <span className="pill" key={tag}>{tag}</span>)}</div>}
      {href && <span className="btn secondary">{button}</span>}
    </article>
  );
  return href ? <Link href={href}>{body}</Link> : body;
}
