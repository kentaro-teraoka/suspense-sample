export const fetchIsLoggedIn = async (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(true)
      reject(new Error("ログイン状態の取得に失敗しました"));
    }, 2000);
  });
}