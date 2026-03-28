export default function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-pierre flex items-center justify-center ${className}`}
    >
      <span className="font-sans text-sm text-brun/40 text-center px-4">
        {label}
      </span>
    </div>
  );
}
