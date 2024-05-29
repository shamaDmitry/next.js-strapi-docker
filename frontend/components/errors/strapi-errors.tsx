interface StrapiErrorsProps {
  message: string | null;
  name: string;
  status: string | null;
}

export function StrapiErrors({ error }: { readonly error: StrapiErrorsProps }) {
  if (!error?.message) return null;

  return (
    <div className="text-red-500 text-xs py-2 font-semibold">
      {error.message}
    </div>
  );
}
