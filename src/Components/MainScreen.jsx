import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './MainScreen.css';
import dollar from '../assets/dollar.png';
import Payment from './Payment';
import Cancellation from './Cancellation';
import Concession from './Concession';
import PMIssue from './PMIssue';
import FeeInstallments from './FeeInstallments';
import AkashBooks from './AkashBooks';
import Transfers from './Transfers';
import Uniform from './Uniform';

const MainScreen = () => {
  const [activeYear, setActiveYear] = useState('2024-2025');
  const mainTabs = [
    { name: 'Student Profile', path: '/student-profile' },
    { name: 'Payments', path: '/payments' },
    { name: 'Transport', path: '/transport' },
    { name: 'Academics', path: '/academics' },
    { name: 'Alerts', path: '/alerts' },
    { name: 'History', path: '/history' },
    { name: 'Room Allotment', path: '/room-allotment' },
  ];

  const subTabs = [
    { name: 'Payments', path: '/payments' },
    { name: 'Cancellation', path: '/payments/cancellation' },
    { name: 'Concession', path: '/payments/concession' },
    { name: 'PM Issue', path: '/payments/pm-issue' },
    { name: 'Fee Installments', path: '/payments/fee-installments' },
    { name: 'Akash Books', path: '/payments/akash-books' },
    { name: 'Uniform', path: '/payments/uniform' },
    { name: 'Transfers', path: '/payments/transfers' },
  ];

  return (
    <div className="container">
      <div className="left_side_container">
        <div className="nav-drop">
          <div className="nav-bar">
            {mainTabs.map((tab, idx) => (
              <NavLink
                key={idx}
                to={tab.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                // Removed end={tab.path === '/payments'} to allow sub-routes to activate "Payments"
              >
                {tab.name}
              </NavLink>
            ))}
          </div>

          <div className="year-dropdown">
            <select value={activeYear} onChange={(e) => setActiveYear(e.target.value)}>
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
            </select>
          </div>
        </div>

        <Routes>
          <Route
            path="/payments/*"
            element={
              <>
                <div className="Payments">
                  <img src={dollar} alt="img" />
                  <div>
                    <h1>Payments</h1>
                    <p>Get all student details regarding fee payment, transport, pocket money, other fee heads</p>
                  </div>
                </div>

                <div className="sub-tabs">
                  {subTabs.map((tab, index) => (
                    <NavLink
                      key={index}
                      to={tab.path}
                      className={({ isActive }) => (isActive ? 'sub-tab active' : 'sub-tab')}
                      end={tab.path === '/payments'} // Keep this to ensure exact match for sub-tab
                    >
                      {tab.name}
                    </NavLink>
                  ))}
                </div>

                <div className="sub-tab-content">
                  <Routes>
                    <Route path="/" element={<Payment />} />
                    <Route path="/cancellation" element={<Cancellation />} />
                    <Route path="/concession" element={<Concession />} />
                    <Route path="/pm-issue" element={<PMIssue />} />
                    <Route path="/fee-installments" element={<FeeInstallments />} />
                    <Route path="/akash-books" element={<AkashBooks />} />
                    <Route path="/uniform" element={<Uniform />} />
                    <Route path="/transfers" element={<Transfers />} />
                  </Routes>
                </div>
              </>
            }
          />
          <Route path="*" element={<div>Select a tab to view content</div>} />
        </Routes>
      </div>

      <div className="right_side_container">
        {/* Optional: Add right side content here */}
      </div>
    </div>
  );
};

export default MainScreen;