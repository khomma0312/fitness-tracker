import { Button, Card, TextInput, Title } from '@mantine/core';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignin } from '@/hooks/auth/useSignin';
import { FormValues, schema } from './schema';
import styles from './styles.module.css';

interface SigninFormProps {
  title: string;
}

export const SigninForm = ({ title }: SigninFormProps) => {
  const { signin, isPending, isError } = useSignin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onValid: SubmitHandler<FormValues> = ({ email, password }) => {
    signin({ email, password });
  };

  return (
    <Card className={styles.card} padding="xl">
      <form className={styles.form} onSubmit={handleSubmit(onValid)}>
        <Title order={3} className={styles.title}>
          {title}
        </Title>
        <TextInput
          label="メールアドレス"
          {...register('email')}
          disabled={isPending}
          error={
            isError
              ? 'メールアドレスまたはパスワードが正しくありません'
              : errors.email?.message
          }
        />
        <TextInput
          label="パスワード"
          type="password"
          {...register('password')}
          disabled={isPending}
          error={
            isError
              ? 'メールアドレスまたはパスワードが正しくありません'
              : errors.password?.message
          }
        />
        <Button type="submit" color="cyan">
          {title}
        </Button>
      </form>
    </Card>
  );
};
