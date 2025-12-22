import type { ReactNode } from "react";

type WorkoutGridNotesProps = {
  children: ReactNode;
};

const WorkoutGridNotes = ({ children }: WorkoutGridNotesProps) => {
  return (
    <div>
      <ul style={{ padding: "0px 30px 0px 30px", color: "gray" }}>
        {children}
      </ul>
    </div>
  );
};

export default WorkoutGridNotes;
