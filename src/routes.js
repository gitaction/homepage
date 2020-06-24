import DashboardPage from "./_views/Dashboard/Dashboard";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
