import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReportItem = () => {
  const { data: reports = [] } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await fetch("https://luxury-wheel-server.vercel.app/reportedProducts");
      const data = await res.json();
      return data;
    },
  });

  console.log(reports);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
                reports.map((report, i) => 
                <tr key={i} >
                    <th>{report.name}</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportItem;
