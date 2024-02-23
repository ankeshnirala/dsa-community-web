import { useSelector } from "react-redux";

import { StepOne } from "./StepOne";

export function SignInForm() {
  const signinConstants = useSelector(
    (state) => state.globalReducer.signinConstants
  );
  const storage = useSelector((state) => state.signinReducer);

  return (
    <>
      {storage?.step * 1 == 0 && <StepOne />}
      {/* {storage.step * 1 == 1 && <StepTwo />} */}

      <div className="w-full -z-50 fixed top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12" />
    </>
  );
}
