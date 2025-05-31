import React from 'react';
import './Uniform.css';
 
const Uniform = () => {
    return (
        <div className="uniform-wrapper">
            <div className="uniform-header">
                <div>
                    <h2>Uniform Print</h2>
                    <p>
                        Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
                    </p>
                </div>
                <div className="uniform-header-buttons">
                    <button className="track-btn">
                        <span role="img" aria-label="track">📍</span> Tracking
                    </button>
                    <button className="history-btn">
                        <span role="img" aria-label="history">🔁</span> History
                    </button>
                </div>
            </div>
 
            <div className="uniform-card">
                <div className="uniform-form">
                    <div className="left-column">
                        <div className="form-group">
                            <label>Paid Receipt No</label>
                            <input type="text" placeholder="Enter Receipt No" />
                        </div>
                        <div className="form-group">
                            <label>Pre Print Receipt No</label>
                            <input type="text" placeholder="Enter Receipt No" />
                        </div>
                    </div>
 
                    <div className="right-column">
                        <div className="form-group">
                            <label>Notes</label>
                            <textarea placeholder="Enter Your Text Here" rows="5"></textarea>
                        </div>
                    </div>
                </div>
 
                <div className="form-footer">
                    <button className="print-btn">Print</button>
                </div>
            </div>
        </div>
    );
};
 
export default Uniform;