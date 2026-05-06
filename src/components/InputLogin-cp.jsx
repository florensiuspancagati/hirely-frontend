import useInput from '../hooks/useInput.jsx';

function InputLogin() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form action="" className="login-input">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          autoComplete="email"
          placeholder="Masukkan email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          autoComplete="current-password"
          placeholder="Masukkan password"
          required
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
}

export default InputLogin;