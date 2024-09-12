import { privateAxios } from "./helper";
export const doCreatePost = (postData) => {
  //console.log("postData", postData);
  return privateAxios
    .post(
      `/api/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((res) => res.data);
};

export const uploadPostImage = (image, postId) => {
  let formData = new FormData();
  formData.append("image", image);

  return privateAxios
    .post(`/api/post/image/upload/${postId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })

    .then((res) => res.data);
};
