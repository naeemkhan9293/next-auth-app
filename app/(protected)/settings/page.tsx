"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { logout } from "@/actions/logout";
// import { auth, signOut } from "@/auth";

// const SettingsPage = async () => {
//   const user = await auth();
//   console.log(user);

//   return (
//     <div>
//       <h1>Settings</h1>
//       <div>{JSON.stringify(user)}</div>
//       <form
//         action={async () => {
//           "use server";
//           await signOut();
//         }}
//       >
//         <button type="submit">SignOut</button>
//       </form>
//     </div>
//   );
// };

// export default SettingsPage
import { signOut, useSession } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };
  return (
    <div
      className="bg-white p-10 rounded-xl w-2/4
    h-2/4 flex items-center justify-center flex-col"
    >
      <div>
        <Button type="submit" onClick={onClick}>
          SignOut
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
