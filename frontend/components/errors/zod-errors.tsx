export function ZodErrors({ error }: { error: string[] | undefined }) {
  if (!error) return null;

  return error.map((err: string, index: number) => (
    <div key={index} className="text-red-500 text-xs py-2 font-semibold">
      {err}
    </div>
  ));
}
