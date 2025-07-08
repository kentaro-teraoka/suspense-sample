export type UserInfoType = {
  name: string;
  iconSrc: `/images/${string}`;
  description: string;
  comment: string;
}

const userInfo: UserInfoType = {
  name: "Shigoto Neko",
  iconSrc: '/images/user_01.png',
  description: "Front-end Engineer",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export const fetchUserInfo = async (): Promise<UserInfoType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userInfo)
    }, 2000);
  });
}

const userPostImages: string[] = [
  "https://picsum.photos/500?random=1",
  "https://picsum.photos/500?random=2",
  "https://picsum.photos/500?random=3",
  "https://picsum.photos/500?random=4",
  "https://picsum.photos/500?random=5",
  "https://picsum.photos/500?random=6",
  "https://picsum.photos/500?random=7",
  "https://picsum.photos/500?random=8",
  "https://picsum.photos/500?random=9",
  "https://picsum.photos/500?random=10",
]

export const fetchUserPostImages = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userPostImages)
    }, 4000);
  });
}