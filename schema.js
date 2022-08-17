import * as yup from "yup";
import {
  abhyasiid_regex,
  validateEmailId,
  validatePhoneNumber,
  validateWordLimit,
} from "./validations";

// const phoneRegExp = /(^(?!0+$)\d{12}$)/;

function isValidAbyasiId1(message) {
  return this.test("isValidAbyasiId", message, function reqValid(value) {
    const { path, createError } = this;
    // if (!value) {
    //   return createError({ path, message: message ?? "REQUIRED_ERROR_MESSAGE" });
    // }
    // if (value.length < 3) {
    //   return createError({ path, message: message ?? "TOO_SMALL_ERROR_MESSAGE" });
    // }
    if (value && !value.match(abhyasiid_regex)) {
      return createError({
        path,
        message: message ?? "INVALID_FORMAT_ERROR_MESSAGE",
      });
    }

    return true;
  });
}

yup.addMethod(yup.string, "isValidAbyasiId1", isValidAbyasiId1);

export const EventSchema = yup
  .object({
    title: yup
      .string()
      .required("Event title is a required field")
      .transform((orig) => orig.replace(/  +/g, " ")),
    about: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .test("wordLimit", "Not more than 100 words", (val1) =>
            validateWordLimit(val1),
          )
          .transform((orig) => orig.replace(/  +/g, " "))
          .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed");
      }
      return yup.string().transform((orig) => orig.replace(/  +/g, " "));
    }),
    start_datetime: yup
      .date()
      .required("Start date is a required field")
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr)),
    end_datetime: yup
      .date()
      .required("End date is a required field")
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr)),
    organization: yup.string().required("Organization is a required field"),
    organizationOthers: yup.string().when("organization", {
      is: "Others",
      then: yup
        .string()
        .required("Enter other organization")
        .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed")
        .transform((orig) => orig.replace(/  +/g, " ")),
    }),
    sector: yup.string().required("Sector is a required field"),
    sectorOthers: yup.string().when("sector", {
      is: "Others",
      then: yup
        .string()
        .required("Enter other sector")
        .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed")
        .transform((orig) => orig.replace(/  +/g, " ")),
    }),
    location: yup
      .string()
      .required("Location is a required field")
      .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed")
      .transform((orig) => orig.replace(/  +/g, " ")),
    typeOfEvent: yup.string().required("Type of event is a required field"),
    typeOfEventOthers: yup.string().when("typeOfEvent", {
      is: "Others",
      then: yup
        .string()
        .required("Enter other type of event")
        .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed")
        .transform((orig) => orig.replace(/  +/g, " ")),
    }),
    maxParticipants: yup
      .number()
      .typeError("Enter a Valid value")
      .positive("Must be more than 0")
      .integer("Enter a Valid value")
      .required("Max Participants is a required field"),

    // endDate: yup.date().required("Event end date is a required field").nullable()
    //   .default(undefined),
    // govtFlag: yup.bool().oneOf([true], "Govt flag is required field")
    // flavor1: yup
    //   .string()
    //   .required('Please select a flavor')
    //   .typeError('Flavor 1 must be required'),
    // flavor2: yup
    //   .object()
    //   .required('Please select a flavor')
    //   .typeError('Flavor 2 must be required'),
  })
  .required();

export const CoordinatorSchema = yup
  .object({
    name: yup
      .string()
      .required("Name is a required field")
      .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed")
      .transform((orig) => orig.replace(/  +/g, " ")),
    phone: yup
      .string()
      .required("Phone number is a required field")
      .test("validatePhone", "Invalid Phone Number", (val1) =>
        validatePhoneNumber(val1),
      ),
    email: yup
      .string()
      .required("Email is a required field")
      .email("Email is invalid")
      .test("validateEmail", "Email is invalid", (val1) =>
        validateEmailId(val1),
      ),
    srcm_id: yup.string().isValidAbyasiId1("SRCM ID is invalid."),
    srcmCenter: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed")
          .transform((orig) => orig.replace(/  +/g, " "));
      }
      return yup.string().transform((orig) => orig.replace(/  +/g, " "));
    }),
  })
  .required();

export const PointOfContactSchema = yup
  .object({
    name: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .transform((orig) => orig.replace(/  +/g, " "))
          .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed");
      }
      return yup.string().transform((orig) => orig.replace(/  +/g, " "));
    }),
    phone: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .test("validatePhone", "Invalid Phone Number", (val1) =>
            validatePhoneNumber(val1),
          );
      }
      return yup.string();
    }),
    remarks: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .test("wordLimit", "Not more than 100 words", (val1) =>
            validateWordLimit(val1),
          )
          .transform((orig) => orig.replace(/  +/g, " "))
          .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed");
      }
      return yup.string().transform((orig) => orig.replace(/  +/g, " "));
    }),
    email: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .email("Email is invalid")
          .test("validateEmail", "Email is invalid", (val1) =>
            validateEmailId(val1),
          );
      }
      return yup.string();
    }),
  })
  .required();

export const SessionFormSchema = yup
  .object({
    session_date: yup
      .date()
      .required("Session date is a required field")
      .nullable()
      .default(undefined)
      .transform((curr, orig) => (orig === "" ? null : curr)),
    participants: yup
      .number()
      .required("Participants is a required field")
      .typeError("Enter a Valid value")
      .positive("Must be more than 0")
      .integer("Enter a Valid value"),
    phone: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .test("validatePhone", "Invalid Phone Number", (val1) =>
            validatePhoneNumber(val1),
          );
      }
      return yup.string();
    }),
    srcm_id: yup.string().isValidAbyasiId1("SRCM ID is invalid."),
    name: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .transform((orig) => orig.replace(/  +/g, " "))
          .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed");
      }
      return yup.string().transform((orig) => orig.replace(/  +/g, " "));
    }),
  })
  .required();

export const RecordTestimonialSchema = yup
  .object({
    // testimonial: yup.string().required("Testimonial is a required field"),
    remarks: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .test("wordLimit", "Not more than 100 words", (val1) =>
            validateWordLimit(val1),
          )
          .transform((orig) => orig.replace(/  +/g, " "))
          .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed");
      }
      return yup.string().transform((orig) => orig.replace(/  +/g, " "));
    }),
  })
  .required();

export const RegularParticipantsSchema = yup
  .object({
    name: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .transform((orig) => orig.replace(/  +/g, " "))
          .matches(/^[aA-zZ0-9 "!?,.-\s]+$/, "Special characters not allowed");
      }
      return yup.string().transform((orig) => orig.replace(/  +/g, " "));
    }),
    // phone: yup.string().required("Phone is a required field"),
    phone: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .test("validatePhone", "Invalid Phone Number", (val1) =>
            validatePhoneNumber(val1),
          );
      }
      return yup.string();
    }),
    email: yup.lazy((val) => {
      if (val) {
        return yup
          .string()
          .email("Email is invalid")
          .test("validateEmail", "Email is invalid", (val1) =>
            validateEmailId(val1),
          );
      }
      return yup.string();
    }),
  })
  .required();
