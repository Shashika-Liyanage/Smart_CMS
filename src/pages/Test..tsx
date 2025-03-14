import { Button, Select, Typography } from 'antd';
import { useTheme } from '../context/theme/Theme.context';
import { useAlert } from '../hooks/useAlert';
import TextField from '../components/inputs/TextField';
import { useForm } from 'react-hook-form';
import Validation from '../utils/Validations';

export default function Test({}: Props) {
  const te = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({});
  const { showSuccess, showError } = useAlert();

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleBlur() {
    console.log('blur');
  }

  function handleFocus() {
    console.log('focus');
  }

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  return (
    <div>
      <div>
        <Typography>Form Validation Example</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            placeholder={''}
            control={control}
            label="Phone Number"
            {...Validation.apply(register, 'phone', {
              required: true,
              phone: true,
            })}
            error={errors.phone}
          />

          <TextField
            placeholder={''}
            control={control}
            label="Email"
            {...Validation.apply(register, 'email', {
              required: true,
              email: true,
            })}
            error={errors.email}
          />

          <TextField
            placeholder={''}
            control={control}
            label="Age"
            {...Validation.apply(register, 'age', {
              required: true,
              onlyNumbers: true,
              range: { min: 18, max: 100 },
            })}
            error={errors.age}
          />

          <Button type="primary" htmlType="submit" style={{ marginTop: '5px' }}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
