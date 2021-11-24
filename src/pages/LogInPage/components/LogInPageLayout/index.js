const LogInPageLayout = ({ formValue, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                type='email'
                value={formValue.email}
                name="email"
                onChange={onChange}
            />
            <input
                type='password'
                value={formValue.password}
                name="password"
                onChange={onChange}
            />
            <button>Login</button>
        </form>
    );
};

export default LogInPageLayout;