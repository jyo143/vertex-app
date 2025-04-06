import { BiSolidUser } from "react-icons/bi";
import { FaLinkedin, FaEnvelope, FaBuilding } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CompanyLogoPlaceholder = ({ icon: Icon = FaBuilding, text = "" }) => (
  <div className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center mr-3 text-gray-400">
    {text ? (
      <span className="font-bold text-lg">{text}</span>
    ) : (
      <Icon size={20} />
    )}
  </div>
);
const VertxLogoPlaceholder = () => (
  <div className="w-10 h-10 flex items-center justify-center mr-3 text-white">
    <span className="font-bold text-xl">
      <img
        src="/src/assets/NavbarAssets/vertx-logo.png"
        alt="logo"
        className="w-[50px] h-[50px] bg-white"
      />
    </span>
  </div>
);

const Overview = () => {
  return (
    <div className="text-white p-4 md:p-0">
      <h1 className="text-3xl font-bold mb-8">Overview</h1>

      <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333333]">
        <div className="flex items-center space-x-4">
          <div className="w-[120px] h-[120px] flex items-center justify-center">
            <BiSolidUser size={100} className="text-white" />
          </div>
          <div className="flex-grow">
            <div className="flex items-center mb-1 gap-8">
              <h2 className="text-2xl font-semibold mr-2">Mr A</h2>
              <RiVerifiedBadgeFill size={16} className="text-blue-500" />
            </div>
            <p className="text-sm text-white mb-2 flex flex-row gap-1">
              Co-Founder & CEO @Vertx{" "}
              <span className="text-xs">
                <img
                  src="/src/assets/NavbarAssets/vertx-logo.png"
                  alt="logo"
                  className="w-[20px] h-[20px] bg-white"
                />
              </span>
            </p>
            <span className="inline-block bg-white text-black text-xs px-2 py-0.5 rounded font-medium border-[]">
              Entrepreneur
            </span>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-blue-400 hover:text-blue-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="text-gray-300 hover:text-white"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="text-red-400 hover:text-red-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
          <h3 className="text-lg font-semibold mb-2">Founded Companies</h3>
          <p className="text-6xl font-bold mb-6">02</p>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <VertxLogoPlaceholder />
                <div>
                  <p className="font-lg flex items-center font-[700]">
                    Vertx
                    <span className="ml-2 bg-[#579560] text-[#04470B] text-[10px] px-1.5 py-0.5 rounded">
                      CEO
                    </span>
                  </p>
                  <p className="text-xs text-white font-[600]">
                    Founded in 2025. in Fintech.
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="text-xs text-white hover:text-white whitespace-nowrap"
              >
                View Profile
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CompanyLogoPlaceholder />
                <div>
                  <p className="flex items-center font-[700]">
                    Company
                    <span className="ml-2 bg-[#B1BDEB] text-[#10074F] text-[10px] px-1.5 py-0.5 rounded">
                      PROPRIETOR
                    </span>
                  </p>
                  <p className="text-xs text-white font-[600] ">
                    Details/Information <br />
                    like acquired /exit/m&a
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="text-xs text-white hover:text-white whitespace-nowrap"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <p className="text-6xl font-bold mb-6">03</p>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CompanyLogoPlaceholder />
                <p className="font-[700]">Company 1</p>
              </div>
              <a
                href="#"
                className="text-xs text-white hover:text-white whitespace-nowrap"
              >
                View Profile
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CompanyLogoPlaceholder />
                <p className="font-[700]">Company 2</p>
              </div>
              <a
                href="#"
                className="text-xs text-white hover:text-white whitespace-nowrap"
              >
                View Profile
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CompanyLogoPlaceholder />
                <p className="font-[700]">Company 3</p>
              </div>
              <a
                href="#"
                className="text-xs text-white hover:text-white whitespace-nowrap"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
