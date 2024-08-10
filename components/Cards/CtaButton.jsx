import { Button } from "@nextui-org/react";

const CtaButton = ({ phoneNumber, whatsappMessage, title }) => {

  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappUrl; 
  };
  

  return (
    <Button
      className="text-white bg-secundario"
      onClick={handleContactClick}
      target="_blank"
    >
      {title}
    </Button>
  );
};

export default CtaButton;