const Footer = () => {
  return (
    <div className="w-full bg-veryDarkBlue p-4 flex flex-col items-center gap-1 text-[10px] md:text-xs font-medium tracking-wider">
      <span>Martina Blazheska</span>
      <span>blazheska.martina@gmail.com</span>
      <a
        href="https://linkedin.com/in/martina-blazheska"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/martinablazheska"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        Github
      </a>
    </div>
  );
};

export default Footer;
