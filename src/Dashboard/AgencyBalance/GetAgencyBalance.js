import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const GetAgencyBalance = () => {
  const [agencyData, setAgencyData] = useState([]);
  const [rowData, setRowData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "element", headerName: "Element", width: 500 },
    { field: "value", headerName: "Value", width: 200 },
  ];

  const rows = [{ id: 1, element: "Aavaig", value: "Malhotra" }];

  const getAgencyBalance = (MemberId, AgencyId, TokenId) => {
    fetch("SharedServices/SharedData.svc/rest/GetAgencyBalance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ClientId: "ApiIntegrationNew",
        EndUserIp: "192.168.11.120",
        TokenAgencyId: AgencyId,
        TokenMemberId: MemberId,
        TokenId: TokenId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAgencyData([data]);

        const rowDataArr = Object.keys(data).map((el, idx) => {
          return {
            id: idx + 1,
            element: el,
            value: data[el],
          };
        });
        setRowData(rowDataArr);
        console.log(rowDataArr);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (localStorage.getItem("AuthenticationToken") !== undefined) {
      const AuthObject = JSON.parse(
        localStorage.getItem("AuthenticationToken")
      );

      getAgencyBalance(
        AuthObject.MemberId,
        AuthObject.AgencyId,
        AuthObject.TokenId
      );
    }
  }, []);

  return (
    <div style={{ height: 700, width: "100%" }}>
      {agencyData?.length > 0 && rowData?.length > 0 && (
        <DataGrid rows={rowData} columns={columns} disableSelectionOnClick />
      )}
    </div>
  );
};

export default GetAgencyBalance;
