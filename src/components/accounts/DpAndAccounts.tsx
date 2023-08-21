import { RootState } from "@/store";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LogoutSwitch from "../LogoutSwitch";
import DashboardDp from "../DashboardDp";
import AccountActions from "../AccountActions";

export default function DpAndAccounts() {
  const { _id } = useSelector((state: RootState) => state.users.user);
  const [userId, setUserId] = useState<any>(null);

  useEffect(() => {
    setUserId(_id);
  }, [_id]);
  return (
    <>
      {userId === null ? (
        <>
          <Skeleton
            variant="rectangular"
            width={100}
            height={30}
            animation="wave"
          />
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            animation="wave"
          />
        </>
      ) : userId ? (
        <>
          <LogoutSwitch />
          <DashboardDp />
        </>
      ) : (
        <AccountActions />
      )}
    </>
  );
}
