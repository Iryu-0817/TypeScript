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

  //   const user = {
  //     userId: 1,
  //     userName: "John Doe",
  //     age: 30,
  //     email: "email@gmial.com",
  //     isActive: true,
  //   };
  //   // オブジェクトの型を定義する
  //   //   interface UserProps {
  //   //     userId: number;
  //   //     userName: string;
  //   //     age: number;
  //   //     email: string;
  //   //     isActive: boolean;
  //   //   }

  //   //   interface AdminUser extends UserProps {
  //   //     role: "admin";
  //   //   }

  //   type UserProps = {
  //     userId: number;
  //     userName: string;
  //     age: number;
  //     email: string;
  //     isActive: boolean;
  //   };

  //   type AdminUser = UserProps & {
  //     role: "admin";
  //   };

  //   const createAccount = (user: AdminUser) => {
  //     // 本来はDBに保存する処理をここに書く
  //   };

  //   createAccount({
  //     userId: 1,
  //     userName: "John Doe",
  //     age: 30,
  //     email: "email@gmial.com",
  //     isActive: true,
  //     role: "admin",
  //   });

  //   class User {
  //     userId: number;
  //     name: string;
  //     age: number;
  //     email: string;
  //     isActive: boolean;

  //     constructor(
  //       userId: number,
  //       name: string,
  //       age: number,
  //       email: string,
  //       isActive: boolean
  //     ) {
  //       this.userId = userId;
  //       this.name = name;
  //       this.age = age;
  //       this.email = email;
  //       this.isActive = isActive;
  //     }

  //     getProfile(): string {
  //       return `name: ${this.name}, age: ${this.age}`;
  //     }
  //   }
  //   const user = new User(1, "John Doe", 30, "John@gmail.com", true);

  //   ここでは、型が何かはわからない
  const foo = <T>(arg: T): T => {
    return arg;
  };

  //   よびだすときに型を指定すると、型が決まる
  foo<string>("Hello World");
};
