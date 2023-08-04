import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  CourseCallToAction,
  WebDevelopmentCourseDescription,
} from "@/pages/web-development";
import { Box } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CoursesAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <p></p>
    // <div style={{ marginTop: "1rem" }}>
    //   {/* <Accordion
    //     expanded={expanded === "panel1"}
    //     onChange={handleChange("panel1")}
    //     TransitionProps={{ unmountOnExit: true }}
    //   >
    //     <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    //       <Typography>
    //         Software Engineering For JSS Students - 3 years
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
    //         dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    //         lacus ex, sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion
    //     expanded={expanded === "panel2"}
    //     onChange={handleChange("panel2")}
    //     TransitionProps={{ unmountOnExit: true }}
    //   >
    //     <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    //       <Typography>
    //         Software Engineering For SSS Students - 3 years
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
    //         dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    //         lacus ex, sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion> */}
    //   <Accordion
    //     expanded={expanded === "panel3"}
    //     onChange={handleChange("panel3")}
    //     TransitionProps={{ unmountOnExit: true }}
    //   >
    //     <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    //       <Typography>Software Engineering - 12 months</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <SECourseDescription />
    //       <CourseCallToAction freeClassUrl="" />
    //     </AccordionDetails>
    //   </Accordion>{" "}
    //   <Accordion
    //     expanded={expanded === "panel7"}
    //     onChange={handleChange("panel7")}
    //     TransitionProps={{ unmountOnExit: true }}
    //   >
    //     <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    //       <Typography>
    //         Computer Programming In Javascript,Python & Golang - 12 months
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <ComputerProgrammingCourseDescription />
    //       <CourseCallToAction freeClassUrl="" />
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion
    //     expanded={expanded === "panel9"}
    //     onChange={handleChange("panel9")}
    //     TransitionProps={{ unmountOnExit: true }}
    //   >
    //     <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    //       <Typography>Web Development - 12 months</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <WebDevelopmentCourseDescription />
    //       <CourseCallToAction freeClassUrl="/free-web-class" />
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion
    //     expanded={expanded === "panel10"}
    //     onChange={handleChange("panel10")}
    //     TransitionProps={{ unmountOnExit: true }}
    //   >
    //     <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    //       <Typography>Mobile Development - 12 months</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <MobileDevelopmentCourseDescription />
    //       <CourseCallToAction freeClassUrl="" />
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion
    //     expanded={expanded === "panel12"}
    //     onChange={handleChange("panel12")}
    //     TransitionProps={{ unmountOnExit: true }}
    //   >
    //     <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    //       <Typography>Database Management Systems - 12 months</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <DBCourseDescription />
    //       <CourseCallToAction freeClassUrl="" />
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion
    //     expanded={expanded === "panel12"}
    //     onChange={handleChange("panel12")}
    //     TransitionProps={{ unmountOnExit: true }}
    //   >
    //     <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    //       <Typography>Visualization(UI,Ux and Graphics) - 12 months</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <VisualizationCourseDescription />
    //       <CourseCallToAction freeClassUrl="" />
    //     </AccordionDetails>
    //   </Accordion>
    // </div>
  );
}

function SECourseDescription() {
  return (
    <Box>
      <Typography>This course encompasses the following:</Typography>
      <ul>
        <li>
          <Typography mb={2}>Introduction To Computing Systems:</Typography>
          <Typography mb={1}>
            This provides an overview of the components, layers, and
            interactions involved in computer systems. It serves as the
            foundation for further exploration and understanding of computer
            science and technology.
          </Typography>
          <Typography mb={1}>
            At its core, computing systems involve three main components:
            hardware, software, and data. Hardware refers to the physical
            components of a computer, such as the central processing unit (CPU),
            memory, storage devices, input/output devices, and the connections
            between them. The hardware is used to input and interpret commands
            and instructions from the software.
          </Typography>
          <Typography mb={1}>
            Software, on the other hand, refers to the programs and instructions
            that tell the hardware what tasks to perform. This includes
            operating systems, application software, and programming languages.
          </Typography>
          <Typography mb={1}>
            Software enables users to interact with and utilize the capabilities
            of the hardware. Data is the information processed and stored by a
            computer system. It can take various forms, such as text, numbers,
            images, audio, and video. Data is input into the system, processed
            by the hardware and software, and output as meaningful information
            or results.
          </Typography>
          <Typography mb={2}>
            Additionally, computing systems cuts across various topics such as
            computer architecture, digital logic, computer networks, algorithms,
            data structures, and more. Understanding these concepts is essential
            for developing and understanding the inner workings of computers. It
            is the fundamental framework of Software Engineering.
          </Typography>
        </li>
        <li>
          <Typography mb={1}>Software Project Management</Typography>
          <Typography mb={1}>
            This refers to the discipline of planning, organizing, and
            controlling the resources and activities involved in developing and
            delivering software projects. It encompasses a set of principles,
            techniques, and tools that enable effective project planning,
            execution, monitoring, and completion.
          </Typography>
          <Typography mb={1}>
            The main objectives of software project management are to ensure the
            successful completion of software projects within defined
            constraints, which typically include scope, time, cost, and quality.
            The project manager is responsible for overseeing the project and
            coordinating the efforts of the development team to achieve these
            objectives.
          </Typography>
          <Typography mb={1}>
            Successful software project management requires a combination of
            technical expertise, leadership skills, and effective communication.
            By applying project management principles and practices, software
            projects can be executed in a structured and efficient manner,
            leading to better outcomes in terms of quality, timeliness, and
            customer satisfaction.
          </Typography>
          <Typography mb={2}>
            Here we shall be discussing key aspects of software project
            management. Some of which include: Project Planning, Requirement
            Management, Team Management, Risk Management, Project Monitoring and
            Control, Quality Management, Project Documentation. Etc.
          </Typography>
        </li>
        <li>
          <Typography mb={2}>
            Software Requirement Analysis and Design
          </Typography>
          <Typography mb={1}>
            These are crucial stages in the software development life cycle.
            These activities help in understanding the needs of stakeholders,
            defining system requirements, and creating a design solution that
            meets those requirements.
          </Typography>
          <Typography mb={1}>
            Requirement analysis is the process of gathering, analyzing, and
            documenting the needs and constraints of users, customers, and other
            stakeholders. The goal is to understand the problem domain and
            define the functionalities and characteristics that the software
            system should possess.
          </Typography>
          <Typography mb={1}>
            {` Software design involves transforming the requirements into a
            detailed blueprint that guides the development process. The design
            phase focuses on creating a solution architecture, defining the
            system's structure, and specifying component interactions.`}
          </Typography>
          <Typography mb={2}>
            {` Here we shall explore each of these processes and their key activities. Some of which include: eliciting requirements, documenting requirements, validating requirements, architectural design, user face design database design. Etc.`}
          </Typography>
        </li>
        <li>
          <Typography mb={2}>Software Architecture and Design</Typography>
          <Typography mb={1}>
            {`These involve creating the overall structure and blueprint of a software system, defining its components, their interactions, and the principles that guide their organization.`}
          </Typography>
          <Typography mb={1}>
            {`Software architecture refers to the high-level structure and organization of a software system.
             It provides a conceptual framework that defines the system's components, their relationships, and the principles that guide their design.`}
          </Typography>
          <Typography mb={1}>
            {`Software design focuses on translating the software architecture into detailed specifications for individual components and modules. It involves making design decisions that ensure the system is modular, maintainable, and meets the functional and non-functional requirements.`}
          </Typography>
          <Typography mb={1}>
            {`Effective software architecture and design are crucial for developing high-quality software systems. They enable modularity, maintainability, scalability, and performance while ensuring that the system meets the requirements of stakeholders. By following established architectural patterns and design principles, 
            developers can create robust and well-structured software solutions.`}
          </Typography>
        </li>
      </ul>
    </Box>
  );
}

function ComputerProgrammingCourseDescription() {
  return (
    <Box>
      <Typography m={1}>
        Computer programming, also known as coding, is the process of writing
        instructions (code) for computers to follow in order to perform specific
        tasks or solve problems.
      </Typography>
      <Typography m={1}>
        It involves designing algorithms, expressing them in a programming
        language, and translating them into executable code. Computer
        programming is a fundamental skill in the field of computer science and
        is used to develop software applications, websites, games, and much
        more.
      </Typography>
      <Typography m={1}>
        It is a vast and continuously evolving field. It requires practice,
        patience, and a willingness to learn as it encompasses a series of
        concepts which ranges from basic to advanced. However it gets better,
        more interesting and enjoyable with experience.
      </Typography>
      <Typography m={1}>
        JavaScript, Python and Golang are programming languages in which codes
        can be written in order to create software applications, websites, and
        more. Each language has its own syntax, features, and areas of
        specialization.
      </Typography>
      <Typography m={1}>
        Each of these programming languages has its strengths and areas of
        application. JavaScript is widely used for web development, Python is
        known for its versatility and data analysis capabilities, and Golang is
        favored for its performance and concurrency features. Choosing the right
        language depends on the specific requirements of your project and your
        personal preferences as a developer.
      </Typography>
      <Typography m={1}>
        Being able to program in these languages will set you apart from others
      </Typography>
    </Box>
  );
}
function VisualizationCourseDescription() {
  return (
    <Box>
      <Typography m={1}>
        {`These are two closely related concepts that play a significant role in
        designing software applications, websites, and digital products. While
        UI and UX are interconnected, they focus on different aspects of the
        user's interaction and perception.`}
      </Typography>
      <Typography m={1}>
        UI refers to the visual and interactive elements of a software
        application or website through which users interact with the system. It
        encompasses the design of buttons, menus, forms, icons, layouts, and
        other graphical elements that users see and interact with on the screen.
      </Typography>
      <Typography m={1}>
        UX focuses on the overall experience and satisfaction of users when
        interacting with a software application or website. It encompasses the
        entire user journey, from their initial interaction with the system to
        accomplishing their goals.
      </Typography>
      <Typography m={1}>
        The ultimate goal of UI and UX design is to create a positive and
        meaningful user experience. Well-designed UI elements coupled with a
        well-thought-out UX result in interfaces that are visually appealing,
        easy to use, and provide value to the users. A good UI/UX design
        enhances user satisfaction, engagement, and overall product success
      </Typography>
    </Box>
  );
}
function MobileDevelopmentCourseDescription() {
  return (
    <Box>
      <Typography m={1}>
        This refers to the process of creating applications specifically
        designed for mobile devices, such as smartphones and tablets.
      </Typography>
      <Typography m={1}>
        Mobile development involves designing and building mobile applications
        for various platforms, including iOS (Apple devices) and Android (Google
        devices). Unlike the Web Development, applications created are accessed
        on mobile devices and not via the internet.
      </Typography>
    </Box>
  );
}
function DBCourseDescription() {
  return (
    <Box>
      <Typography m={1}>
        Database Management Systems (DBMS) are software applications that manage
        and organize data in a structured manner. They provide tools and
        functionalities for creating, storing, retrieving, updating, and
        managing data efficiently. DBMS serve as a crucial component in various
        applications and industries where data management is essential.
      </Typography>
      <Typography m={1}>
        Some popular DBMS include: Relational DBMS: MySQL, PostgreSQL, Oracle,
        Microsoft SQL Server. NoSQL DBMS: MongoDB, Cassandra, Redis, Couchbase.
        NewSQL DBMS: Google Spanner, CockroachDB.
      </Typography>
    </Box>
  );
}
