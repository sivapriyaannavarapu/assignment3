import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Payment.css";
// Import images
import Cash from '../assets/Cash.png';
import DD from '../assets/DD.png';
import Cheque from '../assets/Cheque.png';
import Vector from '../assets/Vector.png';

const validationSchema = Yup.object().shape({
  chequeAmount: Yup.string().required("Amount is required"),
  payDate: Yup.date().required("Pay Date is required"),
  paymentYear: Yup.string().required("Select a year"),
  feeHead: Yup.string().required("Fee Head is required"),
  amountIn: Yup.string().required("Enter Amount In"),
  pocketMoney: Yup.string().required("Enter Pocket Money"),
  description: Yup.string().required("Description is required"),
  receiptNo: Yup.string().required("Receipt number required"),
  organization: Yup.string().when("paymentMode", {
    is: (val) => val === "cheque" || val === "dd",
    then: (schema) => schema.required("Select Organization"),
  }),
  chequeDate: Yup.date().when("paymentMode", {
    is: (val) => val === "cheque" || val === "dd",
    then: (schema) => schema.required("Cheque/DD Name required"),
  }),
  chequeNo: Yup.string().when("paymentMode", {
    is: (val) => val === "cheque" || val === "dd",
    then: (schema) => schema.required("Cheque/DD number required"),
  }),
  bank: Yup.string().when("paymentMode", {
    is: (val) => val === "cheque" || val === "dd",
    then: (schema) => schema.required("Bank name is required"),
  }),
  branch: Yup.string().when("paymentMode", {
    is: (val) => val === "cheque" || val === "dd",
    then: (schema) => schema.required("Branch is required"),
  }),
  city: Yup.string().when("paymentMode", {
    is: (val) => val === "cheque" || val === "dd",
    then: (schema) => schema.required("City is required"),
  }),
  ifsc: Yup.string()
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code")
    .when("paymentMode", {
      is: (val) => val === "cheque" || val === "dd",
      then: (schema) => schema.required("IFSC code is required"),
    }),
});

const initialValues = {
  paymentMode: "",
  chequeAmount: "",
  payDate: "",
  paymentYear: "",
  feeHead: "",
  totalDue: "30,000",
  amountIn: "",
  pocketMoney: "",
  bookFee: "FEE",
  description: "",
  receiptNo: "",
  organization: "",
  chequeNo: "",
  bank: "",
  branch: "",
  city: "",
  ifsc: "",
};

const FeePaymentForm = () => {
  const onSubmit = (values) => {
    console.log("Submitted Values:", values);
    alert("Form Submitted Successfully");
  };
  

  return (
    <div className="paymentContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="form-container">
            {/* Payment Mode Section */}
            <div className="form_container_header">
              <div className="paymentTypes">
                {[
                  { mode: "cash", label: "Cash", icon: Cash },
                  { mode: "dd", label: "DD", icon: DD },
                  { mode: "cheque", label: "Cheque", icon: Cheque },
                  { mode: "card", label: "Credit/Debit Card", icon: Vector },
                ].map(({ mode, label, icon }) => (
                  <button
                    key={mode}
                    type="button"
                    className={`paymentModeBtn ${values.paymentMode === mode ? "active" : ""}`}
                    onClick={() => setFieldValue("paymentMode", mode)}
                  >
                    <span className="icon">
                      <img src={icon} alt={label} className="payment-icon" />
                    </span>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="MainForms">
              {/* Payment Info Section */}
              <div className="form_section1">
                <div className="input-group">
                  <label>Cheque/DD Amount</label>
                  <Field name="chequeAmount" placeholder="Enter Amount" />
                  <ErrorMessage name="chequeAmount" component="div" className="error" />
                </div>

                <div className="input-group">
                  <label>Pay Date</label>
                  <Field name="payDate" type="date" />
                  <ErrorMessage name="payDate" component="div" className="error" />
                </div>

                <div className="input-group">
                  <label>Fee Payment Year</label>
                  <Field as="select" name="paymentYear">
                    <option value="">Select</option>
                    <option value="Jr Intermediate">Jr Intermediate</option>
                    <option value="Sr Intermediate">Sr Intermediate</option>
                  </Field>
                  <ErrorMessage name="paymentYear" component="div" className="error" />
                </div>

                <div className="input-group">
                  <label>Fee Head</label>
                  <Field as="select" name="feeHead">
                    <option value="">Select</option>
                    <option value="FEE">FEE</option>
                    <option value="TUITION">TUITION</option>
                  </Field>
                  <ErrorMessage name="feeHead" component="div" className="error" />
                </div>

                <div className="input-group">
                  <label>Total Due</label>
                  <Field name="totalDue" disabled />
                </div>

                <div className="input-group">
                  <label>Amount In</label>
                  <Field name="amountIn" placeholder="Enter Amount" />
                  <ErrorMessage name="amountIn" component="div" className="error" />
                </div>

                <div className="input-group">
                  <label>Pocket Money</label>
                  <Field name="pocketMoney" placeholder="Enter Pocket Money" />
                  <ErrorMessage name="pocketMoney" component="div" className="error" />
                </div>

                <div className="input-group">
                  <label>Akash Books</label>
                  <Field name="bookFee" disabled />
                </div>

                <div className="input-group full-width">
                  <label>Description</label>
                  <Field name="description" placeholder="Enter Description" />
                  <ErrorMessage name="description" component="div" className="error" />
                </div>

                <div className="input-group">
                  <label>Pre Print Receipt No</label>
                  <Field name="receiptNo" placeholder="Enter Receipt No" />
                  <ErrorMessage name="receiptNo" component="div" className="error" />
                </div>
              </div>

              {/* Bank Details Section (Conditional) */}
              {(values.paymentMode === "cheque" || values.paymentMode === "dd") && (
                <div className="form_section2">
                  <div className="heading">
                    <h3>Bank Details</h3>
                  </div>
                  <div className="input-group full-width">
                    <label>Organization</label>
                    <Field as="select" name="organization">
                      <option value="">Select Organization</option>
                      <option value="Org A">Org A</option>
                      <option value="Org B">Org B</option>
                    </Field>
                    <ErrorMessage name="organization" component="div" className="error" />
                  </div>

                  <div className="input-group">
                    <label>Cheque/DD No</label>
                    <Field name="chequeNo" placeholder="Enter Cheque/DD No" />
                    <ErrorMessage name="chequeNo" component="div" className="error" />
                  </div>
                  <div className="input-group">
                    <label>Cheque/DD Date</label>
                    <Field name="chequeDate" placeholder="Enter Cheque/DD Date" type="date" />
                    <ErrorMessage name="chequeDate" component="div" className="error" />
                  </div>
                  <div className="input-group">
                    <label>Bank</label>
                    <Field name="bank" placeholder="Enter Bank Name" />
                    <ErrorMessage name="bank" component="div" className="error" />
                  </div>

                  <div className="input-group">
                    <label>Branch</label>
                    <Field name="branch" placeholder="Enter Branch" />
                    <ErrorMessage name="branch" component="div" className="error" />
                  </div>

                  <div className="input-group">
                    <label>City Name</label>
                    <Field name="city" placeholder="Enter City" />
                    <ErrorMessage name="city" component="div" className="error" />
                  </div>

                  <div className="input-group">
                    <label>IFSC Code</label>
                    <Field name="ifsc" placeholder="Enter IFSC Code" />
                    <ErrorMessage name="ifsc" component="div" className="error" />
                  </div>
                </div>
              )}
            </div>
            <div className="submit-btn">
              <button type="submit">Add Payment</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeePaymentForm;