import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AccordionComponent = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
  <div className={`w-full flex justify-center items-center flex-col ${expanded === true ? "pt-6" : "pt-0" }`}  >
      <Accordion
        sx={{
          marginTop: 3,
          paddingTop: 2,
          paddingBottom: 2,
          backgroundColor: "transparent",
        }}
        className=" w-full lg:w-[80%] border border-slate-600 rounded-xl bg-white bg-opacity-5"
        onClick={toggleAccordion}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <RemoveIcon sx={{ color: "white" }} />
            ) : (
              <AddIcon sx={{ color: "white" }} />
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "white", fontSize: '18px' }} className="lexend">
            {props.header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "white" }} className="lexend text-sm font-extralight">
            {props.text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default AccordionComponent;
