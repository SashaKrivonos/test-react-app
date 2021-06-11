import React from "react";
import InformaBar from "../Components/InformaBar/InformaBar";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import Path from "../Components/Path/Path";
import Cards from "../Components/Cards/Cards";
import ProjectFilters from "../Components/ProjectFilters/ProjectFilters";
import Container from "@material-ui/core/Container";


const StudyProject = () => {
  return (
    <div>
      <InformaBar />
      <TopNavBar />
      <Container style={{ marginTop: "14rem", marginLeft: "11rem" }}>
        <ProjectFilters />
        <Path />
      </Container>
      <Cards />
    </div>
  );
};

export default StudyProject;
