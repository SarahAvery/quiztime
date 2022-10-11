import { TestType } from "./types";

export const testConfig: TestType[] = [
  {
    id: "test-one",
    name: "Coffee",
    questions: [
      {
        id: "q1",
        title: "How did the term cappuccino originate?",
        answers: [
          { id: "q1-1", value: "From the habit of the Capuchin friar." },
          { id: "q1-2", value: "It is the French term for “foam on coffee.”" },
          { id: "q1-3", value: "It is Italian for “frothy coffee drink.”" },
          { id: "q1-4", value: "It was a term invented by a coffee company." },
        ],
      },
      {
        id: "q2",
        title:
          "About how many espresso beans are required to make one espresso?",
        content:
          "Fun fact: The beans are roasted longer than usual, so it removes a lot of the acidity while releasing more oiliness. This creates a heavier, fuller feeling in the mouth.",
        answers: [
          { id: "q2-1", value: "22" },
          { id: "q2-2", value: "42" },
          { id: "q2-3", value: "60" },
          { id: "q2-4", value: "80" },
        ],
      },
      {
        id: "q3",
        title:
          "About how many coffee beans does it take to produce one pound of roasted coffee?",
        answers: [
          { id: "q3-1", value: "1,000" },
          { id: "q3-2", value: "2,000" },
          { id: "q3-3", value: "3,000" },
          { id: "q3-4", value: "4,000" },
        ],
      },
      {
        id: "q4",
        title: "How long does it take for a coffee tree to reach maturity?",
        content:
          "Fun Fact: Both Arabica and Robusta coffee plants will produce coffee beans for more than 25 years if they are well taken care of.",
        answers: [
          { id: "q4-1", value: "8 years" },
          { id: "q4-2", value: "2 years" },
          { id: "q4-3", value: "5 years" },
          { id: "q4-4", value: "3 years" },
        ],
      },
      {
        id: "q5",
        title: "How many cups of coffee are consumed each year in the world?",
        answers: [
          { id: "q5-1", value: "900 million" },
          { id: "q5-2", value: "2 billon" },
          { id: "q5-3", value: "200 billion" },
          { id: "q5-4", value: "400 billion" },
        ],
      },
      {
        id: "q6",
        title: "How did the term “Cup of Joe” originate?",
        answers: [
          {
            id: "q6-1",
            value:
              "It refers to a Navy admiral who banned alcohol aboard Navy ships.",
          },
          {
            id: "q6-2",
            value: "It refers to Joe Folgers, a prominent purveyor of coffee.",
          },
          {
            id: "q6-3",
            value: "It an Americanized version of the term “Cup of Java.”",
          },
          {
            id: "q6-4",
            value: "It comes from jojo, the African word for “bean.”",
          },
        ],
      },
      {
        id: "q7",
        title:
          "While wine is said to have about 400 distinct flavor characteristics, how many does coffee exhibit?",
        content:
          "Flavor characteristics are largely affected by the plant's genetics (e.g., botanical cultivar) as well as the soil quality and drainage, climate, altitude, and harvesting, processing, and coffee roasting methods.",
        answers: [
          { id: "q7-1", value: "280" },
          { id: "q7-2", value: "500" },
          { id: "q7-3", value: "640" },
          { id: "q7-4", value: "800" },
        ],
      },
      {
        id: "q8",
        title: "What is considered a lethal dose of caffeine?",
        answers: [
          { id: "q8-1", value: "1 gram" },
          { id: "q8-2", value: "5 grams" },
          { id: "q8-3", value: "10 grams" },
          { id: "q8-4", value: "20 grams" },
        ],
      },
      {
        id: "q9",
        title: "What year was hot air first used to roast coffee?",
        content:
          "Using hot air to roast coffee by heating up a roasting chamber (with natural gas as the fuel) was first done in ____. Today it remains the preferred method of coffee roasting.",
        answers: [
          { id: "q9-1", value: "1885" },
          { id: "q9-2", value: "1910" },
          { id: "q9-3", value: "1390" },
          { id: "q9-4", value: "1045" },
        ],
      },
      {
        id: "q10",
        title:
          "How many plants naturally contain caffeine in either their fruits, seeds, or leaves?",
        answers: [
          { id: "q10-1", value: "1" },
          { id: "q10-2", value: "35" },
          { id: "q10-3", value: "64" },
          { id: "q10-4", value: "110" },
        ],
      },
    ],
  },
  {
    id: "test-two",
    name: "Food",
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
  {
    id: "test-three",
    name: "something else",
    questions: [
      {
        id: "q1",
        title: "Do you need more food?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quo totam magni, doloribus cupiditate tenetur deleniti mollitia temporibus modi hic pariatur laboriosam, sapiente cum. Neque numquam assumenda aut veniam asperiores?",
        answers: [
          { id: "q1-1", value: "Never" },
          { id: "q1-2", value: "Sometimes" },
          { id: "q1-3", value: "Most of the time" },
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
          { id: "q2-3", value: "Most of the time" },
          { id: "q2-4", value: "Always" },
        ],
      },
    ],
  },
];
