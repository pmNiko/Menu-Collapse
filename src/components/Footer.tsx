import {
  Box,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import meta from "../../package.json";

/** Component Footer Page */
export const Footer = () => (
  <Grid
    container
    sx={{ background: "#1f1f1f", width: "99vw", minWidth: 350 }}
    mt={2}
  >
    <Grid item xs={12} textAlign="center" fontSize={15} color="white" mt={3}>
      <Typography>Municipalidad de San Martín de los Andes</Typography>
    </Grid>
    <Grid item xs={12} textAlign="center" fontSize={13} color="white">
      General Roca y Juan Manuel de Rosas
    </Grid>
    <Grid item xs={12} textAlign="center" fontSize={13} color="white">
      CP Q8370, Neuquén
    </Grid>
    <Grid item xs={12} mb={1} textAlign="center" fontSize={13} color="white">
      0800-345-1975
    </Grid>
    <Grid
      item
      xs={12}
      mx={1}
      mb={1}
      textAlign="center"
      fontSize={13}
      color="white"
    >
      Central telefónica: (02972) 427315 - 427316 - 428795 - 428796 - 428797 -
      411997
    </Grid>
    <Grid item xs={12} textAlign="center" fontSize={13} color="white">
      Rentas internos: 223 / 224 / 225
      <FormControlLabel
        style={{ marginLeft: 4 }}
        control={
          <a
            target="_top"
            rel="noopener noreferrer"
            href="mailto:consultas.rentas@smandes.gob.ar"
          >
            <IconButton color="primary">
              <MailOutlineIcon />
            </IconButton>
          </a>
        }
        label={"consultas.rentas@smandes.gob.ar"}
        labelPlacement="end"
        sx={{ color: "#1976d2", marginRight: -0.5 }}
      />
    </Grid>
    <Grid item xs={12} py={2} textAlign="center" fontSize={13} color="white">
      versión {meta.version}
    </Grid>
  </Grid>
);
