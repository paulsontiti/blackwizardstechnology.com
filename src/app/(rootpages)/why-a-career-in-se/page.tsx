import { Container, Typography } from "@mui/material";
import { Metadata } from "next";

import React from "react";
export const metadata: Metadata = {
  title: "Why a career in Software Engineering",
  description: "We are the best",
};

const WhyACareerInSE = () => {
  return (
    <Container sx={{ mt: 5, mb: 10 }}>
      <Typography variant="h6" mb={2}>
        Why a Career in Software Engineering?
      </Typography>
      <Typography component={"p"} variant="body2">
        The tech industry is rapidly growing, and the demand for skilled tech
        professionals is on the rise. According to Global Reports, the global
        e-learning market size valued at $399.3 billion in 2022 is expected to
        grow by 14% between 2023 and 2032, driven by the growing demand for IT
        skills in various industries.
      </Typography>
      <Typography component={"p"} variant="body2">
        This presents a significant opportunity for IT experts to address the
        growing demand for skilled tech professionals. As a Software Engineering
        expert, there are so many accrued benefits, some of which include;
      </Typography>
      <ol>
        <li>
          <Typography fontWeight={"bold"}>
            {" "}
            High Demand and Job Growth:
          </Typography>
          <Typography variant="body1" mb={1}>
            The demand for software engineers is consistently high and continues
            to grow. In our increasingly digital world, software is at the heart
            of many industries, including technology, finance, healthcare,
            entertainment, and more. This high demand translates into a wide
            range of job opportunities.
          </Typography>
        </li>
        <li>
          <Typography fontWeight={"bold"}>
            {" "}
            Remote Work and Flexibility:
          </Typography>
          <Typography variant="body1" mb={1}>
            Software engineering often provides flexibility in terms of work
            arrangements. With the rise of remote work after the COVID-19
            outbreak, many software engineers have the opportunity to work from
            anywhere. This flexibility can provide a better work-life balance
            and the freedom to design your own schedule. Besides this, there
            will also be opportunities to earn in foreign currencies as jobs
            will not be limited to one country alone.
          </Typography>
        </li>
        <li>
          {" "}
          <Typography fontWeight={"bold"}> Versatile Career Paths::</Typography>
          <Typography variant="body1" mb={1}>
            Software engineering offers diverse career paths and
            specializations. As a software engineer, you can choose to work on a
            specific domain or industry that interests you, such as web
            development, mobile app development, artificial intelligence, data
            science, cybersecurity, etc. The versatility of the field allows you
            to explore different areas, find your niche, and work with comfort
            and ease.
          </Typography>
        </li>
        <li>
          {" "}
          <Typography fontWeight={"bold"}>
            {" "}
            International Opportunities::
          </Typography>
          <Typography variant="body1" mb={1}>
            In our world today where migration from developed countries is on
            the rise. Software Engineering skills will give you an upper hand as
            there are guaranteed job opportunities for Software Engineering
            experts, this will reduce the stress of job scouting and ease
            migration process.
          </Typography>
        </li>
        <li>
          {" "}
          <Typography fontWeight={"bold"}> Impact and Innovation::</Typography>
          <Typography variant="body1" mb={1}>
            {`    Software engineering has the potential to make a significant impact on society. From developing life-saving medical applications to building platforms that connect people globally, software engineers have the power to shape the world around them. The ability to create software that improves efficiency, solves real-world problems, and enhances people's lives can be highly fulfilling.`}
          </Typography>
        </li>
      </ol>
    </Container>
  );
};

export default WhyACareerInSE;
