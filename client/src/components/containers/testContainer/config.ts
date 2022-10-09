import { TestType } from "./types";

export const testConfig: TestType[] = [
  {
    id: "test-one",
    questions: [
      {
        id: "q1",
        title: "Do you need more plants?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quo totam magni, doloribus cupiditate tenetur deleniti mollitia temporibus modi hic pariatur laboriosam, sapiente cum. Neque numquam assumenda aut veniam asperiores?",
        answers: [
          { id: "q1-1", value: "Never" },
          { id: "q1-2", value: "Sometimes" },
          { id: "q1-3", value: "Casually" },
          { id: "q1-4", value: "Always" },
        ],
      },
      {
        id: "q2",
        title: "Do you feel awkward?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quo totam magni, doloribus cupiditate tenetur deleniti mollitia temporibus modi hic pariatur laboriosam, sapiente cum. Neque numquam assumenda aut veniam asperiores?",
        answers: [
          { id: "q2-1", value: "Never" },
          { id: "q2-2", value: "Sometimes" },
          { id: "q2-3", value: "Casually" },
          { id: "q2-4", value: "Always" },
        ],
      },
      {
        id: "q3",
        title: "Do you need coffee?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quo totam magni, doloribus cupiditate tenetur deleniti mollitia temporibus modi hic pariatur laboriosam, sapiente cum. Neque numquam assumenda aut veniam asperiores?",
        answers: [
          { id: "q3-1", value: "Never" },
          { id: "q3-2", value: "Sometimes" },
          { id: "q3-3", value: "Casually" },
          { id: "q3-4", value: "Always" },
        ],
      },
    ],
  },
  {
    id: "test-two",
    questions: [
      {
        id: "q1",
        title: "Do you need more food?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quo totam magni, doloribus cupiditate tenetur deleniti mollitia temporibus modi hic pariatur laboriosam, sapiente cum. Neque numquam assumenda aut veniam asperiores?",
        answers: [
          { id: "q1-1", value: "Never" },
          { id: "q1-2", value: "Sometimes" },
          { id: "q1-3", value: "Casually" },
          { id: "q1-4", value: "Always" },
        ],
      },
      {
        id: "q2",
        title: "Do you like honey?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quo totam magni, doloribus cupiditate tenetur deleniti mollitia temporibus modi hic pariatur laboriosam, sapiente cum. Neque numquam assumenda aut veniam asperiores?",
        answers: [
          { id: "q2-1", value: "Never" },
          { id: "q2-2", value: "Sometimes" },
          { id: "q2-3", value: "Casually" },
          { id: "q2-4", value: "Always" },
        ],
      },
    ],
  },
];
