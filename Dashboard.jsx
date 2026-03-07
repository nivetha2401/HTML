import React from "react";
import { Link } from "react-router-dom";

function Dashboard({page}) {

  const navStyle = {
    background:"#2c3e50",
    padding:"15px",
    textAlign:"center"
  };

  const linkStyle = {
    color:"white",
    margin:"15px",
    textDecoration:"none",
    fontSize:"18px"
  };

  const container = {
    width:"600px",
    margin:"40px auto"
  };

  const card = {
    background:"white",
    padding:"20px",
    margin:"15px 0",
    borderRadius:"8px",
    boxShadow:"0 3px 8px rgba(0,0,0,0.2)"
  };

  return (
    <div>

      <div style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/employees" style={linkStyle}>Employees</Link>
        <Link to="/reports" style={linkStyle}>Reports</Link>
      </div>

      <div style={container}>

        {page === "home" && (
          <div>

            <div style={card}>
              <h2>Company Dashboard</h2>
              <p>Welcome to the company management dashboard system.</p>
            </div>

            <div style={card}>
              <h3>Company Statistics</h3>
              <p>Total Employees : 120</p>
              <p>Active Projects : 15</p>
              <p>Departments : 6</p>
            </div>

            <div style={card}>
              <h3>Recent Updates</h3>
              <ul>
                <li>New employee onboarding completed</li>
                <li>Monthly meeting scheduled on Friday</li>
                <li>New project assigned to development team</li>
              </ul>
            </div>

          </div>
        )}

        {page === "employees" && (
          <div>

            <div style={card}>
              <h2>Employee Details</h2>
              <p>Total Employees : 120</p>
            </div>

            <div style={card}>
              <h3>Departments</h3>
              <ul>
                <li>Information Technology</li>
                <li>Human Resources</li>
                <li>Finance</li>
                <li>Marketing</li>
              </ul>
            </div>

            <div style={card}>
              <h3>Top Performers</h3>
              <ul>
                <li>Rahul Sharma – Software Engineer</li>
                <li>Anita Kumar – Project Manager</li>
                <li>Vikram Singh – Data Analyst</li>
              </ul>
            </div>

          </div>
        )}

        {page === "reports" && (
          <div>

            <div style={card}>
              <h2>Company Reports</h2>
              <p>Overview of company performance.</p>
            </div>

            <div style={card}>
              <h3>Financial Reports</h3>
              <ul>
                <li>Monthly Revenue Report</li>
                <li>Annual Profit Report</li>
                <li>Expense Analysis</li>
              </ul>
            </div>

            <div style={card}>
              <h3>Project Reports</h3>
              <ul>
                <li>Project Completion Status</li>
                <li>Team Productivity Report</li>
                <li>Client Feedback Summary</li>
              </ul>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;
