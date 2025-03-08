import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function ErrorCard() {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to login?"
      headerLabel="Oops! something went wrong!"
    >
      <div className="flex w-full justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" fontSize="1000px" />
      </div>
    </CardWrapper>
  );
}
