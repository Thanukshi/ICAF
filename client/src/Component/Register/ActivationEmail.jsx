import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ActivationEmail() {
  const { activate_token } = useParams();

  useEffect(() => {
    if (activate_token) {
      try {
        axios
          .post("http://localhost:8000/users/activate-email", {
            activate_token,
          })
          .then((res) => {
            console.log(res);
            toast.success(res.data.message);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        toast.error(err.response, data.message);
      }
    }
  });

  console.log(activate_token);
  return <div className="activate_page"></div>;
}

export default ActivationEmail;
