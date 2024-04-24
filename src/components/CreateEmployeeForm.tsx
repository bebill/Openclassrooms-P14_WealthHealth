import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/slices/employeeSlice";
import { states } from "../data/statesData";
import { Employee } from "../interfaces/employeeInterface";
import { FormInput } from "./form/FormInput";
import { FormButton } from "./form/FormButton";
import { FormDropdown } from "./form/FormDropdown";
import { FormDatePicker } from "./form/FormDatePicker";
import { validateForm } from "./form/formValidation";
import { FormError } from "./form/FormError";

export const CreateEmployeeForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<Employee>({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    department: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Si le champ appartient à l'objet address
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      dispatch(addEmployee(formData));
      setFormData({
        firstName: "",
        lastName: "",
        birthDate: "",
        startDate: "",
        address: {
          street: "",
          city: "",
          state: "",
          zip: "",
        },
        department: "",
      });
    }
  };

  return (
    <form id="create-employee" onSubmit={handleSubmit}>
      <FormInput
        name="firstName"
        label="First Name"
        type="text"
        placeholder="Freen"
        value={formData.firstName}
        handleOnChange={handleChange}
      />
      <FormError errorMsg={errors.firstName} />
      <FormInput
        name="lastName"
        label="Last Name"
        type="text"
        placeholder="Sarocha"
        value={formData.lastName}
        handleOnChange={handleChange}
      />
      <FormError errorMsg={errors.lastName} />
      <FormDatePicker
        name="birthDate"
        label="Date of Birth"
        value={formData.birthDate}
        handleOnChange={handleChange}
      />
      <FormError errorMsg={errors.birthDate} />
      <FormDatePicker
        name="startDate"
        label="Start Date"
        value={formData.startDate}
        handleOnChange={handleChange}
      />
      <FormError errorMsg={errors.startDate} />
      <fieldset>
        <legend>Address</legend>
        <FormInput
          name="address.street"
          label="Street"
          type="text"
          placeholder="Hollywood Bv"
          value={formData.address.street}
          handleOnChange={handleChange}
        />
        <FormError errorMsg={errors.street} />

        <FormInput
          name="address.city"
          label="City"
          type="text"
          placeholder="Los Angeles"
          value={formData.address.city}
          handleOnChange={handleChange}
        />
        <FormError errorMsg={errors.city} />

        <FormDropdown
          name="address.state"
          label="State"
          value={formData.address.state}
          handleOnChange={handleChange}
          options={states.map((state) => state.name)}
        />
        <FormError errorMsg={errors.state} />

        <FormInput
          name="address.zip"
          label="Zip Code"
          type="number"
          placeholder="90210"
          value={formData.address.zip}
          handleOnChange={handleChange}
        />
        <FormError errorMsg={errors.zip} />
      </fieldset>
      <FormDropdown
        name="department"
        label="Department"
        value={formData.department}
        options={[
          "Sales",
          "Marketing",
          "Engineering",
          "Human Resources",
          "Legal",
        ]}
        handleOnChange={handleChange}
      />
      <FormError errorMsg={errors.department} />
      <FormButton label="Save" />{" "}
    </form>
  );
};
