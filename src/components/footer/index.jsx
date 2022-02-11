import { Linkedin, Twitter, Codepen, GitHub } from "react-feather";

function Footer() {
  return (
    <div className="grid grid-flow-col grid-cols-1 grid-rows-3 justify-items-center mt-16 mb-2">
      <div className="flex gap-16 text-danger">
        <Linkedin className="socialIcons" />
        <GitHub className="socialIcons" />
        <Twitter className="socialIcons" />
        <Codepen className="socialIcons" style={{ color: "red" }} />
      </div>
      <p className="mt-3">Designed and built by Samuel Okereke</p>
      <p className="text-sm">@2021. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
