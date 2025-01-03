import Link from "next/link";
import "@/components/footer.css";

export default function Footer() {
  return (
    <div className="flex bg-gray-200 w-full justify-center align-middle gap-3 py-4 mt-4 footer font-extrabold">
      <Link href="https://www.paypal.com/us/smarthelp/contact-us">
        Contact Us
      </Link>
      <Link href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full">
        Privacy
      </Link>
      <Link href="https://www.paypal.com/us/webapps/mpp/ua/legalhub-full">
        Legal
      </Link>
      <Link href="https://www.paypal.com/us/webapps/mpp/ua/upcoming-policies-full">
        Policy Updates
      </Link>
      <Link href="https://www.paypal.com/us/webapps/mpp/country-worldwide">
        Worldwide
      </Link>
    </div>
  );
}
