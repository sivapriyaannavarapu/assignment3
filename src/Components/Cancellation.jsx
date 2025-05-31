import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Cancellation.css";
import { Button, Stack, Box } from '@mui/material';
import { Add, Delete, Edit, KeyboardArrowDown, LocalPrintshopOutlined, RestoreOutlined } from '@mui/icons-material';

const Cancellation = () => {
    const formik = useFormik({
        initialValues: {
            receiptNo: "",
            prePrintReceiptNo: "",
            paidAmount: "",
            notes: "",
        },
        validationSchema: Yup.object({
            receiptNo: Yup.string()
                .required("Receipt No is required")
                .matches(/^\d+$/, "Must be only digits"),
            prePrintReceiptNo: Yup.string()
                .required("Pre Print Receipt No is required")
                .matches(/^\d+$/, "Must be only digits"),
            paidAmount: Yup.number()
                .typeError("Must be a number")
                .positive("Must be a positive amount")
                .required("Paid Amount is required"),
            notes: Yup.string().required("Notes are required"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="request-cancel-container">
            <div className="cancellation_header">
                <div className="header_left">
                    <h4>Request Cancellation</h4>
                    <p>
                        Students can submit a fee cancellation request, which will be
                        reviewed and processed by the department officer (DO) for approval.
                    </p>
                </div>
                <div className="cancellation_header_buttons">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<LocalPrintshopOutlined />}
                        size="small"
                        sx={{
                            textTransform: "capitalize",
                            width: "100%", // Set desired width
                            height: "36px", // Set desired height
                            '& .MuiButton-startIcon': {
                                marginRight: '4px', // Increase space between icon and text
                            },
                        }}
                        onClick={() => alert('Add Item')}
                    >
                        Receipt Print
                    </Button>
                    <Button
                        variant="outlined"
                        color="black"
                        endIcon={<RestoreOutlined />}
                        size="small"
                        sx={{
                            textTransform: "capitalize",
                            width: "100%", // Set desired width
                            height: "36px", // Set desired height
                            '& .MuiButton-endIcon': {
                                marginRight: '4px', // Increase space between icon and text
                                marginLeft: '8px',
                            },
                        }}
                        onClick={() => alert('Add Item')}
                    >
                        History
                    </Button>

                </div>
            </div>
            <div className="cancellation_form_line" ></div>
            <form onSubmit={formik.handleSubmit} className="cancel-form">

                <div className="form-row">
                    <div className="form-group">
                        <label>Receipt No</label>
                        <input
                            type="text"
                            name="receiptNo"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.receiptNo}
                        />
                        {formik.touched.receiptNo && formik.errors.receiptNo ? (
                            <div className="error">{formik.errors.receiptNo}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label>Pre Print Receipt No</label>
                        <input
                            type="text"
                            name="prePrintReceiptNo"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.prePrintReceiptNo}
                        />
                        {formik.touched.prePrintReceiptNo && formik.errors.prePrintReceiptNo ? (
                            <div className="error">{formik.errors.prePrintReceiptNo}</div>
                        ) : null}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Paid Amount</label>
                        <input
                            type="text"
                            name="paidAmount"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.paidAmount}
                        />
                        {formik.touched.paidAmount && formik.errors.paidAmount ? (
                            <div className="error">{formik.errors.paidAmount}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label>Notes</label>
                        <textarea
                            name="notes"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.notes}
                            rows="3"
                        />
                        {formik.touched.notes && formik.errors.notes ? (
                            <div className="error">{formik.errors.notes}</div>
                        ) : null}
                    </div>
                </div>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            textTransform: 'capitalize',
                            '& .text-content': {
                                px: 5, // 5 * 8px = 40px left/right padding
                            },
                        }}
                        onClick={() => alert('Clicked Primary Button')}
                    >
                        <span className="text-content">Request Cancel</span>
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Cancellation;