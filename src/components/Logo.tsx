import logo from "../assets/logo.png";

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <img src={logo} alt="Siri & Koushik's Clinic Logo" className="h-12 w-auto object-contain" />
    </a>
  );
}
