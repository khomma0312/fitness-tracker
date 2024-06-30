import styles from "./styles.module.css";

export const ErrorMessage = () => {
  return (
    <div className={styles.container} role="alert">
      <div className={styles.message}>
        <p>リクエスト中にエラーが発生しました。</p>
        <p>恐れ入りますが時間をおいて再度お試しください。</p>
      </div>
    </div>
  );
};
