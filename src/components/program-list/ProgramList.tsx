import React from "react";

import {programTitleMap, type ProgramType} from "../../data/movies";
import ProgramCard from "../program-card";
import styles from "./ProgramList.module.css";

interface ProgramListProps {
  programTypeList: ProgramType[];
  onProgramTypeSelect: (programType: ProgramType) => void;
}

const ProgramList: React.FC<ProgramListProps> = ({programTypeList, onProgramTypeSelect}) => {
  return (
    <div className={styles.program__list}>
      {programTypeList.map((programType) => (
        <ProgramCard
          key={programType}
          programType={programType}
          title={programTitleMap[programType]}
          onClick={(type) => onProgramTypeSelect(type)}
        />
      ))}
    </div>
  );
};

export default ProgramList;
