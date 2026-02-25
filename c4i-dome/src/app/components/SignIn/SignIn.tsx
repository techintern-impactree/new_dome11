"use client";

import { Formik, Field, FormikHelpers } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { object, string, boolean } from "yup";
import Image from "next/image";
import RubicrLogo from "../../../../public/assets/sign-in/rubicr-logo.png";
import DroneImage from "../../../../public/assets/sign-in/drone1.png";
import SigninBgImage from "../../../../public/assets/sign-in/signin-bg.jpg";
import DomeLogo from "../../../../public/assets/sign-in/Dome_logo.png";
import IndrashakthiLogo from "../../../../public/assets/sign-in/indrashakthi_white_1.svg";

const ArrowForwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "#fba900", marginLeft: "12px" }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61C4.48 7.97 2.72 10 2 12c.72 2 2.48 4.03 4.61 5.39" />
    <path d="m2 2 20 20" />
  </svg>
);

const CustomToast = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error" | null;
}) => {
  if (!message || !type) return null;
  const bgColor = type === "success" ? "#4CAF50" : "#F44336";
  const textColor = "white";

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "12px 20px",
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "8px",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        transition: "opacity 0.3s ease-in-out",
        opacity: 1,
        fontSize: "1rem",
        fontWeight: "600",
      }}
    >
      {message}
    </div>
  );
};

const Stack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      display: "block",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

const showToast = (
  message: string,
  type: "success" | "error",
  setToast: Function
) => {
  setToast({ message, type });
  setTimeout(() => {
    setToast({ message: "", type: null });
  }, 3000);
};

interface SignInValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LeftPanel = () => (
  <div
    style={{
      flex: "1 1 50%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "20px 0",
      background: "#FFB300",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "80%",
        backgroundImage: `url(${DroneImage.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.4,
        filter: "grayscale(50%) blur(0.3px) brightness(1.1) contrast(1.1)",
        zIndex: 1,
      }}
    />

    <div
      style={{
        position: "absolute",
        top: "40px",
        left: "60px",
        zIndex: 10,
      }}
    >
      <Image
        src={RubicrLogo}
        alt="Rubicr Logo"
        width={120}
        height={40}
        style={{
          objectFit: "contain",
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
        }}
      />
    </div>
  </div>
);
const yourAuthFunction = async (credentials: {
  email: string;
  password: string;
  slug?: string;
}) => {
  // same API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (
    credentials.email === "vivek@impactree.ai" &&
    credentials.password === "C4i@123"
  ) {
    return { success: true, user: { name: "Vivek", email: credentials.email } };
  }

  return { success: false, error: "Invalid credentials" };
};

export default function SignInForm({ slug }: { slug?: string }) {
  const router = useRouter();
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });
  const [hideEyeIcon, setHideEyeIcon] = useState(false);

  const [values] = useState<SignInValues>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSignInSubmit = async (
    values: SignInValues,
    formikHelpers: FormikHelpers<SignInValues>,
    setToast: Function,
    slug?: string
  ) => {
    const { setSubmitting, setFieldError } = formikHelpers;
    setSubmitting(true);

    try {
      // Validate credentials before making API call
      if (
        values.email !== "vivek@impactree.ai" ||
        values.password !== "C4i@123"
      ) {
        setFieldError("email", "Invalid Email or Password");
        setFieldError("password", "Invalid Email or Password");
        showToast("Login failed: Invalid Email or Password", "error", setToast);
        setSubmitting(false);
        return;
      }

      const res = await yourAuthFunction({
        email: values.email,
        password: values.password,
        ...(slug && { slug }),
      });

      if (res?.success) {
        showToast("Signed In!", "success", setToast);
        // Redirect to cockpit on successful authentication
        router.push("/cockpit");
      } else {
        setFieldError("email", "Invalid Email or Password");
        setFieldError("password", "Invalid Email or Password");
        showToast("Login failed: Invalid Email or Password", "error", setToast);
      }
    } catch (error) {
      setFieldError("email", "Accept Invitation / Invalid Email or Password");
      setFieldError(
        "password",
        "Accept Invitation / Invalid Email or Password"
      );
      showToast(
        "Login failed: Check invitation or credentials",
        "error",
        setToast
      );
    }

    setSubmitting(false);
  };

  const validationSchema = object({
    email: string().email("Invalid email format").required("Email is required"),
    password: string()
      .min(1, "Password is required")
      .required("Password is required"),
    rememberMe: boolean(),
  });

  const onSubmit = async (
    formikValues: SignInValues,
    formikHelpers: FormikHelpers<SignInValues>
  ) => {
    await handleSignInSubmit(formikValues, formikHelpers, setToast, slug);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 0,
        display: "flex",
        flexDirection: "row",
        fontFamily: "Geist, sans-serif",
        // backgroundImage: `url(${DroneImage.src})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // width: "100%",
        // height: "100%",
      }}
    >
      {/* <LeftPanel /> */}

      <CustomToast message={toast.message} type={toast.type} />
      <div
        style={{
          flex: "1 1 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0",
          // backgroundColor: "#f7f7f7",
          minHeight: "100vh",
          backgroundImage: `url(${SigninBgImage.src})`,
          // backgroundImage: `url("https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/2d/f7/bb/e5/02/v1_E10/E10538HZ.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=fc6729e546f6edb77932aab6f29a52b5a3e1ad085d8da981da27c16beb1495a5")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "20px 30px 20px 30px",
            maxWidth: "480px",
            // backgroundColor: "#5B5B5B33",
            // borderRadius: "12px",
            // boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            // backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.04)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(163, 163, 163, 0.4)",
          }}
        >
          <Formik
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ errors, handleSubmit, isSubmitting, values, touched }) => {
              const isFormValid =
                values.email.length > 0 && values.password.length > 0;

              return (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Image
                      // src={DomeLogo}
                      src={IndrashakthiLogo}
                      alt="Indrashakthi Logo"
                      width={200}
                      height={120}
                      style={{
                        objectFit: "contain",
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                      }}
                    />
                    <h2
                      style={{
                        fontSize: "2.2rem",
                        fontWeight: "bold",
                        // color: "#000000",
                        color: "white",
                        margin: "0 0 8px 0",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      Login
                    </h2>
                    <span
                      style={{
                        color: "#FFB300",
                        fontWeight: 500,
                        fontSize: "1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Access your account securely
                    </span>
                  </div>

                  <div style={{ marginBottom: "0.5rem" }}>
                    <label
                      htmlFor="email"
                      style={{
                        // color: "#000000",
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Email Address
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      style={{
                        borderRadius: "8px",
                        padding: "12px 16px",
                        border:
                          errors.email && touched.email
                            ? "1px solid #e53e3e"
                            : "1px solid #e2e8f0",
                        width: "100%",
                        boxSizing: "border-box",
                        fontSize: "0.95rem",
                        backgroundColor: "white",
                        transition: "all 0.2s ease",
                        outline: "none",
                      }}
                      onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                        e.target.style.borderColor = "#FFB300";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(255, 179, 0, 0.1)";
                      }}
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                        e.target.style.borderColor =
                          errors.email && touched.email ? "#e53e3e" : "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.email && touched.email && (
                      <div
                        style={{
                          color: "#e53e3e",
                          fontSize: "0.8rem",
                          marginTop: "5px",
                          fontWeight: "500",
                        }}
                      >
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div style={{ marginBottom: "0.5rem" }}>
                    <label
                      htmlFor="password"
                      style={{
                        // color: "#000000",
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Password
                    </label>
                    <div style={{ position: "relative" }}>
                      <Field
                        name="password"
                        type={hideEyeIcon ? "text" : "password"}
                        placeholder="Enter your password"
                        style={{
                          borderRadius: "8px",
                          padding: "12px 16px",
                          border:
                            errors.password && touched.password
                              ? "1px solid #e53e3e"
                              : "1px solid #e2e8f0",
                          width: "100%",
                          boxSizing: "border-box",
                          fontSize: "0.95rem",
                          backgroundColor: "white",
                          transition: "all 0.2s ease",
                          outline: "none",
                          paddingRight: "50px",
                        }}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                          e.target.style.borderColor = "#FFB300";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(255, 179, 0, 0.1)";
                        }}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                          e.target.style.borderColor =
                            errors.password && touched.password
                              ? "#e53e3e"
                              : "#e2e8f0";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setHideEyeIcon(!hideEyeIcon)}
                        style={{
                          position: "absolute",
                          right: "12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#718096",
                          padding: "4px",
                          borderRadius: "4px",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = "#f7fafc";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {hideEyeIcon ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                    {errors.password && touched.password && (
                      <div
                        style={{
                          color: "#e53e3e",
                          fontSize: "0.8rem",
                          marginTop: "5px",
                          fontWeight: "500",
                        }}
                      >
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                      marginTop: "0rem",
                    }}
                  >
                    <label
                      style={{
                        fontSize: "0.9rem",
                        // color: "#4a5568",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "500",
                      }}
                    >
                      <Field
                        type="checkbox"
                        name="rememberMe"
                        style={{
                          marginRight: "8px",
                          width: "16px",
                          height: "16px",
                          accentColor: "#FFB300",
                        }}
                      />
                      Remember me
                    </label>

                    <a
                      href="/forgot_password"
                      style={{
                        textDecoration: "none",
                        fontWeight: "500",
                        fontSize: "0.9rem",
                        // color: "#000000",
                        color: "white",
                        transition: "color 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#FF8A00";
                      }}
                      onMouseOut={(e) => {
                        // e.currentTarget.style.color = "#000000";
                        e.currentTarget.style.color = "white";
                      }}
                    >
                      Forgot Password
                    </a>
                  </div>

                  <Stack>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: "#000000",
                        color: "white",
                        padding: "14px 20px",
                        fontSize: "1rem",
                        borderRadius: "8px",
                        border: "none",
                        width: "100%",
                        cursor: !isSubmitting ? "pointer" : "not-allowed",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        transition: "all 0.2s ease",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                      }}
                      onMouseOver={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = "#333333";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = "#000000";
                          e.currentTarget.style.transform = "translateY(0)";
                        }
                      }}
                    >
                      {isSubmitting ? "Logging in..." : "Login to account"}
                      <ArrowForwardIcon />
                    </button>
                  </Stack>

                  {/* <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <a
                      href="/sign-up"
                      style={{
                        textDecoration: "none",
                        fontWeight: "500",
                        // color: "#000000",
                        color: "white",
                        fontSize: "0.95rem",
                        transition: "color 0.2s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#FFB300";
                      }}
                      onMouseOut={(e) => {
                        // e.currentTarget.style.color = "#000000";
                        e.currentTarget.style.color = "white";
                      }}
                    >
                      Create an Account
                    </a>
                  </div> */}
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
