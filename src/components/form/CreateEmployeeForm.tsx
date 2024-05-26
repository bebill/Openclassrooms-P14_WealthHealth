import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/slices/employeeSlice";
import { states } from "../../data/statesData";
import { Employee } from "../../interfaces/employeeInterface";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";
import { FormDropdown } from "./FormDropdown";
import { FormDatePicker } from "./FormDatePicker";
import { validateForm } from "../utils/formValidation";
import { FormError } from "./FormError";
import { Modal } from "bld-typescript-react-modal";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
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
      openModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
  };
  return (
    <form className="create-employee-form" onSubmit={handleSubmit}>
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
      <FormButton onClick={handleButtonClick} label="Save" />{" "}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={<p>Employee Created!</p>}
        className="modal-content"
        closeButton
        customCloseButton="×"
        width="300px"
        height="100px"
        ariaLabel="Modal label"
        ariaLabelledBy="modal-title"
        ariaDescribedBy="modal-description"
        role="dialog"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      />
    </form>
  );
};
