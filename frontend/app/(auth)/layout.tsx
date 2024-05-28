import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link
        href="/"
        className="block border p-4 w-60 mx-auto bg-purple-50 text-center mb-4"
      >
        logo
      </Link>

      {children}
    </div>
  );
}
