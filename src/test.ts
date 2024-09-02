export const test = () => {
  //   const name: string = "John Doe";
  //   const age: number = 30;
  //   const isAdult: boolean = false;
  //   const hobbies: string[] = ["reading", "coding", "gaming"];
  //   const address: { street: string; city: string } = {
  //     street: "123 Main St",
  //     city: "New York",
  //   };
  //   const today: Date = new Date();
  //   const none: null = null;
  //   const notDefined: undefined = undefined;
  //   const radom: any = "Hello World";
  //   // ユニオン型
  //   const gender: "male" | "female" = "male";
  //   const value: string | number | null = "Hello World";
  //   const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
  //     const reversedArray: string[] = [];
  //     let index: number = arr.length - 1;
  //     while (index >= 0) {
  //       reversedArray.push(arr[index]);
  //       index--;
  //     }
  //     if (hasTom) {
  //       reversedArray.push("Tom");
  //     }
  //     return reversedArray;
  //   };
  //   console.log(reverseArray(["a", "b", "c"], true));

  const user = {
    userId: 1,
    userName: "John Doe",
    age: 30,
    email: "email@gmial.com",
    isActive: true,
  };
  // オブジェクトの型を定義する
  interface UserProps {
    userId: number;
    userName: string;
    age: number;
    email: string;
    isActive: boolean;
  }

  const createAccount = (user: UserProps) => {
    // 本来はDBに保存する処理をここに書く
  };

  createAccount({
    userId: 1,
    userName: "John Doe",
    age: 30,
    email: "email@gmial.com",
    isActive: true,
  });
};
