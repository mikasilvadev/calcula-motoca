// src/components/Card.tsx
interface Props {
  children: React.ReactNode;
  title?: string;
}

export function Card({ children, title }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-xl w-full">
      {title && (
        <h3 className="text-zinc-400 text-sm font-medium mb-4 uppercase tracking-wider">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}