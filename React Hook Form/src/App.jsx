import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            className={errors.firstName ? "input-error" : ""}
            id="firstName"
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters long",
              },
            })}
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="middleName">Middle Name: </label>
          <input
            className={errors.middleName ? "input-error" : ""}
            id="middleName"
            {...register("middleName", {
              required: "Middle name is required",
              minLength: {
                value: 2,
                message: "Middle name must be at least 2 characters long",
              },
            })}
          />
          {errors.middleName && (
            <p className="error-message">{errors.middleName.message}</p>
          )}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            className={errors.lastName ? "input-error" : ""}
            id="lastName"
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters long",
              },
            })}
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
