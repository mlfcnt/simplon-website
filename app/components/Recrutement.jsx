import React, { useState } from "react";
import { Event } from "./Event";
import { Summary } from "./Summary";
import { EventStageDevWeb } from "./EventStageDevWeb";
import { eFormationsTypes } from "../lib/constants/tags";

export const Recrutement = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <>
      <Summary />
      <Event
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        formationType={eFormationsTypes.courte}
      />
      <hr style={{ margin: "2rem" }} />
      <EventStageDevWeb
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        formationType={eFormationsTypes.longue}
      />
    </>
  );
};
