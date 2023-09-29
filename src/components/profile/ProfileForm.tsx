"use client";
import {
  AlertColor,
  CircularProgress,
  Button,
  CardActions,
  Box,
  CardHeader,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import SnackbarComponent from "../snackbar/SnackBar";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string, date } from "yup";
import { ProfileType, states } from "@/lib/types/forms";
import BlackFormikAutocomplete from "../form/BlackFormikAutocomplete";
import { Profile } from "@/lib/classes/profile";
import { useRouter } from "next/navigation";
import { AccountError } from "@/lib/types/account";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "@/store/slices/profileSlice";

export default function ProfileForm() {
  const { user } = useSelector((state: RootState) => state.users);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [msg, setMsg] = React.useState("");
  const [color, setColor] = React.useState<AlertColor>("error");
  const [error, setError] = React.useState<AccountError[]>([]);
  //state for loadingButton
  const [loading, setLoading] = React.useState(false);
  //snackbar ref
  const snackBarRef = React.useRef();

  //yup validation schema
  const validationSchema = object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    phone: string()
      .min(11, "Phone Number must be eleven digits")
      .max(11, "Phone Number must be eleven digits")
      .required("Phone Number is required"),
    city: string().required("City is required"),
    state: string().required("State is required"),
    address: string().required("Address is required"),
    dob: date().required("Date of birth is required"),
    sponsorsDetails: object().shape({
      email: string()
        .email("Invalid email address")
        .required(`Sponsor's Email is required`),
      firstName: string().required(`Sponsor's First Name is required`),
      lastName: string().required(`Sponsor's Last Name is required`),
      phone: string()
        .min(11, "Sponsor's Phone Number must be eleven digits")
        .max(11, "Sponsor's Phone Number must be eleven digits")
        .required(`Sponsor's Phone Number is required`),
    }),
  });

  //form initial values
  const initialValues: ProfileType = {
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    state: "",
    bio: "",
    address: "",
    userId: user?._id as string,
    dob: null,
    sponsorsDetails: {
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      email: "",
    },
  };
  const titleOptions = [
    { id: 1, label: "Mr" },
    { id: 2, label: "Mrs" },
    { id: 3, label: "Miss" },
    { id: 4, label: "Chief" },
    { id: 5, label: "Rev" },
    { id: 7, label: "Dr" },
  ];
  //profile object
  let profile = new Profile();
  //submit handler
  const formikSubmitHandler = (values: ProfileType, formikHelpers: any) => {
    setLoading(true);
    return new Promise((res) => {
      formikHelpers
        .validateForm()
        .then(async (data: any) => {
          //initialize profile
          profile.firstName = values.firstName;
          profile.lastName = values.lastName;
          profile.phone = values.phone;
          profile.state = values.state;
          profile.city = values.city;
          profile.address = values.address;
          profile.dob = values.dob;
          profile.bio = values.bio;
          profile.sponsorsDetails = values.sponsorsDetails;

          if (profile.isError()) {
            setError(profile.errors);
            setLoading(false);
            setMsg("Please ensure you provide all required fields");
            setColor("error");
            const refState = snackBarRef.current as any;
            refState.handleClick();
          } else {
            setError([]);
            const body: ProfileType = {
              firstName: profile.firstName,
              lastName: profile.lastName,
              phone: profile.phone,
              state: profile.state,
              city: profile.city,
              address: profile.address,
              dob: profile.dob,
              userId: values.userId,
              bio: values.bio,
              sponsorsDetails: profile.sponsorsDetails,
            };
            //check if userid
            if (!body.userId) {
              setMsg("Invalid request. You are not a registerred user");
              setColor("error");
              const refState = snackBarRef.current as any;
              refState.handleClick();
              setLoading(false);
              res(msg);
              return;
            }
            const response = await profile.sendData(body);
            if (response.ok) {
              setMsg("Your profile was successfully added");
              setColor("success");
              const refState = snackBarRef.current as any;
              refState.handleClick();
              setLoading(false);
              dispatch(updateProfile(response.value));
              setTimeout(() => {
                router.refresh();
              }, 3000);
            } else {
              setMsg(response.error);
              setColor("error");
              const refState = snackBarRef.current as any;
              refState.handleClick();
              setLoading(false);
              res(msg);
            }
          }
        })
        .catch((err: any) => {
          setMsg(err.message);
          setColor("error");
          const refState = snackBarRef.current as any;
          refState.handleClick();
          setLoading(false);
          res(err);
        });
    });
  };

  return (
    <Card
      sx={{
        p: 1,
        minWidth: { xs: "97%", md: "65%", lg: "70%" },
        maxWidth: { xs: "97%", md: "65%", lg: "70%" },
      }}
    >
      <CardHeader
        title="Add Your Profile"
        sx={{ color: "red", fontWeight: "bold" }}
      />
      <CardContent>
        <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={formikSubmitHandler}
          enableReinitialize
        >
          {({
            values,
            touched,
            isSubmitting,
            isValid,
            isValidating,
            errors,
          }) => (
            <Form>
              <Box display={"flex"} flexDirection={"column"}>
                <BlackFormikTextField
                  name="firstName"
                  label="First Name"
                  required={true}
                  placeholder="e.g John"
                />

                <BlackFormikTextField
                  name="lastName"
                  label="Last Name"
                  required={true}
                  placeholder="e.g Doe"
                />
                <BlackFormikTextField
                  name="phone"
                  label="Phone Number"
                  type="phone"
                  required={true}
                  placeholder="e.g 08021345621"
                />
                <BlackFormikAutocomplete
                  values={values}
                  touched={touched}
                  label="State"
                  name="state"
                  required={true}
                  helperText=""
                  options={states}
                />
                <BlackFormikTextField
                  name="city"
                  label="City"
                  required={true}
                  placeholder="e.g Port Harcourt"
                />
                <BlackFormikTextField
                  name="address"
                  label="Address"
                  required={true}
                  placeholder="e.g 204 Aba road,Rumuola"
                />
                <Typography mb={1} variant="body2">
                  Date Of Birth
                </Typography>
                <BlackFormikTextField
                  name="dob"
                  label=""
                  required={true}
                  type="date"
                  placeholder="e.g 12/2/2023"
                />
                <BlackFormikTextField
                  name="bio"
                  label="Bio"
                  multiline={true}
                  rows={4}
                  placeholder="e.g I am a computer wizards. I love software engineering and i am the best in the world"
                />
                <Typography mb={1} mt={2} fontWeight={"bold"}>
                  Sponsor Details
                </Typography>
                <BlackFormikTextField
                  label="Title"
                  name="sponsorsDetails.title"
                  placeholder="e.g Mr/Mrs/Chief"
                />
                <BlackFormikTextField
                  name="sponsorsDetails.firstName"
                  label="First Name"
                  required={true}
                  placeholder="e.g John"
                />
                <BlackFormikTextField
                  name="sponsorsDetails.lastName"
                  label="Last Name"
                  placeholder="e.g Doe"
                  required={true}
                />
                <BlackFormikTextField
                  name="sponsorsDetails.phone"
                  type="phone"
                  label="Phone"
                  placeholder="e.g 09123456789"
                  required={true}
                />
                <BlackFormikTextField
                  name="sponsorsDetails.email"
                  type="email"
                  required={true}
                  label="Email"
                  placeholder="e.g johndoe@gmail.com"
                />
              </Box>
              <CardActions>
                <LoadingButton
                  loading={loading || isSubmitting}
                  disabled={!isValid || isSubmitting || isValidating}
                  type="submit"
                  sx={{ bgcolor: "red", color: "black", fontWeight: "bold" }}
                  loadingIndicator={<CircularProgress color="success" />}
                  variant="contained"
                  onClick={() => {}}
                >
                  Add Profile
                </LoadingButton>

                <Button
                  variant="outlined"
                  sx={{ bgcolor: "red", color: "black", fontWeight: "bold" }}
                >
                  Reset
                </Button>
              </CardActions>

              <pre>{JSON.stringify(values, null, 4)}</pre>
              <pre>{JSON.stringify(errors, null, 4)}</pre>
            </Form>
          )}
        </Formik>
        <ul>
          {error.map((err) => (
            <li key={err.fieldName}>
              {" "}
              <Typography color="error">{err.errorMessage}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

type TextFieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  rows?: number;
};
function BlackFormikTextField({
  name,
  label,
  type,
  required,
  placeholder,
  multiline,
  rows,
}: TextFieldProps) {
  return (
    <Box mb={2}>
      <Field
        name={name}
        as={TextField}
        label={label}
        sx={{ width: "100%" }}
        type={type ?? "input"}
        required={required}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
      />
      <Box color={"red"}>
        <ErrorMessage name={name} />
      </Box>
    </Box>
  );
}

// type AutocompleteOption = {
//   id: number;
//   label: string;
// };
// function BlackFormikAutoComplete({
//   options,name,label
// }: {
//   options: AutocompleteOption[],name:string,label:string
// }) {
//   return (
//     <Box mb={2}>
//       <Field as="select" name={name} style={{ height: 50, width: "100%" }}>
//         {options.map((option) => (
//           <option value={option.label} key={option.id}>
//             {option.label}
//           </option>
//         ))}
//       </Field>
//     </Box>
//   );
// }
