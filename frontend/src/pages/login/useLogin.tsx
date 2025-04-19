import { apiServices } from "@/apis";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import validationSchema from "./schema";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { mutate } = useMutation({
    mutationFn: apiServices.auth.login,
  });

  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => {
          navigate("/products");
        },
      });
    },
  });

  return { handleSubmit, handleChange, values, errors, touched };
};

export default useLogin;
