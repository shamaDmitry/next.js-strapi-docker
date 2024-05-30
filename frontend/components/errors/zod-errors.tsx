export function ZodErrors({ error }: { error: string[] | undefined }) {
  if (!error) return null;

  return (
    <div className="py-2">
      {error.map((err: string, index: number) => (
        <div key={index} className="text-red-500 text-xs font-semibold">
          {err}
        </div>
      ))}
    </div>
  );
}
