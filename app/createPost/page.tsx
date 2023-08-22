"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "@/redux/features/postSlice";
// import { RootState } from "@/redux/store";
// import PostList from "./PostList";
// import { Router } from "next/navigation";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const router = useRouter();
  const posts = useSelector((state: any) => state.post);
  console.log(posts);
  //   const data = {
  //     images:
  //       "https://react-advance.s3.ap-south-1.amazonaws.com/Screenshot+from+2023-02-18+10-07-29.png",
  //     video:
  //       "https://react-advance.s3.ap-south-1.amazonaws.com/Internal_Q001.mp4",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus ratione eveniet architecto tenetur delectus obcaecati nisi, quod facere saepe eligendi culpa placeat aliquid nihil aspernatur quo pariatur iure quae.",
  //   };
  const [data, setData] = useState<any>();
  const [flag, setFlag] = useState<any>(false);

  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createPost(data));
    setData({});
  };

  const update = (ele: any) => {
    console.log(ele);
    setData(ele);
    setFlag(true);
  };

  return (
    <>
      {/* <div onClick={postCreate} style={{ color: "blue", cursor: "pointer" }}>
        CreatePost
      </div> */}

      <form onSubmit={handleSubmit}>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={data?.image || ""}
        />
        <br />
        <br />
        <label>Video:</label>
        <input
          type="text"
          name="video"
          onChange={handleChange}
          value={data?.video || ""}
        />
        <br />
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          value={data?.desc || ""}
        />
        <br />
        <br />
        {flag ? (
          <button type="button" onClick={() => dispatch(editPost(data))}>
            Update
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
      {/* <PostList update={update} /> */}
    </>
  );
};

export default CreatePost;
