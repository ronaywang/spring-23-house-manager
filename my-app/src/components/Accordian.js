import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SimpleAccordian = ({ data }) => {
  const fields = data.map((el) => {
    return el.fields;
  });
  return (
    <div>
      {data.map((el) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{}}>{el.fields.Job}</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {el.fields.Select}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{el.fields.Description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
export default SimpleAccordian;
