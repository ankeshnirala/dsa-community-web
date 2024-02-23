import React from "react";
import { toast } from "sonner";
import { Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import { NextIcon } from "./../../../assets/icons/NextIcon";
import { useSelector, useDispatch } from "react-redux";

export function StepOne() {
  const global = useSelector((state) => state.globalReducer.signinConstants);
  const dispatch = useDispatch();
  const storage = useSelector((state) => state.signinReducer);

  const [email, setEmail] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email")?.toString() || "";

    if (!email) {
      toast.error(global.error.invalidEmail);
      return;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      toast.error(global.error.invalidEmail);
      return;
    }

    const toastId = toast.loading("");
    try {
      //   const resp = await axios.post("/api/v1/checkuser", { email });
      const resp = {};

      toast.dismiss(toastId);
      //   dispatch(
      //     signinActions.onNext({ email, isRegistered: resp.data.data?.email })
      //   );
    } catch (error) {
      toast.dismiss(toastId);
      if (error.response.status == 500) {
        toast.error("Uh oh! Something went wrong");
        return;
      }

      toast.error(error.response.status);
    }
  }

  async function nextHandler() {
    if (!email) {
      toast.error(global.error.invalidEmail);
      return;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      toast.error(global.error.invalidEmail);
      return;
    }

    const toastId = toast.loading("processing...");
    try {
      //   const resp = await axios.post("/api/v1/checkuser", { email });
      const resp = {};

      toast.dismiss(toastId);
      //   dispatch(
      //     signinActions.onNext({
      //       email,
      //       isRegistered: resp.data.data?.isUserExists,
      //     })
      //   );
    } catch (error) {
      toast.dismiss(toastId);
      if (error.response.status == 500) {
        toast.error("Uh oh! Something went wrong");
        return;
      }

      toast.error(error.response?.data?.data?.error);
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="space-y-4 md:space-y-6"
    >
      {!storage.isRegistered && (
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="relative w-full"
        >
          <Input
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="you@example.com"
            endContent={
              <motion.button
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.8 }}
                className="focus:outline-none"
                type="button"
                onClick={nextHandler}
              >
                {
                  <NextIcon className="w-4 h-4 text-default-400 pointer-events-none" />
                }
              </motion.button>
            }
            type="email"
            radius="full"
            // className="max-w-xl"
            style={{ textAlign: "center", width: "280px" }}
          />
        </motion.div>
      )}

      <input type="submit" hidden={true} />
    </form>
  );
}
