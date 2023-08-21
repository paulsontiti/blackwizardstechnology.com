import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { logout } from "@/store/slices/userSlice";
import { useRouter } from "next/router";
import { useRef } from "react";
import GenericDialog from "./GenericDialog";
import LogoutContent from "./dialog/content/LogoutContent";
import LogoutActions from "./dialog/action/LogoutAction";

export default function LogoutSwitch() {
  const dispatch = useDispatch<AppDispatch>();
  //declare refs
  const dialogRef = useRef();
  const router = useRouter();

  const confirmLogout = (confirm: boolean) => {
    if (!confirm) {
      const refState = dialogRef.current as any;
      refState.closeDialog();
    } else {
      dispatch(logout());
      router.push("/");
    }
  };
  const logoutHandler = () => {
    const refState = dialogRef.current as any;
    refState.showDialog();
  };

  return (
    <>
      <GenericDialog
        content={<LogoutContent />}
        actions={<LogoutActions confirmLogout={confirmLogout} />}
        ref={dialogRef}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked
              onChange={logoutHandler}
              aria-label="login switch"
            />
          }
          label="Logout"
        />
      </FormGroup>
    </>
  );
}
