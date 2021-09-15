import "./Actu.css";
import React, { useState } from "react";
import ListPost from "../../Components/ListPost";
import Share from "../Share/Share";

interface IState {
  post: {
    commentCount: string;
    likeCount: string;
    dateTime: string;
    profilImage: string;
    profilName: string;
    description: string;
    image?: string;
  }[];
}
export default function Actu() {
  const [post, setPost] = useState<IState["post"]>([
    {
      commentCount: "90",
      likeCount: "65",
      dateTime: "3min",
      profilImage: "/assets/images/1.jpg",
      profilName: "Rakoto",
      description: "First Post",
      image: "/assets/images/post1.jpg",
    },
    {
      commentCount: "867",
      likeCount: "1K",
      dateTime: "30min",
      profilImage: "/assets/images/1.jpg",
      profilName: "Rakoto",
      description: "Storm Breaker",
      image: "/assets/images/post2.jpg",
    },
    {
      commentCount: "167",
      likeCount: "2K",
      dateTime: "1h",
      profilImage: "/assets/images/1.jpg",
      profilName: "Rakoto",
      description: "This is a Post",
      image: "/assets/images/post3.jpg",
    },
    {
      commentCount: "967",
      likeCount: "856",
      dateTime: "2h",
      profilImage: "/assets/images/1.jpg",
      profilName: "Rakoto",
      description: "Sad Girl Fall in Rain",
      image: "/assets/images/post4.jpg",
    },
  ]);

  return (
    <div className="Actu">
      <Share />
      <ListPost post={post} />
    </div>
  );
}
