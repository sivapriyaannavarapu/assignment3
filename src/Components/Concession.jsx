import React from 'react';
import { Formik, Form, Field } from 'formik';
import './Concession.css';

const Concession = () => {
    const initialValues = {
        joinInfo: '',
        srIntermediate: '',
        receiptNo: '',
        approvedBy: '',
        reason: '',
    };

    const handleSubmit = (values) => {
        const printContent = `
      Concession Request
      -----------------
      Join Info: ${values.joinInfo || 'Not provided'}
      Sr Intermediate: ${values.srIntermediate || 'Not provided'}
      Receipt No: ${values.receiptNo || 'Not provided'}
      Approved By: ${values.approvedBy || 'Not provided'}
      Reason: ${values.reason || 'Not provided'}
    `;
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<pre>' + printContent + '</pre>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className="concession-page">
            <div className='text-buttons'>
                <div className='text'>
                    <h1>Concession</h1>
                    <p>Students can submit a fee concession request, which will be reviewed and processed by the office.</p>
                </div>
                <div className="button-group">
                    <button className="requests-btn">Requests</button>
                    <button className="history-btn">History</button>
                </div>
            </div>

            <div className="concession-card">
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {() => (
                        <Form className="concession-form">
                            <div className="column">
                                <div className="form-group">
                                    <label htmlFor="joinInfo">Join Info</label>
                                    <Field as="select" name="joinInfo" className="form-input">
                                        <option value="">Select</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                    </Field>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="srIntermediate">Sr Intermediate</label>
                                    <Field as="select" name="srIntermediate" className="form-input">
                                        <option value="">Select</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                    </Field>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="receiptNo">Enter Receipt No</label>
                                    <Field
                                        type="text"
                                        name="receiptNo"
                                        className="form-input"
                                        placeholder="Enter Receipt No"
                                    />
                                </div>
                            </div>

                            <div className="column">
                                <div className="form-group">
                                    <label htmlFor="approvedBy">Approved By</label>
                                    <Field
                                        type="text"
                                        name="approvedBy"
                                        className="form-input"
                                        placeholder="Enter Approved By"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="reason">Reason</label>
                                    <Field
                                        as="textarea"
                                        name="reason"
                                        className="form-input textarea"
                                        placeholder="Enter your text here"
                                    />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <button type="submit" className="print-btn">Print</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Concession;