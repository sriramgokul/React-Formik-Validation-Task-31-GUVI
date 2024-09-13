import * as yup from "yup";

export const BookSchema = yup.object({
    title_name: yup.string().required("Enter the Title Name"),
    author_name:yup.string("Enter the Author Name"),
    isbn_number: yup.string("Enter the ISBN Number"),
    publication_date: yup.string("Enter the Date"),
})

export const AuthorSchema = yup.object({
    authors_name: yup.string().required("Enter Author Name"),
    authorBio: yup.string().required("Write about the Author"),
    dateof_birth: yup.string("Enter the Date"),
})