export const fetchGreetingMessage = async (): Promise<string> => {
  const messages = [
    'こんにちは、Suspense Sample へようこそ！', // 日本語
    'Hello, welcome to the Suspense Sample!', // 英語
    'Bonjour, bienvenue dans le Suspense Sample !', // フランス語
    '¡Hola, bienvenido al Suspense Sample!', // スペイン語
    '你好，欢迎来到 Suspense Sample！', // 中国語（簡体字）
    '안녕하세요, Suspense Sample에 오신 것을 환영합니다!' // 韓国語
  ]

  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * messages.length)
      resolve(messages[randomIndex])
    }, 2000);
  });
}