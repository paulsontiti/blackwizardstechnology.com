import React, { useRef, useState } from "react";
import { IconButton, Typography, AlertColor, Box } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import UploadIcon from "@mui/icons-material/Upload";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { LoadingButton } from "@mui/lab";
import SnackbarComponent from "@/components/snackbars/Snackbar";
import Layout from "@/components/layout";
import BlackAccountDetails from "@/components/BlackAccountDetails";

const PaymentPage = () => {
  const router = useRouter();

  const course = router.query.course as string;
  console.log(course);
  return (
    <Layout>
      <TransferForCoursePaymentForm course={course} />
    </Layout>
  );
};

export default PaymentPage;

function TransferForCoursePaymentForm({ course }: { course: string }) {
  const { _id } = useSelector((state: RootState) => state.users.user);
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");
  const [uploading, setUploading] = useState(false);
  //declare refs
  const snackBarRef = useRef();
  const [file, setFile] = useState<any>();
  const [displayFile, setDisplayFile] = useState("");

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
    setUploading(true);
    e.preventDefault();
    try {
      if (file) {
        const formData = new FormData();
        formData.append("pop", file);
        formData.append("course", course);
        formData.append("userId", _id);

        const res = await axios({
          method: "POST",
          url: `${process.env.SMNK_URL}/api/multer/pop`,
          data: formData,
        });
        const data = await res.data;

        if (data.successful) {
          setMsg(data.message);
          setColor("success");
          const refState = snackBarRef.current as any;
          refState.handleClick();
          setTimeout(() => {
            router.back();
          }, 6000);
        } else {
          setMsg(data.message);
          setColor("error");
          const refState = snackBarRef.current as any;
          refState.handleClick();
          setUploading(false);
        }
      } else {
        setMsg("Invalid request,select proof of payment");
        setColor("error");
        const refState = snackBarRef.current as any;
        refState.handleClick();
        setUploading(false);
      }
    } catch (err: any) {
      setMsg("An error occurred ,please try again");
      setColor("error");
      const refState = snackBarRef.current as any;
      refState.handleClick();
      setUploading(false);
      console.log(err);
      return false;
    }
  };

  return (
    <>
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <BlackAccountDetails />
      <Typography mb={2}>
        Make a trnsfer to the above bank details and upload your proof of
        payment. Images only
      </Typography>
      <PaymentForm
        submitHandler={submitHandler}
        uploading={uploading}
        color={color}
        handleChange={handleChange}
        file={file}
        displayFile={displayFile}
      />
    </>
  );
}

export function PaymentForm({
  submitHandler,
  file,
  displayFile,
  uploading,
  color,
  handleChange,
}: {
  submitHandler: any;
  file: any;
  displayFile: string;
  uploading: boolean;
  color: any;
  handleChange: any;
}) {
  return (
    <form onSubmit={submitHandler} encType="multipart/form-data">
      <IconButton color="primary" type="submit">
        {file && (
          <>
            <Image
              src={displayFile}
              alt="image to upload"
              width={100}
              height={100}
            />
            <LoadingButton
              loading={uploading}
              loadingPosition="start"
              startIcon={
                uploading ? null : (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    ml={2}
                  >
                    <UploadIcon sx={{ color: `${color}.900` }} />
                    <Typography
                      component="span"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Upload
                    </Typography>
                  </Box>
                )
              }
            ></LoadingButton>
          </>
        )}
      </IconButton>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          name="sub"
          onChange={handleChange}
          hidden
          accept="image/*"
          type="file"
        />
        <PhotoCamera />
        <Typography component="span">
          {file ? "Change Photo" : "Select Proof of Payment"}
        </Typography>
      </IconButton>
    </form>
  );
}
