import RootLayout from "@/app/layout";
import { Container, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const NoComputerBackGround = () => {
  const router = useRouter();
  return (
    <RootLayout>
      <Container sx={{ mt: 15, mb: 10 }}>
        <Typography variant="h6" mb={2}>
          Did you know you can become a software Engineer without a background
          in Computer Engineering? Let us help you get it done
        </Typography>
        <Typography component={"p"} variant="body2">
          While a computer science degree may provide a strong foundation and
          give a more comprehensive understanding of theoretical concepts, it is
          not the only path to mastering Software Engineering. Hands-on training
          and practical experience are more valuable and cannot be overlooked in
          the quest to master software engineering. We at Black Wizards
          Technology prioritize practical skills and problem-solving abilities
          and that is where our focus will be laid.
        </Typography>
        <Typography component={"p"} variant="body2">
          It is important to us that everyone is carried along and that is why
          we have programmed our courses for each package to begin with the
          basics. We have a beginners extensive course which will cover the
          fundamentals where we aim at giving our students a perfect
          understanding of the entire computer system and its components. This
          will form a basis for the subsequent programs that make up a software
          Engineering course.
        </Typography>
        <Typography component={"p"} variant="body2">
          We are not just offering to make you a software Engineer, we will
          provide you with a step by step guide on how to get to the peak of
          your career as a Software Engineer, be it as a beginner, an
          intermediate student or an expert. Explore further for a more
          comprehensive info on how to be a part of the Black Wizard Technology.
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={3}
        >
          <Button
            onClick={() => {
              router.push("/free-class");
            }}
            size="small"
            variant="contained"
            sx={{ bgcolor: "orange", color: "black", fontWeight: "bold" }}
          >
            Sign Up For A Free Class
          </Button>
        </Box>
      </Container>
    </RootLayout>
  );
};

export default NoComputerBackGround;
