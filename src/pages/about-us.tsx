import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import RootLayout from "@/app/layout";
function AboutUsPage() {
  return (
    <RootLayout>
      <Container sx={{ mt: 5, mb: 10 }}>
        <Typography variant="body1" mb={1}>
          Black Wizards Technology is a firm in the tech industry with vast
          services ranging from software development to software management, an
          aspiring training firm that aims to provide high-quality online and
          offline training on various tech-related topics.
        </Typography>
        <Typography component={"p"} variant="body1" mb={1}>
          Our goal is to help individuals and organizations enhance their skills
          and knowledge in the rapidly evolving tech industry so as to be able
          to meet the recent demands of each growing economy.
        </Typography>
        <Typography component={"p"} variant="body1">
          We plan to achieve this by combining our expertise in software
          development with our passion for growth and education.
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} mb={2} mt={2}>
          Our Mission
        </Typography>
        <Typography>
          To become a leading firm in the software development and training
          industry, raising a strong army of Tech experts, providing innovative
          solutions, and empowering great individuals and businesses to thrive
          and become experts in the digital age.
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} mb={2} mt={2}>
          Our Vision
        </Typography>
        <Typography>
          To create a world where technology is accessible to all, where
          individuals and organizations have the skills and knowledge to
          leverage its potential, and where innovation drives sustainable growth
          and development.
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} mt={2} mb={2}>
          Core Values
        </Typography>

        <Typography>
          <ol>
            <li>
              <Typography fontWeight={"bold"}> Innovation:</Typography>
              <Typography variant="body1" mb={1}>
                We foster a culture of innovation, encouraging our team members
                to think creatively, explore new ideas, and push the boundaries
                of technology to deliver innovative solutions for our clients.
              </Typography>
            </li>
            <li>
              <Typography fontWeight={"bold"}> Integrity:</Typography>
              <Typography variant="body1" mb={1}>
                We conduct our business with the highest level of integrity,
                ethics, and transparency. Our word is our bond and we are
                committed to upholding ethical standards, respecting
                confidentiality, and maintaining the trust of our clients and
                stakeholders.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography fontWeight={"bold"}> Professionalism:</Typography>
              <Typography variant="body1" mb={1}>
                We foster a positive work environment that values
                professionalism, teamwork, and collaboration. We uphold the
                highest standards of work ethics while delivering quality and
                effective service.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography fontWeight={"bold"}> Empathy:</Typography>
              <Typography variant="body1" mb={1}>
                We put our clients at the center of everything we do. We listen
                to their needs, understand their challenges, consider their
                limitations and tailor our solutions to meet their specific
                requirements. We prioritize building strong, long-term
                relationships with our clients based on trust and mutual
                success.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography fontWeight={"bold"}> Excellence:</Typography>
              <Typography variant="body1" mb={1}>
                We strive for excellence in everything we do. We are committed
                to delivering high-quality services, exceeding client
                expectations, and continuously improving our skills and
                processes.
              </Typography>
            </li>
          </ol>
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} mb={2} mt={2}>
          Our Name
        </Typography>
        <Typography mb={1}>
          We are <b>Black Wizards Technology.</b> Some may wonder and ask why
          the name as there may be some arising controversies surrounding our
          brand. Here’s why. We are Africans, often referred to as “Blacks” and
          in most African cultures, Wizards are revered for their wisdom,
          expertise and ability to solve complex problems.
        </Typography>
        <Typography mb={1}>
          The term Wizard connotes a very high level of Skill and proficiency in
          a given field and hence, we decided to associate this term with
          technology. It goes without saying that Africa holds immense untapped
          potentials in the tech industry and we possess the power to unlock
          these potentials and bring about technological transformation in our
          communities if only we tap into it.
        </Typography>
        <Typography mb={1}>
          We chose the name Black Wizard to symbolize our mission. We are a
          group of talented individuals with a shared passion for knowledge,
          growth and integration. We seek to become and also build modern
          Wizards who would utilize technological expertise in solving complex
          challenges and creating innovative solutions. Our name is primarily an
          indication and a reminder of what the Average African can do with
          Technology.
        </Typography>
      </Container>
    </RootLayout>
  );
}

export default AboutUsPage;
