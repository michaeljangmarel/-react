import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addPost,
  deletePost,
  fetchPostById,
  fetchPosts,
  updatePost,
} from "./PostApi";

export const useAllPost = () => {
  return useQuery(["posts"], fetchPosts);
};

export const useOptinal = (id) => {
  return useQuery(["post", id], () => fetchPostById(id), {
    enabled: !!id,
  });
};

export const useAddPost = () => {
  const uqc = useQueryClient();
  return useMutation(addPost, {
    onSuccess: () => {
      uqc.invalidateQueries(["posts"]);
    },
  });
};

export const useUpdate = () => {
  const uqc = useQueryClient();
  return useMutation(updatePost, {
    onSuccess: () => {
      uqc.invalidateQueries(["posts"]);
    },
  });
};
export const useDelete = () => {
  const uqc = useQueryClient();
  return useMutation(deletePost, {
    onSuccess: () => {
      uqc.invalidateQueries(["posts"]);
    },
  });
};
