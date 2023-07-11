import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import RootLayout from "@/app/layout";
function AboutUsPage() {
  return (
    <RootLayout>
      <Container sx={{ mt: 20, mb: 20 }}>
        <Typography variant="h5" fontWeight={"bold"} mb={2}>
          We are Black Wizards Technology
        </Typography>
        <Typography>
          We are Black Wizards Technology. Some may wonder and ask why the name
          as there may be some arising controversies surrounding our brand.
          Here’s why. We are Africans, often referred to as “Blacks” and in most
          African cultures, Wizards are revered for their wisdom, expertise and
          ability to solve complex problems. The term Wizard connotes a very
          high level of Skill and proficiency in a given field and hence, we
          decided to associate this term with technology. It goes without saying
          that Africa holds immense untapped potentials in the tech industry and
          we possess the power to unlock these potentials and bring about
          technological transformation in our communities if only we tap into
          it.
        </Typography>
        <Typography component={"p"}>
          We chose the name Black Wizard to symbolize our mission. We are a
          group of talented individuals with a shared passion for knowledge,
          growth and integration. We seek to become and also build modern
          Wizards who would utilize technological expertise in solving complex
          challenges and creating innovative solutions. Our name is primarily an
          indication and a reminder of what the Average African can do with
          Technology.
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} mt={2} mb={2}>
          Core Values
        </Typography>

        <Typography>
          <ol>
            <li>
              <Typography>
                Innovation: We foster a culture of innovation, encouraging our
                team members to think creatively, explore new ideas, and push
                the boundaries of technology to deliver innovative solutions for
                our clients.
              </Typography>
            </li>
            <li>
              <Typography>
                Integrity: We conduct our business with the highest level of
                integrity, ethics, and transparency. Our word is our bond and we
                are committed to upholding ethical standards, respecting
                confidentiality, and maintaining the trust of our clients and
                stakeholders.
              </Typography>
            </li>
            <li>
              <Typography>
                Professionalism: We foster a positive work environment that
                values professionalism, teamwork, and collaboration. We uphold
                the highest standards of work ethics while delivering quality
                and effective service.
              </Typography>
            </li>
            <li>
              <Typography>
                Empathy: We put our clients at the center of everything we do.
                We listen to their needs, understand their challenges, consider
                their limitations and tailor our solutions to meet their
                specific requirements. We prioritize building strong, long-term
                relationships with our clients based on trust and mutual
                success.
              </Typography>
            </li>
            <li>
              <Typography>
                Excellence: We strive for excellence in everything we do. We are
                committed to delivering high-quality services, exceeding client
                expectations, and continuously improving our skills and
                processes.
              </Typography>
            </li>
          </ol>
        </Typography>
      </Container>
    </RootLayout>
  );
}

export default AboutUsPage;
