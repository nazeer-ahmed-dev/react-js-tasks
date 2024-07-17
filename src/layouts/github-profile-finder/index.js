import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import CustomizedInputBase from "./components/InputField";
import MDBox from "components/MDBox";
import { Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import UserCard from "./components/card";
import { useEffect, useState } from "react";



const API = "https://api.github.com/";

export default function GithubProfileFinder() {
    const [inputValue, setInputValue] = useState("nazeer-ahmed-dev");
    const [users , setUsers] = useState({})

  const handleInputChange = (event) => {
    console.log("herere")
    setInputValue(event.target.value);
  };

  const fetchSearch = async (keyword) => {
    let url = `${API}users/${keyword}`;
    const response = await fetch(url);
    if (!response.ok) {
        setUsers({})
      }
      const newUser = await response.json();
      setUsers(newUser);
  };


  useEffect(()=>{
    fetchSearch(inputValue)
  },[inputValue])

  console.log(users)
  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Find Github Profile
                </MDTypography>
              </MDBox>
              <MDBox display="flex" justifyContent="center" mt={3}>
                <CustomizedInputBase inputValue={inputValue} onInputChange={handleInputChange} />
              </MDBox>
              <MDBox display="flex" justifyContent="center" mt={3}>
                
                        <Grid item xs={12} md={6} xl={3} mb={3}>
                                <UserCard item={users}/>
                        </Grid>
                    {/* <UserCard/> */}
                {/* </Grid> */}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
