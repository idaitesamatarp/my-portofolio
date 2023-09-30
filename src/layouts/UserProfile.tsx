import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function UserProfile() {
  const sosmed = [
    {
      icon: <FaGithub className="text-3xl" />,
      link: "https://github.com/idaitesamatarp",
    },
    {
      icon: <FaTwitter className="text-3xl" />,
      link: "https://twitter.com/idaitesamatarp",
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      link: "https://www.linkedin.com/in/muhammad-setiadi-pratama-51219b1b4",
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      link: "https://instagram.com/idaitesamatarp",
    },
  ];

  return (
    <>
      <div className="w-3/12 bg-topography flex flex-col justify-between items-center py-12 profile-box">
        <div className="w-8/12 px-4" id="profile_img">
          <img
            src="/profile2.JPG"
            alt="profile"
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>

        <div id="profile_name" className="text-center px-3">
          <h2 className="font-bold text-xl">Muhammad Setiadi Pratama</h2>
          <h3 className="text-red-500 font-semibold">
            FrontEnd / Web Developer
          </h3>
          <h4>· · ─────── ·𖥸· ─────── · ·</h4>
          <p className="text-gray-500">
            Sometimes as a web developer you need to make sure that we still
            learning and learning. Great things take time to build.{" "}
          </p>
        </div>

        <div id="profile_social" className="flex flex-row">
          {sosmed.map((social, index) => (
            <Link
              to={social.link}
              key={index}
              className="text-red-500 m-4 hover:text-black"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <span className="w-full p-px bg-black lg:w-2/3"></span>

        <div id="copyright">© IA 2023. ALL RIGHT RESERVED</div>
      </div>

      <div className="w-1 p-px bg-black"></div>
    </>
  );
}
