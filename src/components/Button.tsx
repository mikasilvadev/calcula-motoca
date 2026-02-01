// src/components/Button.tsx
interface Props {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: Props) {
  const baseStyles = "w-full py-4 px-6 rounded-2xl font-bold transition-all active:scale-95 shadow-lg";
  
  const variants = {
    primary: "bg-brand-green text-black hover:bg-green-500",
    secondary: "bg-brand-accent text-black hover:bg-yellow-500"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  );
}