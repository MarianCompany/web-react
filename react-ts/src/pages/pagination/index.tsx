import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { CommentCard } from "../../components/CommentCard";
import { IComment } from "../../components/CommentCard/types.ts";
import axios from "axios";
import { useInView } from "react-intersection-observer";

const BlockObserver = styled.div`
  height: 40px;
  background-color: black;
`;

export const PaginationPage: FC = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const LIMIT_COMMENTS = 10;

  const fetchComments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/?_page=${currentPage}&_limit=${LIMIT_COMMENTS}`,
      );
      setComments((prev) => [...prev, ...data]);
    } catch (error) {
      console.log("Error fetching comments...", error);
    } finally {
      setLoading(false);
    }
  };

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    fetchComments();
  }, [currentPage]);

  useEffect(() => {
    if (inView) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <>
      {comments.length &&
        comments.map((item) => {
          return <CommentCard comment={item} key={item.id} />;
        })}
      {loading && <div>Загрузка...</div>}
      {!loading && <BlockObserver ref={ref}></BlockObserver>}
    </>
  );
};
