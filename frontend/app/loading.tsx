export default function Loading() {
  return (
    <div className="size-full fixed top-0 left-0 z-[1000] flex items-center justify-center before:bg-black/80 before:fixed before:size-full before:top-0 before:left-0 before:z-[1000] after:fixed after:text-white after:z-[1010] after:font-bold after:text-center after:text-2xl after:border-[16px] after:border-gray-100 after:rounded-full after:border-t-[16px] after:border-t-blue-500 after:w-32 after:h-32 after:animate-spin">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
