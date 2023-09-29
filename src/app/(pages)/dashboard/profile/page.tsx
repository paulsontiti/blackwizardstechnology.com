"use client";
import ProfileDetails from "@/components/profile/ProfileDetails";
import ProfileForm from "@/components/profile/ProfileForm";
import { Profile } from "@/lib/classes/profile";
import { ProfileType } from "@/lib/types/forms";
import { ApiReturnValue } from "@/lib/types/returnValues";
import { AppDispatch, RootState } from "@/store";
import { updateProfile } from "@/store/slices/profileSlice";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfilePage() {
  const { user } = useSelector((state: RootState) => state.users);
  const { profile } = useSelector((state: RootState) => state.profile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      if (user && !profile) {
        const pro = new Profile();
        const res: ApiReturnValue = await pro.getFetchData(user._id);
        if (res.ok) {
          dispatch(updateProfile(res.value));

          setLoading(false);
        } else {
          setError(res.error);
          setLoading(false);
        }
      }
      setLoading(false);
    })();
  }, [user, dispatch, profile]);

  if (loading) return <CircularProgress color="success" />;
  if (error) return <p>An Error occurred</p>;
  if (profile === null) return <ProfileForm />;
  return <ProfileDetails profile={profile} />;
}
