import ResponsiveNavbar from "./ResponsiveNavbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <ResponsiveNavbar />
      <div>{children}</div>
    </>
  );
}
