import React from "react";
import "./ListPost.css";
import { MoreVert, ThumbUp, Favorite } from "@material-ui/icons";
interface IProps {
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

const ListPost: React.FC<IProps> = ({ post }) => {
  const renderListPost = (): JSX.Element[] => {
    return post.map((singlePost) => {
      return (
        <div className="singlePost">
          <div className="singlePostWrapper">
            <div className="singlePostTop">
              <div className="singlePostTopLeft">
                <img
                  src="/assets/images/post1.jpg"
                  alt=""
                  className="singlePostProfilImage"
                />
                <span className="singlePostUsername">
                  {singlePost.profilName}
                </span>
                <span className="singlePostTime">{singlePost.dateTime}</span>
              </div>
              <div className="singlePostTopRigth">
                <MoreVert />
              </div>
            </div>
            <div className="singlePostCenter">
              <span className="singlePostDescription">
                {singlePost.description}
              </span>
              <img
                src={singlePost.image}
                alt="postImage"
                className="singlePostImage"
              />
            </div>
            <div className="singlePostBottom">
              <div className="singlePostBottomLeft">
                <ThumbUp className="like" />
                <Favorite className="favorite" />
                <span className="likeCounter">
                  {singlePost.likeCount} People Like It
                </span>
              </div>
              <div className="singlePostBottomRight">
                <span className="singlePostComment">
                  {singlePost.commentCount} Comments
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{renderListPost()}</div>;
};

export default ListPost;
