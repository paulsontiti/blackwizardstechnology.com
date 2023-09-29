"use client";
import React, { useState } from "react";
import { Avatar, IconButton, AlertColor } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import axios from "axios";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { LoadingButton } from "@mui/lab";
import SnackbarComponent from "../snackbar/SnackBar";
import { ApiReturnValue } from "@/lib/types/returnValues";
import { ProfileType } from "@/lib/types/forms";
import { updateProfile } from "@/store/slices/profileSlice";
import { useRouter } from "next/navigation";

function ProfilePicUploader() {
  const [msg, setMsg] = React.useState("");
  const [color, setColor] = React.useState<AlertColor>("error");
  const { user } = useSelector((state: RootState) => state.users);
  const _id = user && user._id;
  const [file, setFile] = useState<any>();
  const [displayFile, setDisplayFile] = useState();
  const [uploading, setUploading] = useState(false);
  //snackbar ref
  const snackBarRef = React.useRef();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      setDisplayFile(e.target.result);
    };

    file && fileReader.readAsDataURL(file);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setUploading(true);
    try {
      if (_id && file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("userId", _id);

        const res = await axios({
          method: "POST",
          url: `${process.env.BWT_URL}api/profile-pic`,
          data: formData,
        });
        const response: ApiReturnValue = await res.data;
        if (response.ok) {
          setMsg("Success");
          setColor("success");
          const refState = snackBarRef.current as any;
          refState.handleClick();
          setUploading(false);
          setFile("");
          //get profile from local storage
          let profile: ProfileType = JSON.parse(
            JSON.parse(JSON.stringify(localStorage.getItem("profile")))
          );

          //update the dpFileName
          profile.dpFileName = response.value;

          //save the new user details in the localstorage
          localStorage.setItem("profile", JSON.stringify(profile));
          dispatch(updateProfile(profile));
          router.refresh();
        } else {
          setMsg(response.error);
          setColor("error");
          const refState = snackBarRef.current as any;
          refState.handleClick();
          setUploading(false);
          setFile("");
        }
      }
    } catch (err: any) {
      setMsg(err.message);
      setColor("error");
      const refState = snackBarRef.current as any;
      refState.handleClick();
      setUploading(false);
      setFile("");
    }
  };

  return (
    <form onSubmit={submitHandler} encType="multipart/form-data">
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <IconButton type="submit">
        {file && (
          <>
            <Avatar
              src={displayFile}
              alt="image to upload"
              sx={{ width: 80, height: 80 }}
            />
            {uploading ? (
              <LoadingButton
                loading={uploading}
                loadingPosition="start"
              ></LoadingButton>
            ) : (
              <button>Upload</button>
            )}
          </>
        )}
      </IconButton>
      <IconButton aria-label="upload picture" component="label">
        <input
          name="profilePic"
          onChange={handleChange}
          hidden
          accept="image/*"
          type="file"
        />
        {!file && <AddAPhotoIcon color="error" />}
      </IconButton>
    </form>
  );
}

export default ProfilePicUploader;
