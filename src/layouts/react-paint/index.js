import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./style/index.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"

import Icon from "@mui/material/Icon";;
import { Card, CardMedia, Divider, Grid, IconButton } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import {
  useMaterialUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setWhiteSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";
import MDButton from "components/MDButton";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

function SignatureCanva() {
  const sigRef = useRef();
  const [signature, setSignature] = useState([]);

  const [currentPenColor, setCurrentPenColor] = useState("green");


  console.log("hererer",signature)

  const handleSignatureEnd = () => {
    console.log("hererer")
    const currentDrawing = sigRef.current.getTrimmedCanvas().toDataURL("image/png")
    setSignature([
        ...signature,currentDrawing
    ])
  };

  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
    fixedNavbar,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;

  return (
    <DashboardLayout>
      <Grid item xs={12} md={7}>
        <Card>
          <MDBox pt={3} px={2}>
            <MDTypography variant="h6">Pen Color</MDTypography>
            <MDBox mb={0.5}>
              {sidenavColors.map((color) => (
                <IconButton
                  key={color}
                  sx={({
                    borders: { borderWidth },
                    palette: { white, dark, background },
                    transitions,
                  }) => ({
                    width: "24px",
                    height: "24px",
                    padding: 0,
                    border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : white.main}`,
                    borderColor: () => {
                      let borderColorValue = sidenavColor === color && dark.main;

                      if (darkMode && sidenavColor === color) {
                        borderColorValue = white.main;
                      }

                      return borderColorValue;
                    },
                    transition: transitions.create("border-color", {
                      easing: transitions.easing.sharp,
                      duration: transitions.duration.shorter,
                    }),
                    backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                      linearGradient(gradients[color].main, gradients[color].state),

                    "&:not(:last-child)": {
                      mr: 1,
                    },

                    "&:hover, &:focus, &:active": {
                      borderColor: darkMode ? white.main : dark.main,
                    },
                  })}
                  onClick={() => {
                    switch (color) {
                      case "primary":
                        setCurrentPenColor("red");
                        break;
                      case "dark":
                        setCurrentPenColor("black");
                        break;
                      case "info":
                        setCurrentPenColor("blue");
                        break;
                      default:
                        break;
                    }
                  }}
                />
              ))}
            </MDBox>
            <MDTypography variant="h6">Sign/Draw Here...</MDTypography>
              <SignatureCanvas
                penColor={currentPenColor}
                canvasProps={{ className: "signature" }}
                ref={sigRef}
                // onEnd={handleSignatureEnd}
              />
               <MDBox display="flex" justifyContent="flex-end" mt={2}>
               <MDButton variant="gradient"  color="dark"  sx={{ mr: 2 }}  onClick={() => sigRef.current.clear()}>
                  &nbsp;Clear Drawing
                </MDButton>
                <MDButton variant="gradient" color="warning" onClick={()=>{
                    handleSignatureEnd()
                }}>
                  &nbsp;Save Drawing
                </MDButton>
              </MDBox>
          </MDBox>
        <Divider />
          <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Drawing List
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
             Your list shown here....
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            {
                signature?.map((image,index)=>(
                    <Grid key={index} item xs={12} md={6} xl={3}>
                    <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
                        <CardMedia
                        key={index}
                        src={image}
                        component="img"
                        title={""}
                        sx={{
                            maxWidth: "100%",
                            margin: 0,
                            boxShadow: ({ boxShadows: { md } }) => md,
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        />
                    </MDBox>
                    </Grid>
                ))
            }
         
          </Grid>
        </MDBox>
        </Card>
      </Grid>
    </DashboardLayout>
  );
}

export default SignatureCanva;
