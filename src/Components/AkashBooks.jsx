import React from 'react';
import './AkashBooks.css';
 
const AkashBooks = () => {
    return (
        <div className="akash-books-container">
            <h2 className="title">Akash Books</h2>
            <p className="subtitle">
                Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
            </p>
 
            <div className="top-buttons">
                <button className="track-btn">Tracking</button>
                <button className="history-btn">History</button>
            </div>
 
            <div className="form-card">
                <div className="form-columns">
                    {/* Left Column */}
                    <div className="form-column">
                        <div className="form-group">
                            <label>Payment Status</label>
                            <select>
                                <option>Select Status</option>
                                <option>Paid</option>
                                <option>Unpaid</option>
                            </select>
                        </div>
 
                        <div className="form-group">
                            <label>Paid Receipt No</label>
                            <input type="text" placeholder="Enter Receipt No" />
                        </div>
 
                        <div className="form-group">
                            <label>Pre Print Receipt No</label>
                            <input type="text" placeholder="Enter Receipt No" />
                        </div>
                    </div>
 
                    {/* Right Column */}
                    <div className="form-column">
                        <div className="form-group">
                            <label>Books for Class</label>
                            <select>
                                <option>Sr Intermediate</option>
                                <option>Jr Intermediate</option>
                                <option>High School</option>
                            </select>
                        </div>
 
                        <div className="form-group">
                            <label>Notes</label>
                            <textarea placeholder="Enter Your Text Here"></textarea>
                        </div>
                    </div>
                </div>
 
                <div className="print-button">
                    <button>Print</button>
                </div>
            </div>
        </div>
    );
};
 
export default AkashBooks;