import React, { FC } from "react";
import { BsInfoCircle } from "react-icons/bs";

import Panel from "./Panel";

const DescriptionPanel: FC = () => {
  return (
    <Panel
      initiallyDeployed
      title={
        <>
          <BsInfoCircle className="text-muted" /> Description
        </>
      }
    >
      <p>
        This graph represents a <i>network</i> of scientific publications around the topic of "organizational routines". Each{" "}
        <i>node</i> represents a publication, and each edge a{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/INikson/MA_Thesis_SCitEx">
          "See also" link
        </a>
        .
      </p>
      <p>
        The publications were automatically extracted from GS search results and text files. {" "}
        <a target="_blank" rel="noreferrer" href="https://scholar.google.de/scholar?hl=de&as_sdt=0%2C5&q=%22organizational+routines%22&oq=%22organi">
          Google Scholar
        </a>{" "}
        Explore the citation network through structure-based overview{" "}
        <a target="_blank" rel="noreferrer" >
          
        </a>
        , and navigate to the most relevant publications. This enables the exploration of knowledge influences through citation texts and publication contents{" "}
        <a target="_blank" rel="noreferrer" >
        
        </a>
        .
      </p>
      <p>
        This web application has been developed by{" "}
        <a target="_blank" rel="noreferrer" >
          Nikita Neumüller based on the Sigma.js demo framework
        </a>
        , using{" "}
        <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
          react
        </a>{" "}
        and{" "}
        <a target="_blank" rel="noreferrer" href="https://www.sigmajs.org">
          sigma.js
        </a>
        . You can read the source code{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/INikson/MA_Thesis_SCitEx">
          on GitHub
        </a>
        .
      </p>
      <p>
        Nodes sizes are related to their{" "}
        <a target="_blank" rel="noreferrer" >
          relevancy in terms of number of citations
        </a>
        . More central nodes (eg. bigger nodes) are major knowledge and influence hubs. Finally, You can click a
        node to get the publication identifier.
      </p>
    </Panel>
  );
};

export default DescriptionPanel;
