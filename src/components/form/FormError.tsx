export const FormError = ({ errorMsg }: any) => {
  return (
    <div className="form-error">
      <p className="error-message">{errorMsg}</p>
    </div>
  );
};
