import "./globals.css";
import "../../public/Poppins.css";
import ToastContainer from "@/utils/ToastContainer";

export const metadata = {
  title: "Ahmad Nadeem - UX/UI Designer",
  description:
    "Explore expert UX/UI design and graphic design services that enhance user experiences and create stunning visuals. Specializing in responsive design, interaction design, and brand identity, we offer wireframing, prototyping, and usability testing to bring your vision to life. Discover the power of design thinking, typography, and color theory with our creative direction today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
