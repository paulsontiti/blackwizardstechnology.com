"use client";
import { ProfileType } from "@/lib/types/forms";
import { Card, CardHeader, CardContent, Typography, Box } from "@mui/material";
import { BlackTypography } from "../styledComponents/BlackTypography";
import { BlackDescription } from "../styledComponents/BlackDescription";

export default function ProfileDetails({ profile }: { profile: ProfileType }) {
  if (!profile) return <p>No profile</p>;

  return (
    <Card
      sx={{
        minWidth: { xs: 300, sm: 400, md: 600 },
        maxWidth: { xs: 300, sm: 400, md: 600 },
      }}
    >
      <CardHeader title="Profile" />
      <CardContent>
        <Box display={"flex"} width={300} maxWidth={"100%"}></Box>{" "}
        <BlackTypography label="First Name" value={profile.firstName} />
        <BlackTypography label="Last Name" value={profile.lastName} />
        <BlackTypography label="Phone" value={profile.phone} />
        <BlackTypography label="State" value={profile.state} />
        <BlackTypography label="City" value={profile.city} />
        <BlackDescription label="Address" description={profile.address} />
        <BlackTypography
          label="Date of Birth"
          value={new Date(profile.dob as Date).toDateString()}
        />
        <BlackDescription label="Bio" description={profile.bio as string} />
        <Typography
          fontWeight={"bold"}
          variant="body2"
          m={2}
        >{`Sponsor's Details`}</Typography>
        <BlackTypography
          label="Title"
          value={profile.sponsorsDetails.title as string}
        />
        <BlackTypography
          label="First Name"
          value={profile.sponsorsDetails.firstName}
        />
        <BlackTypography
          label="Last Name"
          value={profile.sponsorsDetails.lastName}
        />
        <BlackTypography label="Phone" value={profile.sponsorsDetails.phone} />
        <BlackTypography label="Email" value={profile.sponsorsDetails.email} />
      </CardContent>
    </Card>
  );
}
