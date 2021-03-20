import React from "react";
import { useEvents } from "../lib/api";

export const Calendar = () => {
  const {
    isLoading,
    data: { data: { allEvents = [] } = {} } = {},
    error,
  } = useEvents();
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Oops...</p>;

  const formattedEvents = allEvents.map((x) => ({
    text: x.name,
    id: x.id,
    startDate: x.dateFrom,
    endDate: x.dateTo,
  }));
  const currentDate = new Date();

  return (
    <Scheduler
      timeZone="Europe/Paris"
      dataSource={formattedEvents}
      // dataCellComponent={DataCell}
      // resourceCellComponent={ResourceCell}
      groups={["id"]}
      views={["month", "timelineMonth", "agenda"]}
      defaultCurrentView="month"
      defaultCurrentDate={currentDate}
      height={600}
      showAllDayPanel
      firstDayOfWeek={1}
      startDayHour={8}
      endDayHour={18}
    >
      {/* <Resource
          label="jesaispas"
          fieldExpr="id"
          dataSource={employees}
          allowMultiple={false}
        /> */}
    </Scheduler>
  );
};
