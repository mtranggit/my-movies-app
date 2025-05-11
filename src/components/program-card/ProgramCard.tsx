import React from "react";

import placeholderImage from "../../assets/placeholder.png";
import type {ProgramType} from "../../data/movies";
import {toTitleCase} from "../../utils/toTitleCase";
import styles from "./ProgramCard.module.css";

interface ProgramCardProps {
  title: string;
  programType: ProgramType;
  onClick: (programType: ProgramType) => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({title, programType, onClick}) => {
  return (
    <div className={styles.program_card} onClick={() => onClick(programType)}>
      <img src={placeholderImage} alt={title} />
      <h4>{title}</h4>
      <p className={styles.program_title}>{toTitleCase(`Popular ${title}`)}</p>
    </div>
  );
};

export default ProgramCard;
