/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @react-jvectormap components
import { VectorMap } from "@react-jvectormap/core";
import { worldMerc } from "@react-jvectormap/world";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Data
import stateMachinesData from "layouts/dashboards/platform/components/StateMachines/data/stateMachinesData";
import TemplateTable from "components/Tables/DataTableWithImage";

function StateMachines() {
  return (
    <Card sx={{ width: "100%" }}>
      <MDBox display="flex">
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          variant="gradient"
          bgColor="success"
          color="white"
          shadow="md"
          borderRadius="xl"
          ml={3}
          mt={-2}
        >
          <Icon fontSize="medium" color="inherit">
            schema
          </Icon>
        </MDBox>
        <MDTypography variant="h6" sx={{ mt: 2, mb: 1, ml: 2 }}>
          Data Pipelines
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <Grid container>
          <Grid item xs={12} md={7} lg={6}>
            <TemplateTable rows={stateMachinesData} shadow={false} />
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default StateMachines;
