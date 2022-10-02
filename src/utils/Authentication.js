export const ApiAuthentication = async () => {
  try {
    const response = await fetch(
      "/SharedServices/SharedData.svc/rest/Authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          UserName: "Vogues",
          Password: "Voguesapi@123",
          EndUserIp: "192.168.11.120",
          ClientId: "ApiIntegrationNew",
        }),
      }
    );
    const data = await response.json();
    const day = new Date();
    const nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    const tokenObject = {
      startDate: day,
      endDate: nextDay,
      TokenId: data.TokenId,
      MemberId: data.Member.MemberId,
      AgencyId: data.Member.AgencyId,
    };
    localStorage.setItem("AuthenticationToken", JSON.stringify(tokenObject));

    // return data.TokenId;
    return { TokenId: data.TokenId };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};
