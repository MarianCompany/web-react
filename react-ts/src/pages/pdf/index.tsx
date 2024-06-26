import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PDFDocument } from "../../components/PDFDocument/index.tsx";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { IForm } from "./types";

export const PDFPage: FC = () => {
  const [pdf, setPdf] = useState<IForm>({});

  useEffect(() => {
    console.log(pdf);
  }, [pdf]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
  });

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(setPdf)}>
        <input
          data-testid={"input"}
          {...register("comment", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />
        <input
          {...register("username", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />
        <input
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Необходимо выбрать файл",
          })}
        />

        <div>{errors.comment?.message}</div>
        <div>{errors.username?.message}</div>
        <div>{errors.picture?.message}</div>

        <button type="submit" data-testid={"button-save"}>Сохранить</button>
      </form>

      {!!pdf?.username && (
        <PDFDownloadLink
          document={<PDFDocument username={pdf.username} comment={pdf.comment} picture={pdf.picture[0]} />}
          fileName="file.pdf" // Или любое другое название
        >
          {({ blob, url, loading, error }) => (loading ? "Загрузка..." : "Скачать")}
        </PDFDownloadLink>
      )}
    </>
  );
};
