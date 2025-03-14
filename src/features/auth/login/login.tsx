import React from 'react';
import { Button, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import TextField from '../../../components/inputs/TextField';
import Validation from '../../../utils/Validations';
import mockData from '../../../assets/mocks/auth-mock.json';
import { useAlert } from '../../../hooks/useAlert';
import { useApplicationContext } from '../../../context/ApplicationContext';
import { useNavigate } from 'react-router';

const { Text } = Typography;

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginForm>({});

  const { showError } = useAlert();
  const { setUser } = useApplicationContext();
  const navigate = useNavigate();

  const onSubmit = (data: LoginForm) => {
    const currentUser = mockData.users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (currentUser) {
      setUser(currentUser);
      navigate('/dashboard');
    } else {
      showError('Email or password is incorrect. Please try again.');
    }
  };

  return (
    <div>
      <div
        style={{
          maxWidth: 400,
          height: 350,
          padding: 22,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: 8,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
        }}
      >
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Login
        </Typography.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 8 }}>
            <TextField
              placeholder={'Email'}
              control={control}
              {...Validation.apply(register, 'email', {
                required: true,
                email: true,
              })}
              error={errors.email}
            />
            <div>
              <TextField
                placeholder={'Password'}
                control={control}
                {...Validation.apply(register, 'password', {
                  required: true,
                })}
                error={errors.password}
              />

              <div style={{ textAlign: 'right' }}>
                <Text type="secondary">
                  <a href="/forgot-password">Forgot Password?</a>
                </Text>
              </div>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ marginTop: 13 }}
            >
              Login
            </Button>
          </div>
        </form>

        <div style={{ textAlign: 'center', marginTop: 35 }}>
          <Text type="secondary">
            Don't have an account? <a href="/register">Create Account</a>
          </Text>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
