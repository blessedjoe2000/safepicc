import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Rocket, Triangle } from "lucide-react";

const AlertBanner = ({
  isCompleted,
  missingFieldCount,
  requiredFieldCount,
}) => {
  return (
    <Alert className="my-4" variant={isCompleted ? "complete" : "destructive"}>
      {isCompleted ? <Rocket /> : <Triangle />}
      <AlertTitle className="text-sm font-medium ">
        {missingFieldCount} missing field(s) / {requiredFieldCount} required
        field(s)
      </AlertTitle>
      <AlertDescription className="text-xs font-medium">
        {isCompleted
          ? "Great! Ready to publish"
          : "Complete all required fields to publish"}
      </AlertDescription>
    </Alert>
  );
};

export default AlertBanner;
