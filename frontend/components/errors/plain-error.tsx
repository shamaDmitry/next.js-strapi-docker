interface PlainErrorProps {
  error: string | undefined;
}

export function PlainError({ error }: PlainErrorProps) {
  if (!error) return null;

  return <div className="text-red-500 text-xs py-2 font-semibold">{error}</div>;
}
