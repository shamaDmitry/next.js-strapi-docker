import { FC } from "react";
interface PageProps {
  searchParams: { payment_intent: string };
}

const Page: FC<PageProps> = ({ searchParams }) => {
  return (
    <div>
      result: <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </div>
  );
};

export default Page;
