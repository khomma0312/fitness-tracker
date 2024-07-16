import { SigninForm } from '@/layouts/SigninForm';
import styles from './styles.module.css';
import { Title } from '@mantine/core';
import { BRAND_NAME } from '@/services/utils/constants';
import { useUser } from '@/hooks/api/useUser';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/services/utils/paths';

export const Signin = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    // 認証済みの場合はサインイン画面は出さずにダッシュボードにリダイレクト
    if (!isLoading && isAuthenticated) {
      navigate(paths.dashboard);
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <div className={styles.container}>
      <Title className={styles.logo} order={2}>
        {BRAND_NAME}
      </Title>
      <SigninForm title="ログイン" />
    </div>
  );
};
