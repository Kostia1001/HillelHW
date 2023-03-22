import useInput from "../hooks/useInput";
const Form = () => {
  const username = useInput();
  const password = useInput();
  const email = useInput();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          required
          type="text"
          placeholder="Username"
          value={username.value}
          onChange={username.handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={password.handleChange}
        />
        <input
          required
          type="text"
          placeholder="Email"
          value={email.value}
          onChange={email.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
