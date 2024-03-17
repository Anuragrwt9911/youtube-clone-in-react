import React from "react";

const commentsData = [
  {
    name: "Anurag Rawat",
    text: "I love react js by akshay saini which is very good",
    replies: [
      {
        name: "Anurag Rawat",
        text: "I love react js by akshay saini which is very good",
        replies: [],
      },
      {
        name: "Anurag Rawat",
        text: "I love react js by akshay saini which is very good",
        replies: [],
      },
      {
        name: "Anurag Rawat",
        text: "I love react js by akshay saini which is very good",
        replies: [
          {
            name: "Anurag Rawat",
            text: "I love react js by akshay saini which is very good",
            replies: [],
          },
          {
            name: "Anurag Rawat",
            text: "I love react js by akshay saini which is very good",
            replies: [
              {
                name: "Anurag Rawat",
                text: "I love react js by akshay saini which is very good",
                replies: [
                  {
                    name: "Anurag Rawat",
                    text: "I love react js by akshay saini which is very good",
                    replies: [
                      {
                        name: "Anurag Rawat",
                        text: "I love react js by akshay saini which is very good",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Anurag Rawat",
    text: "I love react js by akshay saini which is very good",
    replies: [],
  },
  {
    name: "Anurag Rawat",
    text: "I love react js by akshay saini which is very good",
    replies: [],
  },
  {
    name: "Anurag Rawat",
    text: "I love react js by akshay saini which is very good",
    replies: [],
  },
  {
    name: "Anurag Rawat",
    text: "I love react js by akshay saini which is very good",
    replies: [],
  },
  {
    name: "Anurag Rawat",
    text: "I love react js by akshay saini which is very good",
    replies: [],
  },
  {
    name: "Anurag Rawat",
    text: "I love react js by akshay saini which is very good",
    replies: [],
  },
  {
    name: "Anurag Rawat",
    text: "I love react js by akshay saini which is very good",
    replies: [
      {
        name: "Anurag Rawat",
        text: "I love react js by akshay saini which is very good",
        replies: [],
      },
      {
        name: "Anurag Rawat",
        text: "I love react js by akshay saini which is very good",
        replies: [],
      },
      {
        name: "Anurag Rawat",
        text: "I love react js by akshay saini which is very good",
        replies: [
          {
            name: "Anurag Rawat",
            text: "I love react js by akshay saini which is very good",
            replies: [
              {
                name: "Anurag Rawat",
                text: "I love react js by akshay saini which is very good",
                replies: [
                  {
                    name: "Anurag Rawat",
                    text: "I love react js by akshay saini which is very good",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ Data }) => {
  const { name, text, replies } = Data;
  return (
    <div className="flex shadow-sm hover:bg-slate-100">
      <img
        className="h-12 w-12"
        src="https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7"
        alt="user"
      />
      <div className="mx-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="p-4">
      {comments.map((comment, index) => {
        return (
          <div className="p-3">
            <Comment key={index} Data={comment} />
            <div className="border-l-4 ml-5 ">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="">
      <h1 className="font-bold rounded-full px-3 py-2">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
