const reportData = {
  reportType: "Monthly",
  reportPeriod: "May 1, 2026 – May 31, 2026",
  store: "Spokane",

  employee: {
    name: "Kevin Patten",
    role: "Mobile Advisor",

    totalDevices: 38,
    totalConnected: 8,
    protection: "30.30%",

    grossAdds: 32,
    upgrades: 20,
    phonesSold: 30,

    accessoryDollars: "$2,062.98",
    apd: "$54.29",
    accessoriesSold: 62,
    quickChurn: 1,

    appleWatch: 3,
    ally: 3,
    homePhone: 1,
    tablets: 1
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  const dataCheck = document.createElement("p");
  dataCheck.textContent = `Data loaded for ${reportData.employee.name} — ${reportData.reportPeriod}`;
  dataCheck.style.color = "#071f41";
  dataCheck.style.fontWeight = "700";

  header.appendChild(dataCheck);

  console.log("Report data loaded:", reportData);
});
