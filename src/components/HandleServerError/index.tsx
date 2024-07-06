import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessage } from '../ErrorMessage';

interface HandleServerErrorProps {
  children: React.ReactNode;
}

export const ErrorFallback = () => {
  return <ErrorMessage />;
};

const onError = (error: Error) => {
  console.log('error.message', error.message);
};

export const HandleServerError = ({ children }: HandleServerErrorProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
      {children}
    </ErrorBoundary>
  );
};
