import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface UserInfoProps {
  label: string;
}

export const UserInfo = ({ label }: UserInfoProps) => {
  
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
