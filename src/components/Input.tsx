// src/components/Input.tsx
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full mb-4">
      <label className="text-zinc-400 text-xs font-bold uppercase tracking-widest ml-1">
        {label}
      </label>
      <input 
        {...props}
        className="bg-zinc-800 border border-zinc-700 text-white text-lg p-4 rounded-2xl 
                   focus:outline-none focus:ring-2 focus:ring-brand-green 
                   placeholder:text-zinc-600 transition-all outline-none"
      />
    </div>
  );
}