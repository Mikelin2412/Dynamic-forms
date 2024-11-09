import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import styles from "./style.module.css";

const phoneRegExp =
  /^(\+375|8)(\s|-)?(17|25|29|33|44)(\s|-)?\d{3}(\s|-)?\d{2}(\s|-)?\d{2}$|^(\+375|8)(17|25|29|33|44)\d{7}$/;

const schema = yup
  .object({
    firstName: yup
      .string()
      .required()
      .min(1, "First Name must be at least 1 characters long"),
    lastName: yup
      .string()
      .required()
      .min(1, "Last Name must be at least 1 characters long"),
    email: yup.string().required().email("Email must be valid"),
    age: yup
      .number()
      .required()
      .positive("Age must be higher than 0")
      .integer(),
    phone: yup
      .string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid"),
    subject: yup
      .string()
      .required()
      .max(50, "Subject must be maximum 50 characters long"),
    role: yup.string().required(),
    additionalInfo: yup.array().of(
      yup.object({
        gender: yup.string(),
        message: yup
          .string()
          .max(300, "Message must be maximum 300 characters long"),
      })
    ),
  })
  .required();

const Form = ({ title }) => {
  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalInfo",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.firstNameBlock}>
        <label>First Name: *</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Your first name"
          {...register("firstName", { required: true })}
        />
        <p className={styles.error}>{errors.firstName?.message}</p>
      </div>
      <div className={styles.lastNameBlock}>
        <label>Last Name: *</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Your last name"
          {...register("lastName", { required: true })}
        />
        <p className={styles.error}>{errors.lastName?.message}</p>
      </div>
      <div className={styles.emailBlock}>
        <label>Email: *</label>
        <input
          type="email"
          className={styles.input}
          placeholder="Your email"
          {...register("email", { required: true })}
        />
        <p className={styles.error}>{errors.email?.message}</p>
      </div>
      <div className={styles.phoneBlock}>
        <label>Phone number: *</label>
        <input
          className={styles.input}
          type="tel"
          placeholder="Your number"
          {...register("phone")}
        />
        <p className={styles.error}>{errors.phone?.message}</p>
      </div>
      <div className={styles.ageBlock}>
        <label>Age: *</label>
        <input
          type="number"
          className={styles.input}
          min={1}
          max={100}
          placeholder="Your age"
          {...register("age")}
        />
        <p className={styles.error}>{errors.age?.message}</p>
      </div>
      <div className={styles.roleBlock}>
        <label>Role: *</label>
        <select {...register("role")}>
          <option value="frontend developer">Frontend Developer</option>
          <option value="backend developer">Backend Developer</option>
          <option value="project manager">Project Manager</option>
          <option value="business analyst">Business Analyst</option>
          <option value="ux/ui designer">UX/UI Designer</option>
          <option value="cybersecurity specialist">
            Cybersecurity Specialist
          </option>
        </select>
        <p className={styles.error}>{errors.role?.message}</p>
      </div>
      <div className={styles.subjectBlock}>
        <label>Subject: *</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Subject"
          {...register("subject")}
        />
        <p className={styles.error}>{errors.subject?.message}</p>
      </div>

      {!isAdditionalInfoVisible ? (
        <button
          type="button"
          onClick={() => {
            append({ gender: "", message: "" });
            setIsAdditionalInfoVisible(true);
          }}
        >
          Add Additional Info
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            remove(0);
            setIsAdditionalInfoVisible(false);
          }}
        >
          Close Additional Info
        </button>
      )}

      {fields.map((field, index) => (
        <div className={styles.additionalInfoBlock} key={field.id}>
          <div className={styles.genderBlock}>
            <label>Gender:</label>
            <select {...register(`additionalInfo.${index}.gender`)}>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
            <p className={styles.error}>
              {errors.additionalInfo?.[index]?.gender?.message}
            </p>
          </div>
          <div className={styles.messageBlock}>
            <label>Message:</label>
            <textarea
              placeholder="Message"
              {...register(`additionalInfo.${index}.message`)}
            ></textarea>
            <p className={styles.error}>
              {errors.additionalInfo?.[index]?.message?.message}
            </p>
          </div>
        </div>
      ))}

      <button className={styles.submitButton} type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
