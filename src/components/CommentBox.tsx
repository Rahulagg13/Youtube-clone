import { abbreviateNumber } from "js-abbreviation-number";
import { useEffect } from "react";
import { MdSort } from "react-icons/md";
import useFetch from "@/hooks/useFetch";
import { MoreVertical, ThumbsUp, ThumbsDown } from "lucide-react";
import { VscTriangleDown } from "react-icons/vsc";
type prop = {
  commentCount: number;
  videoId: string;
};

const CommentBox = ({ commentCount, videoId }: prop) => {
  const { getCommentDetails, commentsDetail } = useFetch();
  useEffect(() => {
    getCommentDetails(videoId);
  }, [getCommentDetails, videoId]);

  return (
    <>
      <div className="mt-4 space-y-6">
        <div className="flex gap-8 items-center text-sm lg:text-lg ">
          <p>{abbreviateNumber(commentCount)} Comments</p>
          <button className="flex gap-2 items-center ">
            <span>
              <MdSort size={24} />
            </span>
            Sort By
          </button>
        </div>

        <div className="flex items-center gap-4">
          <img
            src=""
            alt=""
            className="w-11 h-10 lg:w-12 lg:h-12 border rounded-full"
          />
          <div className="mb-9 w-full">
            <input
              type="text"
              className=" border-b lg:border-b-2 p-2 w-full text-sm lg:text-base outline-none focus:border-black"
              placeholder="Add comments"
            />
          </div>
        </div>

        {commentsDetail.map((comment, index: number): JSX.Element => {
          return (
            <div
              key={comment?.etag + comment?.id + index}
              className="space-y-0 lg:space-y-3 group"
            >
              <div className="flex gap-2 lg:gap-4 items-center ">
                <img
                  src={
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl
                  }
                  alt=""
                  className="w-11 h-10 lg:w-12 lg:h-12 border rounded-full"
                />
                <div className="w-full flex justify-between ">
                  {/* commenterDetails */}
                  <div className="">
                    <p className="text-xs lg:text-sm font-bold">
                      @
                      {
                        comment?.snippet?.topLevelComment?.snippet
                          ?.authorDisplayName
                      }
                    </p>
                    <p className="text-sm lg:text-base">
                      {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
                    </p>
                  </div>

                  <MoreVertical className="hidden group-hover:block cursor-pointer" />
                </div>
              </div>

              <div className="ml-[60px]">
                {/* Likes and dislike */}
                <div className="flex items-center space-x-2 lg:space-x-6">
                  <p className="flex items-center gap-2">
                    <ThumbsUp strokeWidth={1} size={20} />
                    <span className="text-xs lg:text-sm">
                      {abbreviateNumber(
                        comment?.snippet?.topLevelComment?.snippet?.likeCount
                      )}
                    </span>
                  </p>
                  <p>
                    <ThumbsDown strokeWidth={1} size={20} />
                  </p>
                  <button className="text-xs rounded-full px-4 py-2 font-bold hover:bg-gray-200">
                    Reply
                  </button>
                </div>
                {/* no. of reply */}
                {comment?.snippet?.totalReplyCount > 0 && (
                  <div className=" w-32 lg:w-40 text-sm lg:text-base flex rounded-full justify-center items-center px-4 py-2 gap-3 text-blue-600 hover:bg-blue-100 ">
                    <span>
                      <VscTriangleDown size={12} />
                    </span>
                    {comment?.snippet?.totalReplyCount} Reply
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentBox;
