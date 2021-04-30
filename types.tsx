/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string,
  name: string,
  imageUrl: string
  firstName: string
}

export type Message = {
  id: string,
  body: string,
  createdAt: string,
  user: User
}

export type ChatRoom = {
  id: string,
  // users: User[],
  // lastMessage: Message,
  name : string,
  roomPic: string
}

export type Params = {
  id: string,
  name: string,
  roomPic: string
}

export type Route = {
  params: Params
}