import { Headline } from "@/components/custom/content/headline";

const PaymentStatus = ({
  status,
  errorMessage,
}: {
  status: string;
  errorMessage: string;
}) => {
  switch (status) {
    case "processing":
    case "requires_payment_method":
    case "requires_confirmation":
      return <Headline tag="h2">Processing...</Headline>;

    case "requires_action":
      return <h2>Authenticating...</h2>;

    case "succeeded":
      return <h2>Payment Succeeded 🥳</h2>;

    case "error":
      return (
        <>
          <Headline tag="h2">Error 😭</Headline>
          <p className="text-red-500">{errorMessage}</p>
        </>
      );

    default:
      return null;
  }
};

export default PaymentStatus;
