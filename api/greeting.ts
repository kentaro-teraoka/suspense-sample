export type GreetingType = {
  iconSrc: `/images/${string}`;
  userName: string;
  message: string;
}

const greetings: GreetingType[] = [
  {
    iconSrc: '/images/user_01.png',
    userName: 'Japanese User 🇯🇵',
    message: 'こんにちは、Suspense Sample へようこそ！', // 日本語
  },
  {
    iconSrc: '/images/user_02.png',
    userName: 'English User 🇺🇸',
    message: 'Hello, welcome to the Suspense Sample!', // 英語
  },
  {
    iconSrc: '/images/user_03.png',
    userName: 'French User 🇫🇷',
    message: 'Bonjour, bienvenue dans le Suspense Sample !', // フランス語
  },
  {
    iconSrc: '/images/user_04.png',
    userName: 'Spanish User 🇪🇸',
    message: '¡Hola, bienvenido al Suspense Sample!', // スペイン語
  },
  {
    iconSrc: '/images/user_05.png',
    userName: 'Chinese User 🇨🇳',
    message: '你好，欢迎来到 Suspense Sample！', // 中国語（簡体字）
  },
  {
    iconSrc: '/images/user_06.png',
    userName: 'Korean User 🇰🇷',
    message: '안녕하세요, Suspense Sample에 오신 것을 환영합니다!' // 韓国語
  },
]

export const fetchGreetings = async (): Promise<GreetingType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(greetings)
    }, 3000);
  });
}

export const fetchRandomGreeting = async (): Promise<GreetingType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length)
      resolve(greetings[randomIndex])
    }, 1000);
  });
}