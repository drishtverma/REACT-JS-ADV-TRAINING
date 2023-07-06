export function Login() {
  const handleSignIn = () => {
    console.log('handle Sign in');
    alert('demo');
  };
  return (
    <div>
      <div>
        <input
          data-testid='email'
          type='email'
          name='email'
          placeholder='email'
        />
      </div>
      <div>
        <input
          data-testid='password'
          type='password'
          name='password'
          placeholder='password'
        />
      </div>

      <div>
        <button data-testid='signin' onClick={handleSignIn}>
          Sign In
        </button>
        <button data-testid='signup' type='button'>
          Sign Up
        </button>
      </div>
    </div>
  );
}
